# appReport

### Available Operations

* [list](#list) - Invokes the c1.api.app.v1.AppReportService.List method.

## list

Invokes the c1.api.app.v1.AppReportService.List method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppReportServiceListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { AppPopulationReportState } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.appReport.list({
  appId: "quod",
}).then((res: C1ApiAppV1AppReportServiceListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.C1ApiAppV1AppReportServiceListRequest](../../models/operations/c1apiappv1appreportservicelistrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.C1ApiAppV1AppReportServiceListResponse](../../models/operations/c1apiappv1appreportservicelistresponse.md)>**

