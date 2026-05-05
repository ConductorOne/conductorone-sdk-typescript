# SearchAutomationTemplateVersionsRequest

The SearchAutomationTemplateVersionsRequest message.

## Example Usage

```typescript
import { SearchAutomationTemplateVersionsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAutomationTemplateVersionsRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `automationTemplateId`                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | The automation template whose version history to search.                   |
| `pageSize`                                                                 | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum number of results to return per page.                              |
| `pageToken`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Pagination token from a previous SearchAutomationTemplateVersionsResponse. |