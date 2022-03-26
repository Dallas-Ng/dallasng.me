import { Anchor, createStyles, Grid } from '@mantine/core';
import { NextLink } from '@mantine/next';

const Footer: React.FC = () => {
	const c = useStyles().classes;

	return (
		<footer>
			<Grid className={c.footer} align="center">
				<Grid.Col span={4}>
					<Anchor
						className={c.footerLink}
						component={NextLink}
						href="https://github.com/dallas-ng">
						View Source Code
					</Anchor>
				</Grid.Col>

				<Grid.Col span={4}>
					<Anchor
						className={c.footerLink}
						component={NextLink}
						href="https://www.linkedin.com/in/dallas-ng/">
						Built by Dallas
					</Anchor>
				</Grid.Col>

				<Grid.Col span={4}>
					<Anchor
						className={c.footerLink}
						component={NextLink}
						href="mailto:ngdallas1@gmail.com">
						Contact Me
					</Anchor>
				</Grid.Col>
			</Grid>
		</footer>
	);
};

const useStyles = createStyles(theme => ({
	footer: {
		height: 60,
		textAlign: 'center'
	},
	footerLink: {
		textAlign: 'center',
		fontSize: 12,
		color: theme.colorScheme === 'dark' ? 'white' : 'black'
	}
}));

export default Footer;
