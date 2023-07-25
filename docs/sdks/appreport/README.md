# appReport

### Available Operations

* [list](#list) - List

## list

 Get a list of reports for the given app.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppReportServiceListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appReport.list({
  appId: "incidunt",
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

