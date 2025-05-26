import { createStyles } from '@mantine/core';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
	const c = useStyles().classes;

	return <div className={c.main}>Hi, I'm Dallas</div>;
};

const useStyles = createStyles(theme => ({
	main: {
		padding: 20
	}
}));

export default IndexPage;
