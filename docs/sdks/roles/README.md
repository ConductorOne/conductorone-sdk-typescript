# roles

### Available Operations

* [get](#get) - Get
* [list](#list) - List
* [update](#update) - Update

## get

 Get a role by id.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiIamV1RolesGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.roles.get({
  roleId: "impedit",
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

 List all roles for the current user.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiIamV1RolesListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

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

 Update a role by passing a Role object.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiIamV1RolesUpdateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.roles.update({
  updateRoleRequestInput: {
    role: {
      displayName: "officiis",
      permissions: [
        "necessitatibus",
        "sed",
      ],
      serviceRoles: [
        "nesciunt",
        "expedita",
      ],
    },
    updateMask: "eum",
  },
  roleId: "vel",
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

