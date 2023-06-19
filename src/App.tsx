import React, { useEffect } from 'react';
import _MENUITEMS from 'constants/data/menu.constant';
import DashLayout from 'pages/private/dash';
import NotFoundPage from 'pages/public/404';
import Landing from 'pages/public/landing';
import { Route, Routes } from 'react-router-dom';
import DashHome from 'pages/private/dash/home';
import Casinos from 'pages/private/dash/casinos';
import Topup from 'pages/private/dash/top-up';
import Setting from 'pages/private/dash/setting';
import Logout from 'pages/private/logout';
import useStore from 'useStore';

function App() {
    const { cookie, setCookie } = useStore();

    useEffect(() => {
        if (cookie)
            setCookie()
    }, [cookie, setCookie])

	return (
		<Routes>
			<Route path='' element={<Landing />}></Route>
			<Route path='dash/' element={(<DashLayout />)}>
				<Route path={``} element={<DashHome />}></Route>
				<Route path={`${_MENUITEMS[1].link}/`} element={<Casinos />}></Route>
				<Route path={`${_MENUITEMS[2].link}/`} element={<Topup />}></Route>
				<Route path={`${_MENUITEMS[3].link}/`} element={<Setting />}></Route>
				<Route path={`${_MENUITEMS[4].link}/`} element={<Logout />}></Route>
			</Route>
			<Route path='*' element={<NotFoundPage />}></Route>
		</Routes>
	);
}

export default App;
