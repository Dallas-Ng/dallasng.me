import DefaultLayout from '../layouts/default.layout';
import { Page } from '../types/page';

const PageAbout: Page = () => {
	return <>About</>;
};

PageAbout.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageAbout;
