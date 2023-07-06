# roles

### Available Operations

* [get](#get) - Invokes the c1.api.iam.v1.Roles.Get method.
* [list](#list) - Invokes the c1.api.iam.v1.Roles.List method.
* [update](#update) - Invokes the c1.api.iam.v1.Roles.Update method.

## get

Invokes the c1.api.iam.v1.Roles.Get method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiIamV1RolesGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript();

sdk.roles.get({
  roleId: "vel",
}).then((res: C1ApiIamV1RolesGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.C1ApiIamV1RolesGetRequest](../../models/operations/c1apiiamv1rolesgetrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.C1ApiIamV1RolesGetResponse](../../models/operations/c1apiiamv1rolesgetresponse.md)>**


## list

Invokes the c1.api.iam.v1.Roles.List method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiIamV1RolesListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript();

sdk.roles.list().then((res: C1ApiIamV1RolesListResponse) => {
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

**Promise<[operations.C1ApiIamV1RolesListResponse](../../models/operations/c1apiiamv1roleslistresponse.md)>**


## update

Invokes the c1.api.iam.v1.Roles.Update method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiIamV1RolesUpdateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript();

sdk.roles.update({
  updateRoleRequest: {
    role: {
      createdAt: new Date("2022-01-20T13:10:25.426Z"),
      deletedAt: new Date("2021-11-03T10:56:47.600Z"),
      displayName: "minima",
      id: "bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1",
      name: "Ann Murphy",
      permissions: [
        "quae",
        "earum",
        "vel",
        "in",
      ],
      serviceRoles: [
        "libero",
        "illum",
      ],
      systemBuiltin: false,
      updatedAt: new Date("2022-12-07T16:30:09.640Z"),
    },
    updateMask: "aliquam",
  },
  roleId: "sapiente",
}).then((res: C1ApiIamV1RolesUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.C1ApiIamV1RolesUpdateRequest](../../models/operations/c1apiiamv1rolesupdaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.C1ApiIamV1RolesUpdateResponse](../../models/operations/c1apiiamv1rolesupdateresponse.md)>**

