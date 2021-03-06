import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Badge, Card, Image, Figure } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { Home } from './pages/home';
import { About } from './pages/about';
import { PreviousWork } from './pages/previous_work';
import { NotFound } from './pages/not_found';


const App = () => {
	document.body.classList.add('bg-dark');
	document.body.classList.add('text-white');	
	
	document.title = "<Mathias />"

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/home" exact element={<Home/>} />
				<Route path="/about" element={<About/>} />
				<Route path="/previous_work" exact element={<PreviousWork/>} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
