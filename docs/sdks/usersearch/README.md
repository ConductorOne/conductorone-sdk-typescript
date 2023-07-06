# userSearch

### Available Operations

* [search](#search) - Invokes the c1.api.user.v1.UserSearch.Search method.

## search

Invokes the c1.api.user.v1.UserSearch.Search method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiUserV1UserSearchSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { SearchUsersRequestUserStatuses, UserDirectoryStatus, UserStatus } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.userSearch.search({
  userExpandMask: {
    paths: [
      "dolores",
    ],
  },
  excludeIds: [
    "laboriosam",
    "velit",
  ],
  ids: [
    "molestias",
    "magnam",
    "saepe",
    "consequuntur",
  ],
  pageSize: 5801.07,
  pageToken: "officiis",
  query: "perspiciatis",
  refs: [
    {
      id: "3e922a57-a15b-4e3e-8608-07e2b6e3ab88",
    },
    {
      id: "45f0597a-60ff-42a5-8a31-e94764a3e865",
    },
  ],
  roleIds: [
    "esse",
    "provident",
    "quis",
    "eum",
  ],
  userStatuses: [
    SearchUsersRequestUserStatuses.Disabled,
    SearchUsersRequestUserStatuses.Unknown,
    SearchUsersRequestUserStatuses.Enabled,
    SearchUsersRequestUserStatuses.Unknown,
  ],
}).then((res: C1ApiUserV1UserSearchSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.SearchUsersRequest](../../models/shared/searchusersrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.C1ApiUserV1UserSearchSearchResponse](../../models/operations/c1apiuserv1usersearchsearchresponse.md)>**

