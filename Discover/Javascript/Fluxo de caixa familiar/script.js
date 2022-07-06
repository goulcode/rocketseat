let calculateText = "Calculando seu saldo."
let calculatedText = "Saldo calculado."

let family = {
    incomes: [2500, 3000, 55, 25.50, 12.25, 12.25],
    expenses: [1200, 175, 5.50, 700, 1001]
}

function sumValues (array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance () {
    const calculateIncomes = sumValues(family.incomes)
    const calculateExpenses = sumValues(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total > 0
    const isntOk = total < 0
    const zeroed = total == 0

    let balanceText = "Seu saldo está zerado."

    if (itsOk) {
         balanceText = "Seu saldo está positivo."
    } else if (isntOk) {
         balanceText = "Seu saldo está negativo."
    } else if (zeroed) {
         balanceText = "Seu saldo está zerado."
    }

    console.log(calculateText)
    console.log(`${balanceText}. Você tem R$${total.toFixed(2)} em conta.`)

}

calculateBalance()