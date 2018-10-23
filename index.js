'use strict';
const alfy = require('alfy');
const uuid = require('uuid/v1');
const mongoid = require('mongoid-js');

const ids = {
	guid: uuid(),
	mongoid: mongoid()
};

alfy.output([
	{
		title: 'GUID',
		subtitle: ids.guid,
		arg: ids.guid
	},
	{
		title: 'MongoDB ObjectID',
		subtitle: ids.mongoid,
		arg: ids.mongoid
	}
]);
