# AppEntitlementSearch

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
      "molestiae",
    ],
  },
  accessReviewId: "minus",
  alias: "placeat",
  appIds: [
    "voluptatum",
  ],
  appUserIds: [
    "iusto",
  ],
  complianceFrameworkIds: [
    "excepturi",
  ],
  excludeAppIds: [
    "nisi",
  ],
  excludeAppUserIds: [
    "recusandae",
  ],
  includeDeleted: false,
  onlyGetExpiring: false,
  pageSize: 8360.79,
  pageToken: "ab",
  query: "quis",
  resourceTypeIds: [
    "veritatis",
  ],
  riskLevelIds: [
    "deserunt",
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

