# DeleteAppResourceUserOwnerRequest

DeleteAppResourceUserOwnerRequest is the request for deleting a user ownership source on a resource.

## Example Usage

```typescript
import { DeleteAppResourceUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeleteAppResourceUserOwnerRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `userRef`                                               | [shared.UserRef](../../../sdk/models/shared/userref.md) | :heavy_minus_sign:                                      | A reference to a user.                                  |