(this["webpackJsonpbook-cricket"]=this["webpackJsonpbook-cricket"]||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(1),i=s.n(n),a=s(8),c=s.n(a),r=(s(13),s(14),s(3)),o=s(4),l=s(6),b=s(5),u=s(0),h=function(t){Object(l.a)(s,t);var e=Object(b.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(u.jsxs)("div",{class:"container-fluid",children:[Object(u.jsx)("a",{class:"navbar-brand",href:"#",children:"ICC Book Cricket"}),Object(u.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{class:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsx)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(u.jsxs)("form",{class:"d-flex",children:[Object(u.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(u.jsx)("button",{class:"btn btn-outline-light",type:"submit",children:"Search"})]})]})]})})})}}]),s}(n.Component),j=s(2),d=function(t){Object(l.a)(s,t);var e=Object(b.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).runs=[0,1,2,4,6],n.state={totRuns:0,wickets:0,curRun:null,balls:0,targetVisibility:!1,result:"",resultVisibility:!1},n.flipPages=n.flipPages.bind(Object(j.a)(n)),n}return Object(o.a)(s,[{key:"flipPages",value:function(){if(!this.props.battingFirst&&this.state.totRuns>=this.props.chaseTarget)this.setState((function(t,e){return{result:"".concat(e.batCountry," won by ").concat(3-t.wickets," wickets"),resultVisibility:!0}}));else if(this.state.balls<12&&this.state.wickets<3){var t=this.runs[Math.floor(5*Math.random())];t?this.setState((function(e){return{curRun:t,totRuns:e.totRuns+t,balls:e.balls+1}})):this.setState((function(e){return{curRun:t,wickets:e.wickets+1,balls:e.balls+1}}))}else this.props.battingFirst?(this.setState({targetVisibility:!0}),this.props.targetRuns(this.state.totRuns+1)):this.state.totRuns>=this.props.chaseTarget?this.setState((function(t,e){return{result:"".concat(e.batCountry," won by ").concat(3-t.wickets," wickets"),resultVisibility:!0}})):this.state.totRuns===this.props.chaseTarget-1?this.setState({result:"Match tied"}):this.setState((function(t,e){return{result:"".concat(e.bowlCountry," won by ").concat(e.chaseTarget-t.totRuns-1," runs"),resultVisibility:!0}})),alert("Innings ended")}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-success",onClick:this.flipPages,children:"Flip Pages"}),Object(u.jsx)("h3",{children:this.props.batCountry}),Object(u.jsxs)("h3",{children:[this.state.totRuns,"/",this.state.wickets]}),Object(u.jsxs)("h4",{children:[Math.floor(this.state.balls/6),".",this.state.balls%6," overs"]}),0===this.state.curRun?Object(u.jsx)("h3",{children:"OUT!"}):Object(u.jsxs)("h3",{children:[this.state.curRun,"!"]}),this.state.targetVisibility?Object(u.jsxs)("h4",{children:["Target: ",this.state.totRuns+1]}):"",this.state.resultVisibility?Object(u.jsx)("h4",{children:this.state.result}):""]})}}]),s}(n.Component),p=function(t){Object(l.a)(s,t);var e=Object(b.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={tossCountry:"",tossLostCountry:"",tossDC:null,battingCountry:null,bowlingCountry:null,flipVisibility1:!1,flipVisibility2:!1,targetRun:0},n.clickAction=n.clickAction.bind(Object(j.a)(n)),n.batAction=n.batAction.bind(Object(j.a)(n)),n.bowlAction=n.bowlAction.bind(Object(j.a)(n)),n.inningsEnd=n.inningsEnd.bind(Object(j.a)(n)),n}return Object(o.a)(s,[{key:"batAction",value:function(){this.setState((function(t){return{battingCountry:t.tossCountry,bowlingCountry:t.tossLostCountry,flipVisibility1:!0}}))}},{key:"bowlAction",value:function(){this.setState((function(t){return{battingCountry:t.tossLostCountry,bowlingCountry:t.tossCountry,flipVisibility1:!0}}))}},{key:"clickAction",value:function(){this.setState({tossDC:Math.floor(2*Math.random())}),1===this.state.tossDC?this.setState({tossCountry:this.props.T1,tossLostCountry:this.props.T2}):this.setState({tossCountry:this.props.T2,tossLostCountry:this.props.T1})}},{key:"inningsEnd",value:function(t){this.setState({flipVisibility2:!0,targetRun:t})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:[this.props.T1," vs ",this.props.T2]}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:this.clickAction,children:"Toss Coin"}),""!==this.state.tossCountry?Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:[this.state.tossCountry," won the toss and chose to?"]}),Object(u.jsx)("button",{className:"btn btn-primary tossOption",onClick:this.batAction,children:"Bat"}),Object(u.jsx)("button",{className:"btn btn-primary tossOption",onClick:this.bowlAction,children:"Bowl"})]}):"",Object(u.jsxs)("div",{className:"inningsClass",children:[this.state.flipVisibility1?Object(u.jsx)(d,{className:"innings1",batCountry:this.state.battingCountry,targetRuns:this.inningsEnd,battingFirst:!0}):"",this.state.flipVisibility2?Object(u.jsx)(d,{className:"innings2",batCountry:this.state.bowlingCountry,bowlCountry:this.state.battingCountry,chaseTarget:this.state.targetRun,battingFirst:!1}):""]})]})}}]),s}(n.Component),O=function(t){Object(l.a)(s,t);var e=Object(b.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).countries=["India","Australia","England","New Zealand","South Africa","Pakistan","Bangladesh","Sri Lanka"],n.state={T1:"",T2:""},n.submitAction=n.submitAction.bind(Object(j.a)(n)),n}return Object(o.a)(s,[{key:"submitAction",value:function(t){t.preventDefault();var e=document.getElementById("team1"),s=e.options[e.selectedIndex].value,n=document.getElementById("team2"),i=n.options[n.selectedIndex].value;this.setState({T1:s,T2:i})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"2 overs match with 3 wickets each."}),Object(u.jsx)("h4",{children:"Select the teams"}),Object(u.jsxs)("form",{action:"",id:"team-form",onSubmit:this.submitAction,children:[Object(u.jsxs)("div",{id:"forFlex",children:[Object(u.jsx)("select",{className:"form-select",name:"team-form",id:"team1",form:"team-form",required:!0,children:this.countries.map((function(t){return Object(u.jsx)("option",{value:t,children:t})}))}),Object(u.jsx)("select",{className:"form-select",name:"team-form",id:"team2",form:"team-form",required:!0,children:this.countries.map((function(t){return Object(u.jsx)("option",{value:t,children:t})}))})]}),Object(u.jsx)("input",{type:"submit",value:"Save",className:"btn btn-primary"})]}),""!==this.state.T1?Object(u.jsx)(p,{T1:this.state.T1,T2:this.state.T2}):""]})}}]),s}(n.Component);var f=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(h,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(O,{})})]})},m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;s(t),n(t),i(t),a(t),c(t)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.62a65ea8.chunk.js.map