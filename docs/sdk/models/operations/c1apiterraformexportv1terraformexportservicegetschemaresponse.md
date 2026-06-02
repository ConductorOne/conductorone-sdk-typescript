# C1ApiTerraformExportV1TerraformExportServiceGetSchemaResponse

## Example Usage

```typescript
import { C1ApiTerraformExportV1TerraformExportServiceGetSchemaResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTerraformExportV1TerraformExportServiceGetSchemaResponse = {
  contentType: "<value>",
  statusCode: 530224,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `getSchemaResponse`                                                         | [shared.GetSchemaResponse](../../../sdk/models/shared/getschemaresponse.md) | :heavy_minus_sign:                                                          | Successful response                                                         |