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
      "alias",
      "omnis",
      "eos",
    ],
  },
  accessReviewIds: [
    "iste",
    "magni",
    "inventore",
  ],
  accountOwnerIds: [
    "accusamus",
    "voluptatibus",
    "distinctio",
  ],
  actorId: "omnis",
  appEntitlementIds: [
    "minima",
    "praesentium",
    "maxime",
    "magnam",
  ],
  appResourceIds: [
    "quos",
    "commodi",
    "itaque",
    "commodi",
  ],
  appResourceTypeIds: [
    "earum",
    "modi",
    "nam",
  ],
  appUserSubjectIds: [
    "voluptatem",
    "ipsam",
    "vel",
    "alias",
  ],
  applicationIds: [
    "non",
  ],
  assigneesInIds: [
    "enim",
    "sint",
    "nulla",
    "deserunt",
  ],
  createdAfter: new Date("2022-08-20T23:18:24.165Z"),
  createdBefore: new Date("2022-05-02T06:49:02.857Z"),
  currentStep: TaskSearchRequestCurrentStep.TaskSearchCurrentStepApproval,
  emergencyStatus: TaskSearchRequestEmergencyStatus.NonEmergency,
  excludeAppEntitlementIds: [
    "impedit",
    "hic",
    "necessitatibus",
    "asperiores",
  ],
  excludeIds: [
    "voluptas",
    "debitis",
  ],
  includeDeleted: false,
  myWorkUserIds: [
    "quae",
    "minus",
    "fuga",
    "laborum",
  ],
  openerIds: [
    "velit",
  ],
  pageSize: 5388.69,
  pageToken: "ipsum",
  previouslyActedOnIds: [
    "magni",
    "soluta",
    "repudiandae",
    "nam",
  ],
  query: "dolore",
  refs: [
    {
      id: "7373c8d7-2f64-4d1d-b1f2-c4310661e963",
    },
    {
      id: "49e1cf9e-06e3-4a43-b000-ae6b6bc9b8f7",
    },
  ],
  sortBy: TaskSearchRequestSortBy.TaskSearchSortByAccount,
  subjectIds: [
    "necessitatibus",
    "animi",
    "impedit",
  ],
  taskStates: [
    TaskSearchRequestTaskStates.TaskStateOpen,
    TaskSearchRequestTaskStates.TaskStateClosed,
  ],
  taskTypes: [
    {
      taskTypeCertify: {
        accessReviewId: "esse",
        accessReviewSelection: "labore",
        appEntitlementId: "veritatis",
        appId: "vero",
        appUserId: "consectetur",
        identityUserId: "vitae",
        outcome: TaskTypeCertifyOutcome.CertifyOutcomeUnspecified,
        outcomeTime: new Date("2022-09-05T11:07:40.496Z"),
      },
      taskTypeGrant: {
        appEntitlementId: "qui",
        appId: "iste",
        appUserId: "ex",
        grantDuration: "nemo",
        identityUserId: "soluta",
        outcome: TaskTypeGrantOutcome.GrantOutcomeError,
        outcomeTime: new Date("2021-08-24T00:23:56.434Z"),
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2022-11-09T04:30:19.165Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-10-31T15:56:50.300Z"),
            lastLogin: new Date("2022-12-08T11:32:42.651Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "quae",
          },
          taskRevokeSourceReview: {
            accessReviewId: "modi",
            certTicketId: "neque",
          },
        },
        appEntitlementId: "exercitationem",
        appId: "itaque",
        appUserId: "et",
        identityUserId: "ipsum",
        outcome: TaskTypeRevokeOutcome.RevokeOutcomeError,
        outcomeTime: new Date("2020-11-09T18:12:20.087Z"),
      },
    },
    {
      taskTypeCertify: {
        accessReviewId: "maxime",
        accessReviewSelection: "quia",
        appEntitlementId: "quia",
        appId: "nostrum",
        appUserId: "omnis",
        identityUserId: "libero",
        outcome: TaskTypeCertifyOutcome.CertifyOutcomeUnspecified,
        outcomeTime: new Date("2021-07-18T15:23:57.911Z"),
      },
      taskTypeGrant: {
        appEntitlementId: "fugiat",
        appId: "officia",
        appUserId: "quos",
        grantDuration: "placeat",
        identityUserId: "sit",
        outcome: TaskTypeGrantOutcome.GrantOutcomeDenied,
        outcomeTime: new Date("2022-02-01T01:47:57.463Z"),
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2022-12-13T23:42:10.683Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-06-01T04:35:31.707Z"),
            lastLogin: new Date("2020-11-09T00:25:03.486Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "voluptatem",
          },
          taskRevokeSourceReview: {
            accessReviewId: "autem",
            certTicketId: "esse",
          },
        },
        appEntitlementId: "dolores",
        appId: "assumenda",
        appUserId: "beatae",
        identityUserId: "est",
        outcome: TaskTypeRevokeOutcome.RevokeOutcomeCancelled,
        outcomeTime: new Date("2022-01-20T14:32:05.606Z"),
      },
    },
    {
      taskTypeCertify: {
        accessReviewId: "provident",
        accessReviewSelection: "accusamus",
        appEntitlementId: "necessitatibus",
        appId: "tempore",
        appUserId: "sint",
        identityUserId: "ea",
        outcome: TaskTypeCertifyOutcome.CertifyOutcomeDecertified,
        outcomeTime: new Date("2022-04-19T10:08:34.555Z"),
      },
      taskTypeGrant: {
        appEntitlementId: "laudantium",
        appId: "corporis",
        appUserId: "officiis",
        grantDuration: "voluptatibus",
        identityUserId: "cum",
        outcome: TaskTypeGrantOutcome.GrantOutcomeCancelled,
        outcomeTime: new Date("2022-11-04T19:42:54.772Z"),
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2021-08-19T14:07:01.740Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-11-24T16:37:12.153Z"),
            lastLogin: new Date("2021-03-25T19:10:06.582Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "eos",
          },
          taskRevokeSourceReview: {
            accessReviewId: "quibusdam",
            certTicketId: "odio",
          },
        },
        appEntitlementId: "praesentium",
        appId: "odit",
        appUserId: "explicabo",
        identityUserId: "corporis",
        outcome: TaskTypeRevokeOutcome.RevokeOutcomeError,
        outcomeTime: new Date("2022-04-13T22:13:24.007Z"),
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

