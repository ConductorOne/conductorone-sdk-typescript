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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.AddAccessEntitlements method.

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
        appId: "facilis",
        id: "b675fd5e-60b3-475e-94f6-fbee41f33317",
      },
      {
        appId: "a",
        id: "e35b60eb-1ea4-4265-95ba-3c28744ed53b",
      },
      {
        appId: "blanditiis",
        id: "8f3a8d8f-5c0b-42f2-bb7b-194a276b2691",
      },
      {
        appId: "suscipit",
        id: "fe1f08f4-294e-4369-8f44-7f603e8b445e",
      },
    ],
  },
  catalogId: "rem",
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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.AddAppEntitlements method.

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
        appId: "nobis",
        id: "a55efd20-e457-4e18-98b6-a89fbe3a5aa8",
      },
    ],
  },
  catalogId: "accusamus",
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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.Create method.

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
      "atque",
      "fugit",
    ],
  },
  description: "ut",
  displayName: "fugiat",
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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.Delete method.

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
  id: "0ab40750-88e5-4186-a065-e904f3b1194b",
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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.Get method.

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
  id: "8abf603a-79f9-4dfe-8ab7-da8a50ce187f",
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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.ListEntitlementsForAccess method.

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
  catalogId: "totam",
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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.ListEntitlementsPerCatalog method.

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
  catalogId: "suscipit",
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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.RemoveAccessEntitlements method.

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
        appId: "maxime",
        id: "173d689e-ee95-426f-8d98-6e881ead4f0e",
      },
      {
        appId: "dicta",
        id: "012563f9-4e29-4e97-be92-2a57a15be3e0",
      },
      {
        appId: "iure",
        id: "0807e2b6-e3ab-4884-9f05-97a60ff2a54a",
      },
    ],
  },
  catalogId: "nesciunt",
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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.RemoveAppEntitlements method.

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
        appId: "recusandae",
        id: "94764a3e-865e-4795-af92-51a5a9da660f",
      },
    ],
  },
  catalogId: "doloribus",
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

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.Update method.

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
              appId: "in",
              entitlementId: "nam",
            },
            manualProvision: {
              instructions: "earum",
              userIds: [
                "laborum",
                "placeat",
                "modi",
              ],
            },
          },
          appId: "voluptatibus",
          appResourceId: "molestias",
          appResourceTypeId: "officiis",
          certifyPolicyId: "sapiente",
          complianceFrameworkValueIds: [
            "vitae",
            "rerum",
            "tempora",
            "quis",
          ],
          description: "inventore",
          displayName: "fugit",
          durationGrant: "cumque",
          durationUnset: {},
          emergencyGrantEnabled: false,
          emergencyGrantPolicyId: "quae",
          grantPolicyId: "perferendis",
          revokePolicyId: "velit",
          riskLevelValueId: "aspernatur",
          slug: "eum",
        },
        {
          provisionPolicy: {
            connectorProvision: {},
            delegatedProvision: {
              appId: "eius",
              entitlementId: "rem",
            },
            manualProvision: {
              instructions: "at",
              userIds: [
                "eos",
                "sapiente",
                "eum",
                "dicta",
              ],
            },
          },
          appId: "minima",
          appResourceId: "beatae",
          appResourceTypeId: "cupiditate",
          certifyPolicyId: "provident",
          complianceFrameworkValueIds: [
            "soluta",
            "hic",
            "illum",
            "eaque",
          ],
          description: "earum",
          displayName: "perspiciatis",
          durationGrant: "maiores",
          durationUnset: {},
          emergencyGrantEnabled: false,
          emergencyGrantPolicyId: "debitis",
          grantPolicyId: "aliquid",
          revokePolicyId: "porro",
          riskLevelValueId: "suscipit",
          slug: "dolorem",
        },
      ],
      appIds: [
        "cumque",
      ],
      createdByUserId: "fuga",
      description: "ratione",
      displayName: "animi",
      id: "ed011799-6312-4fde-8477-1778ff61d017",
      published: false,
      visibleToEveryone: false,
    },
    requestCatalogExpandMask: {
      paths: [
        "esse",
        "ex",
      ],
    },
    updateMask: "consectetur",
  },
  id: "60a15db6-a660-4659-a1ad-eaab5851d6c6",
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

