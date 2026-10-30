# SSOApplicationServiceSearchRequest

SSOApplicationServiceSearchRequest searches SSO applications with filters.

## Example Usage

```typescript
import { SSOApplicationServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceSearchRequest = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `appIds`                                                                         | *string*[]                                                                       | :heavy_minus_sign:                                                               | Optional filter by applications in your catalog. Empty matches any<br/> application. |
| `pageSize`                                                                       | *number*                                                                         | :heavy_minus_sign:                                                               | Maximum number of results to return per page.                                    |
| `pageToken`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Pagination token from a previous response.                                       |
| `query`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | Optional text query matched against display_name and description.                |