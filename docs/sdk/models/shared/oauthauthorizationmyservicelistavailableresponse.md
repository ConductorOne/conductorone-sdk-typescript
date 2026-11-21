# OAuthAuthorizationMyServiceListAvailableResponse

The OAuthAuthorizationMyServiceListAvailableResponse message.

## Example Usage

```typescript
import { OAuthAuthorizationMyServiceListAvailableResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorizationMyServiceListAvailableResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `list`                                                                              | [shared.MyOAuthAuthorization](../../../sdk/models/shared/myoauthauthorization.md)[] | :heavy_minus_sign:                                                                  | The list field.                                                                     |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | The nextPageToken field.                                                            |