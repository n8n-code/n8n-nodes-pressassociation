import type { INodeProperties } from 'n8n-workflow';

export const assetDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Asset"
					]
				}
			},
			"options": [
				{
					"name": "List Assets",
					"value": "List Assets",
					"action": "Asset Collection",
					"description": "Return a collection of Assets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/asset"
						}
					}
				},
				{
					"name": "Get Asset",
					"value": "Get Asset",
					"action": "Asset Detail",
					"description": "Return the content of the selected asset.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/asset/{{$parameter[\"assetId\"]}}"
						}
					}
				},
				{
					"name": "Get Asset Contributors",
					"value": "Get Asset Contributors",
					"action": "Asset Contributors",
					"description": "Return the contributors of the selected asset.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/asset/{{$parameter[\"assetId\"]}}/contributor"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /asset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Asset"
					],
					"operation": [
						"List Assets"
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
						"Asset"
					],
					"operation": [
						"List Assets"
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
						"Asset"
					],
					"operation": [
						"List Assets"
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
						"Asset"
					],
					"operation": [
						"List Assets"
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
						"Asset"
					],
					"operation": [
						"List Assets"
					]
				}
			}
		},
		{
			"displayName": "GET /asset/{assetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Asset"
					],
					"operation": [
						"Get Asset"
					]
				}
			}
		},
		{
			"displayName": "Asset Id",
			"name": "assetId",
			"required": true,
			"description": "A asset ID filter for the schedule collection. This can be a reference to any type of asset i.e. movie, season, series or episode.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Asset"
					],
					"operation": [
						"Get Asset"
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
						"Asset"
					],
					"operation": [
						"Get Asset"
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
						"Asset"
					],
					"operation": [
						"Get Asset"
					]
				}
			}
		},
		{
			"displayName": "GET /asset/{assetId}/contributor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Asset"
					],
					"operation": [
						"Get Asset Contributors"
					]
				}
			}
		},
		{
			"displayName": "Asset Id",
			"name": "assetId",
			"required": true,
			"description": "A asset ID filter for the schedule collection. This can be a reference to any type of asset i.e. movie, season, series or episode.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Asset"
					],
					"operation": [
						"Get Asset Contributors"
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
						"Asset"
					],
					"operation": [
						"Get Asset Contributors"
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
						"Asset"
					],
					"operation": [
						"Get Asset Contributors"
					]
				}
			}
		},
];
