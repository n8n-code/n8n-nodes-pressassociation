import type { INodeProperties } from 'n8n-workflow';

export const featureDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Feature"
					]
				}
			},
			"options": [
				{
					"name": "List Features",
					"value": "List Features",
					"action": "Feature Collection",
					"description": "Return a collection of Feature.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/feature"
						}
					}
				},
				{
					"name": "List Feature Types",
					"value": "List Feature Types",
					"action": "Feature Type Collection",
					"description": "Return a collection of Feature Types.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/feature-type"
						}
					}
				},
				{
					"name": "Get Feature",
					"value": "Get Feature",
					"action": "Feature Detail",
					"description": "Return the content of the selected feature.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/feature/{{$parameter[\"featureId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /feature",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Feature"
					],
					"operation": [
						"List Features"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "The namespace of the feature type.",
			"default": "netflix-monthly",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Feature"
					],
					"operation": [
						"List Features"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"description": "Date of the collection of feature items.",
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
						"Feature"
					],
					"operation": [
						"List Features"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "start",
			"description": "Start date for a range of features.",
			"default": "2018-09-15",
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
						"Feature"
					],
					"operation": [
						"List Features"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "end",
			"description": "End date for a range of features.",
			"default": "2018-10-15",
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
						"Feature"
					],
					"operation": [
						"List Features"
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
						"Feature"
					],
					"operation": [
						"List Features"
					]
				}
			}
		},
		{
			"displayName": "GET /feature-type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Feature"
					],
					"operation": [
						"List Feature Types"
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
						"Feature"
					],
					"operation": [
						"List Feature Types"
					]
				}
			}
		},
		{
			"displayName": "GET /feature/{featureId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Feature"
					],
					"operation": [
						"Get Feature"
					]
				}
			}
		},
		{
			"displayName": "Feature ID",
			"name": "featureId",
			"required": true,
			"description": "The identifier for the selected feature.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Feature"
					],
					"operation": [
						"Get Feature"
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
						"Feature"
					],
					"operation": [
						"Get Feature"
					]
				}
			}
		},
];
