# CreateAppEntitlementUserOwnerRequest

CreateAppEntitlementUserOwnerRequest is the request for creating a user ownership source on an entitlement.

## Example Usage

```typescript
import { CreateAppEntitlementUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAppEntitlementUserOwnerRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `userRef`                                               | [shared.UserRef](../../../sdk/models/shared/userref.md) | :heavy_minus_sign:                                      | A reference to a user.                                  |