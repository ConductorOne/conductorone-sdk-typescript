import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class Auth extends ClientSDK {
    /**
     * Introspect
     *
     * @remarks
     * Introspect returns the current user's principle_id, user_id and a list of roles, permissions, and enabled features.
     */
    introspect(options?: RequestOptions): Promise<operations.C1ApiAuthV1AuthIntrospectResponse>;
}
