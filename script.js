let display = document.getElementById("display");
inputs = document.querySelectorAll("button");
let monitorValue = "";
for (btn of inputs) {
    btn.addEventListener("click", (e) => {
        btnText = e.target.innerText;
        if (btnText == "X") {
            btnText = "*";
            monitorValue += btnText;
            display.value = monitorValue;
        } else if (btnText == "C") {
            monitorValue = "";
            display.value = monitorValue;
        } else if (btnText == "=") {
            var result;
            try {
                result = eval(monitorValue);
            } catch (error) {
                result = "Expression error";
            }
            display.value = result;
        } else {
            monitorValue += btnText;
            display.value = monitorValue;
        }
    });
}