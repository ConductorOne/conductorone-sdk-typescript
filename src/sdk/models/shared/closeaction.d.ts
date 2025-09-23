import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The CloseAction message.
 *
 * @remarks
 *
 * This message contains a oneof named user_identifier. Only a single field of the following list may be set at a time:
 *   - userIdCel
 *   - userRef
 */
export type CloseAction = {
    /**
     * If true, the step will use the subject user of the automation as the subject.
     */
    useSubjectUser?: boolean | null | undefined;
    /**
     * The userIdCel field.
     *
     * @remarks
     * This field is part of the `user_identifier` oneof.
     * See the documentation for `c1.api.automations.v1.CloseAction` for more details.
     */
    userIdCel?: string | null | undefined;
    userRef?: UserRef | null | undefined;
};
/** @internal */
export declare const CloseAction$inboundSchema: z.ZodType<CloseAction, z.ZodTypeDef, unknown>;
/** @internal */
export type CloseAction$Outbound = {
    useSubjectUser?: boolean | null | undefined;
    userIdCel?: string | null | undefined;
    userRef?: UserRef$Outbound | null | undefined;
};
/** @internal */
export declare const CloseAction$outboundSchema: z.ZodType<CloseAction$Outbound, z.ZodTypeDef, CloseAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CloseAction$ {
    /** @deprecated use `CloseAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CloseAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `CloseAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CloseAction$Outbound, z.ZodTypeDef, CloseAction>;
    /** @deprecated use `CloseAction$Outbound` instead. */
    type Outbound = CloseAction$Outbound;
}
export declare function closeActionToJSON(closeAction: CloseAction): string;
export declare function closeActionFromJSON(jsonString: string): SafeParseResult<CloseAction, SDKValidationError>;
