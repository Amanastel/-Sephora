const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    let upSign = document.getElementById("upSign")
    let upEmail = document.getElementById("upEmail")
    let upName = document.getElementById("upName")
    let upPassword = document.getElementById("upPassword")
    let btnSignUp = document.getElementById("upSign")
    let signin = document.getElementById("inSign")

    let inPassword = document.getElementById("inPassword")
    let inEmail = document.getElementById("inEmail")

    upSign.addEventListener("click", () => {
        window.location.href = "login.html"
    })

    btnSignUp.addEventListener("click", (e) => {
        e.preventDefault()
        // console.log(upEmail.value);
        // console.log(upName.value);
        // console.log(upPassword.value);
        let email = upEmail.value;
        let name = upName.value
        let password = upPassword.value
        let obj = {
            email,
            password
        }
        let newdata = JSON.parse(localStorage.getItem("added_data")) || [];
        newdata.push(obj);
        localStorage.setItem("added_data", JSON.stringify(newdata))
    })
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
    let data = JSON.parse(localStorage.getItem("added_data"));
    console.log(data);

    signin.addEventListener("click", (e) => {
        e.preventDefault()
        // console.log();
        let flag = false
        data.forEach(element => {

            if (element.email === inEmail.value && element.password === inPassword.value) {
                // alert("SIGNED IN SUCCESSFULL");
                flag = true
            }
            else {
                // alert("INVALID CREDENTIALS");
                flag = false
            }
        });
        if (flag) {
            alert("SIGNED IN SUCCESSFULL");
            setTimeout(() => {
                window.location.href = "index.html"
            }, 1500)
        } else {
            alert("INVALID CREDENTIALS");
        }
    })