# apps

### Available Operations

* [create](#create) - Create
* [delete](#delete) - Delete
* [get](#get) - Get
* [list](#list) - List
* [update](#update) - Update

## create

 Create a new app.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppsCreateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.apps.create({
  certifyPolicyId: "ea",
  description: "excepturi",
  displayName: "odit",
  grantPolicyId: "ea",
  monthlyCostUsd: 332.22,
  owners: [
    "maiores",
  ],
  revokePolicyId: "quidem",
}).then((res: C1ApiAppV1AppsCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.CreateAppRequest](../../models/shared/createapprequest.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.C1ApiAppV1AppsCreateResponse](../../models/operations/c1apiappv1appscreateresponse.md)>**


## delete

 Delete an app.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppsDeleteResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.apps.delete({
  deleteAppRequest: {},
  id: "576b0d5f-0d30-4c5f-bb25-87053202c73d",
}).then((res: C1ApiAppV1AppsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.C1ApiAppV1AppsDeleteRequest](../../models/operations/c1apiappv1appsdeleterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.C1ApiAppV1AppsDeleteResponse](../../models/operations/c1apiappv1appsdeleteresponse.md)>**


## get

 Get an app by ID.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppsGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.apps.get({
  id: "5fe9b90c-2890-49b3-be49-a8d9cbf48633",
}).then((res: C1ApiAppV1AppsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.C1ApiAppV1AppsGetRequest](../../models/operations/c1apiappv1appsgetrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.C1ApiAppV1AppsGetResponse](../../models/operations/c1apiappv1appsgetresponse.md)>**


## list

 List all apps.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppsListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.apps.list({
  pageSize: 2224.43,
  pageToken: "qui",
}).then((res: C1ApiAppV1AppsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.C1ApiAppV1AppsListRequest](../../models/operations/c1apiappv1appslistrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.C1ApiAppV1AppsListResponse](../../models/operations/c1apiappv1appslistresponse.md)>**


## update

 Update an existing app.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppsUpdateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.apps.update({
  updateAppRequestInput: {
    app: {
      certifyPolicyId: "ipsum",
      description: "hic",
      displayName: "excepturi",
      grantPolicyId: "cum",
      iconUrl: "voluptate",
      monthlyCostUsd: 4904.59,
      revokePolicyId: "reiciendis",
    },
    updateMask: "amet",
  },
  id: "a4100674-ebf6-4928-8d1b-a77a89ebf737",
}).then((res: C1ApiAppV1AppsUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.C1ApiAppV1AppsUpdateRequest](../../models/operations/c1apiappv1appsupdaterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.C1ApiAppV1AppsUpdateResponse](../../models/operations/c1apiappv1appsupdateresponse.md)>**

