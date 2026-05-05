# SearchAllAutomationExecutionsResponse

The SearchAllAutomationExecutionsResponse message.

## Example Usage

```typescript
import { SearchAllAutomationExecutionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAllAutomationExecutionsResponse = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                            | [shared.SearchAllAutomationExecutionsResponseExpanded](../../../sdk/models/shared/searchallautomationexecutionsresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                    | Related objects requested via the expand mask.                                                                                        |
| `list`                                                                                                                                | [shared.AutomationExecutionView](../../../sdk/models/shared/automationexecutionview.md)[]                                             | :heavy_minus_sign:                                                                                                                    | The page of execution views matching the search criteria.                                                                             |
| `nextPageToken`                                                                                                                       | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Token to retrieve the next page of results, empty when no more results exist.                                                         |