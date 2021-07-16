import type { NextApiRequest, NextApiResponse } from 'next';
import { getRandomNumber, sleep } from '../../common/utils';
import { IEndpointProject } from '../../types/api.interface';

const MockApi = async (
	req: NextApiRequest,
	res: NextApiResponse<IEndpointProject>
) => {
	const timeToSleep = getRandomNumber(0.1, 1) * 1000;
	await sleep(timeToSleep);

	res.status(200).json({ projects: [], success: true });
};

export default MockApi;
