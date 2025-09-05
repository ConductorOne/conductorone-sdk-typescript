# SearchStepUpProvidersResponse

Response message for searching step-up providers

## Example Usage

```typescript
import { SearchStepUpProvidersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchStepUpProvidersResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `list`                                                                  | [shared.StepUpProvider](../../../sdk/models/shared/stepupprovider.md)[] | :heavy_minus_sign:                                                      | List of providers matching the search criteria                          |
| `nextPageToken`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | Token for retrieving the next page of results                           |