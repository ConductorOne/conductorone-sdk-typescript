import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TestStepUpProviderResponse message.
 */
export type TestStepUpProviderResponse = {
    /**
     * The URL to redirect the user to for testing the Step Up flow
     */
    redirectUrl?: string | null | undefined;
};
/** @internal */
export declare const TestStepUpProviderResponse$inboundSchema: z.ZodType<TestStepUpProviderResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TestStepUpProviderResponse$Outbound = {
    redirectUrl?: string | null | undefined;
};
/** @internal */
export declare const TestStepUpProviderResponse$outboundSchema: z.ZodType<TestStepUpProviderResponse$Outbound, z.ZodTypeDef, TestStepUpProviderResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TestStepUpProviderResponse$ {
    /** @deprecated use `TestStepUpProviderResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TestStepUpProviderResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TestStepUpProviderResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TestStepUpProviderResponse$Outbound, z.ZodTypeDef, TestStepUpProviderResponse>;
    /** @deprecated use `TestStepUpProviderResponse$Outbound` instead. */
    type Outbound = TestStepUpProviderResponse$Outbound;
}
export declare function testStepUpProviderResponseToJSON(testStepUpProviderResponse: TestStepUpProviderResponse): string;
export declare function testStepUpProviderResponseFromJSON(jsonString: string): SafeParseResult<TestStepUpProviderResponse, SDKValidationError>;
