export const sleep = async (ms: number) =>
	await new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = async () => await sleep(Math.random() * 1000);
