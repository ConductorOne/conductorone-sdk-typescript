# DeleteAppEntitlementUserOwnerRequest

DeleteAppEntitlementUserOwnerRequest is the request for deleting a user ownership source on an entitlement.

## Example Usage

```typescript
import { DeleteAppEntitlementUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeleteAppEntitlementUserOwnerRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `userRef`                                               | [shared.UserRef](../../../sdk/models/shared/userref.md) | :heavy_minus_sign:                                      | A reference to a user.                                  |