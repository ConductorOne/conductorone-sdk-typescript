# AppManagedStateBindingExpandMask

AppManagedStateBindingExpandMask controls which related objects are included in a response.

## Example Usage

```typescript
import { AppManagedStateBindingExpandMask } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppManagedStateBindingExpandMask = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `paths`                                                                            | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Related objects to include. Supported values are `app_id`, `resource_id`, and `*`. |