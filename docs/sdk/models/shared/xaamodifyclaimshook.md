# XAAModifyClaimsHook

XAAModifyClaimsHook registers a tenant Function invoked just before a grant
 is signed. The function may deny issuance or narrow the outgoing claims. It
 always runs blocking and fails closed: any error, timeout, or invalid result
 denies the grant.

## Example Usage

```typescript
import { XAAModifyClaimsHook } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAModifyClaimsHook = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `commitId`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Pin to a specific commit of the function. Empty uses the function's<br/> published commit, resolved when the resource server is saved. |
| `disabled`                                                                                                                         | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | When true, the hook is configured but not invoked.                                                                                 |
| `functionId`                                                                                                                       | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The Function to invoke.                                                                                                            |