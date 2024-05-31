alert('if you like vote for it')
function insert(num) {
    var a = document.form.textview;
    a.value += num;
}

function opt(amd) {
    var view = document.form.textview;
    if (view.value != '') {
        view.value += amd;
    }
}
// var view= getElementsByClassName('inner');


// function opt(amd) {
//     var square = document.form.textview;
//     if (square.value != '') {
//         square.value.math.sqrt(square.value);
//     }
// }
function zero() {
    var view = document.form.textview;
    if (view.value != '') {
        view.value += '0';
    } else if (view.value === '&#8730') {
        view.value += '&#8730'
        
    }
}
function equal() {
    var button = document.getElementsByClassName('none');
    var a = document.form.textview;
    var exp = a.value;
    if (exp) {
        try { a.value = eval(exp); }
        catch (e) {
            alert('jijo!');
            document.form.textview.value = 'shenzi!!!';
            None();
        }
    }
    if (a.value == 0) {
        a.value = '';
    }
    if (a.value == 'Infinity') {
        document.form.textview = 'cant divide by zero!';
        alert('cant divide by zero!')
        none();
    } if (a.value == '&#8730') {
        a.value='&#8730'
        
        
    }
}
    
function none() {
    alert('press the clear button');
    
}
function clean() {
    document.form.textview.value = '';
    
}
function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1)
    
}