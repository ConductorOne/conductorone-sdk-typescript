# AcceptInstance

This policy step indicates that a ticket should have an approved outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
 The instance is just a marker for it being copied into an active policy.

## Example Usage

```typescript
import { AcceptInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AcceptInstance = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `acceptMessage`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | An optional message to include in the comments when a task is automatically accepted. |