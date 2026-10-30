# EdgeTokenResources

EdgeTokenResources names the resource URI for each supported Edge service.
 A field is empty when its capability is not in enabled_kinds.

## Example Usage

```typescript
import { EdgeTokenResources } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeTokenResources = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `egress`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Resource URI used with the egress.connect scope.                            |
| `inference`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | Resource URI used with the inference.models.read / inference.invoke scopes. |