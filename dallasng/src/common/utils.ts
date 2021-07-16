/**
 * An async function that functions like python's time.sleep()
 *
 * @param ms - milliseconds to sleep for
 * @returns void
 */
export const sleep = async (ms: number): Promise<void> => {
	return await new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * An async function that returns an empty promise after a random period within 2-3 second
 *
 * @returns void
 */
export const mockApi = async (): Promise<void> => {
	return await sleep(getRandomNumber(0.1, 5) * 1000);
};

/**
 * Generates a random number from a set of numbers
 *
 * @param min - minimum random number
 * @param max - maximum random number
 * @returns a random integer in between the min and max.
 */
export const getRandomNumber = (min: number, max: number): number => {
	return Math.random() * (max - min) + min;
};
