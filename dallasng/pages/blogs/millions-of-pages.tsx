import { NextPage } from 'next';
import BlogLayout from '../../components/shared/blog-layout';

const meta = {
	title: 'Millions of Pages',
	desc: 'How and why we switch to Next.js'
};

const BlogPage: NextPage = () => (
	<BlogLayout meta={meta}>
		<p>Currently being written!</p>
	</BlogLayout>
);

export default BlogPage;
