import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ResponseProvisionStepComplete, ResponseProvisionStepComplete$Outbound } from "./responseprovisionstepcomplete.js";
import { ResponseProvisionStepErrored, ResponseProvisionStepErrored$Outbound } from "./responseprovisionsteperrored.js";
/**
 * The ResponseProvisionStep message.
 *
 * @remarks
 *
 * This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
 *   - complete
 *   - errored
 */
export type ResponseProvisionStep = {
    complete?: ResponseProvisionStepComplete | null | undefined;
    errored?: ResponseProvisionStepErrored | null | undefined;
    /**
     * version contains the constant value "v1". Future versions of the Webhook Response
     *
     * @remarks
     *  will use a different string.
     */
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponseProvisionStep$inboundSchema: z.ZodType<ResponseProvisionStep, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseProvisionStep$Outbound = {
    complete?: ResponseProvisionStepComplete$Outbound | null | undefined;
    errored?: ResponseProvisionStepErrored$Outbound | null | undefined;
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponseProvisionStep$outboundSchema: z.ZodType<ResponseProvisionStep$Outbound, z.ZodTypeDef, ResponseProvisionStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponseProvisionStep$ {
    /** @deprecated use `ResponseProvisionStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponseProvisionStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponseProvisionStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponseProvisionStep$Outbound, z.ZodTypeDef, ResponseProvisionStep>;
    /** @deprecated use `ResponseProvisionStep$Outbound` instead. */
    type Outbound = ResponseProvisionStep$Outbound;
}
export declare function responseProvisionStepToJSON(responseProvisionStep: ResponseProvisionStep): string;
export declare function responseProvisionStepFromJSON(jsonString: string): SafeParseResult<ResponseProvisionStep, SDKValidationError>;
