import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { IconArrowNarrowLeft } from '@tabler/icons';

const BackButton: React.FC = () => {
	const { back } = useRouter();

	return (
		<Button onClick={back} mt={50} variant="subtle" compact>
			<IconArrowNarrowLeft /> Go Back
		</Button>
	);
};

export default BackButton;
