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
  description: "eius",
  displayName: "libero",
  policySteps: {
    "soluta": {
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
                appId: "aliquam",
                entitlementId: "sapiente",
              },
              manualProvision: {
                instructions: "dicta",
                userIds: [
                  "reprehenderit",
                  "ullam",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
    "nisi": {
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
                appId: "voluptatum",
                entitlementId: "qui",
              },
              manualProvision: {
                instructions: "quibusdam",
                userIds: [
                  "deleniti",
                  "itaque",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
    "dolorum": {
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
                appId: "omnis",
                entitlementId: "tenetur",
              },
              manualProvision: {
                instructions: "quasi",
                userIds: [
                  "et",
                  "voluptate",
                  "ipsa",
                  "minima",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
    "veritatis": {
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
                appId: "adipisci",
                entitlementId: "iste",
              },
              manualProvision: {
                instructions: "temporibus",
                userIds: [
                  "rem",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
  },
  policyType: CreatePolicyRequestPolicyType.PolicyTypeUnspecified,
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
  id: "6a184039-4c26-4071-b93f-5f0642dac7af",
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
  id: "515cc413-aa63-4aae-8d67-864dbb675fd5",
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
      description: "recusandae",
      displayName: "aliquid",
      policySteps: {
        "cum": {
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
                    appId: "in",
                    entitlementId: "exercitationem",
                  },
                  manualProvision: {
                    instructions: "earum",
                    userIds: [
                      "numquam",
                      "doloribus",
                      "suscipit",
                      "reiciendis",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
      },
      policyType: PolicyPolicyType.PolicyTypeAccessRequest,
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
    updateMask: "necessitatibus",
  },
  id: "41f33317-fe35-4b60-ab1e-a426555ba3c2",
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

