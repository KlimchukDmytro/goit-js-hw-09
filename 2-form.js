import"./assets/styles-DOx1szP-.js";console.log("Form");let e={email:"",message:""};const a=document.querySelector(".feedback-form"),o=a.elements.email,l=a.elements.message;function s(){e.email=o.value,e.message=l.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}function m(){const t=localStorage.getItem("feedback-form-state");t&&(e=JSON.parse(t),o.value=e.email||"",l.value=e.message||"")}a.addEventListener("input",s);document.addEventListener("DOMContentLoaded",m);a.addEventListener("submit",t=>{t.preventDefault(),o.value===""||l.value===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),a.reset(),e={email:"",message:""})});
//# sourceMappingURL=2-form.js.map
