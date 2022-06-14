const inputs = document.querySelectorAll(".otp-field input");

inputs.forEach((input, index) =>{
    input.dataset.index = index;
    input.addEventListener("paste", handleOnPasteOtp);
    input.addEventListener("keyup", handleOtp);
});

function handleOnPasteOtp(e) {
    const data = e.clipboardDate.getData("text");
    const value = date.split("")
    if(value.length === inputs.length){
        input.forEach((input, index) =>{
            (input.value = value[index])
        })
        submit();
    }
}

function handleOtp(e){
    const input = e.target;
    let value = input.value;
    input.value = "";

    input.value = value?value[0]:"";

    let fieldIndex = input.dataset.index;
    if(value.length > 0 && fieldIndex < inputs.length -1){
        input.nextElementSibling.focus();
    }

    if(e.key === "Backspace" && fieldIndex > 0){
        input.previousElementSibling.focus();
    }

    if(fieldIndex == inputs.length - 1){
        submit();
    }
}

function submit(){
    console.log("OTP Submited.....");

    let otp = "";

    inputs.forEach((input) => {
        otp += input.value;
        input.disabled = false;
        input.classList.add("disabled");
    });
    console.log(otp);
}