
function genOtp() {
    let boxes = document.querySelectorAll(".box");
    let digits = "0123456789";
    boxes.forEach(box => {
        let otp = "";
        otp += digits[Math.floor(Math.random() * digits.length)];
        box.value = otp;
        console.log(otp);
    });
}

