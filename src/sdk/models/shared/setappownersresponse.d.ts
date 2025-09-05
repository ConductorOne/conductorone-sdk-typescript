import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The empty response message for setting the app owners.
 */
export type SetAppOwnersResponse = {};
/** @internal */
export declare const SetAppOwnersResponse$inboundSchema: z.ZodType<SetAppOwnersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SetAppOwnersResponse$Outbound = {};
/** @internal */
export declare const SetAppOwnersResponse$outboundSchema: z.ZodType<SetAppOwnersResponse$Outbound, z.ZodTypeDef, SetAppOwnersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SetAppOwnersResponse$ {
    /** @deprecated use `SetAppOwnersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SetAppOwnersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SetAppOwnersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SetAppOwnersResponse$Outbound, z.ZodTypeDef, SetAppOwnersResponse>;
    /** @deprecated use `SetAppOwnersResponse$Outbound` instead. */
    type Outbound = SetAppOwnersResponse$Outbound;
}
export declare function setAppOwnersResponseToJSON(setAppOwnersResponse: SetAppOwnersResponse): string;
export declare function setAppOwnersResponseFromJSON(jsonString: string): SafeParseResult<SetAppOwnersResponse, SDKValidationError>;
