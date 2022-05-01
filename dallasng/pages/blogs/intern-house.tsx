import { IconExclamationMark, IconExternalLink } from '@tabler/icons';
import {
	Title,
	Text,
	createStyles,
	Paper,
	Center,
	Anchor,
	Blockquote,
	Button
} from '@mantine/core';
import { NextPage } from 'next';
import Image from 'next/image';
import BlogLayout from '../../components/shared/blog-layout';

const meta = {
	title: 'intern.house',
	desc: 'The journey of intern.house'
};

const BlogPage: NextPage = () => {
	const c = useStyles().classes;

	const ImageWithCaption = (src: string, caption: string, height = 400) => (
		<>
			<Paper className={c.imgContainer} style={{ height: height }}>
				<Image src={src} alt={caption} layout="fill" objectFit="contain" />
			</Paper>

			<Text color="gray" my="sm" style={{ fontSize: 14, textAlign: 'center' }}>
				<em>{caption}</em>
			</Text>
		</>
	);

	return (
		<BlogLayout meta={meta}>
			<Title my="xl">intern.house</Title>

			<Paper className={c.imgContainer} style={{ height: 100 }} mb="md">
				<Image
					src="/images/blogs/intern-house/intern-house.webp"
					alt="intern.house"
					layout="fill"
					objectFit="contain"
				/>
			</Paper>

			<Button
				component="a"
				href="https://intern.house"
				target="_blank"
				variant="outline"
				leftIcon={<IconExternalLink size={14} />}>
				Visit Website
			</Button>

			<Title order={3} mt={40} mb={5}>
				Preface
			</Title>

			<Text mb="md">
				As covid led to a lot of internship offers being retracted, I wanted to
				help others to build their portfolios. Together with 3 software
				engineers based in Canada, India and the United States, we met online on
				a discord channel and started this project.{' '}
				<Anchor href="https://intern.house" target="_blank">
					intern.house
				</Anchor>{' '}
				is a platform for interns to find accommodations from other interns in
				the United States.
			</Text>

			<Title order={3} mt={40} mb={5}>
				Conception of the Idea
			</Title>

			<Text mb="md">
				Commonly, interns would travel to other states to do their internships
				for up to 2-3 months. This meant that they would leave their
				rooms/houses vacant for that period of time. This prompted the idea;
				What if other interns would sublet from those interns working cross
				borders? During the period of internships, this creates a piggy-back
				network effect amongst each other.
			</Text>

			{ImageWithCaption(
				'/images/blogs/intern-house/idea-diagram.webp',
				'My cool diagram explaining what I mean.'
			)}

			<Title order={3} mt={40} mb={5}>
				Platform Idea
			</Title>

			<Text mb="md">
				Although the original idea was accommodation, we wanted to build a
				community. The vision for the platform was to create a network for
				interns to develop further in their careers.
			</Text>

			<Text mb="md">
				We targeted 2 main areas; accommodations and networking. Accommodation
				is as straightforward as something like Airbnb, we would help collate
				housing listings from various sources to build an all-in-one platform.
				Networking would be creating discussion forums, showing industry events
				and thus creating a social network for intern
			</Text>

			<Title order={3} mt={40} mb={5}>
				Why did I think this idea was good?
			</Title>

			<Text mb="md">
				My assumption was if I was a university student, I would be more
				trusting to another university student, especially if that student was
				in the same field such as software engineering. We could get off on the
				right foot and have a common ideology.
			</Text>

			<Text mb="md">
				I went on a discord community to get some feedback of how others thought
				about this and surprisingly a lot of people agreed. Many wanted a place
				for community and also agreed that they felt more comfortable if they
				met up with someone of the same interest.
			</Text>

			<Title order={3} mt={40} mb={5}>
				Okay, you have the idea, what now?
			</Title>

			<Text mb="md">
				We quickly sprung into action, we distributed our roles and tasks and
				set up communications using Discord. As we lived in different timezones,
				we needed to agree on certain timeframes and processes that allowed us
				to work efficiently with each other.
			</Text>

			<Text mb="md">
				We portioned out the platform into 2 main parts; the web application and
				the behind-the-scenes automation. To keep the long story short, the web
				application was built using React and Node.js and we scraped 4 websites;
				Airbnb, Zillow, Craigslist and Booking.com using scrapy.
			</Text>

			<Text mb="md">
				On the front end would be me designing the wireframes and with the help
				of another developer translate it into React. Our main focus for the web
				app initially was to set up the email collection landing page, running
				ads to it to gauge interest. On the backend, it was a Node.js api server
				and python scripts running on lambda functions.
			</Text>

			{ImageWithCaption(
				'/images/blogs/intern-house/architecture.webp',
				"A short synopsis of our architecture - As this blog is meant to explain overall about the project, I didn't dive much into the tech side of things."
			)}

			<Title order={3} mt={40} mb={5}>
				Problems and Setbacks
			</Title>

			<Text mb="md">
				As the project grew, we slowly started to face problems. We had 3 main
				problems.
			</Text>

			<Title order={4} mb={5}>
				Communication and Planning
			</Title>

			<Text mb="md">
				As I was based in Singapore and the others were in Canada, United States
				and India, we had to stagger how meetings were conducted and how the
				project would be planned. The biggest time zone difference was about 3-4
				hours, albeit not that huge but as we were students and/or working it
				wasn&apos;t really an option to schedule during the mid-day as we might
				have things on-going.
			</Text>

			<Text mb="md">
				For the first few days we decided on early meetings (before the day
				started). This was quite difficult for myself as I would have to wake up
				at 6am to meet with the team. As a part-of-a-solution, we would come
				prepared such as having a standup meeting and having an already prepared
				list of what to talk about.
			</Text>

			{ImageWithCaption(
				'/images/blogs/intern-house/world-clock.webp',
				'How we would plan to meet',
				200
			)}

			<Text mb="md">
				The initial project development was gung-ho, this meant that any idea
				that could fly would be built. While this was exciting to have this also
				derailed timelines and leads to less fully-built out features. To solve
				this, we started to use Trello, a kanban board where each developer
				would see the tickets they owned and any additional information they
				needed. To create additional features, we would impose a “put it in a
				chat and let&apos;s think about it” mentality so that not all features
				would instantly get into the pipeline but all features would be at least
				taken into consideration.
			</Text>

			<Title order={4} mb={5}>
				Teaching
			</Title>

			<Text mb="md">
				<em>
					At this point, you probably forgot the main conception of the project
					was to help other developers learn and grow.
				</em>
			</Text>

			<Text mb="md">
				<strong>Project Management</strong>; As a rule of thumb, I broke down
				big features into smaller features where each developer could have 1
				main focus. It is very easy for me to just tell someone to “build the
				login system” but that wouldn&apos;t be beneficial as they might get
				lost along the way or just be overwhelmed with what to do.
			</Text>

			{ImageWithCaption(
				'/images/blogs/intern-house/trello.webp',
				'Our trello board at a point of time'
			)}

			<Text mb="md">
				<strong>Managing Code Quality</strong>; One biggest learning curve for
				newer developers would be “how to code”. As funny as that reads, it is
				still true to this day. Learning in school about how to build algorithms
				and web applications are drastically different to how things work in the
				industry. At least in the school I went to, my teacher focused more on
				the end result than the actual code that was being written.
			</Text>

			<Text mb="md">Some code smells are that common in newer developers</Text>
			<ul>
				<li> Arbitrary variables and function names</li>
				<li>
					Styling a component in general - not knowing how to things or styling
					will be complicated
				</li>
				<li>
					{' '}
					Making a simple functionailty into something more complicated than it
					needs to be
				</li>
				<li>Not knowing where to start, leading to messy code</li>
			</ul>

			<Text mb="md">
				To combat these codesmells, for each PR was opened, I made it a habit to
				comment on suggested changes in the following format:
			</Text>

			<ul>
				<li>Problem: What is wrong with the highlighted area</li>
				<li>
					Solution: What I would&apos;ve done or things you can explore to do
				</li>
				<li>
					Others: Things that are related but not directly related to the
					problem or solution
				</li>
			</ul>

			{ImageWithCaption(
				'/images/blogs/intern-house/github-comment.webp',
				'A real PR comment, that I should have elaborated more on'
			)}

			<Text mb="md">
				Another method I tried was pair-coding, we would hop on discord and
				screen share about the feature that was being built. This method was
				very insightful for both sides, it allowed me to see the main struggles
				of building the features while the other side was able to clarify on the
				spot about anything. While this was a good method, it was also very
				time-consuming and hard to fit into our busy schedules.
			</Text>

			<Title order={4} mb={5}>
				Commitment
			</Title>

			<Text mb="md">
				This was the biggest problem of our project which ultimately led to the
				end of the project. I was still working at this point of time and other
				developers were still actively looking for internships. It was very hard
				to make the project work when not all our time was aligned with what the
				project needed. The project also had recruited other developers here and
				there to make smaller contributions just so that they could have some
				exposure to how things worked.
			</Text>

			<Text mb="md">
				Eventually, the team sized down to another developer and I. As my
				responsibilities at work grew, I eventually left the project to focus on
				my full-time job. However, I still kept in touch with the development
				team in case of any problems and pitched in occasionally.
			</Text>

			<Title order={3} mt={40} mb={5}>
				Conclusion
			</Title>

			<Text mb="md">
				The project was definitely something eye-opening for me, it was the
				spark that started my love for startups and made me want to build my own
				company. It taught me many things about how to work with others, how to
				plan and most importantly how to be realistic with the project.
			</Text>

			<Text mb="md">
				Even though the project never reached completion, the learning process
				for everyone was monumental. My team used the experience to apply for
				internships and landed jobs in different companies, such as Amazon.
				Overall, I am glad that I took the opportunity to meet these people and
				start this project.
			</Text>

			<Text mb="md">
				In the future, I would definitely like to start another intern-project
				where I can help new developers learn and grow.
			</Text>
		</BlogLayout>
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

export default BlogPage;
