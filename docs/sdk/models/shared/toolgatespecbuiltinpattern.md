# ToolGateSpecBuiltInPattern

Built-in pattern selector; when set, cel_expression is resolved from the
 registry at instantiation.

## Example Usage

```typescript
import { ToolGateSpecBuiltInPattern } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ToolGateSpecBuiltInPattern =
  "TOOL_GATE_BUILT_IN_PATTERN_THIRD_PARTY_CONNECTOR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TOOL_GATE_BUILT_IN_PATTERN_UNSPECIFIED" | "TOOL_GATE_BUILT_IN_PATTERN_DESTRUCTIVE_ACTION" | "TOOL_GATE_BUILT_IN_PATTERN_EXTERNAL_SEND" | "TOOL_GATE_BUILT_IN_PATTERN_THIRD_PARTY_CONNECTOR" | "TOOL_GATE_BUILT_IN_PATTERN_FINANCE_ACTION" | "TOOL_GATE_BUILT_IN_PATTERN_INFRA_MUTATION" | "TOOL_GATE_BUILT_IN_PATTERN_DB_WRITE" | Unrecognized<string>
```