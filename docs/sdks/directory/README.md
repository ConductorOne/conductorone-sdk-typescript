# directory

### Available Operations

* [create](#create) - Create
* [delete](#delete) - Delete
* [get](#get) - Get
* [list](#list) - List

## create

 Create a directory.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiDirectoryV1DirectoryServiceCreateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.directory.create({
  directoryExpandMask: {
    paths: [
      "accusantium",
      "porro",
    ],
  },
  appId: "eum",
}).then((res: C1ApiDirectoryV1DirectoryServiceCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.DirectoryServiceCreateRequest](../../models/shared/directoryservicecreaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.C1ApiDirectoryV1DirectoryServiceCreateResponse](../../models/operations/c1apidirectoryv1directoryservicecreateresponse.md)>**


## delete

 Delete a directory by app_id.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiDirectoryV1DirectoryServiceDeleteResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.directory.delete({
  directoryServiceDeleteRequest: {},
  appId: "quas",
}).then((res: C1ApiDirectoryV1DirectoryServiceDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.C1ApiDirectoryV1DirectoryServiceDeleteRequest](../../models/operations/c1apidirectoryv1directoryservicedeleterequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.C1ApiDirectoryV1DirectoryServiceDeleteResponse](../../models/operations/c1apidirectoryv1directoryservicedeleteresponse.md)>**


## get

 Get a directory by app_id.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiDirectoryV1DirectoryServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.directory.get({
  appId: "praesentium",
}).then((res: C1ApiDirectoryV1DirectoryServiceGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.C1ApiDirectoryV1DirectoryServiceGetRequest](../../models/operations/c1apidirectoryv1directoryservicegetrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.C1ApiDirectoryV1DirectoryServiceGetResponse](../../models/operations/c1apidirectoryv1directoryservicegetresponse.md)>**


## list

 List directories.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiDirectoryV1DirectoryServiceListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.directory.list().then((res: C1ApiDirectoryV1DirectoryServiceListResponse) => {
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

**Promise<[operations.C1ApiDirectoryV1DirectoryServiceListResponse](../../models/operations/c1apidirectoryv1directoryservicelistresponse.md)>**

