# EntitlementAccessReviewSubject

Access held by an account or resource principal.

This message contains a oneof named principal. Only a single field of the following list may be set at a time:
  - appUser
  - resource


## Example Usage

```typescript
import { EntitlementAccessReviewSubject } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EntitlementAccessReviewSubject = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `appUser`                                                                   | [shared.AppUserRef](../../../sdk/models/shared/appuserref.md)               | :heavy_minus_sign:                                                          | N/A                                                                         |
| `entitlement`                                                               | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `resource`                                                                  | [shared.AppResourceRef](../../../sdk/models/shared/appresourceref.md)       | :heavy_minus_sign:                                                          | N/A                                                                         |