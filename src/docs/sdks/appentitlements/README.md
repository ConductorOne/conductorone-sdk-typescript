# appEntitlements

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
  appId: "perferendis",
  id: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
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
  appId: "esse",
  pageSize: 2165.5,
  pageToken: "excepturi",
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
  appId: "aspernatur",
  appResourceId: "perferendis",
  appResourceTypeId: "ad",
  pageSize: 6176.36,
  pageToken: "sed",
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
  appId: "iste",
  appUserId: "dolor",
  pageSize: 6169.34,
  pageToken: "laboriosam",
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
  appEntitlementId: "hic",
  appId: "saepe",
  pageSize: 6818.2,
  pageToken: "in",
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
          appId: "corporis",
          entitlementId: "iste",
        },
        manualProvision: {
          instructions: "iure",
          userIds: [
            "saepe",
          ],
        },
      },
      appId: "quidem",
      appResourceId: "architecto",
      appResourceTypeId: "ipsa",
      certifyPolicyId: "reiciendis",
      complianceFrameworkValueIds: [
        "est",
      ],
      description: "mollitia",
      displayName: "laborum",
      durationGrant: "dolores",
      durationUnset: {},
      emergencyGrantEnabled: false,
      emergencyGrantPolicyId: "dolorem",
      grantPolicyId: "corporis",
      revokePolicyId: "explicabo",
      riskLevelValueId: "nobis",
      slug: "enim",
    },
    appEntitlementExpandMask: {
      paths: [
        "omnis",
      ],
    },
    updateMask: "nemo",
  },
  appId: "minima",
  id: "907aff1a-3a2f-4a94-a773-9251aa52c3f5",
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

