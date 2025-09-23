# SearchStepUpTransactionsResponse

Response message for searching step-up transactions

## Example Usage

```typescript
import { SearchStepUpTransactionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchStepUpTransactionsResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `list`                                                                        | [shared.StepUpTransaction](../../../sdk/models/shared/stepuptransaction.md)[] | :heavy_minus_sign:                                                            | List of transactions matching the search criteria                             |
| `nextPageToken`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | Token for retrieving the next page of results                                 |