function r(e,n,u){let t=null;return function(){t&&clearTimeout(t),u==!0&&(e.apply(this,arguments),u=!1),t=setTimeout(()=>{e.apply(this,arguments)},n)}}export{r as d};
