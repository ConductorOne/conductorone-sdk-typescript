# taskActions

### Available Operations

* [approve](#approve) - Approve
* [comment](#comment) - Comment
* [deny](#deny) - Deny
* [escalateToEmergencyAccess](#escalatetoemergencyaccess) - Escalate To Emergency Access

## approve

Invokes the c1.api.task.v1.TaskActionsService.Approve method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskActionsServiceApproveResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.taskActions.approve({
  taskActionsServiceApproveRequest: {
    taskExpandMask: {
      paths: [
        "itaque",
        "alias",
        "nisi",
      ],
    },
    comment: "itaque",
    policyStepId: "velit",
  },
  taskId: "laborum",
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

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.taskActions.comment({
  taskActionsServiceCommentRequest: {
    taskExpandMask: {
      paths: [
        "dolor",
        "iusto",
      ],
    },
    comment: "sit",
  },
  taskId: "doloremque",
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

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.taskActions.deny({
  taskActionsServiceDenyRequest: {
    taskExpandMask: {
      paths: [
        "officia",
      ],
    },
    comment: "recusandae",
    policyStepId: "ea",
  },
  taskId: "quidem",
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


## escalateToEmergencyAccess

Invokes the c1.api.task.v1.TaskActionsService.EscalateToEmergencyAccess method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.taskActions.escalateToEmergencyAccess({
  taskActionsServiceEscalateToEmergencyAccessRequest: {
    taskExpandMask: {
      paths: [
        "facilis",
        "placeat",
      ],
    },
    comment: "perspiciatis",
    policyStepId: "expedita",
  },
  taskId: "deleniti",
}).then((res: C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest](../../models/operations/c1apitaskv1taskactionsserviceescalatetoemergencyaccessrequest.md) | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse](../../models/operations/c1apitaskv1taskactionsserviceescalatetoemergencyaccessresponse.md)>**

