# EdgeInferenceRouteOption

EdgeInferenceRouteOption describes an already configured route to callers
 with application management access. It never includes credential material.

## Example Usage

```typescript
import { EdgeInferenceRouteOption } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceRouteOption = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `displayName`                                               | *string*                                                    | :heavy_minus_sign:                                          | Human-readable route name.                                  |
| `routeId`                                                   | *string*                                                    | :heavy_minus_sign:                                          | Configured route identifier.                                |
| `upstreamModelId`                                           | *string*                                                    | :heavy_minus_sign:                                          | First configured target's model, for existing list clients. |