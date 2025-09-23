import { SDKOptions } from "../lib/config.js";
import { RequestInput } from "../lib/http.js";
import { AfterErrorContext, AfterErrorHook, AfterSuccessContext, AfterSuccessHook, BeforeCreateRequestContext, BeforeCreateRequestHook, BeforeRequestContext, BeforeRequestHook, Hooks, SDKInitHook } from "./types.js";
export declare class SDKHooks implements Hooks {
    sdkInitHooks: SDKInitHook[];
    beforeCreateRequestHooks: BeforeCreateRequestHook[];
    beforeRequestHooks: BeforeRequestHook[];
    afterSuccessHooks: AfterSuccessHook[];
    afterErrorHooks: AfterErrorHook[];
    constructor();
    registerSDKInitHook(hook: SDKInitHook): void;
    registerBeforeCreateRequestHook(hook: BeforeCreateRequestHook): void;
    registerBeforeRequestHook(hook: BeforeRequestHook): void;
    registerAfterSuccessHook(hook: AfterSuccessHook): void;
    registerAfterErrorHook(hook: AfterErrorHook): void;
    sdkInit(opts: SDKOptions): SDKOptions;
    beforeCreateRequest(hookCtx: BeforeCreateRequestContext, input: RequestInput): RequestInput;
    beforeRequest(hookCtx: BeforeRequestContext, request: Request): Promise<Request>;
    afterSuccess(hookCtx: AfterSuccessContext, response: Response): Promise<Response>;
    afterError(hookCtx: AfterErrorContext, response: Response | null, error: unknown): Promise<{
        response: Response | null;
        error: unknown;
    }>;
}
