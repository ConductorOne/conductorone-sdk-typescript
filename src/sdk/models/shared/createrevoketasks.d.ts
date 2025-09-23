import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The CreateRevokeTasks message.
 */
export type CreateRevokeTasks = {
    /**
     * The appEntitlementRefs field.
     */
    appEntitlementRefs?: Array<AppEntitlementRef> | null | undefined;
    /**
     * The appEntitlementRefsCel field.
     */
    appEntitlementRefsCel?: string | null | undefined;
    /**
     * The revokeAll field.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    revokeAll?: boolean | null | undefined;
    /**
     * If true, the step will use the subject user of the automation as the subject.
     */
    useSubjectUser?: boolean | null | undefined;
    /**
     * The userIdCel field.
     */
    userIdCel?: string | null | undefined;
    userRef?: UserRef | null | undefined;
};
/** @internal */
export declare const CreateRevokeTasks$inboundSchema: z.ZodType<CreateRevokeTasks, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateRevokeTasks$Outbound = {
    appEntitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    appEntitlementRefsCel?: string | null | undefined;
    revokeAll?: boolean | null | undefined;
    useSubjectUser?: boolean | null | undefined;
    userIdCel?: string | null | undefined;
    userRef?: UserRef$Outbound | null | undefined;
};
/** @internal */
export declare const CreateRevokeTasks$outboundSchema: z.ZodType<CreateRevokeTasks$Outbound, z.ZodTypeDef, CreateRevokeTasks>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateRevokeTasks$ {
    /** @deprecated use `CreateRevokeTasks$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateRevokeTasks, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateRevokeTasks$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateRevokeTasks$Outbound, z.ZodTypeDef, CreateRevokeTasks>;
    /** @deprecated use `CreateRevokeTasks$Outbound` instead. */
    type Outbound = CreateRevokeTasks$Outbound;
}
export declare function createRevokeTasksToJSON(createRevokeTasks: CreateRevokeTasks): string;
export declare function createRevokeTasksFromJSON(jsonString: string): SafeParseResult<CreateRevokeTasks, SDKValidationError>;
