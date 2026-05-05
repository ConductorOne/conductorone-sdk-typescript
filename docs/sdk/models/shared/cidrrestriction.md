# CIDRRestriction

CIDRRestriction defines an IP-based access restriction with an enable toggle and a list of allowed CIDRs.

## Example Usage

```typescript
import { CIDRRestriction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CIDRRestriction = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                      | *boolean*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | Whether this CIDR restriction is enforced.                                                                                                     |
| `sourceCidr`                                                                                                                                   | *string*[]                                                                                                                                     | :heavy_minus_sign:                                                                                                                             | The list of CIDR ranges that are allowed when the restriction is enabled.<br/> Accepts IPv4 (e.g. 10.0.0.0/24) or IPv6 (e.g. 2001:db8::/32) CIDRs. |