# SetAppEntitlementOwnersRequest

The request message for setting the app entitlement owners.

## Example Usage

```typescript
import { SetAppEntitlementOwnersRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SetAppEntitlementOwnersRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `userIds`                                                                   | *string*[]                                                                  | :heavy_minus_sign:                                                          | The user_ids field for the users to set as an owner of the app entitlement. |