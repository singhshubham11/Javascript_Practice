const accountId = 144553
let accountEmail = "ss@ss.com"
var accountPassword = "12345"
accountCity = "Raipur"
let accountState;

// accountId = 2 // not allowed because constant cannot be changed once declared


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])