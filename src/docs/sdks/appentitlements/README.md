# AppEntitlements
(*appEntitlements*)

### Available Operations

* [get](#get) - Get
* [list](#list) - List
* [listForAppResource](#listforappresource) - List For App Resource
* [listForAppUser](#listforappuser) - List For App User
* [listUsers](#listusers) - List Users
* [update](#update) - Update

## get

Get an app entitlement by ID.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementsGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlements.get({
  appId: "sapiente",
  id: "c2ddf7cc-78ca-41ba-928f-c816742cb739",
}).then((res: C1ApiAppV1AppEntitlementsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.C1ApiAppV1AppEntitlementsGetRequest](../../models/operations/c1apiappv1appentitlementsgetrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsGetResponse](../../models/operations/c1apiappv1appentitlementsgetresponse.md)>**


## list

List app entitlements associated with an app.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementsListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlements.list({
  appId: "aspernatur",
  pageSize: 187.89,
  pageToken: "ad",
}).then((res: C1ApiAppV1AppEntitlementsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.C1ApiAppV1AppEntitlementsListRequest](../../models/operations/c1apiappv1appentitlementslistrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsListResponse](../../models/operations/c1apiappv1appentitlementslistresponse.md)>**


## listForAppResource

List app entitlements associated with an app resource.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementsListForAppResourceResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlements.listForAppResource({
  appId: "natus",
  appResourceId: "sed",
  appResourceTypeId: "iste",
  pageSize: 2223.21,
  pageToken: "natus",
}).then((res: C1ApiAppV1AppEntitlementsListForAppResourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementsListForAppResourceRequest](../../models/operations/c1apiappv1appentitlementslistforappresourcerequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsListForAppResourceResponse](../../models/operations/c1apiappv1appentitlementslistforappresourceresponse.md)>**


## listForAppUser

List app entitlements associated with an app user.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementsListForAppUserResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlements.listForAppUser({
  appId: "laboriosam",
  appUserId: "hic",
  pageSize: 9025.99,
  pageToken: "fuga",
}).then((res: C1ApiAppV1AppEntitlementsListForAppUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.C1ApiAppV1AppEntitlementsListForAppUserRequest](../../models/operations/c1apiappv1appentitlementslistforappuserrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsListForAppUserResponse](../../models/operations/c1apiappv1appentitlementslistforappuserresponse.md)>**


## listUsers

List the users, as AppEntitlementUsers objects, of an app entitlement.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementsListUsersResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlements.listUsers({
  appEntitlementId: "in",
  appId: "corporis",
  pageSize: 6130.64,
  pageToken: "iure",
}).then((res: C1ApiAppV1AppEntitlementsListUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.C1ApiAppV1AppEntitlementsListUsersRequest](../../models/operations/c1apiappv1appentitlementslistusersrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsListUsersResponse](../../models/operations/c1apiappv1appentitlementslistusersresponse.md)>**


## update

Update an app entitlement by ID.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementsUpdateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlements.update({
  updateAppEntitlementRequestInput: {
    appEntitlement: {
      provisionPolicy: {
        connectorProvision: {},
        delegatedProvision: {
          appId: "saepe",
          entitlementId: "quidem",
        },
        manualProvision: {
          instructions: "architecto",
          userIds: [
            "ipsa",
          ],
        },
      },
      appId: "reiciendis",
      appResourceId: "est",
      appResourceTypeId: "mollitia",
      certifyPolicyId: "laborum",
      complianceFrameworkValueIds: [
        "dolores",
      ],
      description: "dolorem",
      displayName: "corporis",
      durationGrant: "explicabo",
      durationUnset: {},
      emergencyGrantEnabled: false,
      emergencyGrantPolicyId: "nobis",
      grantPolicyId: "enim",
      revokePolicyId: "omnis",
      riskLevelValueId: "nemo",
      slug: "minima",
    },
    appEntitlementExpandMask: {
      paths: [
        "excepturi",
      ],
    },
    updateMask: "accusantium",
  },
  appId: "iure",
  id: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
}).then((res: C1ApiAppV1AppEntitlementsUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.C1ApiAppV1AppEntitlementsUpdateRequest](../../models/operations/c1apiappv1appentitlementsupdaterequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsUpdateResponse](../../models/operations/c1apiappv1appentitlementsupdateresponse.md)>**

