import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class TaskAudit extends ClientSDK {
    /**
     * List
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskAudit.List method.
     */
    list(request?: shared.TaskAuditListRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskAuditListResponse>;
}
