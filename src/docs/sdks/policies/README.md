# Policies
(*policies*)

### Available Operations

* [create](#create) - Create
* [delete](#delete) - Delete
* [get](#get) - Get
* [list](#list) - List
* [update](#update) - Update

## create

Create a policy.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiPolicyV1PoliciesCreateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { CreatePolicyRequestPolicyType } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.policies.create({
  description: "consequuntur",
  displayName: "ratione",
  policySteps: {
    "explicabo": {
      steps: [
        {
          accept: {},
          approval: {
            appGroupApproval: {},
            appOwnerApproval: {},
            entitlementOwnerApproval: {},
            expressionApproval: {},
            managerApproval: {},
            selfApproval: {},
            userApproval: {},
          },
          provision: {
            provisionPolicy: {
              connectorProvision: {},
              delegatedProvision: {
                appId: "saepe",
                entitlementId: "occaecati",
              },
              manualProvision: {
                instructions: "atque",
                userIds: [
                  "et",
                ],
              },
            },
            provisionTarget: {
              appEntitlementId: "esse",
              appId: "eveniet",
              appUserId: "accusamus",
              grantDuration: "veritatis",
            },
            assigned: false,
          },
          reject: {},
        },
      ],
    },
  },
  policyType: CreatePolicyRequestPolicyType.PolicyTypeRevoke,
  postActions: [
    {
      certifyRemediateImmediately: false,
    },
  ],
  reassignTasksToDelegates: false,
}).then((res: C1ApiPolicyV1PoliciesCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.CreatePolicyRequestInput](../../models/shared/createpolicyrequestinput.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.C1ApiPolicyV1PoliciesCreateResponse](../../models/operations/c1apipolicyv1policiescreateresponse.md)>**


## delete

Delete a policy by ID.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiPolicyV1PoliciesDeleteResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.policies.delete({
  deletePolicyRequest: {},
  id: "cbe61e6b-7b95-4bc0-ab3c-20c4f3789fd8",
}).then((res: C1ApiPolicyV1PoliciesDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.C1ApiPolicyV1PoliciesDeleteRequest](../../models/operations/c1apipolicyv1policiesdeleterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.C1ApiPolicyV1PoliciesDeleteResponse](../../models/operations/c1apipolicyv1policiesdeleteresponse.md)>**


## get

Get a policy by ID.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiPolicyV1PoliciesGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.policies.get({
  id: "71f99dd2-efd1-421a-a6f1-e674bdb04f15",
}).then((res: C1ApiPolicyV1PoliciesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.C1ApiPolicyV1PoliciesGetRequest](../../models/operations/c1apipolicyv1policiesgetrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.C1ApiPolicyV1PoliciesGetResponse](../../models/operations/c1apipolicyv1policiesgetresponse.md)>**


## list

List policies.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiPolicyV1PoliciesListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.policies.list({
  pageSize: 4438.79,
  pageToken: "ullam",
}).then((res: C1ApiPolicyV1PoliciesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.C1ApiPolicyV1PoliciesListRequest](../../models/operations/c1apipolicyv1policieslistrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.C1ApiPolicyV1PoliciesListResponse](../../models/operations/c1apipolicyv1policieslistresponse.md)>**


## update

Update a policy by providing a policy object and an update mask.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiPolicyV1PoliciesUpdateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { PolicyPolicyType } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.policies.update({
  updatePolicyRequestInput: {
    policy: {
      description: "nisi",
      displayName: "aut",
      policySteps: {
        "voluptatum": {
          steps: [
            {
              accept: {},
              approval: {
                appGroupApproval: {},
                appOwnerApproval: {},
                entitlementOwnerApproval: {},
                expressionApproval: {},
                managerApproval: {},
                selfApproval: {},
                userApproval: {},
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "qui",
                    entitlementId: "quibusdam",
                  },
                  manualProvision: {
                    instructions: "ex",
                    userIds: [
                      "deleniti",
                    ],
                  },
                },
                provisionTarget: {
                  appEntitlementId: "itaque",
                  appId: "dolorum",
                  appUserId: "architecto",
                  grantDuration: "omnis",
                },
                assigned: false,
              },
              reject: {},
            },
          ],
        },
      },
      policyType: PolicyPolicyType.PolicyTypeProvision,
      postActions: [
        {
          certifyRemediateImmediately: false,
        },
      ],
      reassignTasksToDelegates: false,
      rules: [
        {
          condition: "quasi",
          policyKey: "at",
        },
      ],
    },
    updateMask: "et",
  },
  id: "7051339d-0808-46a1-8403-94c26071f93f",
}).then((res: C1ApiPolicyV1PoliciesUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.C1ApiPolicyV1PoliciesUpdateRequest](../../models/operations/c1apipolicyv1policiesupdaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.C1ApiPolicyV1PoliciesUpdateResponse](../../models/operations/c1apipolicyv1policiesupdateresponse.md)>**

