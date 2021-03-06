describe("Person", function() {
    var person, otherPerson;

    describe("Person Empty Constructor", function() {

        beforeEach(function() {
            person = new Person();
        });

        it("should be possible to create new Person instance", function() {
            expect(person).not.toBeUndefined();
        });

    });

    describe("Person Constructor with configuration", function() {

        beforeEach(function() {
            person = new Person({
                name : 'Dan'
            });

            otherPerson = new Person({
                lastName: 'Nelinger'
            });
        });

        it("should be possible to create new Person instance with configuration", function() {
            expect(person).not.toBeUndefined();
        });

        it("should should have getters for configuration properties", function() {
            expect(person.getName).not.toBeUndefined();
        });

        it("should should be possible to get configuration properties via getters", function() {
            expect(person.getName()).toEqual('Dan');
        });

        it("should should be possible to set configuration via setters", function() {
            expect(person.getName()).toEqual('Dan');
            expect(person.setName('Carolina'));
            expect(person.getName()).toEqual('Carolina');
        });

        it("Different instances should have getter and setters only for their respective properties", function() {
            expect(person.getName).not.toBeUndefined();
            expect(person.getLastName).toBeUndefined();
            expect(otherPerson.getName).toBeUndefined();
            expect(otherPerson.getLastName).not.toBeUndefined();
        });
    });
});