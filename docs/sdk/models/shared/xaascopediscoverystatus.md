# XAAScopeDiscoveryStatus

XAAScopeDiscoveryStatus is the outcome of the latest scope discovery run
 for a resource server. Read-only.

## Example Usage

```typescript
import { XAAScopeDiscoveryStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAScopeDiscoveryStatus = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `completedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `findings`                                                                                        | [shared.XAAScopeDiscoveryFinding](../../../sdk/models/shared/xaascopediscoveryfinding.md)[]       | :heavy_minus_sign:                                                                                | Per-URI and per-value observations from the latest run.                                           |
| `importedScopeValues`                                                                             | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | Scope values the latest run created.                                                              |
| `lastError`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | Failure cause when state is FAILED.                                                               |
| `startedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `state`                                                                                           | [shared.XAAScopeDiscoveryStatusState](../../../sdk/models/shared/xaascopediscoverystatusstate.md) | :heavy_minus_sign:                                                                                | State of the latest run.                                                                          |
| `usedAsFallback`                                                                                  | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | True when scopes came from the authorization server's metadata.                                   |