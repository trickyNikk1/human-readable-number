module.exports = function toReadable (number) {
        const numberArr = String(number).split(``);
        const baseDigits = {
            0: `zero`,
            1: `one`,
            2: `two`,
            3: `three`,
            4: `four`,
            5: `five`,
            6: `six`,
            7: `seven`,
            8: `eight`,
            9: `nine`
        };
        const secondDigits ={
            10: `ten`,
            11: `eleven`,
            12: `twelve`,
            13: `thirteen`,
            14: `fourteen`,
            15: `fifteen`,
            16: `sixteen`,
            17: `seventeen`,
            18: `eighteen`,
            19: `nineteen`,
        };
        const thirdDigits = {
            20: `twenty`,
            30: `thirty`,
            40: `forty`,
            50: `fifty`,
            60: `sixty`,
            70: `seventy`,
            80: `eighty`,
            90: `ninety`,
        }
        if(number < 10) {
            return baseDigits[number];
        }
        if(number < 20) {
            return secondDigits[number];
        }
        if((number >= 20) && (number < 100)) {
            if(number % 10 ===0 ){
                return thirdDigits[Math.trunc(number / 10) * 10]      
            }
                return thirdDigits[Math.trunc(number / 10) * 10] + ` ` + baseDigits[number % 10];
        }
        if(number >= 100) {
            if(number % 100 === 0){
                    return baseDigits[Math.trunc(number / 100)] + ` hundred`; 
                }
            if(number % 100 < 10){
                    return baseDigits[Math.trunc(number / 100)] + ` hundred ` + baseDigits[number % 10];; 
                }
            if((number % 100) < 20) {
                return baseDigits[Math.trunc(number / 100)] + ` hundred ` +  secondDigits[number % 100];
            }
            if((number % 100) >= 20) {
                if(number % 10 === 0){
                    return baseDigits[Math.trunc(number / 100)] + ` hundred ` + thirdDigits[Math.trunc((number % 100) / 10) * 10];   
                } else {
                    return baseDigits[Math.trunc(number / 100)] + ` hundred ` + thirdDigits[Math.trunc((number % 100) / 10) * 10] + ` ` + baseDigits[number % 10];
                }
            }
        }
    }
