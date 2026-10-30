# EdgeServiceListInferenceRoutesResponse

EdgeServiceListInferenceRoutesResponse contains configured route metadata
 for an application.

## Example Usage

```typescript
import { EdgeServiceListInferenceRoutesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListInferenceRoutesResponse = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `capabilitySummary`                                                                                    | [shared.EdgeCapabilitySummary](../../../sdk/models/shared/edgecapabilitysummary.md)                    | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `routes`                                                                                               | [shared.EdgeInferenceRouteOption](../../../sdk/models/shared/edgeinferencerouteoption.md)[]            | :heavy_minus_sign:                                                                                     | The routes field.                                                                                      |
| `unservedTargets`                                                                                      | [shared.EdgeInferenceUnservedTarget](../../../sdk/models/shared/edgeinferenceunservedtarget.md)[]      | :heavy_minus_sign:                                                                                     | Targets of this app's routes that connected Edge processes cannot serve. Empty when none has reported. |