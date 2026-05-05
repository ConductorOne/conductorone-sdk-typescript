# ProfileFilter

ProfileFilter defines a filter on a user profile attribute.
 Use GetOrgOverview to discover available attribute keys and their values.

## Example Usage

```typescript
import { ProfileFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProfileFilter = {};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `attribute`          | *string*             | :heavy_minus_sign:   | The attribute field. |
| `values`             | *string*[]           | :heavy_minus_sign:   | The values field.    |