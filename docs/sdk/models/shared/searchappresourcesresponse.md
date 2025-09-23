# SearchAppResourcesResponse

The SearchAppResourcesResponse message.

## Example Usage

```typescript
import { SearchAppResourcesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppResourcesResponse = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                      | [shared.SearchAppResourcesResponseExpanded](../../../sdk/models/shared/searchappresourcesresponseexpanded.md)[] | :heavy_minus_sign:                                                                                              | The expanded field.                                                                                             |
| `list`                                                                                                          | [shared.AppResourceView](../../../sdk/models/shared/appresourceview.md)[]                                       | :heavy_minus_sign:                                                                                              | The list field.                                                                                                 |
| `nextPageToken`                                                                                                 | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The nextPageToken field.                                                                                        |