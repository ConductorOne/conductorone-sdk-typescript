# C1ApiSettingsV1OrgDomainServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiSettingsV1OrgDomainServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1OrgDomainServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 556970,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `updateOrgDomainResponse`                                                               | [shared.UpdateOrgDomainResponse](../../../sdk/models/shared/updateorgdomainresponse.md) | :heavy_minus_sign:                                                                      | Successful response                                                                     |