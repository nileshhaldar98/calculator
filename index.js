
    let number = document.querySelectorAll("#button-container>div");
    let str = "";
    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener("click", cal);
    }

    function cal() {
        var c = event.target.innerText;
        if (c === "C") {
            document.querySelector(".display").innerText = "";
            str = "";
        } else if (c === "=") {
            if (document.querySelector(".display").innerText = eval(str) === undefined) {
                document.querySelector(".display").innerText = "";
            } else {
                document.querySelector(".display").innerText = eval(str);
                str = "";
            }
        } else {
            str += c;
            document.querySelector(".display").innerText = str;
        }
    }