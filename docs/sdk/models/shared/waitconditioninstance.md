# WaitConditionInstance

Used by the policy engine to describe an instantiated condition to wait on.

## Example Usage

```typescript
import { WaitConditionInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WaitConditionInstance = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `condition`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | The condition that has to be true for this wait condition instance to continue. |