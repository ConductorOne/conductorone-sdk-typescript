# OAuthAuthorizationServiceListConsentsResponse

The OAuthAuthorizationServiceListConsentsResponse message.

## Example Usage

```typescript
import { OAuthAuthorizationServiceListConsentsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorizationServiceListConsentsResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `list`                                                                                  | [shared.ExternalOAuthGrantInfo](../../../sdk/models/shared/externaloauthgrantinfo.md)[] | :heavy_minus_sign:                                                                      | The list field.                                                                         |
| `nextPageToken`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | The nextPageToken field.                                                                |