import { IconExternalLink } from '@tabler/icons';
import { Title, Text, Button } from '@mantine/core';
import { NextPage } from 'next';
import BlogLayout from '../../components/shared/blog-layout';
import Gist from 'react-gist';
import BlogImage from '../../components/blog/blog-image';

const meta = {
	title: 'Steam Account Switcher',
	desc: 'An application that allows users to easily switch accounts on Steam',
	date: '8 May 2022'
};

const BlogPage: NextPage = () => (
	<BlogLayout meta={meta} header="Projects">
		<Button
			mr="xs"
			mb="xs"
			component="a"
			href="https://github.com/dallas-ng/steam-account-switcher"
			target="_blank"
			variant="outline"
			leftIcon={<IconExternalLink size={14} />}>
			View Project
		</Button>

		<Button
			component="a"
			href="https://github.com/Dallas-Ng/Steam-Account-Switcher/releases/tag/v2.0"
			target="_blank"
			variant="outline"
			leftIcon={<IconExternalLink size={14} />}>
			View The Latest Release
		</Button>

		<Title order={3} mt={40} mb={5}>
			Preface
		</Title>

		<Text mb="md">
			This application is quite old; developed in 2019. Steam Account Switcher
			(SAS) is a windows application written in C# (WPF) that allows users to
			easily switch accounts on Steam.
		</Text>

		<Title order={3} mt={40} mb={5}>
			Why?
		</Title>

		<Text mb="md">
			As gamers, my friends and I like to play different genres of games. We
			might achieve different competitive ranks that prevent us from playing
			with each other, to circumvent this, we would create new accounts.
			Additionally, it is common to have games on certain accounts while not on
			others.
		</Text>

		<Text mb="md">
			It quickly became repetitive and annoying to log into different accounts,
			we would constantly have to retype and re-enter our credentials. Some of
			our accounts could also be quite old and we might lose/forget the
			credentials. This is where the Steam Account Switcher (SAS) steps in, an
			application that allows you to save different credentials locally on your
			device and helps you to log in.
		</Text>

		<BlogImage src="/images/blogs/sas/SAS.png" alt="Steam Account Switcher" />

		<Title order={3} mt={40} mb={5}>
			How It Works
		</Title>

		<Text mb="md">
			For SAS, it was built using WPF. The main decision for choosing WPF was
			because I was building a lot of web apps using ASP.NET at the time, so
			naturally I continued on the ecosystem.
		</Text>

		<Text mb="md">
			Adding accounts allows the user to create profiles for easier logins. Upon
			adding the accounts, the details would be encrypted and stored locally
			into a XML file.
		</Text>

		<Gist id="4625abb509216113d74583cb450ee706" />

		<Text size="sm" style={{ textAlign: 'center' }}>
			How I hashed the credentials - pretty sure you can find this on Stack
			Overflow
		</Text>

		<Title order={3} mt={40} mb={5}>
			Retrospective
		</Title>

		<Title order={4} mb={5}>
			Cross Platform
		</Title>

		<Text mb="md">
			One of the goals of this project was actually to make it cross platform.
			At the time, Steam for linux was not a big thing yet and MacOS did not
			support a lot of games. So I decided that I would make this a windows
			utility only.
		</Text>

		<Title order={4} mb={5}>
			Cloud Storage
		</Title>

		<Text mb="md">
			I also wanted to build was to make the application handle cloud storage
			(data being stored on a server securely). However, I decided against this
			as this could lead the application to have security vulnerabilities and
			this meant that the user has to be connected to the internet all the time.
		</Text>

		<Title order={4} mb={5}>
			Presently
		</Title>

		<Text mb="md">
			The project is finished and I will not be making any changes to it. In the
			future, I might make an electron version of this application that is cross
			platform compatible.
		</Text>

		<Button
			mr="xs"
			mb="xs"
			component="a"
			href="https://github.com/Dallas-Ng/Steam-Account-Switcher/releases/tag/v2.0"
			target="_blank"
			variant="outline"
			leftIcon={<IconExternalLink size={14} />}>
			View The Latest Release
		</Button>

		<Button
			component="a"
			href="https://github.com/Dallas-Ng/Steam-Account-Switcher/releases/tag/v1.0"
			target="_blank"
			variant="outline"
			leftIcon={<IconExternalLink size={14} />}>
			View The v1.0 Release
		</Button>
	</BlogLayout>
);

export default BlogPage;
