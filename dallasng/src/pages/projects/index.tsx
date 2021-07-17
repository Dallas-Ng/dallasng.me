import DefaultLayout from '../../layouts/default.layout';
import { Page } from '../../types/page';

const PageProjects: Page = () => {
	return <>Projects</>;
};

PageProjects.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageProjects;
