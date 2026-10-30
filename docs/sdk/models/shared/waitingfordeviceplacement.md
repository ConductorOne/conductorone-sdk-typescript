# WaitingForDevicePlacement

Describes a provision step that is paused until the recipient joins the vault's MLS group.

## Example Usage

```typescript
import { WaitingForDevicePlacement } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WaitingForDevicePlacement = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `recipientUserId`                                              | *string*                                                       | :heavy_minus_sign:                                             | The ID of the user being placed.                               |
| `vaultBoundaryId`                                              | *string*                                                       | :heavy_minus_sign:                                             | The ID of the vault boundary the recipient is being placed in. |