import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful response
     */
    appEntitlementMonitorBinding?: shared.AppEntitlementMonitorBinding | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$inboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppEntitlementMonitorBinding?: shared.AppEntitlementMonitorBinding$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$outboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$ {
    /** @deprecated use `C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse>;
    /** @deprecated use `C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse$Outbound;
}
export declare function c1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponseToJSON(c1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse: C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse): string;
export declare function c1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceGetAppEntitlementMonitorBindingResponse, SDKValidationError>;
