import { Modal } from 'antd';

//* Components
import { VBButton } from '../VBButton';

//* Interfaces
import type { ConfirmModalI } from '../../Interfaces/Components/confirm-modal.interface';

export const VBConfirmModal = ({
	isOpen,
	title,
	description,
	icon,
	iconColor = 'pink',
	confirmText = 'Aceptar',
	cancelText = 'Cancelar',
	confirmButtonType = 'pink',
	isLoading = false,
	children,
	onConfirm,
	onCancel
}: ConfirmModalI) => {
	return (
		<Modal
			open={isOpen}
			footer={null}
			centered
			closable={false}
			maskClosable={!isLoading}
			destroyOnHidden
			className='confirm_modal'
			onCancel={onCancel}
		>

			<div className='confirm_modal__content'>

				{
					icon &&
						<div className={`confirm_modal__icon confirm_modal__icon--${iconColor}`}>
							<i className={`bi bi-${icon}`}></i>
						</div>
				}

				<h2>{title}</h2>

				{
					description &&
						<p className='confirm_modal__description'>
							{description}
						</p>
				}

				{children}

				<div className='confirm_modal__actions'>

					<VBButton
						variant='outline'
						color='pink'
						disabled={isLoading}
						onClick={onCancel}
					>
						{cancelText}
					</VBButton>

					<VBButton
						color={confirmButtonType}
						loading={isLoading}
						onClick={onConfirm}
					>
						{confirmText}
					</VBButton>

				</div>

			</div>

		</Modal>
	)
}