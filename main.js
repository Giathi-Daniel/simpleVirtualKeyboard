// controls of the keyboard

let button = document.getElementsByTagName('button')
let p = document.getElementById('ip');
let space = document.getElementById('space');
let backSpace = document.getElementById('backspace');

// controlling it with the comp keyboard
document.body.addEventListener('keydown', function(index) {
    for (let i = 0; i < button.length; i++) {
        // uppercase control
        if(button[i].innerHTML == index.key.toUpperCase()) {
            button[i].classList.add = ('active')
        };
    }

    p.innerHTML += index.key
    if(index.key == 'backSpace') {
        p.innerHTML = p.innerHTML.slice(0, -10)
    }
})

document.body.addEventListener('keyup', function(index) {
    for(let j=0; j<button.length; j++) {
        if(button[j].key == index.key.toUpperCase()) {
            button[j].classList.remove('active')
        }
    }
})


// clicking using the mouse
for(let x of button) {
    // mouse down (mouse is clicked on)
    x.addEventListener('mousedown', function() {
        x.className = 'active'
        p.innerHTML += x.innerHTML
    })
}

// mouse up (mouse is released)
for (let y of button) {
    y.addEventListener('mouseup', function() {
        y.className = 'active'
    })
}

space.addEventListener('mousedown', function() {
    space.classList.add('active')
    p.innerHTML += ""
});

space.addEventListener('mouseup', function() {
    space.classList.remove('active')
});

function back() {
    backSpace.className += 'active'

    p.innerHTML = p.innerHTML.slice(0, -1)
}