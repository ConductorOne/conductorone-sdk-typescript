# ConnectorProvision

Indicates that a connector should perform the provisioning. This object has no fields.

This message contains a oneof named provision_type. Only a single field of the following list may be set at a time:
  - defaultBehavior
  - account
  - deleteAccount


## Example Usage

```typescript
import { ConnectorProvision } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorProvision = {};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountProvision`                                                                                                                                                              | [shared.AccountProvision](../../../sdk/models/shared/accountprovision.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                              | The AccountProvision message.<br/><br/>This message contains a oneof named storage_type. Only a single field of the following list may be set at a time:<br/>  - saveToVault<br/>  - doNotSave<br/> |
| `defaultBehavior`                                                                                                                                                               | [shared.DefaultBehavior](../../../sdk/models/shared/defaultbehavior.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                              | The DefaultBehavior message.                                                                                                                                                    |
| `deleteAccount`                                                                                                                                                                 | [shared.DeleteAccount](../../../sdk/models/shared/deleteaccount.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                              | The DeleteAccount message.                                                                                                                                                      |