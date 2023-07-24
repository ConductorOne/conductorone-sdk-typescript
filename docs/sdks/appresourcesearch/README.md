# appResourceSearch

### Available Operations

* [searchAppResourceTypes](#searchappresourcetypes) - Search App Resource Types

## searchAppResourceTypes

Invokes the c1.api.app.v1.AppResourceSearch.SearchAppResourceTypes method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appResourceSearch.searchAppResourceTypes({
  appIds: [
    "molestiae",
    "perferendis",
    "nihil",
  ],
  excludeResourceTypeIds: [
    "distinctio",
    "id",
  ],
  excludeResourceTypeTraitIds: [
    "labore",
    "suscipit",
  ],
  pageSize: 6180.16,
  pageToken: "nobis",
  query: "eum",
  resourceTypeIds: [
    "aspernatur",
    "architecto",
    "magnam",
    "et",
  ],
  resourceTypeTraitIds: [
    "ullam",
    "provident",
    "quos",
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

