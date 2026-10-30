# ToolGateFilterBuiltInPattern

Built-in pattern selector: a named canned CEL filter maintained by
 ConductorOne. When set, cel_expression must be empty and is resolved from
 the registry at create time; the kind is retained for provenance.

## Example Usage

```typescript
import { ToolGateFilterBuiltInPattern } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ToolGateFilterBuiltInPattern =
  "TOOL_GATE_BUILT_IN_PATTERN_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TOOL_GATE_BUILT_IN_PATTERN_UNSPECIFIED" | "TOOL_GATE_BUILT_IN_PATTERN_DESTRUCTIVE_ACTION" | "TOOL_GATE_BUILT_IN_PATTERN_EXTERNAL_SEND" | "TOOL_GATE_BUILT_IN_PATTERN_THIRD_PARTY_CONNECTOR" | "TOOL_GATE_BUILT_IN_PATTERN_FINANCE_ACTION" | "TOOL_GATE_BUILT_IN_PATTERN_INFRA_MUTATION" | "TOOL_GATE_BUILT_IN_PATTERN_DB_WRITE" | Unrecognized<string>
```