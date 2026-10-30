# C1ApiConnectorAuthoringV1ConnectorAuthoringActivationServiceRollbackRevisionResponse

## Example Usage

```typescript
import {
  C1ApiConnectorAuthoringV1ConnectorAuthoringActivationServiceRollbackRevisionResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiConnectorAuthoringV1ConnectorAuthoringActivationServiceRollbackRevisionResponse =
    {
      contentType: "<value>",
      statusCode: 87592,
    };
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response content type for this operation                                                                                               |
| `statusCode`                                                                                                                                | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response status code for this operation                                                                                                |
| `rawResponse`                                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                       | :heavy_check_mark:                                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                                     |
| `connectorAuthoringServiceRollbackRevisionResponse`                                                                                         | [shared.ConnectorAuthoringServiceRollbackRevisionResponse](../../../sdk/models/shared/connectorauthoringservicerollbackrevisionresponse.md) | :heavy_minus_sign:                                                                                                                          | Successful response                                                                                                                         |