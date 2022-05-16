// Increase likes

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

function addAvatar () {
    var x = document.querySelector('.img_profile-pic');
    console.log(x);
    x.src = "./assets/toshiro.png";
}