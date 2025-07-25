const accountId=144553
let accountEmail="abhinay@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2 is not allowed
accountEmail="abc@abc.com"
accountPassword="2121212"
accountCity="Bengaluru"

/*prefer not to use var because of block scopew and fuctional scope*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
 