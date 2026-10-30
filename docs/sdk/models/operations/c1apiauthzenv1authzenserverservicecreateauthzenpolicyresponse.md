# C1ApiAuthzenV1AuthzenServerServiceCreateAuthzenPolicyResponse

## Example Usage

```typescript
import { C1ApiAuthzenV1AuthzenServerServiceCreateAuthzenPolicyResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthzenV1AuthzenServerServiceCreateAuthzenPolicyResponse = {
  contentType: "<value>",
  statusCode: 255976,
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                           | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response content type for this operation                                                                                           |
| `statusCode`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response status code for this operation                                                                                            |
| `rawResponse`                                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                   | :heavy_check_mark:                                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                                 |
| `authzenServerServiceCreateAuthzenPolicyResponse`                                                                                       | [shared.AuthzenServerServiceCreateAuthzenPolicyResponse](../../../sdk/models/shared/authzenserverservicecreateauthzenpolicyresponse.md) | :heavy_minus_sign:                                                                                                                      | AuthzenServerServiceCreateAuthzenPolicyResponse returns the newly created<br/> policy revision.                                         |