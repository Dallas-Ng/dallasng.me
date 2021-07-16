import type { NextApiRequest, NextApiResponse } from 'next';
import { sleep } from '../../common/utils';
import { IEndpointProject } from '../../types/api.interface';

const MockApi = async (
	req: NextApiRequest,
	res: NextApiResponse<IEndpointProject>
) => {
	await sleep(Math.random() * 1000);

	res.status(200).json({ projects: [], success: true });
};

export default MockApi;
