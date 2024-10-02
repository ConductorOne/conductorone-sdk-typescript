# AppResourceTypeServiceListResponse

The AppResourceTypeServiceListResponse message contains a list of results and a nextPageToken if applicable.

## Example Usage

```typescript
import { AppResourceTypeServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceTypeServiceListResponse = {};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `expanded`                                                                                                                                                                                                                                                                                                                                       | [shared.AppResourceTypeServiceListResponseExpanded](../../../sdk/models/shared/appresourcetypeservicelistresponseexpanded.md)[]                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | List of serialized related objects.                                                                                                                                                                                                                                                                                                              |
| `list`                                                                                                                                                                                                                                                                                                                                           | [shared.AppResourceTypeView](../../../sdk/models/shared/appresourcetypeview.md)[]                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | The list of results containing up to X results, where X is the page size defined in the request.                                                                                                                                                                                                                                                 |
| `nextPageToken`                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | The nextPageToken is shown for the next page if the number of results is larger than the max page size.<br/> The server returns one page of results and the nextPageToken until all results are retreived.<br/> To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page. |