# C1ApiConversationsV1UIConversationsServiceEnsureOnboardingSessionResponse

## Example Usage

```typescript
import { C1ApiConversationsV1UIConversationsServiceEnsureOnboardingSessionResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiConversationsV1UIConversationsServiceEnsureOnboardingSessionResponse = {
    contentType: "<value>",
    statusCode: 53622,
  };
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `ensureOnboardingSessionResponse`                                                                       | [shared.EnsureOnboardingSessionResponse](../../../sdk/models/shared/ensureonboardingsessionresponse.md) | :heavy_minus_sign:                                                                                      | Returns the active onboarding conversation and whether this call created it.                            |