# DefaultClassification

Default tool classification from MCP config (system-managed during discovery).

## Example Usage

```typescript
import { DefaultClassification } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DefaultClassification = "TOOL_CLASSIFICATION_READ";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TOOL_CLASSIFICATION_UNSPECIFIED" | "TOOL_CLASSIFICATION_READ" | "TOOL_CLASSIFICATION_WRITE" | "TOOL_CLASSIFICATION_DESTRUCTIVE" | "TOOL_CLASSIFICATION_SENSITIVE" | "TOOL_CLASSIFICATION_DANGEROUS" | Unrecognized<string>
```