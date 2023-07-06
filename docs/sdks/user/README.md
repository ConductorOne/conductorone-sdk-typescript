# user

### Available Operations

* [get](#get) - Invokes the c1.api.user.v1.UserService.Get method.
* [list](#list) - Invokes the c1.api.user.v1.UserService.List method.

## get

Invokes the c1.api.user.v1.UserService.Get method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiUserV1UserServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { UserDirectoryStatus, UserStatus } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.user.get({
  id: "3d689eee-9526-4f8d-986e-881ead4f0e10",
}).then((res: C1ApiUserV1UserServiceGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.C1ApiUserV1UserServiceGetRequest](../../models/operations/c1apiuserv1userservicegetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.C1ApiUserV1UserServiceGetResponse](../../models/operations/c1apiuserv1userservicegetresponse.md)>**


## list

Invokes the c1.api.user.v1.UserService.List method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiUserV1UserServiceListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { UserDirectoryStatus, UserStatus } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.user.list().then((res: C1ApiUserV1UserServiceListResponse) => {
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

**Promise<[operations.C1ApiUserV1UserServiceListResponse](../../models/operations/c1apiuserv1userservicelistresponse.md)>**

