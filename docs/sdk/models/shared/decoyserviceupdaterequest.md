# DecoyServiceUpdateRequest

The DecoyServiceUpdateRequest message.

## Example Usage

```typescript
import { DecoyServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DecoyServiceUpdateRequest = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `decoy`                                                                                                        | [shared.DecoyInput](../../../sdk/models/shared/decoyinput.md)                                                  | :heavy_minus_sign:                                                                                             | Decoy is the read projection of a planted honey-credential. All<br/> fields except annotations are server-managed. |
| `updateMask`                                                                                                   | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |