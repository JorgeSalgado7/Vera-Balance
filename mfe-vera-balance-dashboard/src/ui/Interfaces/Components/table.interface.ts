import type { Key, ReactNode } from 'react';
import type { TableColumnType, TablePaginationConfig } from 'antd';

export interface VBTableColumn<T> {
	column: TableColumnType<T>
	isMain?: boolean
	showAvatar?: boolean
	showInMobile?: boolean
	isActions?: boolean
	getLink?: (record: T) => string
	mobileRender?: (record: T) => ReactNode
}

export interface TableI<T extends object> {
	data: T[]
	columns: VBTableColumn<T>[]
	rowKey: string | ((record: T) => Key)
	isLoading?: boolean
	emptyContent?: ReactNode
	pagination?: false | TablePaginationConfig
}