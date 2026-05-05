# PolicyPostActions

Actions to execute after a policy finishes processing.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - certifyRemediateImmediately


## Example Usage

```typescript
import { PolicyPostActions } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyPostActions = {};
```

## Fields

| Field                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `certifyRemediateImmediately`                                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Only valid on certify policies. When true, any revocations resulting from<br/> the certification are applied immediately when the campaign task closes.<br/>This field is part of the `action` oneof.<br/>See the documentation for `c1.api.policy.v1.PolicyPostActions` for more details. |