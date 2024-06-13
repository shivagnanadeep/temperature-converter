let submit=document.querySelector("#submit");
let input=document.querySelector("#input");
let initailForm = document.querySelector("#from");
let finalForm = document.querySelector("#to");
let result = document.querySelector("#result");
let fromDropdown=document.querySelector("#from");
let toDropdown=document.querySelector("#to");
let tempSpecify=document.querySelector("#temp-specify");
function makeConversion(){
    let initialUnits=initailForm.value;
    let finalUnits=finalForm.value;
    let temp=parseInt(input.value);
    if(initialUnits==="C"){
        tempSpecify.textContent="(in ℃)";
        if(finalUnits==="F"){
            result.value=(temp*9/5)+32;
        }
        else if(finalUnits==="K"){
            result.value=temp+273.15;
        }
        else{
            result.value=temp;
        }
    }
    else if(initialUnits==="F"){
        tempSpecify.textContent="(in ℉)";
        if(finalUnits==="C"){
            result.value=(temp-32)*5/9;
        }
        else if(finalUnits==="K"){
            result.value=(temp-32)*5/9+273.15;
        }
        else{
            result.value=temp;
        }
    }
    else if(initialUnits==="K"){
        tempSpecify.textContent=" (in K)";
        if(finalUnits==="C"){
            result.value=temp-273.15;
        }
        else if(finalUnits==="F"){
            result.value=(temp-273.15)*9/5+32;
        }
        else{
            result.value=temp;
        }
    }
    // console.log(temp);
    // console.log(initialUnits + finalUnits);
}
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    makeConversion();
});
window.addEventListener("load",()=>{
    makeConversion();
});
fromDropdown.addEventListener("change",()=>{
    makeConversion();
});
toDropdown.addEventListener("change",()=>{
    makeConversion();
});