import { Text } from '@mantine/core';
import { NextPage } from 'next';
import BlogLayout from '../../components/shared/blog-layout';

const meta = {
	title: 'Hard Truths of Front End Development',
	desc: 'Some things I had to learn the hard way',
	date: '2023'
};

const BlogPage: NextPage = () => (
	<BlogLayout meta={meta}>
		<Text component="p">Wait this isnt done yet.</Text>
	</BlogLayout>
);

export default BlogPage;
