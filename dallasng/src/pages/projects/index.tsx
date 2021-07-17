import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import React from 'react';

const PageProjects: Page = () => {
	return <>Projects</>;
};

PageProjects.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageProjects;
