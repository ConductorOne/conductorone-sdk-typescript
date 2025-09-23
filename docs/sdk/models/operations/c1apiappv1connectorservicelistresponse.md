# C1ApiAppV1ConnectorServiceListResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1ConnectorServiceListResponse = {
  contentType: "<value>",
  statusCode: 168603,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `connectorServiceListResponse`                                                                        | [shared.ConnectorServiceListResponse](../../../sdk/models/shared/connectorservicelistresponse.md)     | :heavy_minus_sign:                                                                                    | The ConnectorServiceListResponse message contains a list of results and a nextPageToken if applicable |