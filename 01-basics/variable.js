const accountId = 12243;
let accountEmail = "test@test.com";
var accountPassword = "12341";
accountCity = "belgaum";
let accountState;
// accountId = 2;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// MARK: prefer not to use var because of issue in block scope and functional scope
