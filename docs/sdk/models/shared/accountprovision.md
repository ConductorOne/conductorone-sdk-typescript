# AccountProvision

The AccountProvision message.

This message contains a oneof named storage_type. Only a single field of the following list may be set at a time:
  - saveToVault
  - doNotSave


## Example Usage

```typescript
import { AccountProvision } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccountProvision = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `config`                                                        | Record<string, *any*>                                           | :heavy_minus_sign:                                              | N/A                                                             |
| `connectorId`                                                   | *string*                                                        | :heavy_minus_sign:                                              | The connectorId field.                                          |
| `doNotSave`                                                     | [shared.DoNotSave](../../../sdk/models/shared/donotsave.md)     | :heavy_minus_sign:                                              | N/A                                                             |
| `saveToVault`                                                   | [shared.SaveToVault](../../../sdk/models/shared/savetovault.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `schemaId`                                                      | *string*                                                        | :heavy_minus_sign:                                              | The schemaId field.                                             |