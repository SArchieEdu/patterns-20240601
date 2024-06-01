function calculateAlgoritm1() {
    return 1 + 1;
}
function calculateAlgoritm2() {
    return 5 + 6;
}
function calculateAlgoritm3() {
    return 3 + 9;
}
function calculateAlgoritm4() {
    return 7 + 2;
}
function calculateAlgoritm5() {
    return 3 + 5;
}

const calculateMap = {
    '1': calculateAlgoritm1,
    '2': calculateAlgoritm2,
    '3': calculateAlgoritm3,
    '4': calculateAlgoritm4,
    '5': calculateAlgoritm5,
}


function calculateSum(algoritm: () => number) {
    return 100 + algoritm();
}

calculateSum(calculateMap('3'))