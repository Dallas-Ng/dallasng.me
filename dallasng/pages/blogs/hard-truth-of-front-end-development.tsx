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
		<Text component="p">
			I have been designing websites and building them for quite some time now.
			I worked with big banks, ecommerce stores, start ups and more. Each
			business has their own set of users with their own needs and wants, each
			user also has a level of technological savviness that allows them to
			easily navigate on websites built today.
		</Text>
	</BlogLayout>
);

export default BlogPage;
