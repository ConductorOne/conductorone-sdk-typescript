# McpGatewayToolCallRiskEvidence

McpGatewayToolCallRiskEvidence carries the rule that fired and the
 subject/summary the UI renders. No detector writes this yet -- see
 FINDING_TYPE_MCP_GATEWAY_TOOL_CALL_RISK.

## Example Usage

```typescript
import { McpGatewayToolCallRiskEvidence } from "conductorone-sdk-typescript/sdk/models/shared";

let value: McpGatewayToolCallRiskEvidence = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `evidence`                                                                  | [shared.KeyValue](../../../sdk/models/shared/keyvalue.md)[]                 | :heavy_minus_sign:                                                          | The evidence field.                                                         |
| `kind`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | Human-readable rule category, e.g. "Prompt injection in tool output".       |
| `ruleId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Detection rule id, e.g. "MCP-201".                                          |
| `subject`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | Human-readable subject, e.g. "agent-support-triage -> okta/reset_password". |
| `summary`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | The summary field.                                                          |