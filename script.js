
const PrimeNumber = () => {
    let InputValue = document.getElementById("input-prime").value;
    let isPrime = true;

    if (InputValue === 0) {
        console.log("0 não conta.");
        return
    }

    if (InputValue < 0) {
        console.log("Digite um número positivo.");
        return
    }

    if (!InputValue) {  
        console.log("Digite um número.");
        return

    }
    if (InputValue === 1) {
        console.log("1 não conta.");
        return
    }
    
        else if (InputValue > 1) {
    
            for (let i = 2; i < InputValue; i++) {
                if (InputValue % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
    
    if (isPrime) {
        console.log("O número " + InputValue + " é primo.");
    } else {
        console.log("O número " + InputValue + " não é primo.");
    }
    return
}

const FatorialNumber = () => {
    let InputValue = document.getElementById("input-fatorial").value;

    if (InputValue === 0) {
        console.log("0 não é um número válido")
    }

    if (InputValue < 0) {
        console.log("Por favor, insira um número positivo")
    }

    for (let i = InputValue -1; i >= 1; i--) {
    InputValue *= i;
    }
    console.log(InputValue)

}

const Finonacci = () => {
    let InputValue = document.getElementById("input-fibonacci").value;
    let num1 = 0;
    let num2 = 1;
    let sum;

    if (InputValue <= 0) {
        console.log(`O valor ${InputValue} é inválido para a sequência`)
        return
    }

    for (let i = 0 ; i <= InputValue; i++) {
    sum = num1 + num2;
    num1 = num2
    num2 = sum
    }
    console.log(num2)
}

var number;

const Play = () => {
    number = Math.floor(Math.random() * 100);
    console.log(number);
    return number;
}

const Check = () => {
    console.log(number)
}

const Guess = () => {
    let InputValue = document.getElementById("input-guess").value;
    let i = 0;
    console.log(number)

        if (InputValue < 0 || InputValue > 99) {
            console.log("Número inválido")
            return
        }
        
        if (InputValue < number){
            console.log("O número pensado é maior que esse")
            i += 1
            }
        
            else if (InputValue == number){
            console.log("O número é exatamente esse!")
            console.log(i)
            }
        
            else {
            console.log("O número pensado é menor que esse")
            i += 1
            }

    }


