import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { PageRouter } from './routes/PageRouter';
import { store } from './store/store';

import './ui/scss/main.scss';
import 'antd/dist/reset.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<PageRouter />
		</Provider>
	</StrictMode>,
);