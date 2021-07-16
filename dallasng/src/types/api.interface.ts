import { TProject } from './data.types';

export interface IEndpointBase {
	success: boolean;
}

export interface IEndpointProject extends IEndpointBase {
	projects: TProject[];
}
