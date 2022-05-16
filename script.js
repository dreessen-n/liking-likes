// Increase likes

// function addLike2() {
//     var x = document.querySelector('.like-num1')
//     console.log(x)
//     var num = x.innerText;
//     num++;
//     x.innerText = num;
//     console.log(num);
// }


function addLike(element) {
    // console.log(element);
    var x = element.id;
    // console.log(x);
    var y = 'label_' + x;
    // console.log(y);
    var z = document.querySelector('#' + y);
    // console.log(z);
    var num = z.innerText;
    num++;
    z.innerText = num;
}