# SearchMyVendedCredentialsRequest

SearchMyVendedCredentialsRequest has the same filters as the general
 inventory search, but its distinct type carries the self-only permission.
 The server always scopes results to the signed-in requester's issuance
 tickets; callers cannot provide an identity-user filter.

## Example Usage

```typescript
import { SearchMyVendedCredentialsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchMyVendedCredentialsRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `appId`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | The appId field.                                                                |
| `expandMask`                                                                    | [shared.AppSecretExpandMask](../../../sdk/models/shared/appsecretexpandmask.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `pageSize`                                                                      | *number*                                                                        | :heavy_minus_sign:                                                              | The pageSize field.                                                             |
| `pageToken`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | The pageToken field.                                                            |
| `query`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | The query field.                                                                |
| `refs`                                                                          | [shared.AppSecretRef](../../../sdk/models/shared/appsecretref.md)[]             | :heavy_minus_sign:                                                              | The refs field.                                                                 |
| `resourceTypeIds`                                                               | *string*[]                                                                      | :heavy_minus_sign:                                                              | The resourceTypeIds field.                                                      |