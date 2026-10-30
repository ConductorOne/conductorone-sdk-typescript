# EdgeBuiltinTlsConfig

EdgeBuiltinTlsConfig selects TLS interception material managed by
 ConductorOne.

## Example Usage

```typescript
import { EdgeBuiltinTlsConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeBuiltinTlsConfig = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `kind`                                                                                    | [shared.EdgeBuiltinTlsConfigKind](../../../sdk/models/shared/edgebuiltintlsconfigkind.md) | :heavy_minus_sign:                                                                        | The kind of managed material. Only EDGE_BUILTIN_TLS_KIND_EDGE_CA is<br/> supported.       |