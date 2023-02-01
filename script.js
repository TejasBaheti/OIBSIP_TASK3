let celcius=document.getElementById("celcius");
let fahhrenheit=document.getElementById("Fahrenheit");
let kelvin=document.getElementById("kelvin");

function cel()
{
    let output=(parseFloat(celcius.value))+ 273.15;
    kelvin.value=parseFloat(output.toFixed(2));

    let output2=(parseFloat(celcius.value)* 9/5)+ 32;
    fahhrenheit.value=parseFloat(output2.toFixed(2));
}

function far()
{
    let output=(parseFloat(fahhrenheit.value)-32)*5/9;
    celcius.value=parseFloat(output.toFixed(2));

    let output2=((parseFloat(fahhrenheit.value)-32)*5/9)+273.15;
    kelvin.value=parseFloat(output2.toFixed(2));
}

function kel()
{
    let output=(parseFloat(kelvin.value)-273.15);
    celcius.value=parseFloat(output.toFixed(2));

    let output2=((parseFloat(kelvin.value)-273.15)*9/5)+32;
    fahhrenheit.value=parseFloat(output2.toFixed(2));
}