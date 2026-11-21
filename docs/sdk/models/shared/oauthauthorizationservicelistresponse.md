# OAuthAuthorizationServiceListResponse

The OAuthAuthorizationServiceListResponse message.

## Example Usage

```typescript
import { OAuthAuthorizationServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorizationServiceListResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `list`                                                                          | [shared.OAuthAuthorization](../../../sdk/models/shared/oauthauthorization.md)[] | :heavy_minus_sign:                                                              | The list field.                                                                 |
| `nextPageToken`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The nextPageToken field.                                                        |