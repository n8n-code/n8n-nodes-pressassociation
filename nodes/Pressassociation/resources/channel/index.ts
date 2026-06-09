import type { INodeProperties } from 'n8n-workflow';

export const channelDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					]
				}
			},
			"options": [
				{
					"name": "List Channels",
					"value": "List Channels",
					"action": "Channel Collection",
					"description": "If you are interested in a list of channels that have had there schedule updated you can filter by the following query params.\n - scheduleStart\n - scheduleEnd\n - scheduleUpdatedSince\n\nadding these query params will filter the channel collection to only return channels that have been updated within the given range, updatedSince stores the state of your previous call.\n\nExample Usage: Every 10 minutes get me the channels that have updated schedules for the next 2 weeks.\n\n/channel?platform={uuid}&scheduleStart={today}&scheduleEnd={today + 2 weeks}&updatedSince={10 minutes ago}\n\nAlso please note epg numbers are only exposed when a platform and region are passed to the query.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channel"
						}
					}
				},
				{
					"name": "Get Channel",
					"value": "Get Channel",
					"action": "Channel Detail",
					"description": "Return the content of the selected channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/channel/{{$parameter[\"channelId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /channel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Platform ID",
			"name": "platformId",
			"description": "The identifier for the selected platform. Multiple platforms can be passed to the API without a region Id. Passing multiple platforms without a region will not return epg numbers as these are linked to a platform and region.",
			"default": "d3b26caa-8c7d-5f97-9eff-40fcf1a6f8d3",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "platformId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Region ID",
			"name": "regionId",
			"description": "The platform region ID for the channel selection.",
			"default": "afa4f624-da9b-54ce-b514-570345dbbdce",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "regionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Aliases",
			"name": "aliases",
			"description": "Flag to display Legacy and Provider Ids.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "aliases",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"description": "Date of the Channel State to select, this will display channel names and attributes in the future or past.",
			"default": "2018-09-15",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Schedule Start",
			"name": "scheduleStart",
			"description": "The Start Date for the schedule.",
			"default": "2015-05-05T00:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "scheduleStart",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Schedule End",
			"name": "scheduleEnd",
			"description": "The End Date for the schedule.",
			"default": "2015-05-06T00:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "scheduleEnd",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Schedule Updated Since",
			"name": "scheduleUpdatedSince",
			"description": "Schedule Updated Since",
			"default": "2015-05-05T00:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "scheduleUpdatedSince",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apikey (header: apikey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apikey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /channel/{channelId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"Get Channel"
					]
				}
			}
		},
		{
			"displayName": "Channel ID",
			"name": "channelId",
			"required": true,
			"description": "The identifier for the selected channel.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"Get Channel"
					]
				}
			}
		},
		{
			"displayName": "Aliases",
			"name": "aliases",
			"description": "Flag to display Legacy and Provider Ids.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "aliases",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"Get Channel"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apikey (header: apikey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apikey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Channel"
					],
					"operation": [
						"Get Channel"
					]
				}
			}
		},
];
