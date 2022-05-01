import { Button } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowNarrowUp } from '@tabler/icons';

const GoToTopButton: React.FC = () => {
	const [_scroll, scrollTo] = useWindowScroll();

	return (
		<Button
			mt={50}
			variant="subtle"
			compact
			onClick={() => scrollTo({ x: 0, y: 0 })}>
			<IconArrowNarrowUp /> Go To Top
		</Button>
	);
};

export default GoToTopButton;
