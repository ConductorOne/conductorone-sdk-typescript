<!-- Start SDK Example Usage -->


```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementSearchServiceSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.appEntitlementSearch.search({
  appEntitlementExpandMask: {
    paths: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  accessReviewId: "unde",
  alias: "nulla",
  appIds: [
    "illum",
    "vel",
    "error",
  ],
  appUserIds: [
    "suscipit",
    "iure",
    "magnam",
  ],
  complianceFrameworkIds: [
    "ipsa",
    "delectus",
    "tempora",
    "suscipit",
  ],
  excludeAppIds: [
    "minus",
    "placeat",
  ],
  excludeAppUserIds: [
    "iusto",
    "excepturi",
    "nisi",
  ],
  onlyGetExpiring: false,
  pageSize: 9255.97,
  pageToken: "temporibus",
  query: "ab",
  resourceTypeIds: [
    "veritatis",
    "deserunt",
  ],
  riskLevelIds: [
    "ipsam",
  ],
}).then((res: C1ApiAppV1AppEntitlementSearchServiceSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->