describe('count by', function() {
	it("counts up to a given first number in multiples of secondary number provided by user", function () {
		expect(countBy(10, 2)).to.eql([2, 4, 6, 8, 10])
	});
});
