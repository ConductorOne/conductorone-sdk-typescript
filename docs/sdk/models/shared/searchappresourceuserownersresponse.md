# SearchAppResourceUserOwnersResponse

SearchAppResourceUserOwnersResponse is the response for searching user ownership sources on a resource.

## Example Usage

```typescript
import { SearchAppResourceUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppResourceUserOwnersResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `list`                                                                              | [shared.AppResourceOwnerUser](../../../sdk/models/shared/appresourceowneruser.md)[] | :heavy_minus_sign:                                                                  | The list field.                                                                     |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | The nextPageToken field.                                                            |