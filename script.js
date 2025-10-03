const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;
generateBtn.addEventListener("click", () => {
    let data = [];
    data.push(document.querySelector('input[name=URL]').value);
    data.push(document.querySelector('input[name=NAME]').value);
    data.push(document.querySelector('input[name=DEPT]').value);
    data.push(document.querySelector('input[name=DIV]').value);
    data.push(document.querySelector('input[name=class]').value);
    data.push(document.querySelector('input[name=ENROLL]').value);
    data.push(document.querySelector('input[name=BATCH]').value);
    data.push(document.querySelector('input[name=yr]').value);
    if(!data || preValue === data) return;
    preValue = data;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${JSON.stringify(data)}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});
qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});

