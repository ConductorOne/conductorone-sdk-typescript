# policies

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
    oauth: "",
  },
});

sdk.policies.create({
  description: "minima",
  displayName: "nisi",
  policySteps: {
    "sapiente": {
      steps: [
        {
          approval: {
            appGroupApproval: {},
            appOwnerApproval: {},
            entitlementOwnerApproval: {},
            managerApproval: {},
            selfApproval: {},
            userApproval: {},
          },
          provision: {
            provisionPolicy: {
              connectorProvision: {},
              delegatedProvision: {
                appId: "ratione",
                entitlementId: "explicabo",
              },
              manualProvision: {
                instructions: "saepe",
                userIds: [
                  "atque",
                  "et",
                  "esse",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
  },
  policyType: CreatePolicyRequestPolicyType.PolicyTypeProvision,
  postActions: [
    {
      certifyRemediateImmediately: false,
    },
    {
      certifyRemediateImmediately: false,
    },
    {
      certifyRemediateImmediately: false,
    },
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
    oauth: "",
  },
});

sdk.policies.delete({
  deletePolicyRequest: {},
  id: "17cbe61e-6b7b-495b-80ab-3c20c4f3789f",
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
    oauth: "",
  },
});

sdk.policies.get({
  id: "d871f99d-d2ef-4d12-9aa6-f1e674bdb04f",
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
    oauth: "",
  },
});

sdk.policies.list().then((res: C1ApiPolicyV1PoliciesListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


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
    oauth: "",
  },
});

sdk.policies.update({
  updatePolicyRequestInput: {
    policy: {
      description: "dicta",
      displayName: "ullam",
      policySteps: {
        "ullam": {
          steps: [
            {
              approval: {
                appGroupApproval: {},
                appOwnerApproval: {},
                entitlementOwnerApproval: {},
                managerApproval: {},
                selfApproval: {},
                userApproval: {},
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "aut",
                    entitlementId: "voluptatum",
                  },
                  manualProvision: {
                    instructions: "qui",
                    userIds: [
                      "ex",
                      "deleniti",
                      "itaque",
                      "dolorum",
                    ],
                  },
                },
                assigned: false,
              },
            },
            {
              approval: {
                appGroupApproval: {},
                appOwnerApproval: {},
                entitlementOwnerApproval: {},
                managerApproval: {},
                selfApproval: {},
                userApproval: {},
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "architecto",
                    entitlementId: "omnis",
                  },
                  manualProvision: {
                    instructions: "tenetur",
                    userIds: [
                      "at",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
        "et": {
          steps: [
            {
              approval: {
                appGroupApproval: {},
                appOwnerApproval: {},
                entitlementOwnerApproval: {},
                managerApproval: {},
                selfApproval: {},
                userApproval: {},
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "ipsa",
                    entitlementId: "minima",
                  },
                  manualProvision: {
                    instructions: "veritatis",
                    userIds: [
                      "adipisci",
                    ],
                  },
                },
                assigned: false,
              },
            },
            {
              approval: {
                appGroupApproval: {},
                appOwnerApproval: {},
                entitlementOwnerApproval: {},
                managerApproval: {},
                selfApproval: {},
                userApproval: {},
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "iste",
                    entitlementId: "temporibus",
                  },
                  manualProvision: {
                    instructions: "accusantium",
                    userIds: [
                      "aut",
                      "laudantium",
                      "eum",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
      },
      policyType: PolicyPolicyType.PolicyTypeCertify,
      postActions: [
        {
          certifyRemediateImmediately: false,
        },
      ],
      reassignTasksToDelegates: false,
    },
    updateMask: "corrupti",
  },
  id: "40394c26-071f-493f-9f06-42dac7af515c",
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

