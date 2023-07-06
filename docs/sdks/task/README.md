# task

### Available Operations

* [createGrantTask](#creategranttask) - Invokes the c1.api.task.v1.TaskService.CreateGrantTask method.
* [createRevokeTask](#createrevoketask) - Invokes the c1.api.task.v1.TaskService.CreateRevokeTask method.
* [get](#get) - Invokes the c1.api.task.v1.TaskService.Get method.

## createGrantTask

Invokes the c1.api.task.v1.TaskService.CreateGrantTask method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskServiceCreateGrantTaskResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import {
  ApprovalInstanceState,
  ExternalRefExternalRefSource,
  PolicyPolicyType,
  PolicyStepInstanceState,
  ProvisionInstanceState,
  TaskActions,
  TaskProcessing,
  TaskState,
  TaskTypeCertifyOutcome,
  TaskTypeGrantOutcome,
  TaskTypeRevokeOutcome,
} from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.task.createGrantTask({
  taskExpandMask: {
    paths: [
      "ullam",
    ],
  },
  appEntitlementId: "reprehenderit",
  appId: "ullam",
  appUserId: "nisi",
  description: "aut",
  emergencyAccess: false,
  grantDuration: "voluptatum",
  identityUserId: "qui",
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

Invokes the c1.api.task.v1.TaskService.CreateRevokeTask method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskServiceCreateRevokeTaskResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import {
  ApprovalInstanceState,
  ExternalRefExternalRefSource,
  PolicyPolicyType,
  PolicyStepInstanceState,
  ProvisionInstanceState,
  TaskActions,
  TaskProcessing,
  TaskState,
  TaskTypeCertifyOutcome,
  TaskTypeGrantOutcome,
  TaskTypeRevokeOutcome,
} from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.task.createRevokeTask({
  taskExpandMask: {
    paths: [
      "ex",
      "deleniti",
      "itaque",
      "dolorum",
    ],
  },
  appEntitlementId: "architecto",
  appId: "omnis",
  appUserId: "tenetur",
  description: "quasi",
  identityUserId: "at",
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

Invokes the c1.api.task.v1.TaskService.Get method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import {
  ApprovalInstanceState,
  ExternalRefExternalRefSource,
  PolicyPolicyType,
  PolicyStepInstanceState,
  ProvisionInstanceState,
  TaskActions,
  TaskProcessing,
  TaskState,
  TaskTypeCertifyOutcome,
  TaskTypeGrantOutcome,
  TaskTypeRevokeOutcome,
} from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.task.get({
  id: "17051339-d080-486a-9840-394c26071f93",
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

