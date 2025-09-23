# AppUserServiceListCredentialsResponse

The AppUserServiceListCredentialsResponse message.

## Example Usage

```typescript
import { AppUserServiceListCredentialsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserServiceListCredentialsResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `list`                                                                        | [shared.AppUserCredential](../../../sdk/models/shared/appusercredential.md)[] | :heavy_minus_sign:                                                            | The list field.                                                               |
| `nextPageToken`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | The nextPageToken field.                                                      |