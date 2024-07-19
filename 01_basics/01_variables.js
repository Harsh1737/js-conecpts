// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountCity = "Jaipur"
// function scoped
var accountPassword = "12345"
// block scoped + redeclaring + can initialize later
let accountEmail = "hitesh@google.com"
let accountState;
// block scoped + no redeclaring + initialized together
const accountId = 144553

console.log(accountId);
console.table([accountId, accountEmail,accountPassword])
