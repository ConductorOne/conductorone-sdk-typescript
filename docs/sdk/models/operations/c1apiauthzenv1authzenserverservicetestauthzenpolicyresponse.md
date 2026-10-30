# C1ApiAuthzenV1AuthzenServerServiceTestAuthzenPolicyResponse

## Example Usage

```typescript
import { C1ApiAuthzenV1AuthzenServerServiceTestAuthzenPolicyResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthzenV1AuthzenServerServiceTestAuthzenPolicyResponse = {
  contentType: "<value>",
  statusCode: 21757,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response content type for this operation                                                                                       |
| `statusCode`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response status code for this operation                                                                                        |
| `rawResponse`                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                               | :heavy_check_mark:                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                             |
| `authzenServerServiceTestAuthzenPolicyResponse`                                                                                     | [shared.AuthzenServerServiceTestAuthzenPolicyResponse](../../../sdk/models/shared/authzenserverservicetestauthzenpolicyresponse.md) | :heavy_minus_sign:                                                                                                                  | AuthzenServerServiceTestAuthzenPolicyResponse returns the evaluation<br/> outcome for authoring feedback.                           |