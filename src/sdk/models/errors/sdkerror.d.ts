import { ConductoroneSDKTypescriptError } from "./conductoronesdktypescripterror.js";
/** The fallback error class if no more specific error class is matched */
export declare class SDKError extends ConductoroneSDKTypescriptError {
    constructor(message: string, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
