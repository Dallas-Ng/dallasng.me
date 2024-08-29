import {
	Anchor,
	Container,
	createStyles,
	Group,
	MantineNumberSize
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import Image from 'next/image';
import ColorSchemeToggle from './color-scheme-toggle';

interface IProps {
	containerSize?: MantineNumberSize;
	headerText?: string;
}

const Navigation: React.FC<IProps> = ({
	containerSize,
	headerText = 'Portfolio'
}) => {
	const c = useStyles().classes;

	return (
		<nav className={c.nav}>
			<Container size={containerSize} className={c.container}>
				<Group>
					<Anchor href="/" component={NextLink}>
						<div className={c.imgContainer}>
							<Image
								src="/logo.svg"
								height={40}
								width={40}
								alt="Dallas Ng"
								layout="fixed"
							/>
						</div>
					</Anchor>

					<span className={c.text}>{headerText}</span>
				</Group>

				<ColorSchemeToggle />
			</Container>
		</nav>
	);
};

const useStyles = createStyles(theme => ({
	nav: {
		top: 0,
		position: 'sticky',
		backdropFilter: 'blur(15px)',
		zIndex: 8
	},
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: 60
	},
	imgContainer: {
		background: '#1A202C',
		padding: '0px 10px',
		borderRadius: 5,
		display: 'flex',
		alignItems: 'center'
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold'
	}
}));

export default Navigation;
