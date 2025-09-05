import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TestSourceIPRequest message.
 */
export type TestSourceIPRequest = {
    /**
     * The allowCidr field.
     */
    allowCidr?: Array<string> | null | undefined;
    /**
     * if unset, uses the source IP of the request
     */
    sourceIp?: string | null | undefined;
};
/** @internal */
export declare const TestSourceIPRequest$inboundSchema: z.ZodType<TestSourceIPRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TestSourceIPRequest$Outbound = {
    allowCidr?: Array<string> | null | undefined;
    sourceIp?: string | null | undefined;
};
/** @internal */
export declare const TestSourceIPRequest$outboundSchema: z.ZodType<TestSourceIPRequest$Outbound, z.ZodTypeDef, TestSourceIPRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TestSourceIPRequest$ {
    /** @deprecated use `TestSourceIPRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TestSourceIPRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TestSourceIPRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TestSourceIPRequest$Outbound, z.ZodTypeDef, TestSourceIPRequest>;
    /** @deprecated use `TestSourceIPRequest$Outbound` instead. */
    type Outbound = TestSourceIPRequest$Outbound;
}
export declare function testSourceIPRequestToJSON(testSourceIPRequest: TestSourceIPRequest): string;
export declare function testSourceIPRequestFromJSON(jsonString: string): SafeParseResult<TestSourceIPRequest, SDKValidationError>;
