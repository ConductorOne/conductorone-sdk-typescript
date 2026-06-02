# ListCustomAnalysisResultsResponse

The ListCustomAnalysisResultsResponse message.

## Example Usage

```typescript
import { ListCustomAnalysisResultsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListCustomAnalysisResultsResponse = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `list`                                                                                      | [shared.CustomAnalysisResultView](../../../sdk/models/shared/customanalysisresultview.md)[] | :heavy_minus_sign:                                                                          | The list field.                                                                             |
| `nextPageToken`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | The nextPageToken field.                                                                    |