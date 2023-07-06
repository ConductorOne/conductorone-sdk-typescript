# taskActions

### Available Operations

* [approve](#approve) - Invokes the c1.api.task.v1.TaskActionsService.Approve method.
* [comment](#comment) - Invokes the c1.api.task.v1.TaskActionsService.Comment method.
* [deny](#deny) - Invokes the c1.api.task.v1.TaskActionsService.Deny method.

## approve

Invokes the c1.api.task.v1.TaskActionsService.Approve method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskActionsServiceApproveResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
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

sdk.taskActions.approve({
  taskActionsServiceApproveRequest: {
    taskExpandMask: {
      paths: [
        "voluptas",
        "asperiores",
        "aperiam",
        "ea",
      ],
    },
    comment: "quaerat",
    policyStepId: "consequuntur",
  },
  taskId: "repellendus",
}).then((res: C1ApiTaskV1TaskActionsServiceApproveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.C1ApiTaskV1TaskActionsServiceApproveRequest](../../models/operations/c1apitaskv1taskactionsserviceapproverequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.C1ApiTaskV1TaskActionsServiceApproveResponse](../../models/operations/c1apitaskv1taskactionsserviceapproveresponse.md)>**


## comment

Invokes the c1.api.task.v1.TaskActionsService.Comment method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskActionsServiceCommentResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
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

sdk.taskActions.comment({
  taskActionsServiceCommentRequest: {
    taskExpandMask: {
      paths: [
        "maxime",
        "dignissimos",
        "officia",
      ],
    },
    comment: "asperiores",
  },
  taskId: "nemo",
}).then((res: C1ApiTaskV1TaskActionsServiceCommentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.C1ApiTaskV1TaskActionsServiceCommentRequest](../../models/operations/c1apitaskv1taskactionsservicecommentrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.C1ApiTaskV1TaskActionsServiceCommentResponse](../../models/operations/c1apitaskv1taskactionsservicecommentresponse.md)>**


## deny

Invokes the c1.api.task.v1.TaskActionsService.Deny method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskActionsServiceDenyResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
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

sdk.taskActions.deny({
  taskActionsServiceDenyRequest: {
    taskExpandMask: {
      paths: [
        "quaerat",
      ],
    },
    comment: "porro",
    policyStepId: "quod",
  },
  taskId: "labore",
}).then((res: C1ApiTaskV1TaskActionsServiceDenyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.C1ApiTaskV1TaskActionsServiceDenyRequest](../../models/operations/c1apitaskv1taskactionsservicedenyrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.C1ApiTaskV1TaskActionsServiceDenyResponse](../../models/operations/c1apitaskv1taskactionsservicedenyresponse.md)>**

