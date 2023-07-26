# requestCatalogSearch

### Available Operations

* [searchEntitlements](#searchentitlements) - Search Entitlements

## searchEntitlements

 Search request catalogs based on filters specified in the request body.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { RequestCatalogSearchServiceSearchEntitlementsRequestGrantedStatus } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.requestCatalogSearch.searchEntitlements({
  appEntitlementExpandMask: {
    paths: [
      "esse",
      "nemo",
      "reprehenderit",
    ],
  },
  entitlementAlias: "est",
  grantedStatus: RequestCatalogSearchServiceSearchEntitlementsRequestGrantedStatus.All,
  pageSize: 5718.44,
  pageToken: "accusamus",
  query: "impedit",
}).then((res: C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [shared.RequestCatalogSearchServiceSearchEntitlementsRequest](../../models/shared/requestcatalogsearchservicesearchentitlementsrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse](../../models/operations/c1apirequestcatalogv1requestcatalogsearchservicesearchentitlementsresponse.md)>**

