import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TestStepUpProviderRequest message.
 */
export type TestStepUpProviderRequest = {};
/** @internal */
export declare const TestStepUpProviderRequest$inboundSchema: z.ZodType<TestStepUpProviderRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TestStepUpProviderRequest$Outbound = {};
/** @internal */
export declare const TestStepUpProviderRequest$outboundSchema: z.ZodType<TestStepUpProviderRequest$Outbound, z.ZodTypeDef, TestStepUpProviderRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TestStepUpProviderRequest$ {
    /** @deprecated use `TestStepUpProviderRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TestStepUpProviderRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TestStepUpProviderRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TestStepUpProviderRequest$Outbound, z.ZodTypeDef, TestStepUpProviderRequest>;
    /** @deprecated use `TestStepUpProviderRequest$Outbound` instead. */
    type Outbound = TestStepUpProviderRequest$Outbound;
}
export declare function testStepUpProviderRequestToJSON(testStepUpProviderRequest: TestStepUpProviderRequest): string;
export declare function testStepUpProviderRequestFromJSON(jsonString: string): SafeParseResult<TestStepUpProviderRequest, SDKValidationError>;
