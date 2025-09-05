# AppAccessRequestDefaults1

The AppAccessRequestDefaults message.

This message contains a oneof named max_grant_duration. Only a single field of the following list may be set at a time:
  - durationUnset
  - durationGrant


## Example Usage

```typescript
import { AppAccessRequestDefaults1 } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppAccessRequestDefaults1 = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `catalogIds`                                                                             | *string*[]                                                                               | :heavy_minus_sign:                                                                       | The request catalog ids for the app access request rule.                                 |
| `defaultsEnabled`                                                                        | *boolean*                                                                                | :heavy_minus_sign:                                                                       | If true the app level request configuration will be applied to specified resource types. |
| `durationGrant`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `durationUnset`                                                                          | [shared.DurationUnset](../../../sdk/models/shared/durationunset.md)                      | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `emergencyGrantEnabled`                                                                  | *boolean*                                                                                | :heavy_minus_sign:                                                                       | If emergency grants are enabled for this app access request rule.                        |
| `emergencyGrantPolicyId`                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The policy id for the emergency grant policy.                                            |
| `requestPolicyId`                                                                        | *string*                                                                                 | :heavy_minus_sign:                                                                       | The requestPolicyId field.                                                               |
| `resourceTypeIds`                                                                        | *string*[]                                                                               | :heavy_minus_sign:                                                                       | The app resource type ids for which the app access request defaults are applied.         |
| `state`                                                                                  | [shared.State](../../../sdk/models/shared/state.md)                                      | :heavy_minus_sign:                                                                       | The last applied state of the app access request defaults.                               |