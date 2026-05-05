# PaperSecretServiceGetContentRequest

The PaperSecretServiceGetContentRequest message.

## Example Usage

```typescript
import { PaperSecretServiceGetContentRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretServiceGetContentRequest = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `readerRecipient`                                                                                              | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Client's ephemeral Age recipient (age1...) for re-encryption<br/> Server re-encrypts the content to this recipient |