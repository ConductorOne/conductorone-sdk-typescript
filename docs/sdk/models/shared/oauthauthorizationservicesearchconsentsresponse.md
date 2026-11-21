# OAuthAuthorizationServiceSearchConsentsResponse

OAuthAuthorizationServiceSearchConsentsResponse contains current consents in
 descending creation order, with consent ID breaking creation-time ties.

## Example Usage

```typescript
import { OAuthAuthorizationServiceSearchConsentsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorizationServiceSearchConsentsResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `list`                                                                                        | [shared.OAuthAuthorizationConsent](../../../sdk/models/shared/oauthauthorizationconsent.md)[] | :heavy_minus_sign:                                                                            | Current consents matching all requested filters.                                              |
| `nextPageToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Token for the next page. Empty when there are no more matching consents.                      |