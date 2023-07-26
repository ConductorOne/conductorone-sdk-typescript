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
        appId: "explicabo",
        id: "fb7b194a-276b-4269-96fe-1f08f4294e36",
      },
      {
        appId: "occaecati",
        id: "8f447f60-3e8b-4445-a80c-a55efd20e457",
      },
      {
        appId: "officiis",
        id: "1858b6a8-9fbe-43a5-aa8e-4824d0ab4075",
      },
      {
        appId: "sit",
        id: "88e51862-065e-4904-b3b1-194b8abf603a",
      },
    ],
  },
  catalogId: "voluptate",
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
        appId: "reiciendis",
        id: "9dfe0ab7-da8a-450c-a187-f86bc173d689",
      },
      {
        appId: "officiis",
        id: "ee9526f8-d986-4e88-9ead-4f0e1012563f",
      },
      {
        appId: "molestias",
        id: "4e29e973-e922-4a57-a15b-e3e060807e2b",
      },
    ],
  },
  catalogId: "iure",
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
      "ratione",
      "laborum",
      "distinctio",
      "voluptatum",
    ],
  },
  description: "rem",
  displayName: "aliquam",
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
  id: "5f0597a6-0ff2-4a54-a31e-94764a3e865e",
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
  id: "7956f925-1a5a-49da-a60f-f57bfaad4f9e",
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
  catalogId: "sapiente",
  pageSize: 7645.62,
  pageToken: "vitae",
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
  catalogId: "rerum",
  pageSize: 2722.29,
  pageToken: "quis",
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
        appId: "fugit",
        id: "c1032648-dc2f-4615-999e-bfd0e9fe6c63",
      },
    ],
  },
  catalogId: "fugit",
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
        appId: "fuga",
        id: "3aed0117-9963-412f-9e04-771778ff61d0",
      },
      {
        appId: "dicta",
        id: "7476360a-15db-46a6-a065-9a1adeaab585",
      },
      {
        appId: "vitae",
        id: "d6c645b0-8b61-4891-baa0-fe1ade008e6f",
      },
      {
        appId: "rem",
        id: "c5f350d8-cdb5-4a34-9814-3010421813d5",
      },
    ],
  },
  catalogId: "consequuntur",
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
              appId: "quas",
              entitlementId: "eveniet",
            },
            manualProvision: {
              instructions: "impedit",
              userIds: [
                "esse",
                "necessitatibus",
                "sed",
                "veniam",
              ],
            },
          },
          appId: "nesciunt",
          appResourceId: "expedita",
          appResourceTypeId: "eum",
          certifyPolicyId: "vel",
          complianceFrameworkValueIds: [
            "magnam",
            "exercitationem",
            "ab",
          ],
          description: "porro",
          displayName: "autem",
          durationGrant: "nobis",
          durationUnset: {},
          emergencyGrantEnabled: false,
          emergencyGrantPolicyId: "laboriosam",
          grantPolicyId: "recusandae",
          revokePolicyId: "consequuntur",
          riskLevelValueId: "voluptatem",
          slug: "exercitationem",
        },
      ],
      appIds: [
        "quasi",
        "nisi",
        "at",
        "vero",
      ],
      createdByUserId: "est",
      description: "harum",
      displayName: "sequi",
      id: "fec9578a-6458-4427-ba84-18d162309fb0",
      published: false,
      visibleToEveryone: false,
    },
    requestCatalogExpandMask: {
      paths: [
        "eos",
        "occaecati",
        "iste",
      ],
    },
    updateMask: "magni",
  },
  id: "1aefb9f5-8c4d-486e-a8e4-be056013f59d",
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

