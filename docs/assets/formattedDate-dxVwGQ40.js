function S(e="0000-00-00 00:00:00"){const t=new Date(e),a=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),r=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0"),d=String(t.getSeconds()).padStart(2,"0");return`${a}-${n}-${o} ${r}:${s}:${d}`}function g(e){const t=e,a=new Date(t),n=(a.getMonth()+1).toString().padStart(2,"0"),o=a.getDate().toString().padStart(2,"0");return`${n}월${o}일`}export{S as a,g as f};
