import test from 'ava';
import alfyTest from 'alfy-test';

const guidRegex = /(^([0-9A-Fa-f]{8}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{4}[-][0-9A-Fa-f]{12})$)/;
const mongoRegex = /^[0-9a-fA-F]{24}$/;

test(async t => {
	const alfy = alfyTest();
	const result = await alfy();

	t.deepEqual(result[0].title, 'GUID');
	t.regex(result[0].subtitle, guidRegex);
	t.regex(result[0].arg, guidRegex);
	t.deepEqual(result[0].subtitle, result[0].arg);

	t.deepEqual(result[1].title, 'MongoDB ObjectID');
	t.regex(result[1].subtitle, mongoRegex);
	t.regex(result[1].arg, mongoRegex);
	t.deepEqual(result[1].subtitle, result[1].arg);
});
