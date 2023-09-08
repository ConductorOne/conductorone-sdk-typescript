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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.requestCatalogManagement.addAccessEntitlements({
  requestCatalogManagementServiceAddAccessEntitlementsRequest: {
    accessEntitlements: [
      {
        appId: "quos",
        id: "64dbb675-fd5e-460b-b75e-d4f6fbee41f3",
      },
    ],
  },
  catalogId: "non",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.requestCatalogManagement.addAppEntitlements({
  requestCatalogManagementServiceAddAppEntitlementsRequest: {
    appEntitlements: [
      {
        appId: "amet",
        id: "17fe35b6-0eb1-4ea4-a655-5ba3c28744ed",
      },
    ],
  },
  catalogId: "ullam",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.requestCatalogManagement.create({
  requestCatalogExpandMask: {
    paths: [
      "adipisci",
    ],
  },
  description: "cum",
  displayName: "blanditiis",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.requestCatalogManagement.delete({
  requestCatalogManagementServiceDeleteRequest: {},
  id: "8f3a8d8f-5c0b-42f2-bb7b-194a276b2691",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.requestCatalogManagement.get({
  id: "6fe1f08f-4294-4e36-98f4-47f603e8b445",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.requestCatalogManagement.listEntitlementsForAccess({
  catalogId: "debitis",
  pageSize: 5249.7,
  pageToken: "sit",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.requestCatalogManagement.listEntitlementsPerCatalog({
  catalogId: "nobis",
  pageSize: 6256.37,
  pageToken: "veniam",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.requestCatalogManagement.removeAccessEntitlements({
  requestCatalogManagementServiceRemoveAccessEntitlementsRequest: {
    accessEntitlements: [
      {
        appId: "minima",
        id: "efd20e45-7e18-458b-aa89-fbe3a5aa8e48",
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
    bearerAuth: "",
    oauth: "",
  },
});

sdk.requestCatalogManagement.removeAppEntitlements({
  requestCatalogManagementServiceRemoveAppEntitlementsRequest: {
    appEntitlements: [
      {
        appId: "ut",
        id: "d0ab4075-088e-4518-a206-5e904f3b1194",
      },
    ],
  },
  catalogId: "quidem",
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
    bearerAuth: "",
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
              appId: "atque",
              entitlementId: "laborum",
            },
            manualProvision: {
              instructions: "nam",
              userIds: [
                "tenetur",
              ],
            },
          },
          appId: "laboriosam",
          appResourceId: "alias",
          appResourceTypeId: "amet",
          certifyPolicyId: "deserunt",
          complianceFrameworkValueIds: [
            "voluptate",
          ],
          description: "unde",
          displayName: "reiciendis",
          durationGrant: "provident",
          durationUnset: {},
          emergencyGrantEnabled: false,
          emergencyGrantPolicyId: "repellendus",
          grantPolicyId: "delectus",
          revokePolicyId: "voluptates",
          riskLevelValueId: "perferendis",
          slug: "est",
        },
      ],
      appIds: [
        "quidem",
      ],
      createdByUserId: "reprehenderit",
      description: "facere",
      displayName: "fuga",
      id: "8a50ce18-7f86-4bc1-b3d6-89eee9526f8d",
      published: false,
      visibleToEveryone: false,
    },
    requestCatalogExpandMask: {
      paths: [
        "error",
      ],
    },
    updateMask: "blanditiis",
  },
  id: "6e881ead-4f0e-4101-a563-f94e29e973e9",
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

