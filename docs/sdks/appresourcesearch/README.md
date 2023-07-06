# appResourceSearch

### Available Operations

* [searchAppResourceTypes](#searchappresourcetypes) - Invokes the c1.api.app.v1.AppResourceSearch.SearchAppResourceTypes method.

## searchAppResourceTypes

Invokes the c1.api.app.v1.AppResourceSearch.SearchAppResourceTypes method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript();

sdk.appResourceSearch.searchAppResourceTypes({
  appIds: [
    "quidem",
    "architecto",
    "ipsa",
    "reiciendis",
  ],
  excludeResourceTypeIds: [
    "mollitia",
    "laborum",
    "dolores",
  ],
  excludeResourceTypeTraitIds: [
    "corporis",
  ],
  pageSize: 1289.26,
  pageToken: "nobis",
  query: "enim",
  resourceTypeIds: [
    "nemo",
    "minima",
    "excepturi",
  ],
  resourceTypeTraitIds: [
    "iure",
  ],
}).then((res: C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.SearchAppResourceTypesRequest](../../models/shared/searchappresourcetypesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse](../../models/operations/c1apiappv1appresourcesearchsearchappresourcetypesresponse.md)>**

