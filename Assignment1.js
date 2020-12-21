function getAverage() {
	const obj = { x: 3.6, y: 7.8, z: 4.3 };
	// const x = obj.x;
	// const y = obj.y;
	// const z = obj.z;
	// YOUR CODE STARTS HERE
  let {x, y, z} = obj;
	return Math.floor((x + y + z) / 3.0);
}
console.log(getAverage());

function getAddress() {
	let coderschool = {
		city: 'HCMC',
		country: 'Vietnam',
		address: {
			number: 12,
			street: 'Ton Dan',
			district: '4',
		},
	};
  // YOUR CODE STARTS HERE
  let {city, country, address : {street}} = coderschool;

	return city === 'HCMC' && country === 'Vietnam' && street === 'Ton Dan';
}
console.log(getAddress());

function getNestedElements() {
	const food = [
		['carrots', 'beans', 'peas', 'lettuce'],
		['apples', 'mangos', 'oranges'],
		['cookies', 'cake', 'pizza', 'chocolate'],
	];
	// refactor the lines below
	// const carrots = food[0][0];
	// const cookies = food[2][0];
	// const mangos = food[1][1];
  // YOUR CODE STARTS HERE
  const [firstRow, secondRow, thirdRow] = food;
  const [carrots] = firstRow;
  const [cookies] = thirdRow;
  const [,mangos] = secondRow;
	return { carrots, cookies, mangos };
}
console.log(getNestedElements());