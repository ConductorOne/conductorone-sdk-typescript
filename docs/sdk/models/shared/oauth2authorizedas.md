# OAuth2AuthorizedAs

OAuth2AuthorizedAs tracks the user that OAuthed with the connector.

## Example Usage

```typescript
import { OAuth2AuthorizedAs } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuth2AuthorizedAs = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authEmail`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | authEmail is the email of the user that authorized the connector using OAuth.                 |
| `authorizedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |