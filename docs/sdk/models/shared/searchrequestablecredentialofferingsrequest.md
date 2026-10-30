# SearchRequestableCredentialOfferingsRequest

The SearchRequestableCredentialOfferingsRequest message.

## Example Usage

```typescript
import { SearchRequestableCredentialOfferingsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchRequestableCredentialOfferingsRequest = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `appId`                                         | *string*                                        | :heavy_minus_sign:                              | Limits the search to one app.                   |
| `pageSize`                                      | *number*                                        | :heavy_minus_sign:                              | The pageSize field.                             |
| `pageToken`                                     | *string*                                        | :heavy_minus_sign:                              | The pageToken field.                            |
| `query`                                         | *string*                                        | :heavy_minus_sign:                              | The query field.                                |
| `targetUserId`                                  | *string*                                        | :heavy_minus_sign:                              | The user to search for. Defaults to the caller. |