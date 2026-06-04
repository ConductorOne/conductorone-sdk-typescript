# DecoyTarget

DecoyTarget points at the planted decoy that produced this finding.
 Populated for findings whose subject is the decoy artifact itself
 (e.g. decoy_credential_used), giving the UI and routing rules a
 uniform handle to the decoy alongside the finding_type payload.

## Example Usage

```typescript
import { DecoyTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DecoyTarget = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `decoyId`          | *string*           | :heavy_minus_sign: | The decoyId field. |