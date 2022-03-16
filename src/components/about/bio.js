import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Figure, Badge } from 'react-bootstrap';

const SubTitle = ({ children }) => {
	return (
		<h2>
			{children}
		</h2>
	);
}

export const Bio = ({ children }) => {
	const initial_description = (
		<h4></h4>
	);

	const Mathias = () => {
		const style = {
			'text-align': 'justify',
			'text-indent': '2em',
		};
		return (
			<p style={style}>
				I am a software engineer, graduated in electronic engineering with a masters degree in IoT devices. I have a solid experience in Python programming language and my main expertise is in the development of backend applications, involving communication with radio modules, database queries and data processing. I also have experience with electronic circuit design and firmware development for microcontrollers. Passionate about Linux culture. Currently learning React.
			</p>
		);
	}

	const Tecs = () => {
		const style = {
			'text-indent': '2em',
		};
		return (
		<div style={style}>
			<p>Python, C, C++</p>
			<p>Flask, SQLAlchemy, MQTT and currently learning React.js</p>
			<p>Postgres, MongoDB and SQLite</p>
			<p className='mt-5'>Kicad schematics and PSpice simulation </p>
			<p>STM32, Atmega and PIC microcontrollers firmware development</p>
			<p>WiSUN FAN and HAN IoT network protocols</p>
		</div>
		);
	}

	const contact = (
		<p>Feel free to talk to me about anything exposed in this web site. <a href="mailto:mathias.scroccaro@gmail.com"><Badge pill bg='danger'>mathias.scroccaro@gmail.com</Badge></a></p>
	);

	const content_obj = {
		mathias: <Mathias />,
		tecs: <Tecs />,
		contact: contact,
	};

	const content = Object.entries(content_obj).map(([key, value]) =>
		<Row>
			<Col xs={12} className='d-flex justify-content-left mt-4' >
				<h4>~/{key}.sh</h4>
			</Col>
			<Col xs={12} className='d-flex justify-content-left mt-2' >
				<p>{value}</p>
			</Col>
		</Row>
	);

	return (
		<Container fluid>
			<Row className='d-flex justify-content-center'>
				<Col xs={12} md={6} lg={5}>
					{content}
				</Col>
			</Row>
		</Container>
	);
}

export default Bio;
