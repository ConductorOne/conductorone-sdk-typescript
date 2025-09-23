# SessionSettings

The SessionSettings message.

## Example Usage

```typescript
import { SessionSettings } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionSettings = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `connectorSource`                                                       | [shared.CIDRRestriction](../../../sdk/models/shared/cidrrestriction.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `maxSessionLength`                                                      | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `pccAdminSource`                                                        | [shared.CIDRRestriction](../../../sdk/models/shared/cidrrestriction.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `pccUserSource`                                                         | [shared.CIDRRestriction](../../../sdk/models/shared/cidrrestriction.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `ssoAdminSource`                                                        | [shared.CIDRRestriction](../../../sdk/models/shared/cidrrestriction.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `ssoUserSource`                                                         | [shared.CIDRRestriction](../../../sdk/models/shared/cidrrestriction.md) | :heavy_minus_sign:                                                      | N/A                                                                     |