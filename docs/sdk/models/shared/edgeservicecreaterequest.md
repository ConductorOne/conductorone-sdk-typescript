# EdgeServiceCreateRequest

EdgeServiceCreateRequest creates an Edge for an app. The new Edge starts
 disabled and denies every capability until enabled.

## Example Usage

```typescript
import { EdgeServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceCreateRequest = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                       | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Display name for the Edge. Defaults to "Edge" when empty.                                                           |
| `egressTls`                                                                                                         | [shared.EdgeTlsSelection](../../../sdk/models/shared/edgetlsselection.md)                                           | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `enabledKinds`                                                                                                      | [shared.EdgeServiceCreateRequestEnabledKinds](../../../sdk/models/shared/edgeservicecreaterequestenabledkinds.md)[] | :heavy_minus_sign:                                                                                                  | The capabilities this Edge will serve. Each mints its own entitlement<br/> stack; there is no default.              |