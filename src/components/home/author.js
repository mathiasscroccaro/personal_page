import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Figure, Badge } from 'react-bootstrap';

const face = require('../../static/foto.jpg');

export const Author = ({ children }) => {
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
	
	let description = (
		<p className="text-center">Living and learning</p>
	);
	
	const links_dict = {
		linkedin: 'https://www.linkedin.com/in/mathias-scroccaro',
		github: 'https://github.com/mathiasscroccaro',
	}

	const links = (
		<Container fluid>
			<Row className="d-flex justify-content-center">
				{Object.entries(links_dict).map(([key, value]) => 
					<Col xs='auto'>
						<a href={value}><Badge pill bg='danger'>{key}</Badge></a>
					</Col>
				)}
			</Row>
		</Container>
	);
	
	return (
		<Container fluid>
			<Row className='d-flex justify-content-center'>
				<Col xs={12} className='d-flex justify-content-center'>
					{image}
				</Col>
				<Col xs={12} className='d-flex justify-content-center'>
					{name}
				</Col>
				<Col xs md={6} lg={5} xl={4} xxl={3} className='d-flex justify-content-center pt-5'>
					{description}
				</Col>
				<Col xs={12} className='d-flex justify-content-center pt-3'>
					{links}
				</Col>
			</Row>
		</Container>
	);
}

export default Author;
