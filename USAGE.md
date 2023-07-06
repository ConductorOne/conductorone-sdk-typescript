<!-- Start SDK Example Usage -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import {
  C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse,
} from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript();

sdk.appEntitlementUserBinding.listAppUsersForIdentityWithGrant({
  appEntitlementId: "corrupti",
  appId: "provident",
  identityUserId: "distinctio",
}).then((res: C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->