import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResponseProvisionStepErrored message.
 */
export type ResponseProvisionStepErrored = {
    /**
     * optional comment
     */
    comment?: string | null | undefined;
};
/** @internal */
export declare const ResponseProvisionStepErrored$inboundSchema: z.ZodType<ResponseProvisionStepErrored, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseProvisionStepErrored$Outbound = {
    comment?: string | null | undefined;
};
/** @internal */
export declare const ResponseProvisionStepErrored$outboundSchema: z.ZodType<ResponseProvisionStepErrored$Outbound, z.ZodTypeDef, ResponseProvisionStepErrored>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponseProvisionStepErrored$ {
    /** @deprecated use `ResponseProvisionStepErrored$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponseProvisionStepErrored, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponseProvisionStepErrored$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponseProvisionStepErrored$Outbound, z.ZodTypeDef, ResponseProvisionStepErrored>;
    /** @deprecated use `ResponseProvisionStepErrored$Outbound` instead. */
    type Outbound = ResponseProvisionStepErrored$Outbound;
}
export declare function responseProvisionStepErroredToJSON(responseProvisionStepErrored: ResponseProvisionStepErrored): string;
export declare function responseProvisionStepErroredFromJSON(jsonString: string): SafeParseResult<ResponseProvisionStepErrored, SDKValidationError>;
