import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * App owner approval provides the configuration for an approval step when the app owner is the target.
 */
export type AppOwnerApproval = {
    /**
     * Configuration that allows a user to self approve if they are an app owner during this approval step.
     */
    allowSelfApproval?: boolean | null | undefined;
};
/** @internal */
export declare const AppOwnerApproval$inboundSchema: z.ZodType<AppOwnerApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type AppOwnerApproval$Outbound = {
    allowSelfApproval?: boolean | null | undefined;
};
/** @internal */
export declare const AppOwnerApproval$outboundSchema: z.ZodType<AppOwnerApproval$Outbound, z.ZodTypeDef, AppOwnerApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppOwnerApproval$ {
    /** @deprecated use `AppOwnerApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppOwnerApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppOwnerApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppOwnerApproval$Outbound, z.ZodTypeDef, AppOwnerApproval>;
    /** @deprecated use `AppOwnerApproval$Outbound` instead. */
    type Outbound = AppOwnerApproval$Outbound;
}
export declare function appOwnerApprovalToJSON(appOwnerApproval: AppOwnerApproval): string;
export declare function appOwnerApprovalFromJSON(jsonString: string): SafeParseResult<AppOwnerApproval, SDKValidationError>;
