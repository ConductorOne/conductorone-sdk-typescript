# appReportAction

### Available Operations

* [generateReport](#generatereport) - Invokes the c1.api.app.v1.AppReportActionService.GenerateReport method.

## generateReport

Invokes the c1.api.app.v1.AppReportActionService.GenerateReport method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppReportActionServiceGenerateReportResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript();

sdk.appReportAction.generateReport({
  appActionsServiceGenerateReportRequest: {},
  appId: "esse",
}).then((res: C1ApiAppV1AppReportActionServiceGenerateReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.C1ApiAppV1AppReportActionServiceGenerateReportRequest](../../models/operations/c1apiappv1appreportactionservicegeneratereportrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.C1ApiAppV1AppReportActionServiceGenerateReportResponse](../../models/operations/c1apiappv1appreportactionservicegeneratereportresponse.md)>**

