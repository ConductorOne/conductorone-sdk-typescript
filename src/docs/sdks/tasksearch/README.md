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
      "voluptate",
      "ullam",
      "unde",
      "necessitatibus",
    ],
  },
  accessReviewIds: [
    "impedit",
    "ipsam",
    "corporis",
  ],
  accountOwnerIds: [
    "error",
    "esse",
    "labore",
  ],
  actorId: "veritatis",
  appEntitlementIds: [
    "consectetur",
    "vitae",
    "inventore",
    "dolorem",
  ],
  appResourceIds: [
    "qui",
    "iste",
  ],
  appResourceTypeIds: [
    "nemo",
    "soluta",
  ],
  appUserSubjectIds: [
    "rem",
    "dolorum",
    "odio",
  ],
  applicationIds: [
    "alias",
  ],
  assigneesInIds: [
    "vel",
  ],
  createdAfter: new Date("2022-12-08T19:16:07.063Z"),
  createdBefore: new Date("2022-10-16T23:42:04.526Z"),
  currentStep: TaskSearchRequestCurrentStep.TaskSearchCurrentStepApproval,
  emergencyStatus: TaskSearchRequestEmergencyStatus.Emergency,
  excludeAppEntitlementIds: [
    "ipsum",
  ],
  excludeIds: [
    "nulla",
    "distinctio",
    "maxime",
  ],
  includeDeleted: false,
  myWorkUserIds: [
    "quia",
  ],
  openerIds: [
    "omnis",
    "libero",
  ],
  pageSize: 1156.61,
  pageToken: "id",
  previouslyActedOnIds: [
    "fugiat",
    "officia",
    "quos",
  ],
  query: "placeat",
  refs: [
    {
      id: "70e1084c-b067-42d1-ad87-9eeb9665b85e",
    },
  ],
  sortBy: TaskSearchRequestSortBy.TaskSearchSortByAccountOwner,
  subjectIds: [
    "at",
    "alias",
    "quia",
  ],
  taskStates: [
    TaskSearchRequestTaskStates.TaskStateClosed,
    TaskSearchRequestTaskStates.TaskStateClosed,
    TaskSearchRequestTaskStates.TaskStateUnspecified,
  ],
  taskTypes: [
    {
      taskTypeCertify: {},
      taskTypeGrant: {},
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2022-06-21T04:17:16.724Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2021-07-20T13:08:36.205Z"),
            lastLogin: new Date("2022-09-20T13:39:46.907Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "explicabo",
          },
          taskRevokeSourceReview: {
            accessReviewId: "corporis",
            certTicketId: "error",
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
            expiredAt: new Date("2022-04-13T22:13:24.007Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2021-02-09T04:42:29.895Z"),
            lastLogin: new Date("2022-04-22T18:47:14.845Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "quis",
          },
          taskRevokeSourceReview: {
            accessReviewId: "beatae",
            certTicketId: "unde",
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
            expiredAt: new Date("2022-01-14T10:23:30.043Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-09-15T02:31:13.378Z"),
            lastLogin: new Date("2022-09-29T05:24:35.816Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "nesciunt",
          },
          taskRevokeSourceReview: {
            accessReviewId: "at",
            certTicketId: "officia",
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

