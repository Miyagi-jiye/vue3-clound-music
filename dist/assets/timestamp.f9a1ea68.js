function M(t,g){t=t||null;let e=new Date(t),n=e.getFullYear()+"-",o=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",u=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",l=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",r=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return g=="\u5E74\u6708\u65E5"?n+o+u:g=="\u65F6\u5206\u79D2"?l+r+s:n+o+u+l+r+s}export{M as t};
