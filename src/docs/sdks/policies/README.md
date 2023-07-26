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
  description: "consequatur",
  displayName: "minus",
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
                appId: "esse",
                entitlementId: "blanditiis",
              },
              manualProvision: {
                instructions: "provident",
                userIds: [
                  "nulla",
                  "quas",
                  "esse",
                  "quasi",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
    "a": {
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
                appId: "sint",
                entitlementId: "pariatur",
              },
              manualProvision: {
                instructions: "possimus",
                userIds: [
                  "eveniet",
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
                appId: "asperiores",
                entitlementId: "facere",
              },
              manualProvision: {
                instructions: "veritatis",
                userIds: [
                  "quasi",
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
                appId: "similique",
                entitlementId: "culpa",
              },
              manualProvision: {
                instructions: "aliquid",
                userIds: [
                  "quae",
                  "earum",
                  "vel",
                  "in",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
  },
  policyType: CreatePolicyRequestPolicyType.PolicyTypeGrant,
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
  id: "db04f157-5608-42d6-8ea1-9f1d17051339",
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
  id: "d08086a1-8403-494c-a607-1f93f5f0642d",
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

sdk.policies.list({
  pageSize: 6387.62,
  pageToken: "maxime",
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
    oauth: "",
  },
});

sdk.policies.update({
  updatePolicyRequestInput: {
    policy: {
      description: "dignissimos",
      displayName: "officia",
      policySteps: {
        "nemo": {
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
                    appId: "quaerat",
                    entitlementId: "porro",
                  },
                  manualProvision: {
                    instructions: "quod",
                    userIds: [
                      "ab",
                      "adipisci",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
        "fuga": {
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
                    appId: "suscipit",
                    entitlementId: "velit",
                  },
                  manualProvision: {
                    instructions: "culpa",
                    userIds: [
                      "recusandae",
                      "totam",
                      "fugiat",
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
                    entitlementId: "ducimus",
                  },
                  manualProvision: {
                    instructions: "quos",
                    userIds: [
                      "labore",
                      "possimus",
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
                    appId: "facilis",
                    entitlementId: "cum",
                  },
                  manualProvision: {
                    instructions: "commodi",
                    userIds: [
                      "corporis",
                      "reiciendis",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
        "assumenda": {
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
                    appId: "recusandae",
                    entitlementId: "aliquid",
                  },
                  manualProvision: {
                    instructions: "aperiam",
                    userIds: [
                      "consectetur",
                      "in",
                      "exercitationem",
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
                    appId: "earum",
                    entitlementId: "facere",
                  },
                  manualProvision: {
                    instructions: "numquam",
                    userIds: [
                      "suscipit",
                      "reiciendis",
                      "quidem",
                      "saepe",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
        "necessitatibus": {
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
                    appId: "sunt",
                    entitlementId: "asperiores",
                  },
                  manualProvision: {
                    instructions: "adipisci",
                    userIds: [
                      "amet",
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
                    appId: "beatae",
                    entitlementId: "dignissimos",
                  },
                  manualProvision: {
                    instructions: "a",
                    userIds: [
                      "consectetur",
                      "corporis",
                      "harum",
                      "laboriosam",
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
        {
          certifyRemediateImmediately: false,
        },
        {
          certifyRemediateImmediately: false,
        },
      ],
      reassignTasksToDelegates: false,
    },
    updateMask: "libero",
  },
  id: "1ea42655-5ba3-4c28-b44e-d53b88f3a8d8",
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

