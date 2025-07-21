# SearchStepUpProvidersRequest

Request message for searching step-up providers

## Example Usage

```typescript
import { SearchStepUpProvidersRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchStepUpProvidersRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `pageSize`                                                                    | *number*                                                                      | :heavy_minus_sign:                                                            | Maximum number of results to return                                           |
| `pageToken`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | Token for pagination                                                          |
| `providerType`                                                                | [shared.ProviderType](../../../sdk/models/shared/providertype.md)             | :heavy_minus_sign:                                                            | The providerType field.                                                       |
| `query`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Filter by name (partial match)                                                |
| `refs`                                                                        | [shared.StepUpProviderRef](../../../sdk/models/shared/stepupproviderref.md)[] | :heavy_minus_sign:                                                            | The refs field.                                                               |