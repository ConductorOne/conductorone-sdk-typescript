# SearchAppUserUserOwnersResponse

SearchAppUserUserOwnersResponse is the response for searching user ownership sources on an app user.

## Example Usage

```typescript
import { SearchAppUserUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppUserUserOwnersResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `list`                                                                      | [shared.AppUserOwnerUser](../../../sdk/models/shared/appuserowneruser.md)[] | :heavy_minus_sign:                                                          | The list field.                                                             |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | The nextPageToken field.                                                    |