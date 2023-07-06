# policies

### Available Operations

* [create](#create) - Invokes the c1.api.policy.v1.Policies.Create method.
* [delete](#delete) - Invokes the c1.api.policy.v1.Policies.Delete method.
* [get](#get) - Invokes the c1.api.policy.v1.Policies.Get method.
* [list](#list) - Invokes the c1.api.policy.v1.Policies.List method.
* [update](#update) - Invokes the c1.api.policy.v1.Policies.Update method.

## create

Invokes the c1.api.policy.v1.Policies.Create method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiPolicyV1PoliciesCreateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { CreatePolicyRequestPolicyType, PolicyPolicyType } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.policies.create({
  description: "excepturi",
  displayName: "tempora",
  policySteps: {
    "tempore": {
      steps: [
        {
          approval: {
            appGroupApproval: {
              allowSelfApproval: false,
              appGroupId: "delectus",
              appId: "eum",
              fallback: false,
              fallbackUserIds: [
                "eligendi",
              ],
            },
            appOwnerApproval: {
              allowSelfApproval: false,
            },
            entitlementOwnerApproval: {
              allowSelfApproval: false,
              fallback: false,
              fallbackUserIds: [
                "aliquid",
                "provident",
                "necessitatibus",
              ],
            },
            managerApproval: {
              allowSelfApproval: false,
              assignedUserIds: [
                "officia",
                "dolor",
                "debitis",
              ],
              fallback: false,
              fallbackUserIds: [
                "dolorum",
                "in",
                "in",
                "illum",
              ],
            },
            selfApproval: {
              assignedUserIds: [
                "rerum",
                "dicta",
                "magnam",
                "cumque",
              ],
              fallback: false,
              fallbackUserIds: [
                "ea",
                "aliquid",
                "laborum",
                "accusamus",
              ],
            },
            userApproval: {
              allowSelfApproval: false,
              userIds: [
                "occaecati",
              ],
            },
            allowReassignment: false,
            assigned: false,
            requireApprovalReason: false,
            requireReassignmentReason: false,
          },
          provision: {
            provisionPolicy: {
              connectorProvision: {},
              delegatedProvision: {
                appId: "enim",
                entitlementId: "accusamus",
              },
              manualProvision: {
                instructions: "delectus",
                userIds: [
                  "provident",
                  "nam",
                  "id",
                ],
              },
            },
            assigned: false,
          },
        },
        {
          approval: {
            appGroupApproval: {
              allowSelfApproval: false,
              appGroupId: "blanditiis",
              appId: "deleniti",
              fallback: false,
              fallbackUserIds: [
                "amet",
                "deserunt",
                "nisi",
                "vel",
              ],
            },
            appOwnerApproval: {
              allowSelfApproval: false,
            },
            entitlementOwnerApproval: {
              allowSelfApproval: false,
              fallback: false,
              fallbackUserIds: [
                "omnis",
                "molestiae",
                "perferendis",
              ],
            },
            managerApproval: {
              allowSelfApproval: false,
              assignedUserIds: [
                "magnam",
                "distinctio",
              ],
              fallback: false,
              fallbackUserIds: [
                "labore",
                "labore",
                "suscipit",
              ],
            },
            selfApproval: {
              assignedUserIds: [
                "nobis",
                "eum",
                "vero",
              ],
              fallback: false,
              fallbackUserIds: [
                "architecto",
              ],
            },
            userApproval: {
              allowSelfApproval: false,
              userIds: [
                "et",
                "excepturi",
              ],
            },
            allowReassignment: false,
            assigned: false,
            requireApprovalReason: false,
            requireReassignmentReason: false,
          },
          provision: {
            provisionPolicy: {
              connectorProvision: {},
              delegatedProvision: {
                appId: "ullam",
                entitlementId: "provident",
              },
              manualProvision: {
                instructions: "quos",
                userIds: [
                  "accusantium",
                  "mollitia",
                  "reiciendis",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
    "mollitia": {
      steps: [
        {
          approval: {
            appGroupApproval: {
              allowSelfApproval: false,
              appGroupId: "eum",
              appId: "dolor",
              fallback: false,
              fallbackUserIds: [
                "odit",
                "nemo",
                "quasi",
                "iure",
              ],
            },
            appOwnerApproval: {
              allowSelfApproval: false,
            },
            entitlementOwnerApproval: {
              allowSelfApproval: false,
              fallback: false,
              fallbackUserIds: [
                "debitis",
                "eius",
                "maxime",
                "deleniti",
              ],
            },
            managerApproval: {
              allowSelfApproval: false,
              assignedUserIds: [
                "in",
                "architecto",
                "architecto",
              ],
              fallback: false,
              fallbackUserIds: [
                "ullam",
                "expedita",
                "nihil",
                "repellat",
              ],
            },
            selfApproval: {
              assignedUserIds: [
                "sed",
                "saepe",
                "pariatur",
                "accusantium",
              ],
              fallback: false,
              fallbackUserIds: [
                "praesentium",
              ],
            },
            userApproval: {
              allowSelfApproval: false,
              userIds: [
                "magni",
                "sunt",
                "quo",
              ],
            },
            allowReassignment: false,
            assigned: false,
            requireApprovalReason: false,
            requireReassignmentReason: false,
          },
          provision: {
            provisionPolicy: {
              connectorProvision: {},
              delegatedProvision: {
                appId: "illum",
                entitlementId: "pariatur",
              },
              manualProvision: {
                instructions: "maxime",
                userIds: [
                  "excepturi",
                  "odit",
                ],
              },
            },
            assigned: false,
          },
        },
        {
          approval: {
            appGroupApproval: {
              allowSelfApproval: false,
              appGroupId: "ea",
              appId: "accusantium",
              fallback: false,
              fallbackUserIds: [
                "maiores",
              ],
            },
            appOwnerApproval: {
              allowSelfApproval: false,
            },
            entitlementOwnerApproval: {
              allowSelfApproval: false,
              fallback: false,
              fallbackUserIds: [
                "ipsam",
                "voluptate",
                "autem",
              ],
            },
            managerApproval: {
              allowSelfApproval: false,
              assignedUserIds: [
                "eaque",
                "pariatur",
                "nemo",
              ],
              fallback: false,
              fallbackUserIds: [
                "perferendis",
                "fugiat",
                "amet",
                "aut",
              ],
            },
            selfApproval: {
              assignedUserIds: [
                "corporis",
                "hic",
                "libero",
                "nobis",
              ],
              fallback: false,
              fallbackUserIds: [
                "quis",
              ],
            },
            userApproval: {
              allowSelfApproval: false,
              userIds: [
                "dignissimos",
                "eaque",
                "quis",
              ],
            },
            allowReassignment: false,
            assigned: false,
            requireApprovalReason: false,
            requireReassignmentReason: false,
          },
          provision: {
            provisionPolicy: {
              connectorProvision: {},
              delegatedProvision: {
                appId: "nesciunt",
                entitlementId: "eos",
              },
              manualProvision: {
                instructions: "perferendis",
                userIds: [
                  "minus",
                ],
              },
            },
            assigned: false,
          },
        },
      ],
    },
    "quam": {
      steps: [
        {
          approval: {
            appGroupApproval: {
              allowSelfApproval: false,
              appGroupId: "vero",
              appId: "nostrum",
              fallback: false,
              fallbackUserIds: [
                "recusandae",
                "omnis",
                "facilis",
                "perspiciatis",
              ],
            },
            appOwnerApproval: {
              allowSelfApproval: false,
            },
            entitlementOwnerApproval: {
              allowSelfApproval: false,
              fallback: false,
              fallbackUserIds: [
                "porro",
              ],
            },
            managerApproval: {
              allowSelfApproval: false,
              assignedUserIds: [
                "blanditiis",
              ],
              fallback: false,
              fallbackUserIds: [
                "eaque",
                "occaecati",
                "rerum",
              ],
            },
            selfApproval: {
              assignedUserIds: [
                "asperiores",
              ],
              fallback: false,
              fallbackUserIds: [
                "modi",
                "iste",
                "dolorum",
                "deleniti",
              ],
            },
            userApproval: {
              allowSelfApproval: false,
              userIds: [
                "provident",
                "nobis",
                "libero",
                "delectus",
              ],
            },
            allowReassignment: false,
            assigned: false,
            requireApprovalReason: false,
            requireReassignmentReason: false,
          },
          provision: {
            provisionPolicy: {
              connectorProvision: {},
              delegatedProvision: {
                appId: "quaerat",
                entitlementId: "quos",
              },
              manualProvision: {
                instructions: "aliquid",
                userIds: [
                  "dolorem",
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
  ],
  reassignTasksToDelegates: false,
}).then((res: C1ApiPolicyV1PoliciesCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreatePolicyRequest](../../models/shared/createpolicyrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.C1ApiPolicyV1PoliciesCreateResponse](../../models/operations/c1apipolicyv1policiescreateresponse.md)>**


## delete

Invokes the c1.api.policy.v1.Policies.Delete method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiPolicyV1PoliciesDeleteResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript();

sdk.policies.delete({
  deletePolicyRequest: {},
  id: "3f9b77f3-a410-4067-8ebf-69280d1ba77a",
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
import { PolicyPolicyType } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.policies.get({
  id: "89ebf737-ae42-403c-a5e6-a95d8a0d446c",
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
import { PolicyPolicyType } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

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

const sdk = new ConductoroneSDKTypescript();

sdk.policies.update({
  updatePolicyRequest: {
    policy: {
      createdAt: new Date("2022-06-11T17:29:13.872Z"),
      deletedAt: new Date("2021-02-04T11:05:24.484Z"),
      description: "esse",
      displayName: "harum",
      id: "73cf3be4-53f8-470b-b26b-5a73429cdb1a",
      policySteps: {
        "incidunt": {
          steps: [
            {
              approval: {
                appGroupApproval: {
                  allowSelfApproval: false,
                  appGroupId: "dolores",
                  appId: "distinctio",
                  fallback: false,
                  fallbackUserIds: [
                    "aliquid",
                    "quam",
                    "molestias",
                  ],
                },
                appOwnerApproval: {
                  allowSelfApproval: false,
                },
                entitlementOwnerApproval: {
                  allowSelfApproval: false,
                  fallback: false,
                  fallbackUserIds: [
                    "qui",
                    "neque",
                    "fugit",
                    "magni",
                  ],
                },
                managerApproval: {
                  allowSelfApproval: false,
                  assignedUserIds: [
                    "sunt",
                    "ullam",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "hic",
                    "voluptatem",
                    "cumque",
                  ],
                },
                selfApproval: {
                  assignedUserIds: [
                    "nobis",
                    "et",
                    "saepe",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "veritatis",
                  ],
                },
                userApproval: {
                  allowSelfApproval: false,
                  userIds: [
                    "quos",
                    "tempore",
                    "cupiditate",
                  ],
                },
                allowReassignment: false,
                assigned: false,
                requireApprovalReason: false,
                requireReassignmentReason: false,
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "aperiam",
                    entitlementId: "delectus",
                  },
                  manualProvision: {
                    instructions: "dolorem",
                    userIds: [
                      "labore",
                      "adipisci",
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
                appGroupApproval: {
                  allowSelfApproval: false,
                  appGroupId: "quae",
                  appId: "aut",
                  fallback: false,
                  fallbackUserIds: [
                    "itaque",
                    "consequatur",
                    "est",
                  ],
                },
                appOwnerApproval: {
                  allowSelfApproval: false,
                },
                entitlementOwnerApproval: {
                  allowSelfApproval: false,
                  fallback: false,
                  fallbackUserIds: [
                    "porro",
                    "doloribus",
                    "ut",
                    "facilis",
                  ],
                },
                managerApproval: {
                  allowSelfApproval: false,
                  assignedUserIds: [
                    "qui",
                    "quae",
                    "laudantium",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "occaecati",
                    "voluptatibus",
                  ],
                },
                selfApproval: {
                  assignedUserIds: [
                    "vero",
                    "omnis",
                    "quis",
                    "ipsum",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "voluptate",
                    "consectetur",
                    "vero",
                    "tenetur",
                  ],
                },
                userApproval: {
                  allowSelfApproval: false,
                  userIds: [
                    "hic",
                    "distinctio",
                  ],
                },
                allowReassignment: false,
                assigned: false,
                requireApprovalReason: false,
                requireReassignmentReason: false,
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "quod",
                    entitlementId: "odio",
                  },
                  manualProvision: {
                    instructions: "similique",
                    userIds: [
                      "vero",
                      "ducimus",
                      "dolore",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
        "quibusdam": {
          steps: [
            {
              approval: {
                appGroupApproval: {
                  allowSelfApproval: false,
                  appGroupId: "sequi",
                  appId: "natus",
                  fallback: false,
                  fallbackUserIds: [
                    "aut",
                    "voluptatibus",
                    "exercitationem",
                    "nulla",
                  ],
                },
                appOwnerApproval: {
                  allowSelfApproval: false,
                },
                entitlementOwnerApproval: {
                  allowSelfApproval: false,
                  fallback: false,
                  fallbackUserIds: [
                    "porro",
                  ],
                },
                managerApproval: {
                  allowSelfApproval: false,
                  assignedUserIds: [
                    "doloribus",
                    "iusto",
                    "eligendi",
                    "ducimus",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "officia",
                  ],
                },
                selfApproval: {
                  assignedUserIds: [
                    "ipsam",
                    "ea",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "vel",
                  ],
                },
                userApproval: {
                  allowSelfApproval: false,
                  userIds: [
                    "magnam",
                    "ratione",
                    "ex",
                    "laudantium",
                  ],
                },
                allowReassignment: false,
                assigned: false,
                requireApprovalReason: false,
                requireReassignmentReason: false,
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "dicta",
                    entitlementId: "dolor",
                  },
                  manualProvision: {
                    instructions: "maiores",
                    userIds: [
                      "ex",
                    ],
                  },
                },
                assigned: false,
              },
            },
            {
              approval: {
                appGroupApproval: {
                  allowSelfApproval: false,
                  appGroupId: "nulla",
                  appId: "excepturi",
                  fallback: false,
                  fallbackUserIds: [
                    "nostrum",
                    "sapiente",
                    "quisquam",
                    "saepe",
                  ],
                },
                appOwnerApproval: {
                  allowSelfApproval: false,
                },
                entitlementOwnerApproval: {
                  allowSelfApproval: false,
                  fallback: false,
                  fallbackUserIds: [
                    "impedit",
                    "corporis",
                  ],
                },
                managerApproval: {
                  allowSelfApproval: false,
                  assignedUserIds: [
                    "aliquid",
                    "inventore",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "ea",
                    "quo",
                  ],
                },
                selfApproval: {
                  assignedUserIds: [
                    "recusandae",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "minima",
                  ],
                },
                userApproval: {
                  allowSelfApproval: false,
                  userIds: [
                    "a",
                  ],
                },
                allowReassignment: false,
                assigned: false,
                requireApprovalReason: false,
                requireReassignmentReason: false,
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "libero",
                    entitlementId: "aut",
                  },
                  manualProvision: {
                    instructions: "aut",
                    userIds: [
                      "impedit",
                      "aliquam",
                      "fugit",
                    ],
                  },
                },
                assigned: false,
              },
            },
            {
              approval: {
                appGroupApproval: {
                  allowSelfApproval: false,
                  appGroupId: "accusamus",
                  appId: "inventore",
                  fallback: false,
                  fallbackUserIds: [
                    "et",
                    "dolorum",
                  ],
                },
                appOwnerApproval: {
                  allowSelfApproval: false,
                },
                entitlementOwnerApproval: {
                  allowSelfApproval: false,
                  fallback: false,
                  fallbackUserIds: [
                    "placeat",
                    "velit",
                    "eum",
                  ],
                },
                managerApproval: {
                  allowSelfApproval: false,
                  assignedUserIds: [
                    "nobis",
                    "quas",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "nulla",
                    "voluptas",
                    "libero",
                    "quasi",
                  ],
                },
                selfApproval: {
                  assignedUserIds: [
                    "numquam",
                    "explicabo",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "ipsa",
                    "molestiae",
                    "magnam",
                  ],
                },
                userApproval: {
                  allowSelfApproval: false,
                  userIds: [
                    "eius",
                    "esse",
                  ],
                },
                allowReassignment: false,
                assigned: false,
                requireApprovalReason: false,
                requireReassignmentReason: false,
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "esse",
                    entitlementId: "rem",
                  },
                  manualProvision: {
                    instructions: "fuga",
                    userIds: [
                      "quidem",
                      "fugiat",
                    ],
                  },
                },
                assigned: false,
              },
            },
            {
              approval: {
                appGroupApproval: {
                  allowSelfApproval: false,
                  appGroupId: "ut",
                  appId: "eum",
                  fallback: false,
                  fallbackUserIds: [
                    "assumenda",
                    "eos",
                  ],
                },
                appOwnerApproval: {
                  allowSelfApproval: false,
                },
                entitlementOwnerApproval: {
                  allowSelfApproval: false,
                  fallback: false,
                  fallbackUserIds: [
                    "quisquam",
                    "veritatis",
                    "ipsa",
                  ],
                },
                managerApproval: {
                  allowSelfApproval: false,
                  assignedUserIds: [
                    "quidem",
                    "neque",
                    "quo",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "quo",
                    "fuga",
                    "eius",
                    "eos",
                  ],
                },
                selfApproval: {
                  assignedUserIds: [
                    "ab",
                    "cupiditate",
                  ],
                  fallback: false,
                  fallbackUserIds: [
                    "tempora",
                  ],
                },
                userApproval: {
                  allowSelfApproval: false,
                  userIds: [
                    "ipsam",
                    "aspernatur",
                    "sequi",
                    "quo",
                  ],
                },
                allowReassignment: false,
                assigned: false,
                requireApprovalReason: false,
                requireReassignmentReason: false,
              },
              provision: {
                provisionPolicy: {
                  connectorProvision: {},
                  delegatedProvision: {
                    appId: "esse",
                    entitlementId: "recusandae",
                  },
                  manualProvision: {
                    instructions: "aperiam",
                    userIds: [
                      "quod",
                      "dignissimos",
                      "inventore",
                    ],
                  },
                },
                assigned: false,
              },
            },
          ],
        },
      },
      policyType: PolicyPolicyType.PolicyTypeRevoke,
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
      systemBuiltin: false,
      updatedAt: new Date("2022-01-30T01:01:49.335Z"),
    },
    updateMask: "odio",
  },
  id: "96f2a70c-6882-482a-a482-562f222e9817",
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

