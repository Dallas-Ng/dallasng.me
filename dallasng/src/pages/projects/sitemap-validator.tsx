import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import React from 'react';

const PageSitemapValidator: Page = () => {
	return <div></div>;
};

PageSitemapValidator.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageSitemapValidator;
