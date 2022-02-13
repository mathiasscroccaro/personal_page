import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Badge, Card, Image, Figure } from 'react-bootstrap';

import { Title, PostTitle, Page } from "../components/ui";
import { Author } from "../components/home/author"

export const Home = () => {
	let body = (
		<Page>
			<Title>~/home</Title>
			<Author />
		</Page>
	);

	return body;
}

export default Home;
