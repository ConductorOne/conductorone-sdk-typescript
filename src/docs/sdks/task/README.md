# Task

### Available Operations

* [createGrantTask](#creategranttask) - Create Grant Task
* [createRevokeTask](#createrevoketask) - Create Revoke Task
* [get](#get) - Get

## createGrantTask

Create a grant task

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskServiceCreateGrantTaskResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.task.createGrantTask({
  taskExpandMask: {
    paths: [
      "cum",
    ],
  },
  taskGrantSource: {
    externalUrl: "iure",
    integrationId: "necessitatibus",
  },
  appEntitlementId: "ratione",
  appId: "laborum",
  appUserId: "distinctio",
  description: "voluptatum",
  emergencyAccess: false,
  grantDuration: "rem",
  identityUserId: "aliquam",
}).then((res: C1ApiTaskV1TaskServiceCreateGrantTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.TaskServiceCreateGrantRequest](../../models/shared/taskservicecreategrantrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.C1ApiTaskV1TaskServiceCreateGrantTaskResponse](../../models/operations/c1apitaskv1taskservicecreategranttaskresponse.md)>**


## createRevokeTask

Create a revoke task

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskServiceCreateRevokeTaskResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.task.createRevokeTask({
  taskExpandMask: {
    paths: [
      "ad",
    ],
  },
  appEntitlementId: "repellat",
  appId: "alias",
  appUserId: "corporis",
  description: "perspiciatis",
  identityUserId: "nihil",
}).then((res: C1ApiTaskV1TaskServiceCreateRevokeTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.TaskServiceCreateRevokeRequest](../../models/shared/taskservicecreaterevokerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.C1ApiTaskV1TaskServiceCreateRevokeTaskResponse](../../models/operations/c1apitaskv1taskservicecreaterevoketaskresponse.md)>**


## get

Get a task by ID

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.task.get({
  id: "a60ff2a5-4a31-4e94-b64a-3e865e7956f9",
}).then((res: C1ApiTaskV1TaskServiceGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.C1ApiTaskV1TaskServiceGetRequest](../../models/operations/c1apitaskv1taskservicegetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.C1ApiTaskV1TaskServiceGetResponse](../../models/operations/c1apitaskv1taskservicegetresponse.md)>**

