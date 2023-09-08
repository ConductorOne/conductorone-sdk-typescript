# appUsageControls

### Available Operations

* [get](#get) - Get
* [update](#update) - Update

## get

Get usage controls, as an AppUsageControls object which describes some peripheral configuration, for an app.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppUsageControlsServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appUsageControls.get({
  appId: "non",
}).then((res: C1ApiAppV1AppUsageControlsServiceGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.C1ApiAppV1AppUsageControlsServiceGetRequest](../../models/operations/c1apiappv1appusagecontrolsservicegetrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.C1ApiAppV1AppUsageControlsServiceGetResponse](../../models/operations/c1apiappv1appusagecontrolsservicegetresponse.md)>**


## update

Update usage controls for an app.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppUsageControlsServiceUpdateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appUsageControls.update({
  updateAppUsageControlsRequest: {
    appUsageControls: {
      appId: "occaecati",
      notify: false,
      notifyAfterDays: 3132.18,
      revoke: false,
      revokeAfterDays: 8817.36,
    },
    updateMask: "delectus",
  },
  appId: "quidem",
}).then((res: C1ApiAppV1AppUsageControlsServiceUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.C1ApiAppV1AppUsageControlsServiceUpdateRequest](../../models/operations/c1apiappv1appusagecontrolsserviceupdaterequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.C1ApiAppV1AppUsageControlsServiceUpdateResponse](../../models/operations/c1apiappv1appusagecontrolsserviceupdateresponse.md)>**

