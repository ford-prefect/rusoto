initSidebarItems({"enum":[["AddAttributesToFindingsError","Errors returned by AddAttributesToFindings"],["CreateAssessmentTargetError","Errors returned by CreateAssessmentTarget"],["CreateAssessmentTemplateError","Errors returned by CreateAssessmentTemplate"],["CreateResourceGroupError","Errors returned by CreateResourceGroup"],["DeleteAssessmentRunError","Errors returned by DeleteAssessmentRun"],["DeleteAssessmentTargetError","Errors returned by DeleteAssessmentTarget"],["DeleteAssessmentTemplateError","Errors returned by DeleteAssessmentTemplate"],["DescribeAssessmentRunsError","Errors returned by DescribeAssessmentRuns"],["DescribeAssessmentTargetsError","Errors returned by DescribeAssessmentTargets"],["DescribeAssessmentTemplatesError","Errors returned by DescribeAssessmentTemplates"],["DescribeCrossAccountAccessRoleError","Errors returned by DescribeCrossAccountAccessRole"],["DescribeFindingsError","Errors returned by DescribeFindings"],["DescribeResourceGroupsError","Errors returned by DescribeResourceGroups"],["DescribeRulesPackagesError","Errors returned by DescribeRulesPackages"],["GetTelemetryMetadataError","Errors returned by GetTelemetryMetadata"],["ListAssessmentRunAgentsError","Errors returned by ListAssessmentRunAgents"],["ListAssessmentRunsError","Errors returned by ListAssessmentRuns"],["ListAssessmentTargetsError","Errors returned by ListAssessmentTargets"],["ListAssessmentTemplatesError","Errors returned by ListAssessmentTemplates"],["ListEventSubscriptionsError","Errors returned by ListEventSubscriptions"],["ListFindingsError","Errors returned by ListFindings"],["ListRulesPackagesError","Errors returned by ListRulesPackages"],["ListTagsForResourceError","Errors returned by ListTagsForResource"],["PreviewAgentsError","Errors returned by PreviewAgents"],["RegisterCrossAccountAccessRoleError","Errors returned by RegisterCrossAccountAccessRole"],["RemoveAttributesFromFindingsError","Errors returned by RemoveAttributesFromFindings"],["SetTagsForResourceError","Errors returned by SetTagsForResource"],["StartAssessmentRunError","Errors returned by StartAssessmentRun"],["StopAssessmentRunError","Errors returned by StopAssessmentRun"],["SubscribeToEventError","Errors returned by SubscribeToEvent"],["UnsubscribeFromEventError","Errors returned by UnsubscribeFromEvent"],["UpdateAssessmentTargetError","Errors returned by UpdateAssessmentTarget"]],"struct":[["AddAttributesToFindingsRequest",""],["AddAttributesToFindingsResponse",""],["AgentAlreadyRunningAssessment","<p>Used in the exception error that is thrown if you start an assessment run for an assessment target that includes an EC2 instance that is already participating in another started assessment run.</p>"],["AgentFilter","<p>Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.</p>"],["AgentPreview","<p>Used as a response element in the <a>PreviewAgents</a> action.</p>"],["AssessmentRun","<p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>"],["AssessmentRunAgent","<p>Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.</p>"],["AssessmentRunFilter","<p>Used as the request parameter in the <a>ListAssessmentRuns</a> action.</p>"],["AssessmentRunNotification","<p>Used as one of the elements of the <a>AssessmentRun</a> data type.</p>"],["AssessmentRunStateChange","<p>Used as one of the elements of the <a>AssessmentRun</a> data type.</p>"],["AssessmentTarget","<p>Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action.</p>"],["AssessmentTargetFilter","<p>Used as the request parameter in the <a>ListAssessmentTargets</a> action.</p>"],["AssessmentTemplate","<p>Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.</p>"],["AssessmentTemplateFilter","<p>Used as the request parameter in the <a>ListAssessmentTemplates</a> action.</p>"],["AssetAttributes","<p>A collection of attributes of the host from which the finding is generated.</p>"],["Attribute","<p>This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions.</p>"],["CreateAssessmentTargetRequest",""],["CreateAssessmentTargetResponse",""],["CreateAssessmentTemplateRequest",""],["CreateAssessmentTemplateResponse",""],["CreateResourceGroupRequest",""],["CreateResourceGroupResponse",""],["DeleteAssessmentRunRequest",""],["DeleteAssessmentTargetRequest",""],["DeleteAssessmentTemplateRequest",""],["DescribeAssessmentRunsRequest",""],["DescribeAssessmentRunsResponse",""],["DescribeAssessmentTargetsRequest",""],["DescribeAssessmentTargetsResponse",""],["DescribeAssessmentTemplatesRequest",""],["DescribeAssessmentTemplatesResponse",""],["DescribeCrossAccountAccessRoleResponse",""],["DescribeFindingsRequest",""],["DescribeFindingsResponse",""],["DescribeResourceGroupsRequest",""],["DescribeResourceGroupsResponse",""],["DescribeRulesPackagesRequest",""],["DescribeRulesPackagesResponse",""],["DurationRange","<p>This data type is used in the <a>AssessmentTemplateFilter</a> data type.</p>"],["EventSubscription","<p>This data type is used in the <a>Subscription</a> data type.</p>"],["FailedItemDetails","<p>Includes details about the failed items.</p>"],["Finding","<p>Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.</p>"],["FindingFilter","<p>This data type is used as a request parameter in the <a>ListFindings</a> action.</p>"],["GetTelemetryMetadataRequest",""],["GetTelemetryMetadataResponse",""],["InspectorClient","A client for the Amazon Inspector API."],["InspectorServiceAttributes","<p>This data type is used in the <a>Finding</a> data type.</p>"],["ListAssessmentRunAgentsRequest",""],["ListAssessmentRunAgentsResponse",""],["ListAssessmentRunsRequest",""],["ListAssessmentRunsResponse",""],["ListAssessmentTargetsRequest",""],["ListAssessmentTargetsResponse",""],["ListAssessmentTemplatesRequest",""],["ListAssessmentTemplatesResponse",""],["ListEventSubscriptionsRequest",""],["ListEventSubscriptionsResponse",""],["ListFindingsRequest",""],["ListFindingsResponse",""],["ListRulesPackagesRequest",""],["ListRulesPackagesResponse",""],["ListTagsForResourceRequest",""],["ListTagsForResourceResponse",""],["PreviewAgentsRequest",""],["PreviewAgentsResponse",""],["RegisterCrossAccountAccessRoleRequest",""],["RemoveAttributesFromFindingsRequest",""],["RemoveAttributesFromFindingsResponse",""],["ResourceGroup","<p>Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action.</p>"],["ResourceGroupTag","<p>This data type is used as one of the elements of the <a>ResourceGroup</a> data type.</p>"],["RulesPackage","<p>Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.</p>"],["SetTagsForResourceRequest",""],["StartAssessmentRunRequest",""],["StartAssessmentRunResponse",""],["StopAssessmentRunRequest",""],["SubscribeToEventRequest",""],["Subscription","<p>This data type is used as a response element in the <a>ListEventSubscriptions</a> action.</p>"],["Tag","<p>A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.</p>"],["TelemetryMetadata","<p>The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.</p>"],["TimestampRange","<p>This data type is used in the <a>AssessmentRunFilter</a> data type.</p>"],["UnsubscribeFromEventRequest",""],["UpdateAssessmentTargetRequest",""]],"type":[["AccessDeniedErrorCode",""],["AddRemoveAttributesFindingArnList",""],["AgentAlreadyRunningAssessmentList",""],["AgentHealth",""],["AgentHealthCode",""],["AgentHealthCodeList",""],["AgentHealthList",""],["AgentId",""],["AgentIdList",""],["AgentPreviewList",""],["AmiId",""],["Arn",""],["AssessmentRulesPackageArnList",""],["AssessmentRunAgentList",""],["AssessmentRunDuration",""],["AssessmentRunInProgressArnList",""],["AssessmentRunList",""],["AssessmentRunName",""],["AssessmentRunNotificationList",""],["AssessmentRunNotificationSnsStatusCode",""],["AssessmentRunState",""],["AssessmentRunStateChangeList",""],["AssessmentRunStateList",""],["AssessmentTargetList",""],["AssessmentTargetName",""],["AssessmentTemplateList",""],["AssessmentTemplateName",""],["AssessmentTemplateRulesPackageArnList",""],["AssetType",""],["AttributeKey",""],["AttributeList",""],["AttributeValue",""],["AutoScalingGroup",""],["AutoScalingGroupList",""],["BatchDescribeArnList",""],["Bool",""],["ErrorMessage",""],["EventSubscriptionList",""],["FailedItemErrorCode",""],["FailedItems",""],["FilterRulesPackageArnList",""],["FindingId",""],["FindingList",""],["Hostname",""],["InspectorEvent",""],["InvalidCrossAccountRoleErrorCode",""],["InvalidInputErrorCode",""],["IocConfidence",""],["Ipv4Address",""],["Ipv4AddressList",""],["LimitExceededErrorCode",""],["ListEventSubscriptionsMaxResults",""],["ListMaxResults",""],["ListParentArnList",""],["ListReturnedArnList",""],["Locale",""],["Long",""],["Message",""],["MessageType",""],["NamePattern",""],["NoSuchEntityErrorCode",""],["NumericSeverity",""],["NumericVersion",""],["PaginationToken",""],["PreviewAgentsMaxResults",""],["ProviderName",""],["ResourceGroupList",""],["ResourceGroupTags",""],["RuleName",""],["RuleNameList",""],["RulesPackageList",""],["RulesPackageName",""],["ServiceName",""],["Severity",""],["SeverityList",""],["SubscriptionList",""],["TagKey",""],["TagList",""],["TagValue",""],["TelemetryMetadataList",""],["Text",""],["Timestamp",""],["UserAttributeKeyList",""],["UserAttributeList",""],["Version",""]]});