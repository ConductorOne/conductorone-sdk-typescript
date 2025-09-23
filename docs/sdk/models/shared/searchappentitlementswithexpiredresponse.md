# SearchAppEntitlementsWithExpiredResponse

The SearchAppEntitlementsWithExpiredResponse message contains a list of results and a nextPageToken if applicable.

## Example Usage

```typescript
import { SearchAppEntitlementsWithExpiredResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppEntitlementsWithExpiredResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `list`                                                                                        | [shared.AppEntitlementWithExpired](../../../sdk/models/shared/appentitlementwithexpired.md)[] | :heavy_minus_sign:                                                                            | The list field.                                                                               |
| `nextPageToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The nextPageToken field.                                                                      |