import"./tailwind-WJoQXHVu.js";import{r as l,a as c,t as h}from"./css-LUmow4Y_.js";import{g as n,a as B}from"./delay-g6vF19wW.js";import{s as f}from"./storage-eNv634Ip.js";import{p as V}from"./pocketbase-UOLpUAtS.js";const k=n(".button-goBack"),L=n(".button-moveBack"),p=n(".signUp-container"),U=n(".signUp-form-before");function E(){history.back()}function I(){p.style.transform="translateX(0%)"}k.addEventListener("click",E);L.addEventListener("click",I);U.addEventListener("submit",e=>{e.preventDefault(),p.style.transform="translateX(-50%)"});const P=document.getElementById("phoneNumber"),s=n(".signUp-button-verify"),a=document.getElementById("agree"),C=/^010\d{4}\d{4}$/;function A(e){const t=e.target.value;console.log(t),C.test(t)?(l(s,"text-gray-500"),c(s,"signUp-verify-valid"),s.removeAttribute("disabled")):(l(s,"signUp-verify-valid"),s.setAttribute("disabled",""))}P.addEventListener("input",A);const x=Math.floor(Math.random()*9e5)+1e5;sessionStorage.setItem("verifyNumber",x);const u=sessionStorage.getItem("verifyNumber");function y(){Array.from(s.classList).includes("signUp-verify-valid")&&(alert(u),console.log(u))}async function w(){const e=n(".signUp-input-phoneNumber").value;console.log(e);const t=await V.collection("users").getFullList("phoneNumber");console.log(t);const o=t.map(m=>m.phoneNumber).includes(e);if(console.log(o),o)alert("이미 회원가입 된 번호입니다. 로그인 페이지로 이동합니다! 😃"),window.location.href="/src/pages/login/";else{y();const m=Math.floor(Math.random()*9e3)+1e3;f("userName",m),f("phoneNumber",e),console.log("저장 완료");const v=n(".signUp-input-after"),N=localStorage.getItem("phoneNumber");v.textContent=JSON.parse(N)}}s.addEventListener("click",w);const S=n(".signUp-input-verifyNumber");function M(e){const t=e.target.value;console.log(t),u===t?(console.log("성공!"),l(a,"bg-gray-500"),h(a,"bg-tertiary")):(console.log("실패!"),l(a,"bg-tertiary"),c(a,"bg-gray-500"))}S.addEventListener("input",M);async function $(){Array.from(a.classList).includes("bg-tertiary")?window.location.href="/src/pages/category/":alert("인증번호가 잘못되었습니다.")}a.addEventListener("click",$);const i=n(".signUp-button-Reverify"),F=B(".timer-button");let d=null,g=!1;function R(){const e=n(".target__time"),t=60;g?(clearInterval(d),e.textContent="",b(t,e),y()):b(t,e)}function b(e,t){let r,o;d=setInterval(function(){r=parseInt(e/60,10),o=parseInt(e%60,10),r=r<10?"0"+r:r,o=o<10?"0"+o:o,t.textContent=`${r} : ${o}`,--e<0&&(clearInterval(d),c(i,"bg-gray-500"),c(i,"text-background"),alert("시간초과! 인증번호를 다시 받아주세요 ⏳"),g=!1)},1e3),g=!0}F.forEach(e=>{e.addEventListener("click",R)});function T(){Array.from(i.classList).includes("bg-gray-500")&&Array.from(i.classList).includes("text-background")&&alert(u)}i.addEventListener("click",T);
