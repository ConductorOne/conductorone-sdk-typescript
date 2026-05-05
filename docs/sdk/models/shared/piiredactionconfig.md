# PIIRedactionConfig

PIIRedactionConfig configures post-tool-use redaction of sensitive fields.

## Example Usage

```typescript
import { PIIRedactionConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PIIRedactionConfig = {};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `redactFields`          | *string*[]              | :heavy_minus_sign:      | The redactFields field. |
| `replacement`           | *string*                | :heavy_minus_sign:      | The replacement field.  |