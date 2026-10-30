# DefaultToolClassification

Classification assigned to newly discovered tools that do not declare their
 own classification (for example, read, write, or destructive).

## Example Usage

```typescript
import { DefaultToolClassification } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DefaultToolClassification = "TOOL_CLASSIFICATION_DESTRUCTIVE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TOOL_CLASSIFICATION_UNSPECIFIED" | "TOOL_CLASSIFICATION_READ" | "TOOL_CLASSIFICATION_WRITE" | "TOOL_CLASSIFICATION_DESTRUCTIVE" | "TOOL_CLASSIFICATION_SENSITIVE" | "TOOL_CLASSIFICATION_DANGEROUS" | Unrecognized<string>
```