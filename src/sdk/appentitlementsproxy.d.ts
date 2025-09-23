import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class AppEntitlementsProxy extends ClientSDK {
    /**
     * Delete
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementsProxy.Delete method.
     */
    delete(request: operations.C1ApiAppV1AppEntitlementsProxyDeleteRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsProxyDeleteResponse>;
    /**
     * Get
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementsProxy.Get method.
     */
    get(request: operations.C1ApiAppV1AppEntitlementsProxyGetRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsProxyGetResponse>;
    /**
     * Create
     *
     * @remarks
     * Invokes the c1.api.app.v1.AppEntitlementsProxy.Create method.
     */
    create(request: operations.C1ApiAppV1AppEntitlementsProxyCreateRequest, options?: RequestOptions): Promise<operations.C1ApiAppV1AppEntitlementsProxyCreateResponse>;
}
