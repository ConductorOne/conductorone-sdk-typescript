# GrantsByCriteriaScope

The GrantsByCriteriaScope message.

This message contains a oneof named criteria_filter. Only a single field of the following list may be set at a time:
  - daysSinceAdded
  - daysSinceReviewed
  - grantsAddedBetween


## Example Usage

```typescript
import { GrantsByCriteriaScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GrantsByCriteriaScope = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `grantAccessProfileFilter`                                                                | [shared.GrantAccessProfileFilter](../../../sdk/models/shared/grantaccessprofilefilter.md) | :heavy_minus_sign:                                                                        | The GrantAccessProfileFilter message.                                                     |
| `daysSinceAdded`                                                                          | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `daysSinceLastUsed`                                                                       | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `daysSinceReviewed`                                                                       | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `grantsAddedBetween`                                                                      | [shared.GrantsAddedBetween](../../../sdk/models/shared/grantsaddedbetween.md)             | :heavy_minus_sign:                                                                        | The GrantsAddedBetween message.                                                           |
| `sourceFilter`                                                                            | [shared.SourceFilter](../../../sdk/models/shared/sourcefilter.md)                         | :heavy_minus_sign:                                                                        | The sourceFilter field.                                                                   |
| `typeFilter`                                                                              | [shared.TypeFilter](../../../sdk/models/shared/typefilter.md)                             | :heavy_minus_sign:                                                                        | The typeFilter field.                                                                     |