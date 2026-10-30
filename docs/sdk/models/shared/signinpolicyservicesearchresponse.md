# SignInPolicyServiceSearchResponse

The SignInPolicyServiceSearchResponse message.

## Example Usage

```typescript
import { SignInPolicyServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SignInPolicyServiceSearchResponse = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `list`                                                                 | [shared.SignInPolicy](../../../sdk/models/shared/signinpolicy.md)[]    | :heavy_minus_sign:                                                     | The page of matching policies.                                         |
| `nextPageToken`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | A token to fetch the next page, or empty if there are no more results. |