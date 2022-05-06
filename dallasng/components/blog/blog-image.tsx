import { createStyles, Paper, Text } from '@mantine/core';
import Image from 'next/image';

interface IProps {
	src: string;
	alt: string;
	caption?: string;
	height?: number;
}

const BlogImage: React.FC<IProps> = ({ src, alt, caption, height = 387 }) => {
	const c = useStyles().classes;

	return (
		<>
			<Paper className={c.imgContainer} style={{ height }}>
				<Image src={src} alt={alt} layout="fill" objectFit="contain" />
			</Paper>

			{caption && (
				<Text
					color="gray"
					my="sm"
					style={{ fontSize: 14, textAlign: 'center' }}>
					<em>{caption}</em>
				</Text>
			)}
		</>
	);
};

const useStyles = createStyles(theme => ({
	imgContainer: {
		position: 'relative',
		background:
			theme.colorScheme === 'dark'
				? theme.colors.gray[8]
				: theme.colors.gray[2],
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			maxHeight: 200
		}
	}
}));

export default BlogImage;
