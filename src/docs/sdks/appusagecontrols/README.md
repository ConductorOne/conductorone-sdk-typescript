# AppUsageControls
(*appUsageControls*)

### Available Operations

* [get](#get) - Get
* [update](#update) - Update

## get

Get usage controls, as an AppUsageControls object which describes some peripheral configuration, for an app.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.appUsageControls.get({
    appId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppUsageControlsServiceGetRequest](../../sdk/models/operations/c1apiappv1appusagecontrolsservicegetrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAppV1AppUsageControlsServiceGetResponse](../../sdk/models/operations/c1apiappv1appusagecontrolsservicegetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update usage controls for an app.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.appUsageControls.update({
    updateAppUsageControlsRequest: {
      appUsageControls: {},
    },
    appId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppUsageControlsServiceUpdateRequest](../../sdk/models/operations/c1apiappv1appusagecontrolsserviceupdaterequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAppV1AppUsageControlsServiceUpdateResponse](../../sdk/models/operations/c1apiappv1appusagecontrolsserviceupdateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
