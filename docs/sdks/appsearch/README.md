# appSearch

### Available Operations

* [search](#search) - Search

## search

Invokes the c1.api.app.v1.AppSearch.Search method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppSearchSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appSearch.search({
  appIds: [
    "natus",
    "magni",
    "sunt",
  ],
  displayName: "quo",
  excludeAppIds: [
    "pariatur",
    "maxime",
    "ea",
    "excepturi",
  ],
  pageSize: 1399.72,
  pageToken: "ea",
  query: "accusantium",
}).then((res: C1ApiAppV1AppSearchSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.SearchAppsRequest](../../models/shared/searchappsrequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.C1ApiAppV1AppSearchSearchResponse](../../models/operations/c1apiappv1appsearchsearchresponse.md)>**
