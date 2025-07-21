# C1ApiAppV1ConnectorServiceCreateResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1ConnectorServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 133450,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `connectorServiceCreateResponse`                                                                      | [shared.ConnectorServiceCreateResponse](../../../sdk/models/shared/connectorservicecreateresponse.md) | :heavy_minus_sign:                                                                                    | The ConnectorServiceCreateResponse is the response returned from creating a connector.                |