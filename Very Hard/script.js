function calculator() {
    var a = prompt('enter first value');
    var b = prompt('enter operator');
    var c = prompt('enter final value');
    var x = parseInt(a)
    var z = parseInt(c)
    var d = x + z;
    var e = x - z;
    var f = x * z;
    var g = x / z;
    if (b == '+') {
        console.log('the sum of', a, 'and', c, 'is', d);
    }
    else if (b == '-'){
        console.log('the difference between', a, 'and', c, 'is', e);
    }
    else if (b == '*'){
        console.log('the product of', a, 'and', c, 'is', f);
    }
    else if (b == '/') {
        console.log('the quotient of', a, 'and', c, 'is', g);
    }
    else {
        console.log('do it right')
    }

}