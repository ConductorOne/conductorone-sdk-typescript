# PersonalClientServiceListResponse

The PersonalClientServiceListResponse message.

## Example Usage

```typescript
import { PersonalClientServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalClientServiceListResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `list`                                                                               | [shared.PersonalClient](../../../sdk/models/shared/personalclient.md)[]              | :heavy_minus_sign:                                                                   | The list of personal client credentials owned by the calling user.                   |
| `nextPageToken`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | A token to retrieve the next page of results, or empty if there are no more results. |