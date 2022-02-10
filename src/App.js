import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Badge, Card, Image, Figure } from 'react-bootstrap';

const face = require('./static/foto.jpg');
import './App.css';

const Header = () => {
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

const Footer = () => {
	const links_dict = {
		linkedin: 'https://www.linkedin.com/in/mathias-scroccaro',
		github: 'https://github.com/mathiasscroccaro',
		homepage: 'http://mathias.dev.br'
	}

	const links = (
		<Row>
			{Object.entries(links_dict).map(([key, value]) => 
				<Col>
					<Badge bg="danger" pill><a href={value}>{key}</a></Badge>
				</Col>
			)}
		</Row>
	);

	return (
		<Container fluid className="d-flex justify-content-center">
			{links}
			<Row>
				Copyleft Ⓐ  - Built by Mathias
			</Row>
		</Container>
	);	
}

const Title = ({ children }) => {
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

const PostTitle = ({ children }) => {
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

const Content = ({ children }) => {
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

const Author = ({ children }) => {
	let image = (
		<Figure>
  		<Figure.Image
    	width={100}
    	height={100}
    	alt="171x180"
    	src={String(face)}
  		className="rounded-circle"
			/>
		</Figure>
	);
	let name = (
		<h4>Mathias S Costa</h4>
	);
	//let description = ();
	return (
		<Container fluid>
			<Row className='d-flex justify-content-center'>
				<Col xs={12} className='d-flex justify-content-center'>
					{image}
				</Col>
				<Col xs={12} className='d-flex justify-content-center'>
					{name}
				</Col>
			</Row>
		</Container>
	);
}

const Home = () => {
	let body = (
		<>
			<Title>~/home</Title>
			<Author />
			<PostTitle>Hello, my name is Mathias!</PostTitle>
		</>
	);

	return body;
}

const Page = ({children}) => {
	return (
		<div className="bg-dark text-white">
			<Header />
				{children}
			<Footer />
		</div>
	);
}

const App = () => {
  return (
		<Page>
				<Home />
		</Page>
	);
}

export default App;
