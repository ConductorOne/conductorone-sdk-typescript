# SearchAppEntitlementOwnersResponse

SearchEntitlementOwnersResponse is the response for searching entitlement ownership sources.

## Example Usage

```typescript
import { SearchAppEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppEntitlementOwnersResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `list`                                                                            | [shared.AppOwnerEntitlement](../../../sdk/models/shared/appownerentitlement.md)[] | :heavy_minus_sign:                                                                | The list field.                                                                   |
| `nextPageToken`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | The nextPageToken field.                                                          |