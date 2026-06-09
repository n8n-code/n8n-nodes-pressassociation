import type { INodeProperties } from 'n8n-workflow';

export const catalogueDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					]
				}
			},
			"options": [
				{
					"name": "List Catalogues",
					"value": "List Catalogues",
					"action": "Catalogue Collection",
					"description": "Return a collection of Catalogues.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/catalogue"
						}
					}
				},
				{
					"name": "Get Catalogue",
					"value": "Get Catalogue",
					"action": "Catalogue Detail",
					"description": "Return the content of the selected catalogue.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/catalogue/{{$parameter[\"catalogueId\"]}}"
						}
					}
				},
				{
					"name": "Get Catalogue Asset",
					"value": "Get Catalogue Asset",
					"action": "Catalogue Asset Collection",
					"description": "Return the content of the selected catalogue.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/catalogue/{{$parameter[\"catalogueId\"]}}/asset"
						}
					}
				},
				{
					"name": "Get Catalogue Asset Detail",
					"value": "Get Catalogue Asset Detail",
					"action": "Catalogue Asset Detail",
					"description": "Return the content of the selected catalogue asset.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/catalogue/{{$parameter[\"catalogueId\"]}}/asset/{{$parameter[\"assetId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /catalogue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					],
					"operation": [
						"List Catalogues"
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
						"Catalogue"
					],
					"operation": [
						"List Catalogues"
					]
				}
			}
		},
		{
			"displayName": "GET /catalogue/{catalogueId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					],
					"operation": [
						"Get Catalogue"
					]
				}
			}
		},
		{
			"displayName": "Catalogue Id",
			"name": "catalogueId",
			"required": true,
			"description": "The identifier for the selected catalogue.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					],
					"operation": [
						"Get Catalogue"
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
						"Catalogue"
					],
					"operation": [
						"Get Catalogue"
					]
				}
			}
		},
		{
			"displayName": "GET /catalogue/{catalogueId}/asset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset"
					]
				}
			}
		},
		{
			"displayName": "Catalogue Id",
			"name": "catalogueId",
			"required": true,
			"description": "The identifier for the selected catalogue.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "The query string for a title search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "The Start Date for the catalogue date range.",
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
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"description": "The End Date for the catalogue date range.",
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
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset"
					]
				}
			}
		},
		{
			"displayName": "Updated After",
			"name": "updatedAfter",
			"description": "Retrieve items only that have been updated after this point.",
			"default": "2015-05-06T00:00:00",
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
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Restrict number of returned items Min = 1, Max = 500.",
			"default": 500,
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
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset"
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
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset"
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
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset"
					]
				}
			}
		},
		{
			"displayName": "GET /catalogue/{catalogueId}/asset/{assetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset Detail"
					]
				}
			}
		},
		{
			"displayName": "Catalogue Id",
			"name": "catalogueId",
			"required": true,
			"description": "The identifier for the selected catalogue.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset Detail"
					]
				}
			}
		},
		{
			"displayName": "Asset Id",
			"name": "assetId",
			"required": true,
			"description": "The identifier for the selected catalogue asset.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset Detail"
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
						"Catalogue"
					],
					"operation": [
						"Get Catalogue Asset Detail"
					]
				}
			}
		},
];
