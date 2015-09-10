describe('Roman Numerals', function() {
	it("translates numeric number into roman numerals", function () {
		expect(romans(10)).to.eql(['X']);
	});

	it("is anble to adjust for no more than 3 characters in a row", function () {
		expect(romans(19)).to.eql(['X','I','X']);
	});
});
