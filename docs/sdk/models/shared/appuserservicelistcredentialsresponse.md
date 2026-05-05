# AppUserServiceListCredentialsResponse

The response message for listing credentials of an app user.

## Example Usage

```typescript
import { AppUserServiceListCredentialsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserServiceListCredentialsResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `list`                                                                        | [shared.AppUserCredential](../../../sdk/models/shared/appusercredential.md)[] | :heavy_minus_sign:                                                            | The list of credential results.                                               |
| `nextPageToken`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | The token for fetching the next page of results.                              |