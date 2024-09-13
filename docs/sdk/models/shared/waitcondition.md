# WaitCondition

The WaitCondition message.

## Example Usage

```typescript
import { WaitCondition } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WaitCondition = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `condition`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | The condition that has to be true for this wait condition to continue. |