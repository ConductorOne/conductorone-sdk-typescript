import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserBinding, AppEntitlementUserBinding$Outbound } from "./appentitlementuserbinding.js";
/**
 * The UpdateGrantDurationResponse message.
 */
export type UpdateGrantDurationResponse = {
    binding?: AppEntitlementUserBinding | null | undefined;
};
/** @internal */
export declare const UpdateGrantDurationResponse$inboundSchema: z.ZodType<UpdateGrantDurationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateGrantDurationResponse$Outbound = {
    binding?: AppEntitlementUserBinding$Outbound | null | undefined;
};
/** @internal */
export declare const UpdateGrantDurationResponse$outboundSchema: z.ZodType<UpdateGrantDurationResponse$Outbound, z.ZodTypeDef, UpdateGrantDurationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateGrantDurationResponse$ {
    /** @deprecated use `UpdateGrantDurationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateGrantDurationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateGrantDurationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateGrantDurationResponse$Outbound, z.ZodTypeDef, UpdateGrantDurationResponse>;
    /** @deprecated use `UpdateGrantDurationResponse$Outbound` instead. */
    type Outbound = UpdateGrantDurationResponse$Outbound;
}
export declare function updateGrantDurationResponseToJSON(updateGrantDurationResponse: UpdateGrantDurationResponse): string;
export declare function updateGrantDurationResponseFromJSON(jsonString: string): SafeParseResult<UpdateGrantDurationResponse, SDKValidationError>;
