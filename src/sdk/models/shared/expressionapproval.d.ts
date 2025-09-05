import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ExpressionApproval message.
 */
export type ExpressionApproval = {
    /**
     * Configuration to allow self approval of if the user is specified and also the target of the ticket.
     */
    allowSelfApproval?: boolean | null | undefined;
    /**
     * The assignedUserIds field.
     */
    assignedUserIds?: Array<string> | null | undefined;
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
export declare const ExpressionApproval$inboundSchema: z.ZodType<ExpressionApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type ExpressionApproval$Outbound = {
    allowSelfApproval?: boolean | null | undefined;
    assignedUserIds?: Array<string> | null | undefined;
    expressions?: Array<string> | null | undefined;
    fallback?: boolean | null | undefined;
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ExpressionApproval$outboundSchema: z.ZodType<ExpressionApproval$Outbound, z.ZodTypeDef, ExpressionApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExpressionApproval$ {
    /** @deprecated use `ExpressionApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExpressionApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExpressionApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExpressionApproval$Outbound, z.ZodTypeDef, ExpressionApproval>;
    /** @deprecated use `ExpressionApproval$Outbound` instead. */
    type Outbound = ExpressionApproval$Outbound;
}
export declare function expressionApprovalToJSON(expressionApproval: ExpressionApproval): string;
export declare function expressionApprovalFromJSON(jsonString: string): SafeParseResult<ExpressionApproval, SDKValidationError>;
