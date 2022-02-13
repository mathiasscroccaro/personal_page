import React from 'react';

import { Title, PostTitle, Page } from "../components/ui";
import { Bio } from "../components/about/bio"

export const About = () => {
	let body = (
		<Page>
			<Title>~/about</Title>
			<Bio />
		</Page>
	);

	return body;
}

export default About;
