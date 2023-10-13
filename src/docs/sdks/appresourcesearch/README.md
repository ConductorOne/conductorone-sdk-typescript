# AppResourceSearch
(*appResourceSearch*)

### Available Operations

* [searchAppResourceTypes](#searchappresourcetypes) - Search App Resource Types

## searchAppResourceTypes

Search app resources based on filters specified in the request body.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appResourceSearch.searchAppResourceTypes({
  appIds: [
    "quibusdam",
  ],
  excludeResourceTypeIds: [
    "labore",
  ],
  excludeResourceTypeTraitIds: [
    "modi",
  ],
  pageSize: 1831.91,
  pageToken: "aliquid",
  query: "cupiditate",
  resourceTypeIds: [
    "quos",
  ],
  resourceTypeTraitIds: [
    "perferendis",
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

