# SearchAppResourcesResponse

The SearchAppResourcesResponse message contains a list of results and a nextPageToken if applicable.

## Example Usage

```typescript
import { SearchAppResourcesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppResourcesResponse = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                      | [shared.SearchAppResourcesResponseExpanded](../../../sdk/models/shared/searchappresourcesresponseexpanded.md)[] | :heavy_minus_sign:                                                                                              | List of serialized related objects.                                                                             |
| `list`                                                                                                          | [shared.AppResourceView](../../../sdk/models/shared/appresourceview.md)[]                                       | :heavy_minus_sign:                                                                                              | The list of app resource results.                                                                               |
| `nextPageToken`                                                                                                 | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The token for fetching the next page of results.                                                                |