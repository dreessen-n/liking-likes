// Increase likes

function addLike(element) {
    // get button id
    var x = element.id;
    // create tag to find label id based on btn id
    var y = 'label_' + x;
    // find lable to change 
    var z = document.querySelector('#' + y);
    // store like value 
    var num = z.innerText;
    // increment value
    num++;
    // update with new like value
    z.innerText = num;
}

// Change avatar image 

function addAvatar () {
    // find avatar img based on class
    var x = document.querySelector('.img_profile-pic');
    // get id value
    var y = x.id;
    // figure out which image you have and change other
    if (y == 'img_gen-user') {
        x.src = "./assets/toshiro.png";
        x.id = "img_profile-pic"
    } else {
        x.src = "./assets/user-circle.png"
        x.id = "img_gen-user"
    }
}