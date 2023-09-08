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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.apps.create({
  certifyPolicyId: "sapiente",
  description: "amet",
  displayName: "deserunt",
  grantPolicyId: "nisi",
  monthlyCostUsd: 4238.55,
  owners: [
    "natus",
  ],
  revokePolicyId: "omnis",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.apps.delete({
  deleteAppRequest: {},
  id: "7074ba44-69b6-4e21-8195-9890afa563e2",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.apps.get({
  id: "516fe4c8-b711-4e5b-bfd2-ed028921cddc",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.apps.list({
  pageSize: 4113.97,
  pageToken: "excepturi",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.apps.update({
  updateAppRequestInput: {
    app: {
      certifyPolicyId: "odit",
      description: "ea",
      displayName: "accusantium",
      grantPolicyId: "ab",
      iconUrl: "maiores",
      monthlyCostUsd: 6974.29,
      revokePolicyId: "ipsam",
    },
    updateMask: "voluptate",
  },
  id: "6b0d5f0d-30c5-4fbb-a587-053202c73d5f",
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

