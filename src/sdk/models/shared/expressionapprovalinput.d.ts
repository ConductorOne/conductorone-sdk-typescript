import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ExpressionApproval message.
 */
export type ExpressionApprovalInput = {
    /**
     * Configuration to allow self approval of if the user is specified and also the target of the ticket.
     */
    allowSelfApproval?: boolean | null | undefined;
    /**
     * Array of dynamic expressions to determine the approvers.  The first expression to return a non-empty list of users will be used.
     */
    expressions?: Array<string> | null | undefined;
    /**
     * Configuration to allow a fallback if the expression does not return a valid list of users.
     */
    fallback?: boolean | null | undefined;
    /**
     * Configuration to specific which users to fallback to if and the expression does not return a valid list of users.
     */
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ExpressionApprovalInput$inboundSchema: z.ZodType<ExpressionApprovalInput, z.ZodTypeDef, unknown>;
/** @internal */
export type ExpressionApprovalInput$Outbound = {
    allowSelfApproval?: boolean | null | undefined;
    expressions?: Array<string> | null | undefined;
    fallback?: boolean | null | undefined;
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ExpressionApprovalInput$outboundSchema: z.ZodType<ExpressionApprovalInput$Outbound, z.ZodTypeDef, ExpressionApprovalInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExpressionApprovalInput$ {
    /** @deprecated use `ExpressionApprovalInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExpressionApprovalInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExpressionApprovalInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExpressionApprovalInput$Outbound, z.ZodTypeDef, ExpressionApprovalInput>;
    /** @deprecated use `ExpressionApprovalInput$Outbound` instead. */
    type Outbound = ExpressionApprovalInput$Outbound;
}
export declare function expressionApprovalInputToJSON(expressionApprovalInput: ExpressionApprovalInput): string;
export declare function expressionApprovalInputFromJSON(jsonString: string): SafeParseResult<ExpressionApprovalInput, SDKValidationError>;
