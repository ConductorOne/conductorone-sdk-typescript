# user

### Available Operations

* [get](#get) - Get
* [list](#list) - List

## get

 Get a user by ID.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiUserV1UserServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.user.get({
  id: "e139dbc2-259b-41ab-9a8c-070e1084cb06",
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

 List users.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiUserV1UserServiceListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

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

