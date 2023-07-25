# policies

### Available Operations

* [create](#create) - Create
* [delete](#delete) - Delete
* [get](#get) - Get
* [list](#list) - List
* [update](#update) - Update

## create

Invokes the c1.api.policy.v1.Policies.Create method.

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
  description: "consequuntur",
  displayName: "ratione",
  policySteps: {
    "saepe": {
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
                appId: "atque",
                entitlementId: "et",
              },
              manualProvision: {
                instructions: "esse",
                userIds: [
                  "accusamus",
                  "veritatis",
                  "esse",
                  "quod",
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
                appId: "nam",
                entitlementId: "vero",
              },
              manualProvision: {
                instructions: "aliquid",
                userIds: [
                  "saepe",
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
                appId: "vel",
                entitlementId: "harum",
              },
              manualProvision: {
                instructions: "molestiae",
                userIds: [
                  "occaecati",
                  "minima",
                  "distinctio",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
  },
  policyType: CreatePolicyRequestPolicyType.PolicyTypeAccessRequest,
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

Invokes the c1.api.policy.v1.Policies.Delete method.

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
  id: "ab3c20c4-f378-49fd-871f-99dd2efd121a",
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

Invokes the c1.api.policy.v1.Policies.Get method.

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
  id: "a6f1e674-bdb0-44f1-9756-082d68ea19f1",
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

Invokes the c1.api.policy.v1.Policies.List method.

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

Invokes the c1.api.policy.v1.Policies.Update method.

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
      description: "at",
      displayName: "et",
      policySteps: {
        "ipsa": {
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
                    appId: "veritatis",
                    entitlementId: "consectetur",
                  },
                  manualProvision: {
                    instructions: "adipisci",
                    userIds: [
                      "temporibus",
                      "accusantium",
                      "rem",
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
                    appId: "aut",
                    entitlementId: "laudantium",
                  },
                  manualProvision: {
                    instructions: "eum",
                    userIds: [
                      "ab",
                      "corrupti",
                      "non",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
        "voluptatem": {
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
                    appId: "occaecati",
                    entitlementId: "numquam",
                  },
                  manualProvision: {
                    instructions: "impedit",
                    userIds: [
                      "voluptas",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
      },
      policyType: PolicyPolicyType.PolicyTypeUnspecified,
      postActions: [
        {
          certifyRemediateImmediately: false,
        },
        {
          certifyRemediateImmediately: false,
        },
      ],
      reassignTasksToDelegates: false,
    },
    updateMask: "dicta",
  },
  id: "f93f5f06-42da-4c7a-b515-cc413aa63aae",
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

