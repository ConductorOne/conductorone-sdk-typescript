# userSearch

### Available Operations

* [search](#search) - Search

## search

 Search users based on filters specified in the request body.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiUserV1UserSearchSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { SearchUsersRequestUserStatuses } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.userSearch.search({
  userExpandMask: {
    paths: [
      "impedit",
      "delectus",
      "tempore",
    ],
  },
  email: "Bruce.Zieme44@hotmail.com",
  excludeIds: [
    "odio",
  ],
  ids: [
    "in",
    "ducimus",
  ],
  pageSize: 5678.46,
  pageToken: "dolores",
  query: "error",
  refs: [
    {
      id: "77deac64-6ecb-4573-809e-3eb1e5a2b12e",
    },
  ],
  roleIds: [
    "ipsa",
    "ducimus",
    "maiores",
  ],
  userStatuses: [
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

