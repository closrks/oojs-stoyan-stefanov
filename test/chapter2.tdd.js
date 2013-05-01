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

		test('typeof -Infinity to be \'number\' because -Infinity is a reserved keyword for a number object that exceeds the largest negative number', function () {
			expect(typeof -Infinity).to.be('number');
		});

		test('10 % "0" to be NaN because "0" is converted to a Number and modules divides to find the remainder; You cannot divide by 0', function () {
			expect((10 % "0").toString()).to.be('NaN');
		});

		test('undefined === null to be false because null is a special defined object that means none', function ()  {
			expect(undefined === null).to.be(false);
		});

		test('false === "" to be false because an empty string is a falsy value but strict equivalency stops the conversion and "" isn\'t a boolean false', function () {
			expect(false === "").to.be(false);
		});

		test('typeof "2E+2" to be string since it is a literal string of exponent number syntax', function () {
			expect(typeof "2E+2").to.be('string');
		});

		test('var a = 3e+3; a++ to be a number 3001 since var is not need but pollutes the global scope, and ++ increments the exponent literal a', function () {
			var a = 3e+3;
			a++; 
			expect(a).to.be(3001);
		});

	});

	suite('#2. What is the value of v after the following?', function () {

		test('var v = 100; var v = v || 10; should be 100', function () {
			var v = 100;
			var v = v || 10;
			expect(v).to.be(100);
		})

		test('var v = 0; var v = v || 10; should be 10 because 0 is falsy', function () {
			var v = 0;
			var v = v || 10;
			expect(v).to.be(10);
		})

		test('var v = null; var v = v || 10; should be 10 because null is falsy', function () {
			var v = null;
			var v = v || 10;
			expect(v).to.be(10);
		})

		test('unset v; var v = v || 10; should be 10 because undefined is falsy', function () {
			var v;
			var v = v || 10;
			expect(v).to.be(10);
		})
	});

	suite('#3. Write a script that prints out the multiplcation table. Hint: use a loop nested inside another loop', function () {

		test('multiplecation table', function () {

			var multiplcationTable = '';
			for ( var i = 1, leni = 12; i <= leni; i++ ) {
				for ( var j = 1, lenj = 12; j <= lenj; j++ ) {
					multiplcationTable += i*j + ' '
				}
				multiplcationTable += '\n'
			}
			
			for ( var i = 1, leni = 12; i <= leni; i++ ) {
				for ( var j = 1, lenj = 12; j <= lenj; j++ ) {
					expect( multiplcationTable.indexOf( (i*j).toString() ) ).to.be.greaterThan(-1);
				}
			}

		});

	});

});
