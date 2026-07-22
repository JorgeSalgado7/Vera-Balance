import { Tag, Tooltip } from 'antd';

import { therapyType, type TherapyType } from '../../../../common/catalogs/therapy-type.catalog';

interface PatientTherapyTypesProps { therapyTypes: TherapyType[] }

export const PatientTherapyTypes = ({ therapyTypes }: PatientTherapyTypesProps) => {
	const visibleTherapies = therapyTypes.slice(0, 2);
	const hiddenTherapies = therapyTypes.slice(2);

	const getTherapyCatalogItem = (therapy: TherapyType,) => { return therapyType.find((catalogItem) => catalogItem.value === therapy) };

	return (
		<div className="patient_therapy_types">
			{visibleTherapies.map((therapy) => {
				const catalogItem = getTherapyCatalogItem(therapy);

				return (
					<Tag key={therapy}>
						<div className="patient_therapy_types__item">
							{ catalogItem?.icon && <i className={ catalogItem.icon }/> }
							<span>{ catalogItem?.label ?? therapy }</span>
						</div>
					</Tag>
				);
			})}

			{hiddenTherapies.length > 0 && (
				<Tooltip
					title={hiddenTherapies
						.map((therapy) => {
							const catalogItem = getTherapyCatalogItem(therapy);
							return (catalogItem?.label ?? therapy);
						}).join(', ')}
				>
					<Tag>+{hiddenTherapies.length}</Tag>
				</Tooltip>
			)}
		</div>
	);
};