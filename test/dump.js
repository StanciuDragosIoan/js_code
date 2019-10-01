function setup() {
    // Write your code here.
    // Write your code here.
   let nodeSpans = document.querySelectorAll('span');
   let arrSpans = Array.from(nodeSpans);
   arrSpans.forEach((span)=>{
       span.addEventListener("click", (e)=> {
          
           for(let i = 0; i< arrSpans.length; i++){
               arrSpans[i].className = '';
               if(e.target === arrSpans[i]){
                
                   for(let q=0; q<=i; q++){

                       console.log(arrSpans[q]);
                       
                       arrSpans[q].classList = 'active';
                       
                   }

               }
               
           }
           e.preventDefault();
       })
   });



 


 
  
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div id='rating'>
    <span>*</span>
    <span>*</span>
    <span>*</span>
    <span>*</span>
    <span>*</span>
  </div>`;
  
  setup();
  
//   document.getElementsByTagName("span")[2].click();
//   console.log(document.body.innerHTML);