import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TestAccountProvisionPolicyResponse message.
 */
export type TestAccountProvisionPolicyResponse = {
    /**
     * The type field.
     */
    type?: string | null | undefined;
    /**
     * The value field.
     */
    value?: string | null | undefined;
};
/** @internal */
export declare const TestAccountProvisionPolicyResponse$inboundSchema: z.ZodType<TestAccountProvisionPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TestAccountProvisionPolicyResponse$Outbound = {
    type?: string | null | undefined;
    value?: string | null | undefined;
};
/** @internal */
export declare const TestAccountProvisionPolicyResponse$outboundSchema: z.ZodType<TestAccountProvisionPolicyResponse$Outbound, z.ZodTypeDef, TestAccountProvisionPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TestAccountProvisionPolicyResponse$ {
    /** @deprecated use `TestAccountProvisionPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TestAccountProvisionPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TestAccountProvisionPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TestAccountProvisionPolicyResponse$Outbound, z.ZodTypeDef, TestAccountProvisionPolicyResponse>;
    /** @deprecated use `TestAccountProvisionPolicyResponse$Outbound` instead. */
    type Outbound = TestAccountProvisionPolicyResponse$Outbound;
}
export declare function testAccountProvisionPolicyResponseToJSON(testAccountProvisionPolicyResponse: TestAccountProvisionPolicyResponse): string;
export declare function testAccountProvisionPolicyResponseFromJSON(jsonString: string): SafeParseResult<TestAccountProvisionPolicyResponse, SDKValidationError>;
