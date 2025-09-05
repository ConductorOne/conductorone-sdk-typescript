import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Filter by transaction state
 */
export declare const SearchStepUpTransactionsRequestState: {
    readonly StepUpTransactionStateUnspecified: "STEP_UP_TRANSACTION_STATE_UNSPECIFIED";
    readonly StepUpTransactionStatePending: "STEP_UP_TRANSACTION_STATE_PENDING";
    readonly StepUpTransactionStateVerified: "STEP_UP_TRANSACTION_STATE_VERIFIED";
    readonly StepUpTransactionStateError: "STEP_UP_TRANSACTION_STATE_ERROR";
};
/**
 * Filter by transaction state
 */
export type SearchStepUpTransactionsRequestState = OpenEnum<typeof SearchStepUpTransactionsRequestState>;
/**
 * The targetType field.
 */
export declare const TargetType: {
    readonly TargetTypeUnspecified: "TARGET_TYPE_UNSPECIFIED";
    readonly TargetTypeTicket: "TARGET_TYPE_TICKET";
    readonly TargetTypeTest: "TARGET_TYPE_TEST";
};
/**
 * The targetType field.
 */
export type TargetType = OpenEnum<typeof TargetType>;
/**
 * Request message for searching step-up transactions
 */
export type SearchStepUpTransactionsRequest = {
    createdAfter?: Date | null | undefined;
    createdBefore?: Date | null | undefined;
    /**
     * Maximum number of results to return
     */
    pageSize?: number | null | undefined;
    /**
     * Token for pagination
     */
    pageToken?: string | null | undefined;
    /**
     * Filter by provider ID
     */
    providerId?: string | null | undefined;
    /**
     * Filter by transaction state
     */
    state?: SearchStepUpTransactionsRequestState | null | undefined;
    /**
     * The targetType field.
     */
    targetType?: TargetType | null | undefined;
    /**
     * Filter by task ID (only applicable if target_type is TICKET)
     */
    taskId?: string | null | undefined;
    /**
     * Filter by user ID
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const SearchStepUpTransactionsRequestState$inboundSchema: z.ZodType<SearchStepUpTransactionsRequestState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SearchStepUpTransactionsRequestState$outboundSchema: z.ZodType<SearchStepUpTransactionsRequestState, z.ZodTypeDef, SearchStepUpTransactionsRequestState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchStepUpTransactionsRequestState$ {
    /** @deprecated use `SearchStepUpTransactionsRequestState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchStepUpTransactionsRequestState, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchStepUpTransactionsRequestState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchStepUpTransactionsRequestState, z.ZodTypeDef, SearchStepUpTransactionsRequestState>;
}
/** @internal */
export declare const TargetType$inboundSchema: z.ZodType<TargetType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TargetType$outboundSchema: z.ZodType<TargetType, z.ZodTypeDef, TargetType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TargetType$ {
    /** @deprecated use `TargetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TargetType, z.ZodTypeDef, unknown>;
    /** @deprecated use `TargetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TargetType, z.ZodTypeDef, TargetType>;
}
/** @internal */
export declare const SearchStepUpTransactionsRequest$inboundSchema: z.ZodType<SearchStepUpTransactionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchStepUpTransactionsRequest$Outbound = {
    createdAfter?: string | null | undefined;
    createdBefore?: string | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    providerId?: string | null | undefined;
    state?: string | null | undefined;
    targetType?: string | null | undefined;
    taskId?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const SearchStepUpTransactionsRequest$outboundSchema: z.ZodType<SearchStepUpTransactionsRequest$Outbound, z.ZodTypeDef, SearchStepUpTransactionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchStepUpTransactionsRequest$ {
    /** @deprecated use `SearchStepUpTransactionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchStepUpTransactionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchStepUpTransactionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchStepUpTransactionsRequest$Outbound, z.ZodTypeDef, SearchStepUpTransactionsRequest>;
    /** @deprecated use `SearchStepUpTransactionsRequest$Outbound` instead. */
    type Outbound = SearchStepUpTransactionsRequest$Outbound;
}
export declare function searchStepUpTransactionsRequestToJSON(searchStepUpTransactionsRequest: SearchStepUpTransactionsRequest): string;
export declare function searchStepUpTransactionsRequestFromJSON(jsonString: string): SafeParseResult<SearchStepUpTransactionsRequest, SDKValidationError>;
