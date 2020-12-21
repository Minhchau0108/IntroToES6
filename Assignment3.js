function multiArgument() {
	// const divide = function (a, b) {
	// 	return a / b;
	// };
  // YOUR CODE STARTS HERE
  const divide = (a, b) => a / b; 
	return divide(40, 10);
}
console.log(multiArgument());

function spreadWithArrow() {
	// const asArray = function (...args) {
	// 	return args;
	// };
	// YOUR CODE STARTS HERE
	const asArray = (...args) => args;
	return asArray(1, 2, 3, 4);
}
console.log(spreadWithArrow());

function withObject() {
	// const getObject = function (favoriteCandy) {
	// 	return { favoriteCandy };
	// };
	const getObject = (x) => ( {favoriteCandy : x} );
	// // YOUR CODE STARTS HERE
	return getObject('twix');
}
console.log(withObject());

function withMultiLineExpression() {
	// const getString = function (name) {
	// 	return `
  //       Hello there ${name}
  //       How are you doing today?
  //     `;
	// };
	// YOUR CODE STARTS HERE
	const getString = (name) => {
		return `
					Hello there ${name}
					How are you doing today?
		      `;
	}
	return getString('Ryan');
}
console.log(withMultiLineExpression());

function curryAdd() {
	// YOUR CODE STARTS HERE
	const curryAddition = a => b => c => a + b + c;
	return curryAddition(9)(3)(5);

	// function curryAddition(a) {
	// 	return function (b) {
	// 		return function (c) {
	// 			return a + b + c;
	// 		};
	// 	};
	// }
}
console.log(curryAdd());