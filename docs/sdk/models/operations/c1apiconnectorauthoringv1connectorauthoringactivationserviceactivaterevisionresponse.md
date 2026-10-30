# C1ApiConnectorAuthoringV1ConnectorAuthoringActivationServiceActivateRevisionResponse

## Example Usage

```typescript
import {
  C1ApiConnectorAuthoringV1ConnectorAuthoringActivationServiceActivateRevisionResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiConnectorAuthoringV1ConnectorAuthoringActivationServiceActivateRevisionResponse =
    {
      contentType: "<value>",
      statusCode: 802375,
    };
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response content type for this operation                                                                                               |
| `statusCode`                                                                                                                                | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response status code for this operation                                                                                                |
| `rawResponse`                                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                       | :heavy_check_mark:                                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                                     |
| `connectorAuthoringServiceActivateRevisionResponse`                                                                                         | [shared.ConnectorAuthoringServiceActivateRevisionResponse](../../../sdk/models/shared/connectorauthoringserviceactivaterevisionresponse.md) | :heavy_minus_sign:                                                                                                                          | Successful response                                                                                                                         |