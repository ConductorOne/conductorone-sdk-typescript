# DirectoryServiceCreateResponse

 The DirectoryServiceCreateResponse message.



## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `directoryView`                                                                                                                                                                    | [DirectoryView](../../models/shared/directoryview.md)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                 |  The directory view contains a directory and an app_path which is a JSONPATH set to the location in the expand mask that the expanded app will live if requested by the expander.<br/> |
| `expanded`                                                                                                                                                                         | Record<string, *any*>[]                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                 |  List of serialized related objects.<br/>                                                                                                                                          |