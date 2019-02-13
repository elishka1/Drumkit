// Play drum by keyboard press

// Play music by mouse click
let button1 = document.getElementById("button1")

let button2 = document.getElementById("button2")

let button3 = document.getElementById("button3")

let button4 = document.getElementById("button4")

let button5 = document.getElementById("button5")

let button6 = document.getElementById("button6")

let button7 = document.getElementById("button7")

let button8 = document.getElementById("button8")

let button9 = document.getElementById("button9")
    
    let sound1 = document.getElementById("plays1")
    button1.addEventListener("click", ()=>{
        sound1.play()
    })

    let sound2 = document.getElementById("plays2")
    button2.addEventListener("click", ()=>{
        sound2.play()

    })

    let sound3 = document.getElementById("plays3")
    button3.addEventListener("click", ()=>{
        sound3.play()

    })

    let sound4 = document.getElementById("plays4")
     button4.addEventListener("click", ()=>{
        sound4.play()

    })
    
    let sound5 = document.getElementById("plays5")
    button5.addEventListener("click", ()=>{
        sound5.play()

    })

    let sound6 = document.getElementById("plays6")
    button6.addEventListener("click", ()=>{
        sound6.play()

    })
 
    let sound7 = document.getElementById("plays7")
    button7.addEventListener("click", ()=>{
        sound7.play()

    })

    let sound8 = document.getElementById("plays8")
    button8.addEventListener("click", ()=>{
        sound8.play()

   })

    let sound9 = document.getElementById("plays9")
    button9.addEventListener("click", ()=>{
        sound9.play()

  })

 

window.addEventListener("keypress", function1)


function function1(event) {
    if (event.key=="a") {
        document.getElementById("plays1")
        sound1.play()

    }

    else if (event.key=="s") {
        document.getElementById("plays2")
        sound2.play()
    }

    else if (event.key=="d") {
        document.getElementById("plays3")
        sound3.play()
    }

    else if (event.key=="f") {
        document.getElementById("plays4")
        sound4.play()
    }

    else if (event.key=="g") {
        document.getElementById("plays5")
        sound5.play()
    }

    else if (event.key=="h") {
        document.getElementById("plays6")
        sound6.play()
    }

    else if (event.key=="j") {
        document.getElementById("plays7")
        sound7.play()
    }

    else if (event.key=="k") {
        document.getElementById("plays8")
        sound8.play()
    }

    else if (event.key=="l") {
        document.getElementById("plays9")
        sound9.play()
    }

    else {
        
    }
}
