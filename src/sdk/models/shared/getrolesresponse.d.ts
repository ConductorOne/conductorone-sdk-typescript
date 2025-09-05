import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Role, Role$Outbound } from "./role.js";
/**
 * The GetRolesResponse message contains the retrieved role.
 */
export type GetRolesResponse = {
    role?: Role | null | undefined;
};
/** @internal */
export declare const GetRolesResponse$inboundSchema: z.ZodType<GetRolesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetRolesResponse$Outbound = {
    role?: Role$Outbound | null | undefined;
};
/** @internal */
export declare const GetRolesResponse$outboundSchema: z.ZodType<GetRolesResponse$Outbound, z.ZodTypeDef, GetRolesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetRolesResponse$ {
    /** @deprecated use `GetRolesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetRolesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetRolesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetRolesResponse$Outbound, z.ZodTypeDef, GetRolesResponse>;
    /** @deprecated use `GetRolesResponse$Outbound` instead. */
    type Outbound = GetRolesResponse$Outbound;
}
export declare function getRolesResponseToJSON(getRolesResponse: GetRolesResponse): string;
export declare function getRolesResponseFromJSON(jsonString: string): SafeParseResult<GetRolesResponse, SDKValidationError>;
