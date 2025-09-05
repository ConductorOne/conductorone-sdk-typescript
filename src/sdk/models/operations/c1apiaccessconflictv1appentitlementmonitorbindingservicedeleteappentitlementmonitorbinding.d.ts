import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse = {
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
    deleteAppEntitlementMonitorBindingResponse?: shared.DeleteAppEntitlementMonitorBindingResponse | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$inboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteAppEntitlementMonitorBindingResponse?: shared.DeleteAppEntitlementMonitorBindingResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$outboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$ {
    /** @deprecated use `C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$Outbound, z.ZodTypeDef, C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse>;
    /** @deprecated use `C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$Outbound` instead. */
    type Outbound = C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse$Outbound;
}
export declare function c1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponseToJSON(c1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse: C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse): string;
export declare function c1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceDeleteAppEntitlementMonitorBindingResponse, SDKValidationError>;
