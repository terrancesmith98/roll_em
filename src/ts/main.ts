
interface Person {
    firstName: string;
    lastName: string;
}



function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);   