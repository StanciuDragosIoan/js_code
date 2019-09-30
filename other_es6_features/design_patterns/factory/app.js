/*
    a way of creating an interface for creating objects, but we can let subclasses 
    decide which classes to instantiate

    factory methods are used to manage/maintain collections of objects that are different
    and have many common characteristics (e.g. members)
*/

function MemberFactory()
{
    this.createMember = function(name, type){
        let member;

        if(type === 'simple'){
            member = new SimpleMembership(name);
        } else if(type === 'standard'){
            member = new StandardMembership(name);
        } else if(type === 'super'){
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}


//constructors for members
const SimpleMembership = function(name){
    this.name = name;
    this.cost = '5$';
}
const StandardMembership = function(name){
    this.name = name;
    this.cost = '15$';
}
const SuperMembership = function(name){
    this.name = name;
    this.cost = '25$';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Jane Doe', 'standard'));
members.push(factory.createMember('Janneth Doe', 'super'));

//console.log(members);

members.forEach(function(member){
    member.define();
});