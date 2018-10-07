function shoppingTime(memberId, money) {
    if (money < 50000) {
        return 'Mohon Maaf, Uang Tidak cukup'
    }
    if (memberId == '' || money == undefined) {
        return 'mohon maaf toko x hanya berlaku untuk member saja'
    }
    var sale = {
        sepatu: 1500000,
        'Baju Zoro': 500000,
        'Baju H&N': 250000,
        'Sweater Uniklooh': 175000,
        'Casing Handphone': 50000,
    }
    var listPurchased = []
    var result = {}
    var changeMoney = money

    for (var i = 0; i < Object.keys(sale).length; i++) {
        var selector = sale[Object.keys(sale)[i]]
        if (money >= selector) {
            changeMoney -= selector
            listPurchased.push(Object.keys(sale)[i])
        }
    }
    result.memberId = memberId;
    result.money = money
    result.listPurchased = listPurchased
    result.changeMoney = changeMoney
    return result
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
