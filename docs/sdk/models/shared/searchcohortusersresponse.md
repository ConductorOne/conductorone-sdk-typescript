# SearchCohortUsersResponse

The SearchCohortUsersResponse message.

## Example Usage

```typescript
import { SearchCohortUsersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchCohortUsersResponse = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `list`                                              | [shared.User](../../../sdk/models/shared/user.md)[] | :heavy_minus_sign:                                  | The list field.                                     |
| `nextPageToken`                                     | *string*                                            | :heavy_minus_sign:                                  | The nextPageToken field.                            |