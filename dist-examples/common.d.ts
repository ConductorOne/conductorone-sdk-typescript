import 'dotenv/config';
import { ConductoroneSDKTypescript } from '../dist/index.js';
export declare function getClient(): ConductoroneSDKTypescript;
export declare function authHeader(sdk: ConductoroneSDKTypescript): Promise<{
    Authorization: string;
}>;
