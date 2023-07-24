# taskSearch

### Available Operations

* [search](#search) - Search

## search

Invokes the c1.api.task.v1.TaskSearchService.Search method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskSearchServiceSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import {
  TaskSearchRequestCurrentStep,
  TaskSearchRequestEmergencyStatus,
  TaskSearchRequestSortBy,
  TaskSearchRequestTaskStates,
  TaskTypeCertifyOutcome,
  TaskTypeGrantOutcome,
  TaskTypeRevokeOutcome,
} from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.taskSearch.search({
  taskExpandMask: {
    paths: [
      "numquam",
    ],
  },
  accessReviewIds: [
    "nesciunt",
    "at",
  ],
  accountOwnerIds: [
    "dignissimos",
    "optio",
    "necessitatibus",
  ],
  actorId: "corporis",
  appEntitlementIds: [
    "expedita",
  ],
  appResourceIds: [
    "cupiditate",
    "minima",
    "placeat",
  ],
  appResourceTypeIds: [
    "neque",
    "in",
  ],
  appUserSubjectIds: [
    "eum",
    "modi",
    "corporis",
    "magnam",
  ],
  applicationIds: [
    "maiores",
    "tempore",
    "aperiam",
    "libero",
  ],
  assigneesInIds: [
    "labore",
  ],
  createdAfter: new Date("2021-11-05T06:31:50.944Z"),
  createdBefore: new Date("2022-03-22T14:23:17.198Z"),
  currentStep: TaskSearchRequestCurrentStep.TaskSearchCurrentStepUnspecified,
  emergencyStatus: TaskSearchRequestEmergencyStatus.Emergency,
  excludeAppEntitlementIds: [
    "nostrum",
    "est",
    "impedit",
  ],
  excludeIds: [
    "tempore",
    "vero",
    "odit",
    "repellat",
  ],
  includeDeleted: false,
  myWorkUserIds: [
    "nemo",
    "reprehenderit",
    "aperiam",
    "odio",
  ],
  openerIds: [
    "in",
    "ducimus",
  ],
  pageSize: 5678.46,
  pageToken: "dolores",
  previouslyActedOnIds: [
    "veritatis",
    "ducimus",
    "voluptate",
  ],
  query: "pariatur",
  refs: [
    {
      id: "ac646ecb-5734-409e-beb1-e5a2b12eb07f",
    },
    {
      id: "116db995-45fc-495f-a889-70e189dbb30f",
    },
    {
      id: "cb33ea05-5b19-47cd-84e2-f52d82d3513b",
    },
    {
      id: "b6f48b65-6bcd-4b35-bf2e-4b27537a8cd9",
    },
  ],
  sortBy: TaskSearchRequestSortBy.TaskSearchSortByAccountOwner,
  subjectIds: [
    "dolor",
    "dicta",
  ],
  taskStates: [
    TaskSearchRequestTaskStates.TaskStateClosed,
    TaskSearchRequestTaskStates.TaskStateUnspecified,
    TaskSearchRequestTaskStates.TaskStateOpen,
  ],
  taskTypes: [
    {
      taskTypeCertify: {
        accessReviewId: "fugiat",
        accessReviewSelection: "ad",
        appEntitlementId: "aspernatur",
        appId: "enim",
        appUserId: "delectus",
        identityUserId: "iusto",
        outcome: TaskTypeCertifyOutcome.CertifyOutcomeDecertified,
        outcomeTime: new Date("2022-11-09T04:25:16.566Z"),
      },
      taskTypeGrant: {
        appEntitlementId: "ab",
        appId: "incidunt",
        appUserId: "accusamus",
        grantDuration: "saepe",
        identityUserId: "tempore",
        outcome: TaskTypeGrantOutcome.GrantOutcomeGranted,
        outcomeTime: new Date("2022-01-11T22:06:57.023Z"),
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2021-09-01T16:29:21.118Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-04-08T01:20:58.799Z"),
            lastLogin: new Date("2020-08-19T04:51:15.983Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "sequi",
          },
          taskRevokeSourceReview: {
            accessReviewId: "nihil",
            certTicketId: "deleniti",
          },
        },
        appEntitlementId: "illo",
        appId: "labore",
        appUserId: "assumenda",
        identityUserId: "aliquam",
        outcome: TaskTypeRevokeOutcome.RevokeOutcomeError,
        outcomeTime: new Date("2021-12-21T01:19:26.741Z"),
      },
    },
    {
      taskTypeCertify: {
        accessReviewId: "repudiandae",
        accessReviewSelection: "consequatur",
        appEntitlementId: "maxime",
        appId: "aspernatur",
        appUserId: "nam",
        identityUserId: "expedita",
        outcome: TaskTypeCertifyOutcome.CertifyOutcomeDecertified,
        outcomeTime: new Date("2021-02-26T17:19:48.572Z"),
      },
      taskTypeGrant: {
        appEntitlementId: "rerum",
        appId: "dignissimos",
        appUserId: "corporis",
        grantDuration: "vero",
        identityUserId: "similique",
        outcome: TaskTypeGrantOutcome.GrantOutcomeCancelled,
        outcomeTime: new Date("2022-10-14T22:48:07.675Z"),
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2022-03-25T12:03:53.573Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-12-27T13:22:49.195Z"),
            lastLogin: new Date("2022-09-05T04:00:47.034Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "quae",
          },
          taskRevokeSourceReview: {
            accessReviewId: "amet",
            certTicketId: "illum",
          },
        },
        appEntitlementId: "praesentium",
        appId: "quidem",
        appUserId: "cum",
        identityUserId: "amet",
        outcome: TaskTypeRevokeOutcome.RevokeOutcomeUnspecified,
        outcomeTime: new Date("2022-06-27T01:16:52.839Z"),
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

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.TaskSearchRequest](../../models/shared/tasksearchrequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.C1ApiTaskV1TaskSearchServiceSearchResponse](../../models/operations/c1apitaskv1tasksearchservicesearchresponse.md)>**

