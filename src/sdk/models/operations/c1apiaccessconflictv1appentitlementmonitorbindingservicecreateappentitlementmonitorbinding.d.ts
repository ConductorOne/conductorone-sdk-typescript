import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse = {
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
export declare const C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$inboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppEntitlementMonitorBinding?: shared.AppEntitlementMonitorBinding$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$outboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$ {
    /** @deprecated use `C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse>;
    /** @deprecated use `C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse$Outbound;
}
export declare function c1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponseToJSON(c1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse: C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse): string;
export declare function c1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse, SDKValidationError>;
