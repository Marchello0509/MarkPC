const htmlEl = {
    inpEmail: document.querySelector('#inpEmail'),
    inpPass: document.querySelector('#inpPass'),
    btnLog: document.querySelector('#btnLog'),
    btnGoogle: document.querySelector('#btnGoogle'),
    block: document.querySelector('#block')
}

let dataBase = [
    {
        email: "marchello0509@gmail.com",
        password: "Admin0509"
    }
]

htmlEl.btnLog.addEventListener('click', () => {
    const userEmail = htmlEl.inpEmail.value
    const userPass = htmlEl.inpPass.value
    dataBase.forEach((user) => {
        if (userEmail === user.email && userPass === user.password) {
            alert("Welcome, Mark!")
            console.log(true)
            htmlEl.block.style.backgroundColor = "rgb(58, 250, 0)";
            setTimeout(() => {
                htmlEl.block.style.backgroundColor = "#F5F1F1";
            }, 1000);
            window.location.href = './index.html' 
        } else {
            console.log(false)
            htmlEl.block.style.backgroundColor = "rgb(250, 33, 0)";
            setTimeout(() => {
                htmlEl.block.style.backgroundColor = "#F5F1F1";
            }, 1000);
        }
    })
})

htmlEl.btnGoogle.addEventListener('click', () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=ru&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1276044089%3A1698749451300939&theme=glif';
}) 