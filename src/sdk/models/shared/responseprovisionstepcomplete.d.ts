import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResponseProvisionStepComplete message.
 */
export type ResponseProvisionStepComplete = {
    /**
     * optional comment
     */
    comment?: string | null | undefined;
};
/** @internal */
export declare const ResponseProvisionStepComplete$inboundSchema: z.ZodType<ResponseProvisionStepComplete, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseProvisionStepComplete$Outbound = {
    comment?: string | null | undefined;
};
/** @internal */
export declare const ResponseProvisionStepComplete$outboundSchema: z.ZodType<ResponseProvisionStepComplete$Outbound, z.ZodTypeDef, ResponseProvisionStepComplete>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponseProvisionStepComplete$ {
    /** @deprecated use `ResponseProvisionStepComplete$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponseProvisionStepComplete, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponseProvisionStepComplete$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponseProvisionStepComplete$Outbound, z.ZodTypeDef, ResponseProvisionStepComplete>;
    /** @deprecated use `ResponseProvisionStepComplete$Outbound` instead. */
    type Outbound = ResponseProvisionStepComplete$Outbound;
}
export declare function responseProvisionStepCompleteToJSON(responseProvisionStepComplete: ResponseProvisionStepComplete): string;
export declare function responseProvisionStepCompleteFromJSON(jsonString: string): SafeParseResult<ResponseProvisionStepComplete, SDKValidationError>;
