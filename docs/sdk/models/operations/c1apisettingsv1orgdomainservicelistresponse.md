# C1ApiSettingsV1OrgDomainServiceListResponse

## Example Usage

```typescript
import { C1ApiSettingsV1OrgDomainServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1OrgDomainServiceListResponse = {
  contentType: "<value>",
  statusCode: 530243,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `listOrgDomainsResponse`                                                              | [shared.ListOrgDomainsResponse](../../../sdk/models/shared/listorgdomainsresponse.md) | :heavy_minus_sign:                                                                    | Successful response                                                                   |