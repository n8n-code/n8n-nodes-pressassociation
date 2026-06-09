import type { INodeProperties } from 'n8n-workflow';

export const platformDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					]
				}
			},
			"options": [
				{
					"name": "List Platforms",
					"value": "List Platforms",
					"action": "Platform Collection",
					"description": "Return a list of available platforms.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform"
						}
					}
				},
				{
					"name": "Get Platform",
					"value": "Get Platform",
					"action": "Platform Detail",
					"description": "Return the content of the selected platform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/{{$parameter[\"platformId\"]}}"
						}
					}
				},
				{
					"name": "List Platform Regions",
					"value": "List Platform Regions",
					"action": "Platform Region Collection",
					"description": "Return a list of regions for a platform.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/{{$parameter[\"platformId\"]}}/region"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /platform",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					],
					"operation": [
						"List Platforms"
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
						"Platform"
					],
					"operation": [
						"List Platforms"
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
						"Platform"
					],
					"operation": [
						"List Platforms"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/{platformId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					],
					"operation": [
						"Get Platform"
					]
				}
			}
		},
		{
			"displayName": "Platform ID",
			"name": "platformId",
			"required": true,
			"description": "The identifier for the selected platform.",
			"default": "d3b26caa-8c7d-5f97-9eff-40fcf1a6f8d3",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					],
					"operation": [
						"Get Platform"
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
						"Platform"
					],
					"operation": [
						"Get Platform"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/{platformId}/region",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					],
					"operation": [
						"List Platform Regions"
					]
				}
			}
		},
		{
			"displayName": "Platform ID",
			"name": "platformId",
			"required": true,
			"description": "The identifier for the selected platform.",
			"default": "d3b26caa-8c7d-5f97-9eff-40fcf1a6f8d3",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Platform"
					],
					"operation": [
						"List Platform Regions"
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
						"Platform"
					],
					"operation": [
						"List Platform Regions"
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
						"Platform"
					],
					"operation": [
						"List Platform Regions"
					]
				}
			}
		},
];
