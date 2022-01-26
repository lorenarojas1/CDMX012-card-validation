
const validator = {

    isValid(number){
        var digits = number.toString().split('').map(Number);//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        //console.log(number)

        //Multiplicar el número en posiciones(idx) pares * 2
        if(digits.length % 2 === 0){
            digits = digits.map((n, idx) => idx % 2 === 0 ? n * 2 : n)
        }
        else{
            digits = digits.map((n, idx) => idx % 2 === 1 ? n * 2 : n)
        }
        //console.log(digits)

        //Suma de los digitos mayores a 9
        digits = digits.map(n => n > 9 ? n - 9 : n);
        //console.log(digits)

        //Suma de los digitos
        const sum = digits.reduce((total, n) => total += n, 0);
        //console.log(sum)

        //Tarjeta valida(suma termina en "0") o invalida (suma "!=0")
        const sum2 = sum % 10 === 0;
        //console.log(sum2)

        return sum2;
    },

    maskify(number){

        var digits = number.toString().split('');
        //console.log(digits)

        return digits = digits.map((n, idx) => idx < number.length - 4 ? '#' : n).join('');

        //console.log(digits)
    }
};

export default validator;