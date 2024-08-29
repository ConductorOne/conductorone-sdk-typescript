# TaskSearch
(*taskSearch*)

### Available Operations

* [search](#search) - Search

## search

Search tasks based on filters specified in the request body.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { TaskStates } from "conductorone-sdk-typescript/sdk/models/shared";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.taskSearch.search({
    taskExpandMask: {
      paths: [
        "<value>",
      ],
    },
    accessReviewIds: [
      "<value>",
    ],
    accountOwnerIds: [
      "<value>",
    ],
    appEntitlementIds: [
      "<value>",
    ],
    appResourceIds: [
      "<value>",
    ],
    appResourceTypeIds: [
      "<value>",
    ],
    appUserSubjectIds: [
      "<value>",
    ],
    applicationIds: [
      "<value>",
    ],
    assigneesInIds: [
      "<value>",
    ],
    excludeAppEntitlementIds: [
      "<value>",
    ],
    excludeIds: [
      "<value>",
    ],
    myWorkUserIds: [
      "<value>",
    ],
    openerIds: [
      "<value>",
    ],
    previouslyActedOnIds: [
      "<value>",
    ],
    refs: [
      {},
    ],
    subjectIds: [
      "<value>",
    ],
    taskStates: [
      TaskStates.TaskStateUnspecified,
    ],
    taskTypes: [
      {
        taskTypeCertify: {},
        taskTypeGrant: {
          taskGrantSource: {},
        },
        taskTypeRevoke: {
          taskRevokeSource: {
            taskRevokeSourceExpired: {},
            taskRevokeSourceNonUsage: {},
            taskRevokeSourceRequest: {},
            taskRevokeSourceReview: {},
          },
        },
      },
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.TaskSearchRequest](../../sdk/models/shared/tasksearchrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiTaskV1TaskSearchServiceSearchResponse](../../sdk/models/operations/c1apitaskv1tasksearchservicesearchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
