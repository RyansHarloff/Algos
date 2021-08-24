//Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

//function convertCoinChange(money) {
    // declare variables for different denominations (quarter, dime, nickel, penny)
    q = 0 // each variable holds the count of each coin
    d = 0
    n = 0
    p = 0 

    // multiply input by 100 : 3.21 == 321
    
    // take new number (321) and divide by 25 to get the number of quarters
    // make sure to round down to get a whole number
    // subtract the (# of quarters * 25) from the overall input # and then check the next denomination
    // repeat for different denominations
    function convertCoinChange(money){
        var quarters = 0
        var dimes = 0
        var nickles = 0
        var pennies = 0
        money *= 100
        quarters = Math.floor(money/25)
        money -= quarters*25
        dimes = Math.floor(money/10)
        money -= dimes*10
        nickles = Math.floor(money/5)
        money -= nickles*5
        pennies = money
        console.log("There are " + quarters + " quarters, " + dimes + " dimes, " + nickles + " nickles, and " + pennies + " pennies.")
    }
    convertCoinChange(2.68)