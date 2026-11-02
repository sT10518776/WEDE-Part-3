function showError(input,msg){const err=input.nextElementSibling;err.textContent=msg;input.style.borderColor='#c0392b';}
function clearError(input){const err=input.nextElementSibling;err.textContent='';input.style.borderColor='#ccc';}
const eForm=document.getElementById('enquiryForm');
if(eForm){
 eForm.addEventListener('submit',e=>{
  e.preventDefault();let valid=true;
  const name=document.getElementById('eName'),email=document.getElementById('eEmail'),phone=document.getElementById('ePhone'),msg=document.getElementById('eMessage'),type=document.getElementById('eType');
  [name,email,phone,msg,type].forEach(clearError);
  if(name.value.trim().length<3){showError(name,'Min 3 chars');valid=false;}
  if(!/^\S+@\S+\.\S+$/.test(email.value)){showError(email,'Invalid email');valid=false;}
  if(!/^\d{10}$/.test(phone.value)){showError(phone,'10 digits required');valid=false;}
  if(msg.value.trim().length<20){showError(msg,'Min 20 chars');valid=false;}
  if(!type.value){showError(type,'Select type');valid=false;}
  if(!valid)return;
  const result=document.getElementById('enquiryResult');
  let cost=type.value==='catering'?'From R1500 per event':type.value==='products'?'From R32, bulk discounts':'Volunteer - free, training provided';
  result.innerHTML=`<h3>Thank you ${name.value}!</h3><p>Your ${type.value} enquiry received. ${cost}. We will email you at ${email.value} within 24h.</p>`;
  result.style.display='block';
  fetch('https://jsonplaceholder.typicode.com/posts',{method:'POST',body:JSON.stringify({name:name.value}),headers:{'Content-type':'application/json'}});
  eForm.reset();
 });
}
const cForm=document.getElementById('contactForm');
if(cForm){
 cForm.addEventListener('submit',async e=>{
  e.preventDefault();let valid=true;
  const name=document.getElementById('cName'),email=document.getElementById('cEmail'),msg=document.getElementById('cMessage'),type=document.getElementById('cType');
  [name,email,msg,type].forEach(clearError);
  if(name.value.trim().length<3){showError(name,'Min 3 chars');valid=false;}
  if(!/^\S+@\S+\.\S+$/.test(email.value)){showError(email,'Invalid email');valid=false;}
  if(msg.value.trim().length<15){showError(msg,'Min 15 chars');valid=false;}
  if(!type.value){showError(type,'Select type');valid=false;}
  if(!valid)return;
  const status=document.getElementById('formStatus');
  status.style.display='block';status.innerHTML='Sending...';
  try{
   const data=new FormData(cForm);
   const res=await fetch(cForm.action,{method:'POST',body:data,headers:{'Accept':'application/json'}});
   if(res.ok){status.innerHTML=`<h3>Email sent!</h3><p>Hi ${name.value}, your ${type.value} message sent to hello@aromaheaven.co.za</p>`;cForm.reset();}
   else{status.innerHTML='Failed, try again.';}
  }catch{status.innerHTML='Network error. Email ready to hello@aromaheaven.co.za';}
 });
}