export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    let temp = '';
    for (let index = str.length - 1; index >= 0; index--) {
        temp += str[index]
    }
    return temp;
}

export function calculator(a, b) {
    return {
        add: function() {
            return a + b;
        },
        substract: function() {
          return a - b;
        },
        multiply: function() {
            return a * b;
        },
        divide: function() {
            if (b === 0) {
                return 'Error: Division by zero';
            }
            return a / b;
        }
    };
}

export function cipher(str, offset) {
    const alphabet = {};

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i);
        alphabet[i] = letter;
    }
    let cipStr = '';

    if (str) {
        function isUpper(str) {
            let upArr = [];
            for (let i = 0; i < str.length; i++) {
                if (str[i] === str[i].toUpperCase()) {
                    upArr.push(i);
                }
            }
            return upArr;
        }

        function isLetter(obj, value) {            
            return Object.values(obj).includes(value.toLowerCase());
        }

        
        const alphabetLenght = Object.keys(alphabet).length;
        for (let index = 0; index < str.length; index++) {
            if (str[index] === ' ') {
                cipStr += str[index];
            }
            else if (isLetter(alphabet, str[index])) {
                for (let i = 0; i < alphabetLenght; i++) {
                    let offVal = i + offset;
                    if (str[index].toLowerCase() === alphabet[i]) {
                        if (offVal < 0) {
                            offVal += alphabetLenght;
                            cipStr += alphabet[offVal];
                        }
                        else if (offVal > 25) {
                            offVal -= alphabetLenght;
                            cipStr += alphabet[offVal];
                        }
                        else {
                            cipStr += alphabet[offVal];
                        }
                    }
                }
                
            }
            else {
                cipStr += str[index];
            }
        }
        
        const isUpperIndexes = isUpper(str);
        let cipArray = [...cipStr];
        isUpperIndexes.forEach(index => {            
            cipArray[index] = cipArray[index].toUpperCase();            
        });

        cipStr = cipArray.join('');
        return cipStr;
    }
    else {
        return false;
    }
}

export function analyzeArray(arr) {
    let obj = {};
    let numbers = arr.length;
    let total = 0;
    
    arr.forEach(element => {
        total += element;
    });
        
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);

    return obj = {average: total/numbers, min: minVal, max: maxVal, length: arr.length};
}