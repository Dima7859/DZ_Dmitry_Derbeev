const inputCalc = document.getElementById('rezult'),
      resultCalc = document.getElementById('allresult');
let numOperation;
let memeryNewNumber = false;
let memeryCyrrentNumber = 0;
let memeryPendingOperation = '';

function foo(i) {
    if (memeryNewNumber) {
        memeryNewNumber = false;
        inputCalc.value = '';
    } else {
        inputCalc.value = inputCalc.value + i;
    }
}

function operation(oper) {
    const localOperationMemory = inputCalc.value;

    if (memeryNewNumber && (memeryPendingOperation !== '=')) {
        localOperationMemory = memeryCyrrentNumber ;
    } else {
        memeryNewNumber = true;
        if (memeryPendingOperation === '+') {
            memeryCyrrentNumber += Number(localOperationMemory);
        } else if (memeryPendingOperation === '-') {
            memeryCyrrentNumber -= Number(localOperationMemory);
        } else if (memeryPendingOperation === '*') {
            memeryCyrrentNumber *= Number(localOperationMemory);
        } else if (memeryPendingOperation === '/') {
            memeryCyrrentNumber /= Number(localOperationMemory);
        } else {
            memeryCyrrentNumber = Number(localOperationMemory);
        }
        // switch (memeryPendingOperation) {
        //     case '+' :
        //         memeryCyrrentNumber += Number(localOperationMemory);
        //         break;
        //     case '-' :
        //         memeryCyrrentNumber -= Number(localOperationMemory);
        //         break;
        //     case '*' :
        //         memeryCyrrentNumber *= Number(localOperationMemory);
        //         break;
        //     case '/' :
        //         memeryCyrrentNumber /= Number(localOperationMemory);
        //         break;
        //     default:
        //         memeryCyrrentNumber = Number(localOperationMemory);
        //         break;
        // }
        inputCalc.value = memeryCyrrentNumber;
        memeryPendingOperation = oper ;
    }
}

function backspace(){
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1);
}

function reset(){
    inputCalc.value = '';
    memeryNewNumber = true;
    memeryCyrrentNumber = 0;
    memeryPendingOperation = '';
}

function point() {
    let localOperationMemory = inputCalc.value;

    if (memeryNewNumber) {
        localOperationMemory = '0.';
        memeryNewNumber = false;
    }else {
        if (localOperationMemory.indexOf('.') === -1 ) {
            localOperationMemory += '.';
        }
    }
}

// let memeryCyrrentNumber = 0;
// let memeryNewNumber = false;
// let memeryPendingOperation = '';

// function foo0(){
//     from_get = document.getElementById('num0').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function foo1(){
//     from_get = document.getElementById('num1').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function foo2(){
//     from_get = document.getElementById('num2').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function foo3(){
//     from_get = document.getElementById('num3').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function foo4(){
//     from_get = document.getElementById('num4').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function foo5(){
//     from_get = document.getElementById('num5').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function foo6(){
//     from_get = document.getElementById('num6').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function foo7(){
//     from_get = document.getElementById('num7').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function foo8(){
//     from_get = document.getElementById('num8').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function foo9(){
//     from_get = document.getElementById('num9').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }

// function point(){
//     from_get = document.getElementById('numPoint').innerHTML;
//     from_rezult = document.getElementById('rezult').innerHTML;
//     if (from_rezult === '0'){
//         document.getElementById('rezult').innerHTML = '';
//     }
//     from_length = from_length.length;

//     document.getElementById('rezult').innerHTML += 'from_get';
//     // console.log(from_get);

// }
