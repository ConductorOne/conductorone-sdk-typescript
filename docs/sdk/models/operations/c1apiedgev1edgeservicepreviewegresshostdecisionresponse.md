# C1ApiEdgeV1EdgeServicePreviewEgressHostDecisionResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServicePreviewEgressHostDecisionResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServicePreviewEgressHostDecisionResponse = {
  contentType: "<value>",
  statusCode: 29208,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `edgeServicePreviewEgressHostDecisionResponse`                                                                                    | [shared.EdgeServicePreviewEgressHostDecisionResponse](../../../sdk/models/shared/edgeservicepreviewegresshostdecisionresponse.md) | :heavy_minus_sign:                                                                                                                | EdgeServicePreviewEgressHostDecisionResponse reports what the decision<br/> would do and the rule list that results.              |