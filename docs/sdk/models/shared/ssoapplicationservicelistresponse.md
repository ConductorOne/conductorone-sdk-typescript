# SSOApplicationServiceListResponse

SSOApplicationServiceListResponse returns a page of SSO applications.

## Example Usage

```typescript
import { SSOApplicationServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceListResponse = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `list`                                                                     | [shared.SSOApplication](../../../sdk/models/shared/ssoapplication.md)[]    | :heavy_minus_sign:                                                         | The page of SSO applications.                                              |
| `nextPageToken`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | Pagination token for the next page, or empty if there are no more results. |