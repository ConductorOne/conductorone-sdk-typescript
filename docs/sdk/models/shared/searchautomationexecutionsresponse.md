# SearchAutomationExecutionsResponse

The SearchAutomationExecutionsResponse message.

## Example Usage

```typescript
import { SearchAutomationExecutionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAutomationExecutionsResponse = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                      | [shared.SearchAutomationExecutionsResponseExpanded](../../../sdk/models/shared/searchautomationexecutionsresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                              | Related objects requested via the expand mask.                                                                                  |
| `list`                                                                                                                          | [shared.AutomationExecutionView](../../../sdk/models/shared/automationexecutionview.md)[]                                       | :heavy_minus_sign:                                                                                                              | The page of execution views matching the search criteria.                                                                       |
| `nextPageToken`                                                                                                                 | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Token to retrieve the next page of results, empty when no more results exist.                                                   |