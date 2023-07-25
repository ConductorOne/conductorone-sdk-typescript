# appOwners

### Available Operations

* [add](#add) - Add
* [list](#list) - List
* [remove](#remove) - Remove

## add

 Adds an owner to an app.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppOwnersAddResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appOwners.add({
  addAppOwnerRequest: {},
  appId: "quasi",
  userId: "repudiandae",
}).then((res: C1ApiAppV1AppOwnersAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.C1ApiAppV1AppOwnersAddRequest](../../models/operations/c1apiappv1appownersaddrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.C1ApiAppV1AppOwnersAddResponse](../../models/operations/c1apiappv1appownersaddresponse.md)>**


## list

 List owners of an app.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppOwnersListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appOwners.list({
  appId: "sint",
}).then((res: C1ApiAppV1AppOwnersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.C1ApiAppV1AppOwnersListRequest](../../models/operations/c1apiappv1appownerslistrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.C1ApiAppV1AppOwnersListResponse](../../models/operations/c1apiappv1appownerslistresponse.md)>**


## remove

 Removes an owner from an app.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppOwnersRemoveResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appOwners.remove({
  removeAppOwnerRequest: {},
  appId: "veritatis",
  userId: "itaque",
}).then((res: C1ApiAppV1AppOwnersRemoveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.C1ApiAppV1AppOwnersRemoveRequest](../../models/operations/c1apiappv1appownersremoverequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.C1ApiAppV1AppOwnersRemoveResponse](../../models/operations/c1apiappv1appownersremoveresponse.md)>**

