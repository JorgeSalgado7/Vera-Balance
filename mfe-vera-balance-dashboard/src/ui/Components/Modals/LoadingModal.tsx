import {  Modal } from 'antd';
import { Spin } from 'antd';

export const LoadingModal = ({ isOpen }: { isOpen:  boolean })  => {
	return (
		<Modal open={isOpen} footer={null} centered closable={false} className='loading_modal'>
			<Spin size="large"></Spin>
    </Modal>
	)
}
