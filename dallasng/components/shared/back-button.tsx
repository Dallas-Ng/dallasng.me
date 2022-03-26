import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { ArrowNarrowLeft } from 'tabler-icons-react';

const BackButton: React.FC = () => {
	const { back } = useRouter();

	return (
		<Button onClick={back} mt={50} variant="subtle" compact>
			<ArrowNarrowLeft /> Go Back
		</Button>
	);
};

export default BackButton;
