import type { ButtonEntity } from '../../domain/entities/buttons/ButtonEntity'

export const PrimaryButton = ({ text, icon, action }: ButtonEntity) => {

	return (

		<button 
			type='button'
			className='btn btn_primary'
			onClick={action}
		>

			{
				icon && <i className={icon} />
			}

			{ text }
		</button>
	)

}
