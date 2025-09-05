import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserBinding, AppEntitlementUserBinding$Outbound } from "./appentitlementuserbinding.js";
/**
 * The RemoveGrantDurationResponse message.
 */
export type RemoveGrantDurationResponse = {
    binding?: AppEntitlementUserBinding | null | undefined;
};
/** @internal */
export declare const RemoveGrantDurationResponse$inboundSchema: z.ZodType<RemoveGrantDurationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveGrantDurationResponse$Outbound = {
    binding?: AppEntitlementUserBinding$Outbound | null | undefined;
};
/** @internal */
export declare const RemoveGrantDurationResponse$outboundSchema: z.ZodType<RemoveGrantDurationResponse$Outbound, z.ZodTypeDef, RemoveGrantDurationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveGrantDurationResponse$ {
    /** @deprecated use `RemoveGrantDurationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveGrantDurationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveGrantDurationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveGrantDurationResponse$Outbound, z.ZodTypeDef, RemoveGrantDurationResponse>;
    /** @deprecated use `RemoveGrantDurationResponse$Outbound` instead. */
    type Outbound = RemoveGrantDurationResponse$Outbound;
}
export declare function removeGrantDurationResponseToJSON(removeGrantDurationResponse: RemoveGrantDurationResponse): string;
export declare function removeGrantDurationResponseFromJSON(jsonString: string): SafeParseResult<RemoveGrantDurationResponse, SDKValidationError>;
