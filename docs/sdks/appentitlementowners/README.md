# appEntitlementOwners

### Available Operations

* [add](#add) - Add
* [list](#list) - List
* [remove](#remove) - Remove
* [set](#set) - Set

## add

Add an owner to a given app entitlement.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementOwnersAddResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlementOwners.add({
  addAppEntitlementOwnerRequest: {
    userId: "quibusdam",
  },
  appId: "unde",
  entitlementId: "nulla",
}).then((res: C1ApiAppV1AppEntitlementOwnersAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.C1ApiAppV1AppEntitlementOwnersAddRequest](../../models/operations/c1apiappv1appentitlementownersaddrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementOwnersAddResponse](../../models/operations/c1apiappv1appentitlementownersaddresponse.md)>**


## list

List owners for a given app entitlement.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementOwnersListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlementOwners.list({
  appId: "corrupti",
  entitlementId: "illum",
  pageSize: 4236.55,
  pageToken: "error",
}).then((res: C1ApiAppV1AppEntitlementOwnersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.C1ApiAppV1AppEntitlementOwnersListRequest](../../models/operations/c1apiappv1appentitlementownerslistrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementOwnersListResponse](../../models/operations/c1apiappv1appentitlementownerslistresponse.md)>**


## remove

Remove an owner from a given app entitlement.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementOwnersRemoveResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlementOwners.remove({
  removeAppEntitlementOwnerRequest: {},
  appId: "deserunt",
  entitlementId: "suscipit",
  userId: "iure",
}).then((res: C1ApiAppV1AppEntitlementOwnersRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.C1ApiAppV1AppEntitlementOwnersRemoveRequest](../../models/operations/c1apiappv1appentitlementownersremoverequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementOwnersRemoveResponse](../../models/operations/c1apiappv1appentitlementownersremoveresponse.md)>**


## set

Sets the owners for a given app entitlement to the specified list of users.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementOwnersSetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlementOwners.set({
  setAppEntitlementOwnersRequest: {
    userIds: [
      "magnam",
    ],
  },
  appId: "debitis",
  entitlementId: "ipsa",
}).then((res: C1ApiAppV1AppEntitlementOwnersSetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.C1ApiAppV1AppEntitlementOwnersSetRequest](../../models/operations/c1apiappv1appentitlementownerssetrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementOwnersSetResponse](../../models/operations/c1apiappv1appentitlementownerssetresponse.md)>**

