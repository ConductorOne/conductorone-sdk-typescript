# AppEntitlementSearchServiceSearchGrantsResponse

The AppEntitlementSearchServiceSearchGrantsResponse message.

## Example Usage

```typescript
import { AppEntitlementSearchServiceSearchGrantsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementSearchServiceSearchGrantsResponse = {};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                                                | [shared.AppEntitlementSearchServiceSearchGrantsResponseExpanded](../../../sdk/models/shared/appentitlementsearchservicesearchgrantsresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                                        | The expanded field.                                                                                                                                       |
| `list`                                                                                                                                                    | [shared.AppEntitlementWithUserBinding](../../../sdk/models/shared/appentitlementwithuserbinding.md)[]                                                     | :heavy_minus_sign:                                                                                                                                        | The list field.                                                                                                                                           |
| `nextPageToken`                                                                                                                                           | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The nextPageToken field.                                                                                                                                  |