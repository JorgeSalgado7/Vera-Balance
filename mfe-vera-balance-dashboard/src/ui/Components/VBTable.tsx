import { isValidElement, type ReactNode } from 'react';
import { Avatar, Grid, Table, type TableColumnsType } from 'antd';
import { Link } from 'react-router';

//* Interfaces
import type { TableI, VBTableColumn } from '../Interfaces/Components/table.interface';

//* Utils
import { getInitials } from '../../common/utils/get-initials';

export const VBTable = <T extends object>({
	data,
	columns,
	rowKey,
	isLoading = false,
	emptyContent,
	pagination
}: TableI<T>) => {

	const screens = Grid.useBreakpoint()

	const mainColumn = columns.find(column => column.isMain)

	const getColumnValue = (column: VBTableColumn<T>, record: T) => {
		const dataIndex = column.column.dataIndex as PropertyKey | readonly PropertyKey[] | undefined

		if (dataIndex === undefined) return undefined

		if (Array.isArray(dataIndex)) {
			return dataIndex.reduce<unknown>((value, key) => {
				if (!value || typeof value !== 'object') return undefined

				return (value as Record<PropertyKey, unknown>)[key]
			}, record)
		}

		return (record as Record<PropertyKey, unknown>)[dataIndex as PropertyKey]
	}

	const renderMainColumn = (record: T) => {
		if (!mainColumn || !mainColumn.getLink) return null

		const value = getColumnValue(mainColumn, record)
		const text = String(value ?? '')

		return (
			<Link to={mainColumn.getLink(record)} className="vb_table__link">

				{
					mainColumn.showAvatar &&
						<Avatar className="vb_table__link__avatar">
							{getInitials(text)}
						</Avatar>
				}

				<span className="vb_table__link__text">{text}</span>

			</Link>
		)
	}

	const getRenderNode = (rendered: ReturnType<NonNullable<VBTableColumn<T>['column']['render']>>): ReactNode => {
		if (rendered == null || isValidElement(rendered)) return rendered as ReactNode

		if (typeof rendered === 'object' && 'children' in rendered) {
			return rendered.children
		}

		return rendered as ReactNode
	}

	const renderMobileColumn = (column: VBTableColumn<T>, record: T): ReactNode => {
		if (column.mobileRender) return column.mobileRender(record)

		if (column.column.render) {
			const value = getColumnValue(column, record)
			const rendered = column.column.render(value, record, 0)

			return getRenderNode(rendered)
		}

		const value = getColumnValue(column, record)

		return value == null ? null : String(value)
	}

	const desktopColumns: TableColumnsType<T> = columns.map(({ column, isMain, getLink, showAvatar }) => {
		if (!isMain || !getLink) return column

		return {
			...column,
			render: (_, record) => {
				const value = getColumnValue({ column, isMain, getLink, showAvatar }, record)
				const text = String(value ?? '')

				return (
					<Link to={getLink(record)} className="vb_table__link">

						{
							showAvatar &&
								<Avatar className="vb_table__link__avatar">
									{getInitials(text)}
								</Avatar>
						}

						<span className="vb_table__link__text">{text}</span>

					</Link>
				)
			}
		}
	})

	const mobileColumns: TableColumnsType<T> = [
		{
			key: 'vbTableMobile',
			render: (_, record) => (
				<div className="vb_table__mobile">

					{renderMainColumn(record)}

					{
						columns
							.filter(column => column.showInMobile && !column.isMain && !column.isActions)
							.map((column, index) => (
								<div key={`${String(column.column.key ?? index)}-mobile`} className="vb_table__mobile__content">
									{renderMobileColumn(column, record)}
								</div>
							))
					}

					{
						columns.some(column => column.showInMobile && column.isActions) &&
							<div className="vb_table__mobile__actions">

								{
									columns
										.filter(column => column.showInMobile && column.isActions)
										.map((column, index) => (
											<div key={`${String(column.column.key ?? index)}-mobile-action`}>
												{renderMobileColumn(column, record)}
											</div>
										))
								}

							</div>
					}

				</div>
			)
		}
	]

	const responsiveColumns = screens.md ? desktopColumns : mobileColumns

	return (
		<div className="vb_table">

			<Table<T>
				rowKey={rowKey}
				loading={isLoading}
				dataSource={data}
				columns={responsiveColumns}
				pagination={
					pagination === false
						? false
						: {
							pageSize: 10,
							showSizeChanger: false,
							position: ['bottomCenter'],
							hideOnSinglePage: true,
							...pagination
						}
				}
				locale={{ emptyText: emptyContent }}
			/>

		</div>
	)
}