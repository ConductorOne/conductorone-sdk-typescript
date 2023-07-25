# requestCatalogManagement

### Available Operations

* [addAccessEntitlements](#addaccessentitlements) - Add Access Entitlements
* [addAppEntitlements](#addappentitlements) - Add App Entitlements
* [create](#create) - Create
* [delete](#delete) - Delete
* [get](#get) - Get
* [listEntitlementsForAccess](#listentitlementsforaccess) - List Entitlements For Access
* [listEntitlementsPerCatalog](#listentitlementspercatalog) - List Entitlements Per Catalog
* [removeAccessEntitlements](#removeaccessentitlements) - Remove Access Entitlements
* [removeAppEntitlements](#removeappentitlements) - Remove App Entitlements
* [update](#update) - Update

## addAccessEntitlements

 Add visibility bindings (access entitlements) to a catalog.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse,
} from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.addAccessEntitlements({
  requestCatalogManagementServiceAddAccessEntitlementsRequest: {
    accessEntitlements: [
      {
        appId: "velit",
        id: "aae8d678-64db-4b67-9fd5-e60b375ed4f6",
      },
      {
        appId: "reiciendis",
        id: "bee41f33-317f-4e35-b60e-b1ea426555ba",
      },
    ],
  },
  catalogId: "adipisci",
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceaddaccessentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `config`                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                              |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceaddaccessentitlementsresponse.md)>**


## addAppEntitlements

 Add requestable entitlements to a catalog.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.addAppEntitlements({
  requestCatalogManagementServiceAddAppEntitlementsRequest: {
    appEntitlements: [
      {
        appId: "dolores",
        id: "8744ed53-b88f-43a8-98f5-c0b2f2fb7b19",
      },
      {
        appId: "dolore",
        id: "a276b269-16fe-41f0-8f42-94e3698f447f",
      },
      {
        appId: "ex",
        id: "03e8b445-e80c-4a55-afd2-0e457e1858b6",
      },
      {
        appId: "dolorum",
        id: "89fbe3a5-aa8e-4482-8d0a-b4075088e518",
      },
    ],
  },
  catalogId: "ex",
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceaddappentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `config`                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                        |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceaddappentitlementsresponse.md)>**


## create

 Creates a new request catalog.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.create({
  requestCatalogExpandMask: {
    paths: [
      "sit",
    ],
  },
  description: "vel",
  displayName: "nostrum",
  published: false,
  visibleToEveryone: false,
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [shared.RequestCatalogManagementServiceCreateRequest](../../models/shared/requestcatalogmanagementservicecreaterequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementservicecreateresponse.md)>**


## delete

 Delete a catalog.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.delete({
  requestCatalogManagementServiceDeleteRequest: {},
  id: "e904f3b1-194b-48ab-b603-a79f9dfe0ab7",
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementservicedeleterequest.md) | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementservicedeleteresponse.md)>**


## get

 Get a catalog.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.get({
  id: "da8a50ce-187f-486b-8173-d689eee9526f",
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementservicegetrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementservicegetresponse.md)>**


## listEntitlementsForAccess

 List visibility bindings (access entitlements) for a catalog.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse,
} from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.listEntitlementsForAccess({
  catalogId: "corrupti",
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                          | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                          | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistentitlementsforaccessrequest.md) | :heavy_check_mark:                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                         |
| `config`                                                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                 | Available config options for making requests.                                                                                                                                                                      |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistentitlementsforaccessresponse.md)>**


## listEntitlementsPerCatalog

 List entitlements in a catalog that are requestable.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse,
} from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.listEntitlementsPerCatalog({
  catalogId: "at",
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                            | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistentitlementspercatalogrequest.md) | :heavy_check_mark:                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                           |
| `config`                                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                                        |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistentitlementspercatalogresponse.md)>**


## removeAccessEntitlements

 Remove visibility bindings (access entitlements) to a catalog.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse,
} from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.removeAccessEntitlements({
  requestCatalogManagementServiceRemoveAccessEntitlementsRequest: {
    accessEntitlements: [
      {
        appId: "blanditiis",
        id: "6e881ead-4f0e-4101-a563-f94e29e973e9",
      },
      {
        appId: "consequuntur",
        id: "2a57a15b-e3e0-4608-87e2-b6e3ab8845f0",
      },
      {
        appId: "corporis",
        id: "97a60ff2-a54a-431e-9476-4a3e865e7956",
      },
    ],
  },
  catalogId: "reiciendis",
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceremoveaccessentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `config`                                                                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                               | Available config options for making requests.                                                                                                                                                                    |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceremoveaccessentitlementsresponse.md)>**


## removeAppEntitlements

 Remove requestable entitlements from a catalog.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse,
} from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.removeAppEntitlements({
  requestCatalogManagementServiceRemoveAppEntitlementsRequest: {
    appEntitlements: [
      {
        appId: "aspernatur",
        id: "51a5a9da-660f-4f57-bfaa-d4f9efc1b451",
      },
      {
        appId: "fugit",
        id: "c1032648-dc2f-4615-999e-bfd0e9fe6c63",
      },
      {
        appId: "fugit",
        id: "ca3aed01-1799-4631-afde-04771778ff61",
      },
    ],
  },
  catalogId: "fugiat",
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceremoveappentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `config`                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                              |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceremoveappentitlementsresponse.md)>**


## update

 Update a catalog.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogManagement.update({
  requestCatalogManagementServiceUpdateRequestInput: {
    requestCatalog: {
      accessEntitlements: [
        {
          provisionPolicy: {
            connectorProvision: {},
            delegatedProvision: {
              appId: "dicta",
              entitlementId: "odio",
            },
            manualProvision: {
              instructions: "tempora",
              userIds: [
                "ex",
                "consectetur",
              ],
            },
          },
          appId: "aliquid",
          appResourceId: "ipsa",
          appResourceTypeId: "laborum",
          certifyPolicyId: "sunt",
          complianceFrameworkValueIds: [
            "fugiat",
            "expedita",
          ],
          description: "aliquid",
          displayName: "officia",
          durationGrant: "suscipit",
          durationUnset: {},
          emergencyGrantEnabled: false,
          emergencyGrantPolicyId: "aliquid",
          grantPolicyId: "perferendis",
          revokePolicyId: "eum",
          riskLevelValueId: "voluptas",
          slug: "iste",
        },
      ],
      appIds: [
        "ab",
        "error",
        "possimus",
      ],
      createdByUserId: "voluptates",
      description: "mollitia",
      displayName: "laborum",
      id: "b5851d6c-645b-408b-a189-1baa0fe1ade0",
      published: false,
      visibleToEveryone: false,
    },
    requestCatalogExpandMask: {
      paths: [
        "deleniti",
      ],
    },
    updateMask: "earum",
  },
  id: "6f8c5f35-0d8c-4db5-a341-814301042181",
}).then((res: C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceupdaterequest.md) | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse](../../models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceupdateresponse.md)>**

