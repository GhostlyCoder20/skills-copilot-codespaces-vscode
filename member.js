function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA'
        },
        skills: ['js', 'html', 'css'],
        calculateNumbers: function(var1, var2) {
            return var1 + var2;
        }
    }
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.address.city);
    console.log(member.skills[1]);
    console.log(member.calculateNumbers(1, 2));
}