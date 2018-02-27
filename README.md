# isEq

### Deep-compare objects

`isEq` is a very tiny module that deep compares objects or arrays.

Although the intention is deep comparison, `isEq` can compare several datatypes.

## Supports

| Datatype             	| Support	|
|---------------------	|---		|
| Number              	| ✅ 	|
| String              	| ✅ 	|
| Boolean             	| ✅ 	|
| Regexp              	| ✅ 	|
| Object              	| ✅ 	|
| Array               	| ✅ 	|
| Cyclic Object/Array 	| ❌ 	|
| Function            	| ❌ 	|
| Symbol              	| ❌ 	|
| Blob                	| ❌ 	|

## Installation

Node:

```Shell
npm install --save iseq
```

In the browser:
```HTML
<script src="https://unpkg.com/iseq">
```

## Usage

```JavaScript
isEq(<sourceObject>, <compareObject>, [comparisonKeys])
```

where if comparison keys are not given, `compareObject` is compared against all keys of `sourceObject`.

## Example

So you want to filter all the entities in `Steins;Gate` that have the property `isEvil: true`.

```JavaScript
var entities = [
	{
		name: 'Future Gadget Laboratory',
		isEvil: false,
		after: 'Disrupting the status quo',
		"known-members": [
			{ name: 'Okabe Rintarou', gender: 'Male', occupation: 'University student' },
			{ name: 'Mayuri Shiina', gender: 'Female', occupation: 'Maid at May Queen' },
			{ name: 'Itaru Hashida', gender: 'Male', occupation: 'Hacker' },
		],
	},
	{
		name: 'SERN',
		isEvil: true,
		after: 'IBN 5100',
		"known-members": [
			{ name: 'Yuugo Tennouji', gender: 'Male', occupation: 'CRT mechanic' },
			{ name: 'Moeka Kiryū', gender: 'Female', occupation: 'Part-time editor' },
		],
	},
	{
		name: 'Strategic Focus',
		isEvil: true,
		after: 'Time travel',
		"known-members": [
			{ name: 'Alexis Leskinen', gender: 'Male', occupation: 'Professor' },
		],
	},
]

const evilEntities = entities.filter(eachEntity => isEq(eachEntity, { isEvil: true }, ['isEvil']));
```