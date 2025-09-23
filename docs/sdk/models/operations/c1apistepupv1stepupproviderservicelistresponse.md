# C1ApiStepupV1StepUpProviderServiceListResponse

## Example Usage

```typescript
import { C1ApiStepupV1StepUpProviderServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiStepupV1StepUpProviderServiceListResponse = {
  contentType: "<value>",
  statusCode: 110887,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `listStepUpProvidersResponse`                                                                   | [shared.ListStepUpProvidersResponse](../../../sdk/models/shared/liststepupprovidersresponse.md) | :heavy_minus_sign:                                                                              | Successful response                                                                             |