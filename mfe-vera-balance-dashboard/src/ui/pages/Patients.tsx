//* Components
import { DasboardLayout } from "../Layouts/DashboardLayouts/DasboardLayout"
import { InputText } from '../Components/Inputs/InputText'
import { Card } from '../Components/Card';

import { Table } from 'antd';
import { Link } from 'react-router';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];


export const Patients = () => {
	return (

		<DasboardLayout>
			
			<div className="patients">

				<Card customClass="patients__table">

					{/** Header */}
					<div className="patients__table__header">
						<h2>Mis pacientes</h2>
						<Link 
							to={'/pacientes/crear'}
							className="vb_btn vb_btn-sm vb_btn--pink">
								Crear paciente
							<i className="bi bi-plus-lg"></i>
						</Link>
					</div>

					{/** Tools */}
					<div className="patients__table__tools">
						<p className='patients__table__tools__count'>Pacientes encontrados: <strong>1000</strong></p>
						<InputText 
							placeholder='Busca un paciente...'
						/>
					</div>

					{/** Table */}
					<Table 
						dataSource={dataSource} 
						columns={columns} 
						pagination={{ placement: ['bottomCenter'] }}
					/>

				</Card>
				
			</div>

		</DasboardLayout>

	)
}
