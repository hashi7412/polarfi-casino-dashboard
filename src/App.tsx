import _MENUITEMS from 'constants/data/menu.constant';
import DashLayout from 'pages/private/dash';
import DAO from 'pages/private/dash/dao';
import DashHome from 'pages/private/dash/home';
import MyNFTs from 'pages/private/dash/my-nfts';
import Staking from 'pages/private/dash/staking';
import Transaction from 'pages/private/dash/tx';
import NotFoundPage from 'pages/public/404';
import Landing from 'pages/public/landing';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='' element={<Landing />}></Route>
				<Route path='dash/' element={(<DashLayout />)}>
					<Route path={``} element={<DashHome />}></Route>
					<Route path={`${_MENUITEMS[1].link}/`} element={<MyNFTs />}></Route>
					<Route path={`${_MENUITEMS[2].link}/`} element={<Transaction />}></Route>
					<Route path={`${_MENUITEMS[3].link}/`} element={<DAO />}></Route>
					<Route path={`${_MENUITEMS[4].link}/`} element={<Staking />}></Route>
				</Route>
				<Route path='*' element={<NotFoundPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
