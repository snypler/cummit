function ToggleButton()
{   
    let btnText = document.getElementById("btnPiss").innerHTML

    if (btnText == "Shit")
    {
        btnText = "Cum"
    }
    else if (btnText == "Cum")
    {
        btnText = "Hiney"
    }
    else if (btnText == "Hiney")
    {
        btnText = "Shit"
    }
    
    document.getElementById("btnPiss").innerHTML = btnText
}

function ChangetoNuts()
{
    document.getElementById("btnBalls").style.color = "Red"
    document.getElementById("btnBalls").style.background = "yellow"   
}