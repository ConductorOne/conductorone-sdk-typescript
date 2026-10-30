# GoLinkView

GoLinkView wraps a GoLink with per-object permissions for the current user.

## Example Usage

```typescript
import { GoLinkView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoLinkView = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `golink`                                                                              | [shared.GoLink](../../../sdk/models/shared/golink.md)                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `objectPermissions`                                                                   | [shared.ActorObjectPermissions](../../../sdk/models/shared/actorobjectpermissions.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |