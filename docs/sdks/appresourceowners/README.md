# appResourceOwners

### Available Operations

* [list](#list) - List

## list

 List all owners of an app resource.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppResourceOwnersListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appResourceOwners.list({
  appId: "dolor",
  resourceId: "debitis",
  resourceTypeId: "a",
}).then((res: C1ApiAppV1AppResourceOwnersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.C1ApiAppV1AppResourceOwnersListRequest](../../models/operations/c1apiappv1appresourceownerslistrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.C1ApiAppV1AppResourceOwnersListResponse](../../models/operations/c1apiappv1appresourceownerslistresponse.md)>**

