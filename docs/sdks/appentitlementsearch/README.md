# appEntitlementSearch

### Available Operations

* [search](#search) - Search

## search

Search app entitlements based on filters specified in the request body.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementSearchServiceSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlementSearch.search({
  appEntitlementExpandMask: {
    paths: [
      "delectus",
    ],
  },
  accessReviewId: "tempora",
  alias: "suscipit",
  appIds: [
    "molestiae",
  ],
  appUserIds: [
    "minus",
  ],
  complianceFrameworkIds: [
    "placeat",
  ],
  excludeAppIds: [
    "voluptatum",
  ],
  excludeAppUserIds: [
    "iusto",
  ],
  onlyGetExpiring: false,
  pageSize: 5680.45,
  pageToken: "nisi",
  query: "recusandae",
  resourceTypeIds: [
    "temporibus",
  ],
  riskLevelIds: [
    "ab",
  ],
}).then((res: C1ApiAppV1AppEntitlementSearchServiceSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [shared.AppEntitlementSearchServiceSearchRequest](../../models/shared/appentitlementsearchservicesearchrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementSearchServiceSearchResponse](../../models/operations/c1apiappv1appentitlementsearchservicesearchresponse.md)>**

