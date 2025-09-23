import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AWSExternalID message.
 */
export type AWSExternalID = {
    /**
     * The externalId field.
     */
    externalId?: string | null | undefined;
};
/** @internal */
export declare const AWSExternalID$inboundSchema: z.ZodType<AWSExternalID, z.ZodTypeDef, unknown>;
/** @internal */
export type AWSExternalID$Outbound = {
    externalId?: string | null | undefined;
};
/** @internal */
export declare const AWSExternalID$outboundSchema: z.ZodType<AWSExternalID$Outbound, z.ZodTypeDef, AWSExternalID>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AWSExternalID$ {
    /** @deprecated use `AWSExternalID$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AWSExternalID, z.ZodTypeDef, unknown>;
    /** @deprecated use `AWSExternalID$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AWSExternalID$Outbound, z.ZodTypeDef, AWSExternalID>;
    /** @deprecated use `AWSExternalID$Outbound` instead. */
    type Outbound = AWSExternalID$Outbound;
}
export declare function awsExternalIDToJSON(awsExternalID: AWSExternalID): string;
export declare function awsExternalIDFromJSON(jsonString: string): SafeParseResult<AWSExternalID, SDKValidationError>;
