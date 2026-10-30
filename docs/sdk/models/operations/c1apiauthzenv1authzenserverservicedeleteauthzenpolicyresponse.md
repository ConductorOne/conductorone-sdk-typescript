# C1ApiAuthzenV1AuthzenServerServiceDeleteAuthzenPolicyResponse

## Example Usage

```typescript
import { C1ApiAuthzenV1AuthzenServerServiceDeleteAuthzenPolicyResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthzenV1AuthzenServerServiceDeleteAuthzenPolicyResponse = {
  contentType: "<value>",
  statusCode: 380044,
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                           | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response content type for this operation                                                                                           |
| `statusCode`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response status code for this operation                                                                                            |
| `rawResponse`                                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                   | :heavy_check_mark:                                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                                 |
| `authzenServerServiceDeleteAuthzenPolicyResponse`                                                                                       | [shared.AuthzenServerServiceDeleteAuthzenPolicyResponse](../../../sdk/models/shared/authzenserverservicedeleteauthzenpolicyresponse.md) | :heavy_minus_sign:                                                                                                                      | AuthzenServerServiceDeleteAuthzenPolicyResponse confirms deletion.                                                                      |