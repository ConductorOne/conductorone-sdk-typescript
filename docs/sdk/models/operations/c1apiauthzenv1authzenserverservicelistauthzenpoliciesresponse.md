# C1ApiAuthzenV1AuthzenServerServiceListAuthzenPoliciesResponse

## Example Usage

```typescript
import { C1ApiAuthzenV1AuthzenServerServiceListAuthzenPoliciesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthzenV1AuthzenServerServiceListAuthzenPoliciesResponse = {
  contentType: "<value>",
  statusCode: 936242,
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                           | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response content type for this operation                                                                                           |
| `statusCode`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response status code for this operation                                                                                            |
| `rawResponse`                                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                   | :heavy_check_mark:                                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                                 |
| `authzenServerServiceListAuthzenPoliciesResponse`                                                                                       | [shared.AuthzenServerServiceListAuthzenPoliciesResponse](../../../sdk/models/shared/authzenserverservicelistauthzenpoliciesresponse.md) | :heavy_minus_sign:                                                                                                                      | AuthzenServerServiceListAuthzenPoliciesResponse lists an app's CEL policy<br/> revisions, newest first.                                 |