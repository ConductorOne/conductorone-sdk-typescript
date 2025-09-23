# GrantEntitlements

The GrantEntitlements message.

## Example Usage

```typescript
import { GrantEntitlements } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GrantEntitlements = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appEntitlementRefs`                                                          | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | The appEntitlementRefs field.                                                 |
| `appEntitlementRefsCel`                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | The appEntitlementRefsCel field.                                              |
| `useSubjectUser`                                                              | *boolean*                                                                     | :heavy_minus_sign:                                                            | If true, the step will use the subject user of the automation as the subject. |
| `userIdCel`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | The userIdCel field.                                                          |
| `userRef`                                                                     | [shared.UserRef](../../../sdk/models/shared/userref.md)                       | :heavy_minus_sign:                                                            | N/A                                                                           |