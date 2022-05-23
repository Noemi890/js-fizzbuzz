// TODO: Write your function in this file

// With Steve extension from morning exercises.

const values = {
    firstNum: {
        value: 3,
        string: "Fizz"
    },

    secondNum: {
        value: 5,
        string: "Buzz"
    },

    firstAndSecond: {
        string: "FizzBuzz"
    }
}

const fizzBuzz = (lower, upper) => {

    const fizzBuzzArray = [];

    for (let i = lower; i <= upper; i++) {

    if (i % values.firstNum.value === 0 && i % values.secondNum.value !== 0) {
        fizzBuzzArray.push(values.firstNum.string)
    }

    else if (i % values.secondNum.value === 0 && i % values.firstNum.value !== 0) {
        fizzBuzzArray.push(values.secondNum.string)
    }

    else if (i % values.firstNum.value === 0 && i % values.secondNum.value === 0) {
        fizzBuzzArray.push(values.firstAndSecond.string)
    }

    else {
        fizzBuzzArray.push(i)
    }

}

 return fizzBuzzArray;

}

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
