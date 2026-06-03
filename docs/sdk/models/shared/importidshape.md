# ImportIDShape

ImportIDShape describes the structure of the `id` value in a
 Terraform `import { to = ..., id = "..." }` block. Most resources use
 a single string; binding-style resources (App_Owner,
 App_Entitlement_Owner, …) use a composite of multiple field values.

This message contains a oneof named shape. Only a single field of the following list may be set at a time:
  - singleString
  - composite


## Example Usage

```typescript
import { ImportIDShape } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ImportIDShape = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `composite`                                                       | [shared.Composite](../../../sdk/models/shared/composite.md)       | :heavy_minus_sign:                                                | N/A                                                               |
| `singleString`                                                    | [shared.SingleString](../../../sdk/models/shared/singlestring.md) | :heavy_minus_sign:                                                | N/A                                                               |