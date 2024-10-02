# AppInput

The App object provides all of the details for an app, as well as some configuration.

## Example Usage

```typescript
import { AppInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppInput = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `certifyPolicyId`                                                                     | *string*                                                                              | :heavy_minus_sign:                                                                    | The ID of the Certify Policy associated with this App.                                |
| `description`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | The app's description.                                                                |
| `displayName`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | The app's display name.                                                               |
| `grantPolicyId`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | The ID of the Grant Policy associated with this App.                                  |
| `iconUrl`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | The URL of an icon to display for the app.                                            |
| `identityMatching`                                                                    | [shared.IdentityMatching](../../../sdk/models/shared/identitymatching.md)             | :heavy_minus_sign:                                                                    | The identityMatching field.                                                           |
| `monthlyCostUsd`                                                                      | *number*                                                                              | :heavy_minus_sign:                                                                    | The cost of an app per-seat, so that total cost can be calculated by the grant count. |
| `revokePolicyId`                                                                      | *string*                                                                              | :heavy_minus_sign:                                                                    | The ID of the Revoke Policy associated with this App.                                 |