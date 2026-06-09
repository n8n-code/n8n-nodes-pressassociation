import type { INodeProperties } from 'n8n-workflow';

export const contributorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contributor"
					]
				}
			},
			"options": [
				{
					"name": "List Contributor",
					"value": "List Contributor",
					"action": "Contributor Collection",
					"description": "Return a collection of Contributors.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contributor"
						}
					}
				},
				{
					"name": "Get Contributor",
					"value": "Get Contributor",
					"action": "Contributor Detail",
					"description": "Return the content of the selected contributor.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contributor/{{$parameter[\"contributorId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /contributor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contributor"
					],
					"operation": [
						"List Contributor"
					]
				}
			}
		},
		{
			"displayName": "Updated After",
			"name": "updatedAfter",
			"description": "Updated After",
			"default": "2015-05-05T00:00:00.000Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "updatedAfter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contributor"
					],
					"operation": [
						"List Contributor"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit the the number of items to be returned per page. For example: 5.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contributor"
					],
					"operation": [
						"List Contributor"
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
						"Contributor"
					],
					"operation": [
						"List Contributor"
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
						"Contributor"
					],
					"operation": [
						"List Contributor"
					]
				}
			}
		},
		{
			"displayName": "GET /contributor/{contributorId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contributor"
					],
					"operation": [
						"Get Contributor"
					]
				}
			}
		},
		{
			"displayName": "Contributor Id",
			"name": "contributorId",
			"required": true,
			"description": "Filter the schedule items by contributor ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contributor"
					],
					"operation": [
						"Get Contributor"
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
						"Contributor"
					],
					"operation": [
						"Get Contributor"
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
						"Contributor"
					],
					"operation": [
						"Get Contributor"
					]
				}
			}
		},
];
