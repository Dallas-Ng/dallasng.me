import DefaultLayout from '../../layouts/default.layout';
import { Page } from '../../types/page';

const PageSitemapValidator: Page = () => {
	return <div></div>;
};

PageSitemapValidator.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageSitemapValidator;
