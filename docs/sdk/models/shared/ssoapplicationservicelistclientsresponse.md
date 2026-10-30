# SSOApplicationServiceListClientsResponse

SSOApplicationServiceListClientsResponse contains a page of App-owned OAuth
 clients.

## Example Usage

```typescript
import { SSOApplicationServiceListClientsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceListClientsResponse = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `list`                                                                                      | [shared.SSOApplicationOIDCClient](../../../sdk/models/shared/ssoapplicationoidcclient.md)[] | :heavy_minus_sign:                                                                          | App-owned clients in this page.                                                             |
| `nextPageToken`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | Pagination token for the next page, or empty when complete.                                 |