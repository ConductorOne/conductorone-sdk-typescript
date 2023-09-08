# TaskTypeInput

 Task Type provides configuration for the type of task: certify, grant, or revoke


This message contains a oneof named task_type. Only a single field of the following list may be set at a time:
  - grant
  - revoke
  - certify



## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `taskTypeCertify`                                                                              | [TaskTypeCertify](../../models/shared/tasktypecertify.md)                                      | :heavy_minus_sign:                                                                             |  The TaskTypeCertify message indicates that a task is a certify task and all related details.<br/> |
| `taskTypeGrant`                                                                                | [TaskTypeGrant](../../models/shared/tasktypegrant.md)                                          | :heavy_minus_sign:                                                                             |  The TaskTypeGrant message indicates that a task is a grant task and all related details.<br/> |
| `taskTypeRevoke`                                                                               | [TaskTypeRevokeInput](../../models/shared/tasktyperevokeinput.md)                              | :heavy_minus_sign:                                                                             |  The TaskTypeRevoke message indicates that a task is a revoke task and all related details.<br/> |