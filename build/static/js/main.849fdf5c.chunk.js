(this["webpackJsonpdynamic-input-fields-reactjs"]=this["webpackJsonpdynamic-input-fields-reactjs"]||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(5),l=n.n(c),i=(n(12),n(1)),o=n(6);function u(e){var a=e.children;return r.a.createElement("div",{className:"Main"},r.a.createElement("div",{className:"card-cont"},a))}function d(e){var a=e.index,n=e.parentIndex,t=e.handleInputChange,c=e.handleRemoveClick,l=e.handleAddClick,i=e.handleAddarrClick,o=e.card_data,u=e.handlecardremoveClick;return r.a.createElement("div",{key:a},r.a.createElement("p",null,"Card ",n," Index ",a),r.a.createElement("input",{placeholder:"Enter the Firstname",value:o.firstName,onChange:function(e){return t(e,n,a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-box"},r.a.createElement("button",{onClick:function(){return l(n)}},"OR"),0!==a&&r.a.createElement("button",{className:"mr10",onClick:function(){return c(n,a)}},"Remove data")),0===a&&r.a.createElement("button",{onClick:i},"AND"),0===a&&0!==n&&r.a.createElement("button",{onClick:function(){return u(n)}},"Remove Card"))}var m=[{or:[{firstName:""}]}];var s=function(){var e=Object(t.useState)(m),a=Object(o.a)(e,2),n=a[0],c=a[1],l=function(e,a,t){var r=e.target,l=(r.name,r.value),o=Object(i.a)(n);o[a].or[t].firstName=l,c(o)},s=function(e,a){var t=Object(i.a)(n);t[e].or.splice(a,1),c(t)},f=function(e){var a=Object(i.a)(n);a.splice(e,1),c(a)},v=function(e){var a=Object(i.a)(n);a[e].or.push({firstName:""}),c(a)},E=function(){c([].concat(Object(i.a)(n),[{or:[{firstName:""}]}]))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"left-col"},"Left col"),r.a.createElement("div",{className:"center-col"},n.map((function(e,a){return r.a.createElement(u,null,e.or.map((function(n,t){return r.a.createElement(d,{index:t,parentIndex:a,handleInputChange:l,handleRemoveClick:s,handleAddClick:v,handleAddarrClick:E,handlecardremoveClick:f,card_data:e})})))})),r.a.createElement("br",null),r.a.createElement("button",null,"Save Changes")))};l.a.render(r.a.createElement(s,null),document.getElementById("root"))},7:function(e,a,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.849fdf5c.chunk.js.map