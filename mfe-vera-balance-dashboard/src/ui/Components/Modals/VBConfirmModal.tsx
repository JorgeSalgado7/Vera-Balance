import { Modal } from 'antd';

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
			destroyOnClose
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

					<button
						type='button'
						className='vb_btn'
						onClick={onCancel}
						disabled={isLoading}
					>
						{cancelText}
					</button>

					<button
						type='button'
						className={`vb_btn vb_btn--${confirmButtonType}`}
						onClick={onConfirm}
						disabled={isLoading}
					>
						{confirmText}
					</button>

				</div>

			</div>

		</Modal>
	)
}