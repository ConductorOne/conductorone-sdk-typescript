# MCPToolEnablementRules

MCPToolEnablementRules sets the enablement for each tool classification.
 Tools without a read, write, or destructive classification always require enablement.

## Example Usage

```typescript
import { MCPToolEnablementRules } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPToolEnablementRules = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `destructiveTools`                                                        | [shared.DestructiveTools](../../../sdk/models/shared/destructivetools.md) | :heavy_minus_sign:                                                        | Enablement for tools that delete data or cannot be undone.                |
| `readTools`                                                               | [shared.ReadTools](../../../sdk/models/shared/readtools.md)               | :heavy_minus_sign:                                                        | Enablement for tools that only query data.                                |
| `writeTools`                                                              | [shared.WriteTools](../../../sdk/models/shared/writetools.md)             | :heavy_minus_sign:                                                        | Enablement for tools that create or modify records.                       |