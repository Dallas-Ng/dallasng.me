import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

const ColorSchemeToggle: React.FC = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Group position="center">
			<ActionIcon
				onClick={() => toggleColorScheme()}
				size="lg"
				sx={theme => ({
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[6]
							: theme.colors.gray[0],
					color:
						theme.colorScheme === 'dark'
							? theme.colors.yellow[4]
							: theme.colors.blue[6]
				})}>
				{colorScheme === 'dark' ? (
					<IconSun size={24} />
				) : (
					<IconMoonStars size={24} />
				)}
			</ActionIcon>
		</Group>
	);
};
export default ColorSchemeToggle;
