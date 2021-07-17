import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import React from 'react';

const PageAbout: Page = () => {
	return <>About</>;
};

PageAbout.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageAbout;
