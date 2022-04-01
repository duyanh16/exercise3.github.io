function check_number(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    num3=document.getElementById("num3").value
    num4=document.getElementById("num4").value
    num5=document.getElementById("num5").value
    num6=document.getElementById("num6").value
    num_random=String(Math.floor(Math.random() * 1000000))
    num_choice=num1+num2+num3+num4+num5+num6
    if (num1=="" || num2=="" || num3=="" || num4=="" || num5=="" || num6=="") {
        return alert("You must complete your number")
    }
    if (num_random==num_choice) {
        alert("Congratulation")
    } else {
        alert("Wish you luck next time.\nLucky number is: "+num_random)
    }
}

function random_number() {
    document.getElementById("num1").value=parseInt(Math.floor(Math.random() * 10))
    document.getElementById("num2").value=parseInt(Math.floor(Math.random() * 10))
    document.getElementById("num3").value=parseInt(Math.floor(Math.random() * 10))
    document.getElementById("num4").value=parseInt(Math.floor(Math.random() * 10))
    document.getElementById("num5").value=parseInt(Math.floor(Math.random() * 10))
    document.getElementById("num6").value=parseInt(Math.floor(Math.random() * 10))
}