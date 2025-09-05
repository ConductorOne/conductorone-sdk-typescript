import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TestAccountProvisionPolicyRequest message.
 */
export type TestAccountProvisionPolicyRequest = {
    /**
     * The cel field.
     */
    cel?: string | null | undefined;
};
/** @internal */
export declare const TestAccountProvisionPolicyRequest$inboundSchema: z.ZodType<TestAccountProvisionPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TestAccountProvisionPolicyRequest$Outbound = {
    cel?: string | null | undefined;
};
/** @internal */
export declare const TestAccountProvisionPolicyRequest$outboundSchema: z.ZodType<TestAccountProvisionPolicyRequest$Outbound, z.ZodTypeDef, TestAccountProvisionPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TestAccountProvisionPolicyRequest$ {
    /** @deprecated use `TestAccountProvisionPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TestAccountProvisionPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TestAccountProvisionPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TestAccountProvisionPolicyRequest$Outbound, z.ZodTypeDef, TestAccountProvisionPolicyRequest>;
    /** @deprecated use `TestAccountProvisionPolicyRequest$Outbound` instead. */
    type Outbound = TestAccountProvisionPolicyRequest$Outbound;
}
export declare function testAccountProvisionPolicyRequestToJSON(testAccountProvisionPolicyRequest: TestAccountProvisionPolicyRequest): string;
export declare function testAccountProvisionPolicyRequestFromJSON(jsonString: string): SafeParseResult<TestAccountProvisionPolicyRequest, SDKValidationError>;
