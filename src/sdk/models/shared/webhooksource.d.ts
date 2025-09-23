import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { WebhookSourceApprovalStep, WebhookSourceApprovalStep$Outbound } from "./webhooksourceapprovalstep.js";
import { WebhookSourcePolicyPostAction, WebhookSourcePolicyPostAction$Outbound } from "./webhooksourcepolicypostaction.js";
import { WebhookSourceProvisionStep, WebhookSourceProvisionStep$Outbound } from "./webhooksourceprovisionstep.js";
import { WebhookSourceTest, WebhookSourceTest$Outbound } from "./webhooksourcetest.js";
import { WebhookSourceWorkflowStep, WebhookSourceWorkflowStep$Outbound } from "./webhooksourceworkflowstep.js";
/**
 * The WebhookSource message.
 *
 * @remarks
 *
 * This message contains a oneof named source. Only a single field of the following list may be set at a time:
 *   - test
 *   - policyPostAction
 *   - approvalStep
 *   - provisionStep
 *   - workflowStep
 */
export type WebhookSource = {
    approvalStep?: WebhookSourceApprovalStep | null | undefined;
    policyPostAction?: WebhookSourcePolicyPostAction | null | undefined;
    provisionStep?: WebhookSourceProvisionStep | null | undefined;
    test?: WebhookSourceTest | null | undefined;
    workflowStep?: WebhookSourceWorkflowStep | null | undefined;
};
/** @internal */
export declare const WebhookSource$inboundSchema: z.ZodType<WebhookSource, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookSource$Outbound = {
    approvalStep?: WebhookSourceApprovalStep$Outbound | null | undefined;
    policyPostAction?: WebhookSourcePolicyPostAction$Outbound | null | undefined;
    provisionStep?: WebhookSourceProvisionStep$Outbound | null | undefined;
    test?: WebhookSourceTest$Outbound | null | undefined;
    workflowStep?: WebhookSourceWorkflowStep$Outbound | null | undefined;
};
/** @internal */
export declare const WebhookSource$outboundSchema: z.ZodType<WebhookSource$Outbound, z.ZodTypeDef, WebhookSource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookSource$ {
    /** @deprecated use `WebhookSource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookSource, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookSource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookSource$Outbound, z.ZodTypeDef, WebhookSource>;
    /** @deprecated use `WebhookSource$Outbound` instead. */
    type Outbound = WebhookSource$Outbound;
}
export declare function webhookSourceToJSON(webhookSource: WebhookSource): string;
export declare function webhookSourceFromJSON(jsonString: string): SafeParseResult<WebhookSource, SDKValidationError>;
