import type { INodeProperties } from 'n8n-workflow';

export const scheduleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Schedule"
					]
				}
			},
			"options": [
				{
					"name": "List Schedule",
					"value": "List Schedule",
					"action": "Schedule Collection",
					"description": "The schedule endpoint produces a linear TV schedule for a given channel and date range.\n\n - The date range supplied must be no larger than 21 days.\n - If no end data is passed the API will default to start date + 24 hours.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/schedule"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schedule"
					],
					"operation": [
						"List Schedule"
					]
				}
			}
		},
		{
			"displayName": "Channel Id",
			"name": "channelId",
			"required": true,
			"description": "The identifier for the selected channel.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "channelId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Schedule"
					],
					"operation": [
						"List Schedule"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"required": true,
			"description": "The Start Date for the schedule.",
			"default": "2015-05-05T00:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Schedule"
					],
					"operation": [
						"List Schedule"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"description": "The End Date for the schedule.",
			"default": "2015-05-06T00:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Schedule"
					],
					"operation": [
						"List Schedule"
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
						"Schedule"
					],
					"operation": [
						"List Schedule"
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
						"Schedule"
					],
					"operation": [
						"List Schedule"
					]
				}
			}
		},
];
