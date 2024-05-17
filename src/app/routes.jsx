import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { HOME } from 'constants';
import { NOT_FOUND } from 'constants';

import HomePage from 'page/Home';
import NotFoundPage from 'page/NothFound';
import RootErrorPage from 'page/RootErrorPage';


const routes = createBrowserRouter(
	createRoutesFromElements(
			    <Route path='' errorElement={<RootErrorPage />}>
					<Route path={HOME} element={<HomePage />} />
					<Route path={NOT_FOUND} element={<NotFoundPage />} />
				</Route>
	),
);

export default routes;