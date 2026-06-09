import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { assetDescription } from './resources/asset';
import { catalogueDescription } from './resources/catalogue';
import { channelDescription } from './resources/channel';
import { contributorDescription } from './resources/contributor';
import { featureDescription } from './resources/feature';
import { platformDescription } from './resources/platform';
import { scheduleDescription } from './resources/schedule';

export class Pressassociation implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'pressassociation',
		name: 'N8nDevPressassociation',
		icon: { light: 'file:./pressassociation.svg', dark: 'file:./pressassociation.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Welcome to the API Reference Docs page for the Press Association TV API (v2)',
		defaults: { name: 'pressassociation' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevPressassociationApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Asset",
					"value": "Asset",
					"description": ""
				},
				{
					"name": "Catalogue",
					"value": "Catalogue",
					"description": ""
				},
				{
					"name": "Channel",
					"value": "Channel",
					"description": ""
				},
				{
					"name": "Contributor",
					"value": "Contributor",
					"description": ""
				},
				{
					"name": "Feature",
					"value": "Feature",
					"description": ""
				},
				{
					"name": "Platform",
					"value": "Platform",
					"description": ""
				},
				{
					"name": "Schedule",
					"value": "Schedule",
					"description": ""
				}
			],
			"default": ""
		},
		...assetDescription,
		...catalogueDescription,
		...channelDescription,
		...contributorDescription,
		...featureDescription,
		...platformDescription,
		...scheduleDescription
		],
	};
}
