# AccountLifecycleAction

The AccountLifecycleAction message.

## Example Usage

```typescript
import { AccountLifecycleAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccountLifecycleAction = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `actionName`                                                      | *string*                                                          | :heavy_minus_sign:                                                | The actionName field.                                             |
| `argsTemplate`                                                    | Record<string, *any*>                                             | :heavy_minus_sign:                                                | N/A                                                               |
| `connectorRef`                                                    | [shared.ConnectorRef](../../../sdk/models/shared/connectorref.md) | :heavy_minus_sign:                                                | The ConnectorRef message.                                         |