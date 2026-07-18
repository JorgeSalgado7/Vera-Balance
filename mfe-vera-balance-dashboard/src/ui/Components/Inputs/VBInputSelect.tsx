import { Select } from 'antd';
import type { SelectI } from '../../Interfaces/Inputs/select.interface';

export const VBInputSelect = ({
	label,
	placeholder,
	options,
	value,
	disabled,
	error,
	onChange,
}: SelectI) => {
	const selectOptions = options.map((option) => ({
		label: option.label,
		value: option.value,
		icon: option.icon,
	}));

	return (
		<div className="vb_group_select">
			{label && <label>{label}</label>}

			<Select
				value={value || undefined}
				disabled={disabled}
				placeholder={placeholder}
				options={selectOptions}
				status={error ? 'error' : undefined}
				onChange={onChange}
				getPopupContainer={(trigger) => trigger.parentElement!}
				optionRender={(option) => (
					<div className="vb_select_option">
						{option.data.icon && (
							<i className={option.data.icon} />
						)}

						<span>{option.data.label}</span>
					</div>
				)}
				labelRender={(selectedOption) => {
					const selectedCatalogItem = selectOptions.find(
						(option) => option.value === selectedOption.value,
					);

					return (
						<div className="vb_select_option">
							{selectedCatalogItem?.icon && (
								<i className={selectedCatalogItem.icon} />
							)}

							<span>
								{selectedCatalogItem?.label ??
									selectedOption.label}
							</span>
						</div>
					);
				}}
			/>

			{error && (
				<span className="vb_group_select__error">
					{error}
				</span>
			)}
		</div>
	);
};