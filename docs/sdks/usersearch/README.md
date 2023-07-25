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
      "dolores",
      "assumenda",
    ],
  },
  email: "Marcella.Schumm@gmail.com",
  excludeIds: [
    "accusamus",
    "necessitatibus",
    "tempore",
  ],
  ids: [
    "ea",
    "autem",
    "ipsam",
  ],
  pageSize: 7029.52,
  pageToken: "laudantium",
  query: "corporis",
  refs: [
    {
      id: "fbd02bae-0be2-4d78-a259-e3ea4b5197f9",
    },
    {
      id: "2443da7c-e52b-4895-8537-c6454efb0b34",
    },
    {
      id: "896c3ca5-acfb-4e2f-9570-7577929177de",
    },
    {
      id: "ac646ecb-5734-409e-beb1-e5a2b12eb07f",
    },
  ],
  roleIds: [
    "quasi",
  ],
  userStatuses: [
    SearchUsersRequestUserStatuses.Deleted,
    SearchUsersRequestUserStatuses.Disabled,
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

