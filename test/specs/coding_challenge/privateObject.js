let username=Symbol("username");
let password=Symbol("password");

let privateObj={
    [username]:"ABC",
    [password]:"XYZ"
}

console.log(privateObj.username);
console.log(privateObj.password);

