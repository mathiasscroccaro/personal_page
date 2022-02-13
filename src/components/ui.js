import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Badge, Card, Image, Figure } from 'react-bootstrap';

//import './components.css';

export const Title = ({ children }) => {
	let content = (
		<Container fluid className='p-5'>
			<Row>
				<Col className='d-flex justify-content-center'>
					<h4>{children}</h4>
				</Col>
			</Row>
		</Container>
	);
	return content;
}

export const PostTitle = ({ children }) => {
	let content = (
		<Container fluid>
			<Row className='d-flex justify-content-center'>
				<Col xs md="auto" className='d-flex justify-content-left'>
					<h3>{children}</h3>					
				</Col>
			</Row>
		</Container>
	);
	return content;
}

export const Content = ({ children }) => {
	let content = (
		<Container fluid className='pt-5'>
			<Row className='d-flex justify-content-center'>
				<Col xs sm="4" className='d-flex justify-content-center'>
					<p className="text-center">{children}</p>		
				</Col>
			</Row>
		</Container>
	);
	return content;
}

export const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
		  <Container className="d-flex justify-content-center">
		  <Nav>
		    <Nav.Link className='px-3' href="/home">home</Nav.Link>
		    <Nav.Link className='px-3' href="/about">about</Nav.Link>
		    <Nav.Link className='px-3' href="/previous_work">previous work experience</Nav.Link>
		    <Nav.Link className='px-3' href="/cv">cv</Nav.Link>
		  </Nav>
		  </Container>
		</Navbar>
	);
}

export const Footer = () => {

	const copyleft = (
		<Container id='footer' fluid className="fixed-bottom mb-5">
			<Row className='d-flex justify-content-center'>
				<Col xs='auto'>
					Copyleft Ⓐ  - Built by Mathias
				</Col>
			</Row>
		</Container>
	);

	return (
		<div className='pt-5'>
			{copyleft}
		</div>
	);	
}

export const Page = ({children}) => {
	return (
		<div>
			<Header />
				{children}
			<Footer />
		</div>
	);
}


