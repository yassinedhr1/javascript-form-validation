function formvalidation(){
  let fname=document.forms["form1"]["fname"].value;
  let lastname=document.forms["form1"]["lastname"].value;
  let subject=document.forms["form1"]["subject"].value;
  if(fname==""){
   alert("first name is required");
   return false;
  }
  if(lastname==""){
    alert("last name required");
    return false;
  }
  if(subject==""){
    alert("subject is required");
    return false;
  }
}