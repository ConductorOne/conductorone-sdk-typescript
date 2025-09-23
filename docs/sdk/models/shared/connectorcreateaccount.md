# ConnectorCreateAccount

The ConnectorCreateAccount message.

This message contains a oneof named create_account_arguments. Only a single field of the following list may be set at a time:
  - userIdCel
  - userProperties


## Example Usage

```typescript
import { ConnectorCreateAccount } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorCreateAccount = {};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectorRef`                                                                                                                                                              | [shared.ConnectorRef](../../../sdk/models/shared/connectorref.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `userIdCel`                                                                                                                                                                 | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | The userIdCel field.<br/>This field is part of the `create_account_arguments` oneof.<br/>See the documentation for `c1.api.automations.v1.ConnectorCreateAccount` for more details. |
| `userProperties`                                                                                                                                                            | [shared.UserProperties](../../../sdk/models/shared/userproperties.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |