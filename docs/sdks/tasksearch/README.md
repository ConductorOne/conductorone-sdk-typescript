# taskSearch

### Available Operations

* [search](#search) - Search

## search

 Search tasks based on filters specified in the request body.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskSearchServiceSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import {
  TaskSearchRequestCurrentStep,
  TaskSearchRequestEmergencyStatus,
  TaskSearchRequestSortBy,
  TaskSearchRequestTaskStates,
} from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.taskSearch.search({
  taskExpandMask: {
    paths: [
      "vero",
      "voluptatem",
      "ipsam",
    ],
  },
  accessReviewIds: [
    "alias",
    "quasi",
  ],
  accountOwnerIds: [
    "maiores",
  ],
  actorId: "enim",
  appEntitlementIds: [
    "nulla",
    "deserunt",
    "esse",
  ],
  appResourceIds: [
    "reprehenderit",
    "est",
  ],
  appResourceTypeIds: [
    "sint",
    "accusamus",
  ],
  appUserSubjectIds: [
    "hic",
    "necessitatibus",
    "asperiores",
    "ex",
  ],
  applicationIds: [
    "debitis",
    "delectus",
  ],
  assigneesInIds: [
    "minus",
  ],
  createdAfter: new Date("2021-08-25T17:55:33.849Z"),
  createdBefore: new Date("2022-10-03T14:46:04.624Z"),
  currentStep: TaskSearchRequestCurrentStep.TaskSearchCurrentStepApproval,
  emergencyStatus: TaskSearchRequestEmergencyStatus.Unspecified,
  excludeAppEntitlementIds: [
    "magni",
    "soluta",
    "repudiandae",
    "nam",
  ],
  excludeIds: [
    "iusto",
    "voluptate",
  ],
  includeDeleted: false,
  myWorkUserIds: [
    "dignissimos",
  ],
  openerIds: [
    "quo",
  ],
  pageSize: 5354.68,
  pageToken: "quibusdam",
  previouslyActedOnIds: [
    "odit",
    "voluptatibus",
  ],
  query: "vel",
  refs: [
    {
      id: "d1db1f2c-4310-4661-a963-49e1cf9e06e3",
    },
    {
      id: "a437000a-e6b6-4bc9-b8f7-59eac55a9741",
    },
  ],
  sortBy: TaskSearchRequestSortBy.TaskSearchSortByAccountOwner,
  subjectIds: [
    "vitae",
  ],
  taskStates: [
    TaskSearchRequestTaskStates.TaskStateUnspecified,
  ],
  taskTypes: [
    {
      taskTypeCertify: {},
      taskTypeGrant: {},
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2022-05-22T20:46:18.043Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-08-19T19:35:40.341Z"),
            lastLogin: new Date("2021-07-19T20:29:58.626Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "rem",
          },
          taskRevokeSourceReview: {
            accessReviewId: "dolorum",
            certTicketId: "odio",
          },
        },
      },
    },
    {
      taskTypeCertify: {},
      taskTypeGrant: {},
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2022-12-31T19:13:01.264Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-07-29T17:28:50.439Z"),
            lastLogin: new Date("2022-12-08T19:16:07.063Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "modi",
          },
          taskRevokeSourceReview: {
            accessReviewId: "neque",
            certTicketId: "exercitationem",
          },
        },
      },
    },
  ],
}).then((res: C1ApiTaskV1TaskSearchServiceSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.TaskSearchRequestInput](../../models/shared/tasksearchrequestinput.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.C1ApiTaskV1TaskSearchServiceSearchResponse](../../models/operations/c1apitaskv1tasksearchservicesearchresponse.md)>**

