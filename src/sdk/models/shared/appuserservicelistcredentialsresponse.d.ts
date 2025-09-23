import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUserCredential, AppUserCredential$Outbound } from "./appusercredential.js";
/**
 * The AppUserServiceListCredentialsResponse message.
 */
export type AppUserServiceListCredentialsResponse = {
    /**
     * The list field.
     */
    list?: Array<AppUserCredential> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppUserServiceListCredentialsResponse$inboundSchema: z.ZodType<AppUserServiceListCredentialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserServiceListCredentialsResponse$Outbound = {
    list?: Array<AppUserCredential$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppUserServiceListCredentialsResponse$outboundSchema: z.ZodType<AppUserServiceListCredentialsResponse$Outbound, z.ZodTypeDef, AppUserServiceListCredentialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserServiceListCredentialsResponse$ {
    /** @deprecated use `AppUserServiceListCredentialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserServiceListCredentialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserServiceListCredentialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserServiceListCredentialsResponse$Outbound, z.ZodTypeDef, AppUserServiceListCredentialsResponse>;
    /** @deprecated use `AppUserServiceListCredentialsResponse$Outbound` instead. */
    type Outbound = AppUserServiceListCredentialsResponse$Outbound;
}
export declare function appUserServiceListCredentialsResponseToJSON(appUserServiceListCredentialsResponse: AppUserServiceListCredentialsResponse): string;
export declare function appUserServiceListCredentialsResponseFromJSON(jsonString: string): SafeParseResult<AppUserServiceListCredentialsResponse, SDKValidationError>;
