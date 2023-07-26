# appEntitlements

### Available Operations

* [get](#get) - Get
* [list](#list) - List
* [listForAppResource](#listforappresource) - List For App Resource
* [listForAppUser](#listforappuser) - List For App User
* [listGroups](#listgroups) - List Groups
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
    oauth: "",
  },
});

sdk.appEntitlements.get({
  appId: "iste",
  id: "396fea75-96eb-410f-aaa2-352c5955907a",
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
    oauth: "",
  },
});

sdk.appEntitlements.list({
  appId: "doloribus",
  pageSize: 9589.5,
  pageToken: "architecto",
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
    oauth: "",
  },
});

sdk.appEntitlements.listForAppResource({
  appId: "mollitia",
  appResourceId: "dolorem",
  appResourceTypeId: "culpa",
  pageSize: 1613.09,
  pageToken: "repellat",
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
    oauth: "",
  },
});

sdk.appEntitlements.listForAppUser({
  appId: "mollitia",
  appUserId: "occaecati",
  pageSize: 2532.91,
  pageToken: "commodi",
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


## listGroups

 List app groups associated with an app entitlement.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementsListGroupsResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appEntitlements.listGroups({
  appEntitlementId: "quam",
  appId: "molestiae",
  pageSize: 2444.25,
  pageToken: "error",
}).then((res: C1ApiAppV1AppEntitlementsListGroupsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.C1ApiAppV1AppEntitlementsListGroupsRequest](../../models/operations/c1apiappv1appentitlementslistgroupsrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsListGroupsResponse](../../models/operations/c1apiappv1appentitlementslistgroupsresponse.md)>**


## listUsers

 List the users, as AppEntitlementUsers objects, of an app entitlement.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementsListUsersResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appEntitlements.listUsers({
  appEntitlementId: "quia",
  appId: "quis",
  pageSize: 1103.75,
  pageToken: "laborum",
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
    oauth: "",
  },
});

sdk.appEntitlements.update({
  updateAppEntitlementRequestInput: {
    appEntitlement: {
      provisionPolicy: {
        connectorProvision: {},
        delegatedProvision: {
          appId: "animi",
          entitlementId: "enim",
        },
        manualProvision: {
          instructions: "odit",
          userIds: [
            "sequi",
            "tenetur",
            "ipsam",
            "id",
          ],
        },
      },
      appId: "possimus",
      appResourceId: "aut",
      appResourceTypeId: "quasi",
      certifyPolicyId: "error",
      complianceFrameworkValueIds: [
        "laborum",
        "quasi",
        "reiciendis",
        "voluptatibus",
      ],
      description: "vero",
      displayName: "nihil",
      durationGrant: "praesentium",
      durationUnset: {},
      emergencyGrantEnabled: false,
      emergencyGrantPolicyId: "voluptatibus",
      grantPolicyId: "ipsa",
      revokePolicyId: "omnis",
      riskLevelValueId: "voluptate",
      slug: "cum",
    },
    appEntitlementExpandMask: {
      paths: [
        "doloremque",
      ],
    },
    updateMask: "reprehenderit",
  },
  appId: "ut",
  id: "f15471b5-e6e1-43b9-9d48-8e1e91e450ad",
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

