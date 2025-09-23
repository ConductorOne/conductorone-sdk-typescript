import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AWSExternalID, AWSExternalID$Outbound } from "./awsexternalid.js";
/**
 * The GetAWSExternalIDResponse message.
 */
export type GetAWSExternalIDResponse = {
    awsExternalId?: AWSExternalID | null | undefined;
};
/** @internal */
export declare const GetAWSExternalIDResponse$inboundSchema: z.ZodType<GetAWSExternalIDResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAWSExternalIDResponse$Outbound = {
    awsExternalId?: AWSExternalID$Outbound | null | undefined;
};
/** @internal */
export declare const GetAWSExternalIDResponse$outboundSchema: z.ZodType<GetAWSExternalIDResponse$Outbound, z.ZodTypeDef, GetAWSExternalIDResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAWSExternalIDResponse$ {
    /** @deprecated use `GetAWSExternalIDResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAWSExternalIDResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAWSExternalIDResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAWSExternalIDResponse$Outbound, z.ZodTypeDef, GetAWSExternalIDResponse>;
    /** @deprecated use `GetAWSExternalIDResponse$Outbound` instead. */
    type Outbound = GetAWSExternalIDResponse$Outbound;
}
export declare function getAWSExternalIDResponseToJSON(getAWSExternalIDResponse: GetAWSExternalIDResponse): string;
export declare function getAWSExternalIDResponseFromJSON(jsonString: string): SafeParseResult<GetAWSExternalIDResponse, SDKValidationError>;
