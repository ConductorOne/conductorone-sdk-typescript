# AppUserMapper

AppUserMapper configures custom account mapping for uplift.

## Example Usage

```typescript
import { AppUserMapper } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMapper = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `mappingCases`                                                                          | [shared.AppUserMapperMatchCase](../../../sdk/models/shared/appusermappermatchcase.md)[] | :heavy_minus_sign:                                                                      | Ordered list of match cases. Each case defines a pair of CEL key extractors.            |