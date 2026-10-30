# ToolOutputSizeGuardConfig

ToolOutputSizeGuardConfig caps post-tool-use output size in bytes.

## Example Usage

```typescript
import { ToolOutputSizeGuardConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ToolOutputSizeGuardConfig = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `maxBytes`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | Maximum tool output size in bytes. Outputs exceeding this are denied. |