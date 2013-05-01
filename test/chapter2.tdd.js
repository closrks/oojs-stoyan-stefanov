var expect = require('expect.js');

suite('.Exercises', function() {

	suite('#1. What is the result of executing each of these lines in the console? Why?', function () {

		test('var a; typeof a; should be \'undefined\' because js will assign undefined to a non initialized variable and typeof will return type as string', function() {
			var a;
			expect(typeof a).to.be('undefined');
		});

		test('var s = \'1s\'; s++ should change s to NaN because js will convert to a number and 1s can\'t be converted', function () {
			var s = '1s';
			expect((s++).toString()).to.be('NaN');
		});

		test('!!"false" to be true because a double bang operator converts to boolean and a populated string is truthy', function () {
			expect(!!'false').to.be(true);
		});

		test('!!undefined to be false because a double bang operator converts to boolean and undefined is false', function () {
			expect(!!undefined).to.be(false);
		});

	});

});
