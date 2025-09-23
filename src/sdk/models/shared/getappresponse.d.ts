import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { App, App$Outbound } from "./app.js";
/**
 * The GetAppResponse message contains the details of the requested app in the app field.
 */
export type GetAppResponse = {
    app?: App | null | undefined;
};
/** @internal */
export declare const GetAppResponse$inboundSchema: z.ZodType<GetAppResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAppResponse$Outbound = {
    app?: App$Outbound | null | undefined;
};
/** @internal */
export declare const GetAppResponse$outboundSchema: z.ZodType<GetAppResponse$Outbound, z.ZodTypeDef, GetAppResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAppResponse$ {
    /** @deprecated use `GetAppResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAppResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAppResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAppResponse$Outbound, z.ZodTypeDef, GetAppResponse>;
    /** @deprecated use `GetAppResponse$Outbound` instead. */
    type Outbound = GetAppResponse$Outbound;
}
export declare function getAppResponseToJSON(getAppResponse: GetAppResponse): string;
export declare function getAppResponseFromJSON(jsonString: string): SafeParseResult<GetAppResponse, SDKValidationError>;
