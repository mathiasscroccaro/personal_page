import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Badge } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
		  <Container className="d-flex justify-content-center">
		  <Nav>
		    <Nav.Link href="/bio">Bio</Nav.Link>
		    <Nav.Link href="/cv">CV</Nav.Link>
		    <Nav.Link href="/my_works">Past works</Nav.Link>
		  </Nav>
		  </Container>
		</Navbar>	
	);
}

const Footer = () => {
	const links_dict = {
		linkedin: 'https://www.linkedin.com/in/mathias-scroccaro',
		github: 'https://github.com/mathiasscroccaro'
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
				Copyleft Ⓐ  - Feito pelo Mathias
			</Row>
		</Container>
	);	
}

const Home = () => {
	let body = (<div>Olá mundo</div>);

	return (
	<>
		{body}
	</>
	);
}

const Page = ({children}) => {
	return (
		<>
			<Header />
				{children}
			<Footer />
		</>
		
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
