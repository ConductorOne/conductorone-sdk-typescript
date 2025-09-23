import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
export declare class Task extends ClientSDK {
    /**
     * Create Grant Task
     *
     * @remarks
     * Create a grant task
     */
    createGrantTask(request?: shared.TaskServiceCreateGrantRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskServiceCreateGrantTaskResponse>;
    /**
     * Create Offboarding Task
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskService.CreateOffboardingTask method.
     */
    createOffboardingTask(request?: shared.TaskServiceCreateOffboardingRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskServiceCreateOffboardingTaskResponse>;
    /**
     * Create Revoke Task
     *
     * @remarks
     * Create a revoke task
     */
    createRevokeTask(request?: shared.TaskServiceCreateRevokeRequest | undefined, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskServiceCreateRevokeTaskResponse>;
    /**
     * Get
     *
     * @remarks
     * Get a task by ID
     */
    get(request: operations.C1ApiTaskV1TaskServiceGetRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskServiceGetResponse>;
}
