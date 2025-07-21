# CreateManuallyManagedAppResourceResponse

The CreateManuallyManagedAppResourceResponse message.

## Example Usage

```typescript
import { CreateManuallyManagedAppResourceResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateManuallyManagedAppResourceResponse = {};
```

## Fields

| Field                                                                                                                                                                                                     | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appResource`                                                                                                                                                                                             | [shared.AppResource](../../../sdk/models/shared/appresource.md)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                        | The app resource message is a single resource that can have entitlements.<br/><br/>This message contains a oneof named metadata. Only a single field of the following list may be set at a time:<br/>  - secretTrait<br/> |