export const toSanitisedLink = (input: string) =>
	input.toLowerCase().replace(/ /g, '-');
