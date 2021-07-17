import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';

const ThemeToggler = memo(() => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			isRound
			bg="transparent"
			aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
			icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
			onMouseDown={toggleColorMode}
		/>
	);
});

export default ThemeToggler;
