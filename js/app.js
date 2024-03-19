
// function validate(){
//     const inputs =document.querySelectorAll('input');
//     let validator =true;
//     inputs.forEach((i)=>{
//      const parent =i.parentElement;
//      if(!i.value){
//         i.style.borderColor ="red";
//         parent.querySelector("small").innerText="this filed is required.";
//         validator=false;
//      }else if(mont.value>12){
//         month.style.borderColor ="red";
//         month.parentElement.querySelector("small").innerText="must be a valid month.";
//         validator=false;
//      }else if(day.value>31){
//         day.style.borderColor ="red";
//         day.parentElement.querySelector("small").innerText="must be a valid day.";
//         validator=false;
//      }else{
//         i.style.borderColor ="calculator";
//         parent.querySelector("small").innerText="";
//         validator=true;
//      }
//     });
//     return validator;
// }



let btn = document.getElementById("btn"); 
btn.onclick = () => {
   let day = document.getElementById("dayInput").value;
   let month = document.getElementById("monthInput").value;
   let year = document.getElementById("yearInput").value;
   let current_date= new Date();
   let birth_date = new Date(year, month - 1, day);
   let differenceInMs = current_date - birth_date;

   const yearfloor = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365.25));
   const monthfloor = Math.floor((differenceInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
   const daysfloor = Math.floor((differenceInMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    
   document.getElementById("year__content").textContent = yearfloor;
   document.getElementById("month__content").textContent = monthfloor;
   document.getElementById("day__content").textContent = daysfloor;
};