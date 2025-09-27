# DeleteAppOwnersRequest

The request message for deleting app owners.

## Example Usage

```typescript
import { DeleteAppOwnersRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeleteAppOwnersRequest = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `userIds`                                                       | *string*[]                                                      | :heavy_minus_sign:                                              | The user_ids field for the users to set as an owner of the app. |