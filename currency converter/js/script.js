
let select=document.querySelectorAll('#curr')
let btn=document.getElementById('btn')
let input=document.getElementById('input')
fetch('https://api.frankfurter.app/currencies')
 .then(res=>res.json())
 .then(res=>displayDropDown(res))

 function displayDropDown(res){
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }

 }

 btn.addEventListener('click',()=>{
   let currency1= select[0].value
   let currency2= select[1].value
   let inputval= input.value
   if(currency1===currency2)
    alert('choose a different items')
   else
   convert(currency1,currency2,inputval) 
 });
 function convert(currency1,currency2,inputval){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputval}&from=${currency1}&to=${currency2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value=Object.values(data.rates)[0]
  });
 }