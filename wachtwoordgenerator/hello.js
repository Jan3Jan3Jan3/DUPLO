// Definieer je variabele
function myFunction() {
    var x = document.getElementById("fname").value;
    var bool1 = document.querySelector("input[name='checkbox1']").checked;
    var bool2 = document.querySelector("input[name='checkbox2']").checked;
    var bool3 = document.querySelector("input[name='checkbox3']").checked;
    var bool4 = document.querySelector("input[name='checkbox4']").checked;
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEGHIJKLMNOPQRSTUVWXYZ";
    const number = "012345678901234567890123456789";
    const special = "!@#$%^&*()_-+=[]{}|\\:;\"'<>,.?/~`";
    let R = 0
    let characters = "";
    if(bool1 === true)
    {
        characters += uppercase;
        R += 26;
    }
    if(bool2 === true)
    {
        characters += lowercase;
        R += 26;
    }
    if(bool3 === true)
    {
        characters += number;
        R += 10
    }
    if(bool4 === true)
    {
        characters += special;
        R += 32
    }
    if(R === 0)
    {

    }
    else
    {
        var len = characters.length
        let password = "";
        z = x * Math.log2(R)
        for ( let i = 0; i < x; i++ ) {
            const rand = Math.floor(Math.random() * (len));
            password += characters[rand];
        }
        const display = password + " " + "Entropy = " + z.toFixed(2);
        document.getElementById("password").textContent = password;
        document.getElementById("entropy").textContent = z.toFixed(2);
    }
    return
}

function myFunction2()
{
    var x = document.getElementById("fname").value;

    document.getElementById("output").textContent = password;
    const nieuwElement = document.createElement("div");
    nieuwElement.textContent = mijnVariabele;
    document.body.appendChild(nieuwElement);
    return password
};