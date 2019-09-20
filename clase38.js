//Recursividad
/*
13(dividendo) / 4(divisor) 

13 - 4 = 9   1
9 - 4 = 5    1
5 - 4 = 1    1
1 - 4 = -3

dividenso mayor o igual al divisor
*/

function divisionEntera(dividendo, divisor){
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}