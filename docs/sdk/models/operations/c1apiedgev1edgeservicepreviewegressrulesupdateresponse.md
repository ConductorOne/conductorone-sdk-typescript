# C1ApiEdgeV1EdgeServicePreviewEgressRulesUpdateResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServicePreviewEgressRulesUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServicePreviewEgressRulesUpdateResponse = {
  contentType: "<value>",
  statusCode: 750936,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `edgeServicePreviewEgressRulesUpdateResponse`                                                                                   | [shared.EdgeServicePreviewEgressRulesUpdateResponse](../../../sdk/models/shared/edgeservicepreviewegressrulesupdateresponse.md) | :heavy_minus_sign:                                                                                                              | EdgeServicePreviewEgressRulesUpdateResponse reports the save check and each<br/> host's verdict before and after the change.    |