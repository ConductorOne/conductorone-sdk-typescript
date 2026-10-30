# McpOnboardingTargetList

McpOnboardingTargetList wraps the target list so an update can distinguish
 replace (present, even if empty) from leave-unchanged (omitted).

## Example Usage

```typescript
import { McpOnboardingTargetList } from "conductorone-sdk-typescript/sdk/models/shared";

let value: McpOnboardingTargetList = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `targets`                                                                         | [shared.McpOnboardingTarget](../../../sdk/models/shared/mcponboardingtarget.md)[] | :heavy_minus_sign:                                                                | The targets field.                                                                |