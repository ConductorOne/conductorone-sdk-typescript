# Reject

This policy step indicates that a ticket should have a denied outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.

## Example Usage

```typescript
import { Reject } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Reject = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `rejectMessage`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | An optional message to include in the comments when a task is automatically rejected. |