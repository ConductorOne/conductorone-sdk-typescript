# AccountLifecycleAction

The AccountLifecycleAction message.

This message contains a oneof named account_identifier. Only a single field of the following list may be set at a time:
  - accountRef
  - accountInContext


## Example Usage

```typescript
import { AccountLifecycleAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccountLifecycleAction = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `accountInContext`                                                        | [shared.AccountInContext](../../../sdk/models/shared/accountincontext.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `accountRef`                                                              | [shared.AccountRef](../../../sdk/models/shared/accountref.md)             | :heavy_minus_sign:                                                        | N/A                                                                       |
| `actionName`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | The actionName field.                                                     |
| `connectorRef`                                                            | [shared.ConnectorRef](../../../sdk/models/shared/connectorref.md)         | :heavy_minus_sign:                                                        | N/A                                                                       |