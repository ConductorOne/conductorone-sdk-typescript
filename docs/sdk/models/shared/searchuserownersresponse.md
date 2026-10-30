# SearchUserOwnersResponse

SearchUserOwnersResponse is the response for searching user ownership sources on a user (service account).

## Example Usage

```typescript
import { SearchUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchUserOwnersResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `list`                                                                | [shared.UserOwnerUser](../../../sdk/models/shared/userowneruser.md)[] | :heavy_minus_sign:                                                    | The list field.                                                       |
| `nextPageToken`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | The nextPageToken field.                                              |