# appSearch

### Available Operations

* [search](#search) - Search

## search

 Search apps based on filters specified in the request body.


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
    "dolor",
    "necessitatibus",
  ],
  displayName: "odit",
  excludeAppIds: [
    "quasi",
    "iure",
  ],
  pageSize: 9840.43,
  pageToken: "debitis",
  query: "eius",
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

