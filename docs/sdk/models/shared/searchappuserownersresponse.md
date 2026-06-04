# SearchAppUserOwnersResponse

SearchUserOwnersResponse is the response for searching user ownership sources.

## Example Usage

```typescript
import { SearchAppUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppUserOwnersResponse = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `list`                                                              | [shared.AppOwnerUser](../../../sdk/models/shared/appowneruser.md)[] | :heavy_minus_sign:                                                  | The list field.                                                     |
| `nextPageToken`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | The nextPageToken field.                                            |