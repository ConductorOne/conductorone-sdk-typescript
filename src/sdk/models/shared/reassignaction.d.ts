import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The ReassignAction message.
 *
 * @remarks
 *
 * This message contains a oneof named assignee_user_identifier. Only a single field of the following list may be set at a time:
 *   - assigneeUserIdCel
 *   - assigneeUserRef
 *
 * This message contains a oneof named subject_user_identifier. Only a single field of the following list may be set at a time:
 *   - subjectUserIdCel
 *   - subjectUserRef
 */
export type ReassignAction = {
    /**
     * The assigneeUserIdCel field.
     *
     * @remarks
     * This field is part of the `assignee_user_identifier` oneof.
     * See the documentation for `c1.api.automations.v1.ReassignAction` for more details.
     */
    assigneeUserIdCel?: string | null | undefined;
    assigneeUserRef?: UserRef | null | undefined;
    /**
     * The subjectUserIdCel field.
     *
     * @remarks
     * This field is part of the `subject_user_identifier` oneof.
     * See the documentation for `c1.api.automations.v1.ReassignAction` for more details.
     */
    subjectUserIdCel?: string | null | undefined;
    subjectUserRef?: UserRef | null | undefined;
    /**
     * If true, the step will use the subject user of the automation as the subject.
     */
    useSubjectUser?: boolean | null | undefined;
};
/** @internal */
export declare const ReassignAction$inboundSchema: z.ZodType<ReassignAction, z.ZodTypeDef, unknown>;
/** @internal */
export type ReassignAction$Outbound = {
    assigneeUserIdCel?: string | null | undefined;
    assigneeUserRef?: UserRef$Outbound | null | undefined;
    subjectUserIdCel?: string | null | undefined;
    subjectUserRef?: UserRef$Outbound | null | undefined;
    useSubjectUser?: boolean | null | undefined;
};
/** @internal */
export declare const ReassignAction$outboundSchema: z.ZodType<ReassignAction$Outbound, z.ZodTypeDef, ReassignAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReassignAction$ {
    /** @deprecated use `ReassignAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReassignAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReassignAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReassignAction$Outbound, z.ZodTypeDef, ReassignAction>;
    /** @deprecated use `ReassignAction$Outbound` instead. */
    type Outbound = ReassignAction$Outbound;
}
export declare function reassignActionToJSON(reassignAction: ReassignAction): string;
export declare function reassignActionFromJSON(jsonString: string): SafeParseResult<ReassignAction, SDKValidationError>;
