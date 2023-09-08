<!-- Start SDK Example Usage -->


```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1AppEntitlementOwnersAddResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlementOwners.add({
  addAppEntitlementOwnerRequest: {
    userId: "corrupti",
  },
  appId: "provident",
  entitlementId: "distinctio",
}).then((res: C1ApiAppV1AppEntitlementOwnersAddResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->