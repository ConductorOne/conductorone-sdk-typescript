# GrantFoundTrigger

The GrantFoundTrigger message.

## Example Usage

```typescript
import { GrantFoundTrigger } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GrantFoundTrigger = {};
```

## Fields

| Field                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `grantTriggerFilter`                                                                                                                                                                                                                       | [shared.GrantTriggerFilter](../../../sdk/models/shared/granttriggerfilter.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                         | The GrantTriggerFilter message.<br/><br/>This message contains a oneof named entitlement_inclusion. Only a single field of the following list may be set at a time:<br/>  - inclusionList<br/>  - inclusionAll<br/>  - inclusionCriteria<br/>  - inclusionListCel<br/> |