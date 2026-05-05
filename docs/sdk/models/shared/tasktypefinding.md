# TaskTypeFinding

The TaskTypeFinding message.

## Example Usage

```typescript
import { TaskTypeFinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeFinding = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `findingId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Reference to the source finding.                                                              |
| `findingType`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The finding type discriminator.                                                               |
| `outcome`                                                                                     | [shared.TaskTypeFindingOutcome](../../../sdk/models/shared/tasktypefindingoutcome.md)         | :heavy_minus_sign:                                                                            | The outcome field.                                                                            |
| `outcomeTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |