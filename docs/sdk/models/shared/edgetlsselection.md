# EdgeTlsSelection

EdgeTlsSelection chooses the TLS interception material for an Edge's
 egress proxy.

This message contains a oneof named selection. Only a single field of the following list may be set at a time:
  - builtin


## Example Usage

```typescript
import { EdgeTlsSelection } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeTlsSelection = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `builtin`                                                                         | [shared.EdgeBuiltinTlsConfig](../../../sdk/models/shared/edgebuiltintlsconfig.md) | :heavy_minus_sign:                                                                | N/A                                                                               |