# taskSearch

### Available Operations

* [search](#search) - Invokes the c1.api.task.v1.TaskSearchService.Search method.

## search

Invokes the c1.api.task.v1.TaskSearchService.Search method.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskSearchServiceSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import {
  ApprovalInstanceState,
  ExternalRefExternalRefSource,
  PolicyPolicyType,
  PolicyStepInstanceState,
  ProvisionInstanceState,
  TaskActions,
  TaskProcessing,
  TaskSearchRequestCurrentStep,
  TaskSearchRequestSortBy,
  TaskSearchRequestTaskStates,
  TaskState,
  TaskTypeCertifyOutcome,
  TaskTypeGrantOutcome,
  TaskTypeRevokeOutcome,
} from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript();

sdk.taskSearch.search({
  taskExpandMask: {
    paths: [
      "adipisci",
    ],
  },
  accessReviewIds: [
    "id",
    "suscipit",
    "velit",
  ],
  accountOwnerIds: [
    "est",
    "recusandae",
    "totam",
  ],
  actorId: "fugiat",
  appEntitlementIds: [
    "ducimus",
    "quos",
  ],
  appResourceIds: [
    "labore",
    "possimus",
  ],
  appResourceTypeIds: [
    "cum",
    "commodi",
    "in",
  ],
  appUserSubjectIds: [
    "reiciendis",
    "assumenda",
  ],
  applicationIds: [
    "recusandae",
    "aliquid",
  ],
  assigneesInIds: [
    "cum",
  ],
  createdAfter: new Date("2022-07-21T02:01:44.496Z"),
  createdBefore: new Date("2022-01-23T21:23:20.237Z"),
  currentStep: TaskSearchRequestCurrentStep.TaskSearchCurrentStepProvision,
  excludeAppEntitlementIds: [
    "doloribus",
    "suscipit",
  ],
  excludeIds: [
    "quidem",
    "saepe",
    "necessitatibus",
    "dolore",
  ],
  includeDeleted: false,
  myWorkUserIds: [
    "asperiores",
  ],
  openerIds: [
    "non",
  ],
  pageSize: 2282.63,
  pageToken: "beatae",
  previouslyActedOnIds: [
    "a",
    "debitis",
  ],
  query: "consectetur",
  refs: [
    {
      id: "b60eb1ea-4265-455b-a3c2-8744ed53b88f",
    },
    {
      id: "3a8d8f5c-0b2f-42fb-bb19-4a276b26916f",
    },
  ],
  sortBy: TaskSearchRequestSortBy.TaskSearchSortByAccountOwner,
  subjectIds: [
    "reiciendis",
  ],
  taskStates: [
    TaskSearchRequestTaskStates.TaskStateOpen,
  ],
  taskTypes: [
    {
      taskTypeCertify: {
        accessReviewId: "incidunt",
        accessReviewSelection: "sed",
        appEntitlementId: "provident",
        appId: "eius",
        appUserId: "necessitatibus",
        identityUserId: "ipsum",
        outcome: TaskTypeCertifyOutcome.CertifyOutcomeDecertified,
        outcomeTime: new Date("2021-11-23T23:35:18.899Z"),
      },
      taskTypeGrant: {
        appEntitlementId: "voluptatibus",
        appId: "tempora",
        appUserId: "tempora",
        grantDuration: "voluptate",
        identityUserId: "reiciendis",
        outcome: TaskTypeGrantOutcome.GrantOutcomeDenied,
        outcomeTime: new Date("2022-10-02T07:53:52.364Z"),
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2021-06-26T01:49:52.614Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-05-19T10:07:39.882Z"),
            lastLogin: new Date("2022-08-17T20:12:51.918Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "debitis",
          },
          taskRevokeSourceReview: {
            accessReviewId: "rem",
            certTicketId: "sit",
          },
        },
        appEntitlementId: "nobis",
        appId: "error",
        appUserId: "veniam",
        identityUserId: "minima",
        outcome: TaskTypeRevokeOutcome.RevokeOutcomeCancelled,
        outcomeTime: new Date("2020-05-31T18:16:06.681Z"),
      },
    },
    {
      taskTypeCertify: {
        accessReviewId: "magni",
        accessReviewSelection: "aperiam",
        appEntitlementId: "saepe",
        appId: "numquam",
        appUserId: "veniam",
        identityUserId: "in",
        outcome: TaskTypeCertifyOutcome.CertifyOutcomeCancelled,
        outcomeTime: new Date("2022-06-27T22:55:23.952Z"),
      },
      taskTypeGrant: {
        appEntitlementId: "exercitationem",
        appId: "praesentium",
        appUserId: "cum",
        grantDuration: "laboriosam",
        identityUserId: "dolorum",
        outcome: TaskTypeGrantOutcome.GrantOutcomeDenied,
        outcomeTime: new Date("2021-02-10T08:43:29.852Z"),
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2021-03-20T05:03:12.319Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-04-28T20:28:39.956Z"),
            lastLogin: new Date("2022-05-12T18:07:12.039Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "dolorum",
          },
          taskRevokeSourceReview: {
            accessReviewId: "corrupti",
            certTicketId: "accusamus",
          },
        },
        appEntitlementId: "tempora",
        appId: "atque",
        appUserId: "fugit",
        identityUserId: "ut",
        outcome: TaskTypeRevokeOutcome.RevokeOutcomeCancelled,
        outcomeTime: new Date("2022-05-14T04:54:08.545Z"),
      },
    },
    {
      taskTypeCertify: {
        accessReviewId: "expedita",
        accessReviewSelection: "magnam",
        appEntitlementId: "consequatur",
        appId: "esse",
        appUserId: "ipsam",
        identityUserId: "sit",
        outcome: TaskTypeCertifyOutcome.CertifyOutcomeDecertified,
        outcomeTime: new Date("2021-02-26T20:36:25.696Z"),
      },
      taskTypeGrant: {
        appEntitlementId: "corporis",
        appId: "et",
        appUserId: "blanditiis",
        grantDuration: "ex",
        identityUserId: "sed",
        outcome: TaskTypeGrantOutcome.GrantOutcomeUnspecified,
        outcomeTime: new Date("2022-08-28T22:43:39.407Z"),
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2021-02-18T15:46:03.371Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-09-21T03:21:52.611Z"),
            lastLogin: new Date("2022-05-16T07:46:15.799Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "harum",
          },
          taskRevokeSourceReview: {
            accessReviewId: "dicta",
            certTicketId: "architecto",
          },
        },
        appEntitlementId: "occaecati",
        appId: "labore",
        appUserId: "quidem",
        identityUserId: "atque",
        outcome: TaskTypeRevokeOutcome.RevokeOutcomeError,
        outcomeTime: new Date("2021-02-07T07:57:17.421Z"),
      },
    },
    {
      taskTypeCertify: {
        accessReviewId: "laboriosam",
        accessReviewSelection: "alias",
        appEntitlementId: "amet",
        appId: "deserunt",
        appUserId: "voluptate",
        identityUserId: "unde",
        outcome: TaskTypeCertifyOutcome.CertifyOutcomeCancelled,
        outcomeTime: new Date("2021-05-02T07:30:16.176Z"),
      },
      taskTypeGrant: {
        appEntitlementId: "delectus",
        appId: "voluptates",
        appUserId: "perferendis",
        grantDuration: "est",
        identityUserId: "quidem",
        outcome: TaskTypeGrantOutcome.GrantOutcomeDenied,
        outcomeTime: new Date("2020-12-11T19:46:56.272Z"),
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2021-09-14T12:33:27.065Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-12-21T09:05:01.168Z"),
            lastLogin: new Date("2020-03-30T02:42:49.718Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "quasi",
          },
          taskRevokeSourceReview: {
            accessReviewId: "atque",
            certTicketId: "reprehenderit",
          },
        },
        appEntitlementId: "asperiores",
        appId: "totam",
        appUserId: "suscipit",
        identityUserId: "quidem",
        outcome: TaskTypeRevokeOutcome.RevokeOutcomeCancelled,
        outcomeTime: new Date("2022-07-16T17:34:48.115Z"),
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

