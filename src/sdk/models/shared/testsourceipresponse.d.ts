import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Status, Status$Outbound } from "./status.js";
/**
 * The TestSourceIPResponse message.
 */
export type TestSourceIPResponse = {
    /**
     * The allowed field.
     */
    allowed?: boolean | null | undefined;
    /**
     * The checkedIp field.
     */
    checkedIp?: string | null | undefined;
    details?: Status | null | undefined;
};
/** @internal */
export declare const TestSourceIPResponse$inboundSchema: z.ZodType<TestSourceIPResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TestSourceIPResponse$Outbound = {
    allowed?: boolean | null | undefined;
    checkedIp?: string | null | undefined;
    details?: Status$Outbound | null | undefined;
};
/** @internal */
export declare const TestSourceIPResponse$outboundSchema: z.ZodType<TestSourceIPResponse$Outbound, z.ZodTypeDef, TestSourceIPResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TestSourceIPResponse$ {
    /** @deprecated use `TestSourceIPResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TestSourceIPResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TestSourceIPResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TestSourceIPResponse$Outbound, z.ZodTypeDef, TestSourceIPResponse>;
    /** @deprecated use `TestSourceIPResponse$Outbound` instead. */
    type Outbound = TestSourceIPResponse$Outbound;
}
export declare function testSourceIPResponseToJSON(testSourceIPResponse: TestSourceIPResponse): string;
export declare function testSourceIPResponseFromJSON(jsonString: string): SafeParseResult<TestSourceIPResponse, SDKValidationError>;
