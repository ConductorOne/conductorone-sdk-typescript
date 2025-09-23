import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The CreateAccessReview message.
 */
export type CreateAccessReview = {
    /**
     * The accessReviewTemplateCel field.
     */
    accessReviewTemplateCel?: string | null | undefined;
    /**
     * The accessReviewTemplateId field.
     */
    accessReviewTemplateId?: string | null | undefined;
    /**
     * Optional campaign name. If not provided, the campaign name will be the access review template name.
     */
    campaignName?: string | null | undefined;
    /**
     * If true, the step will use the subject user of the automation as the subject.
     */
    useSubjectUser?: boolean | null | undefined;
    /**
     * The userIdsCel field.
     */
    userIdsCel?: string | null | undefined;
    /**
     * The userRefs field.
     */
    userRefs?: Array<UserRef> | null | undefined;
};
/** @internal */
export declare const CreateAccessReview$inboundSchema: z.ZodType<CreateAccessReview, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAccessReview$Outbound = {
    accessReviewTemplateCel?: string | null | undefined;
    accessReviewTemplateId?: string | null | undefined;
    campaignName?: string | null | undefined;
    useSubjectUser?: boolean | null | undefined;
    userIdsCel?: string | null | undefined;
    userRefs?: Array<UserRef$Outbound> | null | undefined;
};
/** @internal */
export declare const CreateAccessReview$outboundSchema: z.ZodType<CreateAccessReview$Outbound, z.ZodTypeDef, CreateAccessReview>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAccessReview$ {
    /** @deprecated use `CreateAccessReview$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAccessReview, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAccessReview$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAccessReview$Outbound, z.ZodTypeDef, CreateAccessReview>;
    /** @deprecated use `CreateAccessReview$Outbound` instead. */
    type Outbound = CreateAccessReview$Outbound;
}
export declare function createAccessReviewToJSON(createAccessReview: CreateAccessReview): string;
export declare function createAccessReviewFromJSON(jsonString: string): SafeParseResult<CreateAccessReview, SDKValidationError>;
