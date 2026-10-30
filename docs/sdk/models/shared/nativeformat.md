# NativeFormat

Accepted native client request format; never inferred from caller headers.

## Example Usage

```typescript
import { NativeFormat } from "conductorone-sdk-typescript/sdk/models/shared";

let value: NativeFormat = "EDGE_INFERENCE_NATIVE_FORMAT_OPENAI_RESPONSES";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EDGE_INFERENCE_NATIVE_FORMAT_UNSPECIFIED" | "EDGE_INFERENCE_NATIVE_FORMAT_OPENAI_RESPONSES" | "EDGE_INFERENCE_NATIVE_FORMAT_OPENAI_CHAT" | "EDGE_INFERENCE_NATIVE_FORMAT_ANTHROPIC_MESSAGES" | Unrecognized<string>
```