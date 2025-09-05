import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpTransaction, StepUpTransaction$Outbound } from "./stepuptransaction.js";
/**
 * Response message containing the requested step-up transaction
 */
export type GetStepUpTransactionResponse = {
    transaction?: StepUpTransaction | null | undefined;
};
/** @internal */
export declare const GetStepUpTransactionResponse$inboundSchema: z.ZodType<GetStepUpTransactionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetStepUpTransactionResponse$Outbound = {
    transaction?: StepUpTransaction$Outbound | null | undefined;
};
/** @internal */
export declare const GetStepUpTransactionResponse$outboundSchema: z.ZodType<GetStepUpTransactionResponse$Outbound, z.ZodTypeDef, GetStepUpTransactionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetStepUpTransactionResponse$ {
    /** @deprecated use `GetStepUpTransactionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetStepUpTransactionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetStepUpTransactionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetStepUpTransactionResponse$Outbound, z.ZodTypeDef, GetStepUpTransactionResponse>;
    /** @deprecated use `GetStepUpTransactionResponse$Outbound` instead. */
    type Outbound = GetStepUpTransactionResponse$Outbound;
}
export declare function getStepUpTransactionResponseToJSON(getStepUpTransactionResponse: GetStepUpTransactionResponse): string;
export declare function getStepUpTransactionResponseFromJSON(jsonString: string): SafeParseResult<GetStepUpTransactionResponse, SDKValidationError>;
