import React from 'react';

import { Title, PostTitle, Page } from "../components/ui";
import { Posts } from "../components/previous_work/posts"

export const PreviousWork = () => {
	let body = (
		<Page>
			<Title>~/previous_work_experience</Title>
			<Posts />
		</Page>
	);

	return body;
}
