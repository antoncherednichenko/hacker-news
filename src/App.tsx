import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { routes } from './routes';
import { store } from './store/store';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					{
						routes.map(p => (
							<Route 
								path={p.path}
								element={<p.component />}
								key={p.path}
							/>
						))
					}
				</Routes>
			</BrowserRouter>
		</Provider>
	</>
  )
}

export default App
