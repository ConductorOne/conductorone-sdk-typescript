# DecoyServiceGetResponse

The DecoyServiceGetResponse message.

## Example Usage

```typescript
import { DecoyServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DecoyServiceGetResponse = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `decoy`                                                                                                        | [shared.Decoy](../../../sdk/models/shared/decoy.md)                                                            | :heavy_minus_sign:                                                                                             | Decoy is the read projection of a planted honey-credential. All<br/> fields except annotations are server-managed. |