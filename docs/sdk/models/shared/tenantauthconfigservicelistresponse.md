# TenantAuthConfigServiceListResponse

The TenantAuthConfigServiceListResponse message.

## Example Usage

```typescript
import { TenantAuthConfigServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TenantAuthConfigServiceListResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `list`                                                                               | [shared.TenantAuthConfig](../../../sdk/models/shared/tenantauthconfig.md)[]          | :heavy_minus_sign:                                                                   | The list of authentication provider configurations.                                  |
| `nextPageToken`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | A token to retrieve the next page of results, or empty if there are no more results. |