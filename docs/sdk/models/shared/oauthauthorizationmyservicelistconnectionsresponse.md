# OAuthAuthorizationMyServiceListConnectionsResponse

The OAuthAuthorizationMyServiceListConnectionsResponse message.

## Example Usage

```typescript
import { OAuthAuthorizationMyServiceListConnectionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorizationMyServiceListConnectionsResponse = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                  | [shared.MyOAuthAuthorizationConnection](../../../sdk/models/shared/myoauthauthorizationconnection.md)[] | :heavy_minus_sign:                                                                                      | The list field.                                                                                         |
| `nextPageToken`                                                                                         | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The nextPageToken field.                                                                                |