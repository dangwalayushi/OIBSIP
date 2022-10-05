function show(num){
    document.getElementById('output').value+=num;
}

function calculate()
{
    let x= document.getElementById("output").value
    let y=eval(x)
    document.getElementById("output").value=y
}

function clr()
{
    document.getElementById("output").value=""
}

function back()
{
    var str= document.getElementById("output").value
    str=str.substr(0,str.length-1)
    document.getElementById("output").value=str
}
