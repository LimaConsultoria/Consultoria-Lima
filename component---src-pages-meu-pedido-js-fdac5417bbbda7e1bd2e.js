"use strict";(self.webpackChunkmetalpass=self.webpackChunkmetalpass||[]).push([[765],{2846:function(e,a,t){var n=t(7462),r=t(5987),o=t(7294),i=t(5505),l=t(4621),c=t(7595),s=o.forwardRef((function(e,a){var t=e.absolute,l=void 0!==t&&t,c=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,u=e.flexItem,p=void 0!==u&&u,f=e.light,v=void 0!==f&&f,g=e.orientation,h=void 0===g?"horizontal":g,y=e.role,E=void 0===y?"hr"!==m?"separator":void 0:y,b=e.variant,Z=void 0===b?"fullWidth":b,x=(0,r.Z)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(m,(0,n.Z)({className:(0,i.Z)(c.root,s,"fullWidth"!==Z&&c[Z],l&&c.absolute,p&&c.flexItem,v&&c.light,"vertical"===h&&c.vertical),role:E,ref:a},x))}));a.Z=(0,l.Z)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,c.Fq)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},9704:function(e,a,t){t.d(a,{Z:function(){return k}});var n=t(7462),r=t(5987),o=t(7294),i=t(5697),l=t.n(i),c=t(1652),s=t(5706),d=t.n(s),m=t(9355),u=t(2507),p=t(8129),f=function(e,a){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t?u.X.indexOf(e)<=u.X.indexOf(a):u.X.indexOf(e)<u.X.indexOf(a)},v=function(e,a){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t?u.X.indexOf(a)<=u.X.indexOf(e):u.X.indexOf(a)<u.X.indexOf(e)},g="undefined"==typeof window?o.useEffect:o.useLayoutEffect,h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(a){var t=e.withTheme,i=void 0!==t&&t,l=e.noSSR,s=void 0!==l&&l,u=e.initialWidth;function f(e){var t=(0,m.Z)(),l=e.theme||t,d=(0,c.Z)({theme:l,name:"MuiWithWidth",props:(0,n.Z)({},e)}),f=d.initialWidth,v=d.width,h=(0,r.Z)(d,["initialWidth","width"]),y=o.useState(!1),E=y[0],b=y[1];g((function(){b(!0)}),[]);var Z=l.breakpoints.keys.slice().reverse().reduce((function(e,a){var t=(0,p.Z)(l.breakpoints.up(a));return!e&&t?a:e}),null),x=(0,n.Z)({width:v||(E||s?Z:void 0)||f||u},i?{theme:l}:{},h);return void 0===x.width?null:o.createElement(a,x)}return d()(f,a),f}};function y(e){var a=e.children,t=e.only,n=e.width,r=(0,m.Z)(),o=!0;if(t)if(Array.isArray(t))for(var i=0;i<t.length;i+=1){if(n===t[i]){o=!1;break}}else t&&n===t&&(o=!1);if(o)for(var l=0;l<r.breakpoints.keys.length;l+=1){var c=r.breakpoints.keys[l],s=e["".concat(c,"Up")],d=e["".concat(c,"Down")];if(s&&f(c,n)||d&&v(c,n)){o=!1;break}}return o?a:null}y.propTypes={children:l().node,className:l().string,implementation:l().oneOf(["js","css"]),initialWidth:l().oneOf(["xs","sm","md","lg","xl"]),lgDown:l().bool,lgUp:l().bool,mdDown:l().bool,mdUp:l().bool,only:l().oneOfType([l().oneOf(["xs","sm","md","lg","xl"]),l().arrayOf(l().oneOf(["xs","sm","md","lg","xl"]))]),smDown:l().bool,smUp:l().bool,width:l().string.isRequired,xlDown:l().bool,xlUp:l().bool,xsDown:l().bool,xsUp:l().bool};var E=h()(y),b=t(3),Z=t(1664);var x=(0,t(4621).Z)((function(e){var a={display:"none"};return e.breakpoints.keys.reduce((function(t,n){return t["only".concat((0,Z.Z)(n))]=(0,b.Z)({},e.breakpoints.only(n),a),t["".concat(n,"Up")]=(0,b.Z)({},e.breakpoints.up(n),a),t["".concat(n,"Down")]=(0,b.Z)({},e.breakpoints.down(n),a),t}),{})}),{name:"PrivateHiddenCss"})((function(e){var a=e.children,t=e.classes,n=e.className,i=e.only,l=((0,r.Z)(e,["children","classes","className","only"]),(0,m.Z)()),c=[];n&&c.push(n);for(var s=0;s<l.breakpoints.keys.length;s+=1){var d=l.breakpoints.keys[s],u=e["".concat(d,"Up")],p=e["".concat(d,"Down")];u&&c.push(t["".concat(d,"Up")]),p&&c.push(t["".concat(d,"Down")])}return i&&(Array.isArray(i)?i:[i]).forEach((function(e){c.push(t["only".concat((0,Z.Z)(e))])})),o.createElement("div",{className:c.join(" ")},a)}));var k=function(e){var a=e.implementation,t=void 0===a?"js":a,i=e.lgDown,l=void 0!==i&&i,c=e.lgUp,s=void 0!==c&&c,d=e.mdDown,m=void 0!==d&&d,u=e.mdUp,p=void 0!==u&&u,f=e.smDown,v=void 0!==f&&f,g=e.smUp,h=void 0!==g&&g,y=e.xlDown,b=void 0!==y&&y,Z=e.xlUp,k=void 0!==Z&&Z,w=e.xsDown,D=void 0!==w&&w,N=e.xsUp,C=void 0!==N&&N,B=(0,r.Z)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===t?o.createElement(E,(0,n.Z)({lgDown:l,lgUp:s,mdDown:m,mdUp:p,smDown:v,smUp:h,xlDown:b,xlUp:k,xsDown:D,xsUp:C},B)):o.createElement(x,(0,n.Z)({lgDown:l,lgUp:s,mdDown:m,mdUp:p,smDown:v,smUp:h,xlDown:b,xlUp:k,xsDown:D,xsUp:C},B))}},6379:function(e,a,t){var n=t(5318),r=t(862);a.Z=void 0;var o=r(t(7294)),i=(0,n(t(8786)).default)(o.createElement("path",{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"}),"GetAppRounded");a.Z=i},148:function(e,a,t){t.d(a,{l:function(){return n}});var n={fullname:"MetalPass",street:"Avenida Municipal",number:"1340",district:"Centro",city:"Turvo",state:"SC",postalCode:"88930-000"};a.Z={email:"metalpasscartoes@gmail.com",phone:"(48) 99678-2706"}},2536:function(e,a,t){t.r(a),t.d(a,{default:function(){return oe}});var n=t(7294),r=t(453),o=t(4014),i=t(9298),l=t(9511),c=(0,o.Z)((function(e){var a,t,n,r;return{background:(a={},a[e.breakpoints.down("xl")]={paddingTop:50},a[e.breakpoints.down("sm")]={paddingTop:0},a.display="flex",a.height="100vh",a),actionArea:{flex:1,maxWidth:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},imageArea:(t={marginRight:-60,paddingTop:"6%",paddingBottom:"6%",flex:1.3},t[e.breakpoints.down("sm")]={flex:0,marginRight:0},t),inputsArea:{marginTop:40,marginBottom:20},title:(n={padding:0,marginBottom:20,fontWeight:e.typography.fontWeightBold,"& span":{color:i.Z.primary}},n[e.breakpoints.down("sm")]={fontSize:l.tE},n),description:(r={fontWeight:e.typography.fontWeightLight},r[e.breakpoints.down("sm")]={fontSize:l.SS},r)}})),s=t(2176),d=t(9109),m=t(1681),u=t(8417),p=t(7111),f=t(4484),v=t(1581),g=t(486),h=t(3803);function y(e,a){return{type:u.YT,property:e,payload:a}}function E(e,a){return function(t){e&&a&&(t({type:u.y0,add:!0,payload:"search"}),v.Z.app().functions("southamerica-east1").httpsCallable("order-query")({email:e,orderId:a}).then((function(e){var n=(0,h.Z)("order","system");t({type:u.y0,payload:"search"}),e.data?(t({type:u.QN,payload:{dialogVisible:!0,data:e.data}}),n||t((function(e){v.Z.firestore().doc("system/data").get().then((function(a){e({type:u.rx,property:"system",payload:a.data()})})).catch((function(e){console.error(e)}))}))):t({type:u.YT,property:"orderId",payload:a,error:"Ocorreu um erro ao buscar, tente novamente"})})).catch((function(e){switch(t({type:u.y0,payload:"search"}),e.code){case"not-found":case"invalid-argument":t({type:u.YT,property:"queryError",payload:e.message});break;default:t((0,g.Po)(e,"Ocorreu um erro","pagesComponents/orderDetails/actions","queryOrder"))}})))}}var b=t(7775),Z=t(7408),x=t(6125),k=t(1468),w=t(9499),D=t(9339),N=function(){var e=(0,Z.Z)("cardsFalling"),a=c(),t=(0,k.Z)(),o=(0,m.I0)(),i=(0,m.v9)((function(e){return e.orderDetails})),l=i.email,f=i.emailError,v=i.orderId,h=i.orderIdError,y=i.loading,N=i.queryError,C=y.includes("search")||Boolean(f+h+N)||!Boolean(l+v),B=(0,w.useLocation)(),T=(0,D.Wd)("email",D.Zp)[0],I=(0,D.Wd)("orderId",D.Zp)[0];(0,n.useEffect)((function(){o(function(e,a,t){return function(n){var r=localStorage.getItem("@metalpass/orderDetails/query"),o=e.search.split("&");if(a&&t)return n({type:u.QN,payload:{email:a,orderId:t,emailError:"",orderIdError:""}}),void n(E(a,t));if(r){var i=JSON.parse(r);i.email&&i.orderId&&(n({type:u.QN,payload:Object.assign({},i,{emailError:"",orderIdError:""})}),o.length>1?n(E(i.email,i.orderId)):setTimeout((function(){n({type:u.uE,message:"Já preenchemos as informações do seu último pedido para você",variant:p.p.info})}),250))}}}(B,T,I))}),[]);var W=function(e){return function(a){o(function(e,a){return function(t){t({type:u.YT,property:"queryError",payload:""});var n=g.b0[e](a),r=n.value,o=n.error;t({type:u.YT,property:e,payload:r,error:o})}}(e,a.target.value))}},A=function(e){"Enter"!==e.key||C||S()},S=function(){o(E(l,v))};return n.createElement("div",{className:a.background},n.createElement("div",{className:a.actionArea},n.createElement(r.Z,{variant:"h3",component:"h1",className:a.title},"Acompanhar meu pedido",n.createElement("span",null,".")),n.createElement(r.Z,{variant:"h6",className:a.description,color:"textSecondary"},"Insira abaixo o e-mail usado no pedido e o ID, que foi enviado para o seu e-mail após a realização do pedido"),n.createElement("div",{className:a.inputsArea},n.createElement(s.Z,Object.assign({},d.Gf.email,{value:l,error:Boolean(f),helperText:f,onChange:W("email"),style:{marginBottom:15},disabled:y.includes("search"),onKeyPress:A})),n.createElement(s.Z,Object.assign({},d.Gf.orderId,{disabled:y.includes("search"),value:v,onChange:W("orderId"),error:Boolean(h+N),helperText:h||N,onKeyPress:A}))),n.createElement(b.OQ,{className:t.alignSelfEnd,disabled:C,onClick:S},y.includes("search")?"Buscando":"Buscar pedido")),n.createElement("div",{className:a.imageArea},n.createElement(x.G,{className:t.imageCover,image:(0,x.d)(e),alt:"Cartões caindo",layout:"fullWidth",placeholder:"blurred"})))},C=t(3332),B=t(4513),T=t(3729),I=t(4998),W=(0,o.Z)((function(e){var a,t,n,r;return{cardBackground:(a={padding:16,borderRadius:10,marginBottom:16,backgroundColor:"#1c1c1c"},a[e.breakpoints.down("sm")]={padding:12},a),cardTitle:{fontWeight:e.typography.fontWeightBold,marginBottom:8},shippingInfos:{textAlign:"justify",marginBottom:20,"& a":{textDecoration:"none",color:e.palette.primary.main}},shippingButtons:(t={display:"flex"},t[e.breakpoints.down("sm")]={flexDirection:"column"},t),headerDescription:(n={},n[e.breakpoints.down("sm")]={fontSize:13,marginTop:4},n),headerTitleArea:(r={marginTop:6,display:"flex",width:"100%",alignItems:"center"},r[e.breakpoints.down("sm")]={flexDirection:"column",marginBottom:3,alignItems:"flex-start"},r),headerTitle:{fontWeight:e.typography.fontWeightBold},amountArea:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:15},listElement:{border:"1px solid #2e2e2e",padding:5,borderRadius:5,paddingLeft:10},trackingButton:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",marginBottom:8}}})),A=t(1583),S=t(8538),O=t.n(S),U=t(9704),R=t(5505),z=function(e){var a=e.onClose,t=e.data,o=W(),i=(0,k.Z)(),l=function(){return n.createElement(I.Z,{label:f.Q_[t.status].name,size:"small",style:{backgroundColor:f.Q_[t.status].color}})};return n.createElement("div",{className:(0,R.Z)(i.flexJustifyBetween,i.marginBottom20)},n.createElement("div",null,n.createElement("div",{className:o.headerTitleArea},n.createElement(r.Z,{variant:"h6",className:o.headerTitle},"Detalhes do pedido"),n.createElement(U.Z,{smDown:!0},n.createElement("div",{className:i.width10}),n.createElement(l,null))),n.createElement(U.Z,{mdUp:!0},n.createElement(l,null)),n.createElement(r.Z,{color:"textSecondary",className:o.headerDescription},"ID do pedido ",t.id.slice(0,d.G9.orderId.max)," • Realizado em ",O()(t.creationDate).utcOffset(-3).format("DD [de] MMMM [de] YYYY [às] HH:mm"))),n.createElement("div",null,n.createElement(T.Z,{onClick:a},n.createElement(A.Z,null))))},P=t(2846),M=function(e,a){if(null==e||!e.type)return"";switch(e.type){case f.a_.free:return"Pedido grátis";case f.a_.freeShipping:return"Frete grátis";case f.a_.shippingDiscount:return"Desconto no frete";case f.a_.percentage:case f.a_.value:return"- "+g.Bw.money(a.couponAmount)}},j=function(e){return e.amount+e.shippingAmount+(e.chipTransferAmount||0)-(e.couponAmount||0)},Y=function(e){var a,t=e.data,o=t.payment,i=t.cart,l=t.coupon,c=W(),s=(o.status===f.R$.pending.id||o.status===f.R$.rejected.id||o.status===f.R$.cancelled.id)&&o.preference,d=(0,m.I0)();return n.createElement("div",{className:c.cardBackground},n.createElement("div",{className:c.amountArea,style:{marginBottom:15}},n.createElement(r.Z,{className:c.headerTitle},"Pagamento"),n.createElement(I.Z,{label:f.R$[o.status].name,size:"small",style:{backgroundColor:f.R$[o.status].color}})),n.createElement(b.Z8,{label:1===i.length?"Cartão":"Cartões",value:g.Bw.money(o.amount)}),n.createElement(b.Z8,{label:"Envio",value:g.Bw.money(o.shippingAmount)}),l&&n.createElement(b.Z8,{label:"Cupon de desconto",value:M(l,o)}),o.chipTransferAmount>0?n.createElement(b.Z8,{label:"Transferência do chip",value:g.Bw.money(o.chipTransferAmount)}):null,n.createElement(b.Z8,{label:"Total",labelVariant:"h6",value:g.Bw.money(j(o))}),o.status===f.R$.approved.id&&(null==l?void 0:l.type)!==f.a_.free?n.createElement(n.Fragment,null,n.createElement(P.Z,{style:{marginTop:10,marginBottom:10}}),n.createElement(b.Z8,{type:"multiline",label:"Meio de pagamento",value:(null===(a=f.G4[o.method])||void 0===a?void 0:a.name)||"Não informado"}),n.createElement(b.Z8,{type:"multiline",label:"Data do pagamento",value:o.approvedDate?O()(o.approvedDate).format("DD MMM YY - HH:mm"):"Não informado"})):null,s?n.createElement(b.OQ,{onClick:function(){d({type:u.V4,property:"preference",payload:t.payment.preference})},fullWidth:!0,style:{borderRadius:8,marginTop:10}},"Pagar agora"):null)},q=t(7136),L=function(e){var a=e.data,t=a.shipping,o=a.chipTransfer,i=(0,m.v9)((function(e){return e.orderDetails.trackingInfos})),l=(0,m.I0)(),c=W(),s=(0,n.useState)(!1),d=s[0],g=s[1];return(0,n.useEffect)((function(){var e;t.trackingCode&&!i&&l((e=t.trackingCode,function(a){v.Z.app().functions("southamerica-east1").httpsCallable("shipping-track")(e).then((function(e){a({type:u.YT,property:"trackingInfos",payload:e.data.reverse()})})).catch((function(e){a({type:u.uE,message:"Não foi possível carregar as informações de rastreio: "+e.message,variant:p.p.warning}),console.log(e)}))}))}),[t.trackingCode,i]),n.createElement("div",null,n.createElement("div",{className:c.cardBackground},n.createElement(r.Z,{className:c.headerTitle,style:{marginBottom:15}},"Envio e prazos"),n.createElement(b.Z8,{label:"Serviço de envio",value:f.qA[t.service].name}),n.createElement(b.Z8,{label:"Tempo de envio",value:t.deadline*(o?2:1)+" dias"}),n.createElement(b.Z8,{label:"Produção do cartão",value:"2 à 3 dias"}),t.trackingCode?n.createElement(b.Z8,{label:"Cód. rastreio",value:t.trackingCode}):null),t.trackingCode?n.createElement("div",{className:c.cardBackground},n.createElement(r.Z,{className:c.headerTitle,style:{marginBottom:15}},"Rastreamento do pedido"),i?i.slice(0,d?99:2).map((function(e,a){return n.createElement("div",{style:{marginBottom:8},key:a.toString()},n.createElement(r.Z,{variant:"caption",style:{opacity:.7}},O()(e.date).format("DD MMM YYYY - HH:mm")),n.createElement(r.Z,{variant:"body2"},e.place?e.place:e.origin+" - "+e.destiny),n.createElement(r.Z,{variant:"body2",color:"textSecondary"},e.status))})):n.createElement("div",{className:c.trackingButton},n.createElement(q.Z,{size:20})),n.createElement("div",{className:c.trackingButton},n.createElement(C.Z,{onClick:function(){return g(!d)},disabled:!Boolean(i),size:"small",variant:"outlined"},i?d?"Esconder":"Ver tudo":"Buscando..."))):null)},H=t(2083),_=function(){var e=(0,m.I0)(),a=(0,m.v9)((function(e){return e.orderDetails})),t=a.confirmRemove,o=a.data,i=a.loading,l=function(){i.includes("remove")||e(y("confirmRemove",!1))};return n.createElement(H.Vq,{onClose:l,visible:t,maxWidth:"sm",title:"Quer mesmo excluir este pedido?",onCancel:l,onConfirm:function(){var a;e((a=o.id,function(e){e({type:u.y0,add:!0,payload:"remove"}),v.Z.app().functions("southamerica-east1").httpsCallable("order-remove")(a).then((function(){localStorage.removeItem("@metalpass/orderDetails/query"),e({type:u.z0}),e({type:u.uE,message:"Pedido excluído",variant:p.p.info})})).catch((function(a){switch(e({type:u.y0,payload:"remove"}),a.code){case"not-found":case"invalid-argument":e({type:u.uE,message:a.message,variant:p.p.warning});break;default:e((0,g.Po)(a,"Ocorreu um erro ao excluir o pedido","pagesComponents/orderDetails/actions","removeOrder"))}}))}))},confirmLabel:"Excluir pedido",disabled:i.includes("remove")},n.createElement(r.Z,{color:"textSecondary"},"Após excluir o pedido não será possível recuperá-lo, todas as informações relacionadas a ele serão apagadas para sempre, isso é muito tempo..."))},Q=t(838),$=function(e){var a=e.label,t=e.value,o=W();return n.createElement("div",{className:o.listElement},n.createElement(r.Z,{variant:"caption",color:"textSecondary"},a),n.createElement(r.Z,null,t||"Não informado"))},F=function(e){var a=e.data,t=a.profile,o=a.address,i=W();return n.createElement("div",null,n.createElement("div",{className:i.cardBackground},n.createElement(r.Z,{className:i.cardTitle},"Informações para contato"),n.createElement(Q.Z,{container:!0,spacing:2},n.createElement(Q.Z,{item:!0,xs:12,md:12},n.createElement($,{label:"Nome completo",value:t.fullname})),n.createElement(Q.Z,{item:!0,xs:12,md:6},n.createElement($,{label:"E-mail",value:t.email})),n.createElement(Q.Z,{item:!0,xs:12,md:6},n.createElement($,{label:"Telefone",value:g.Bw.phone(t.phone)})))),n.createElement("div",{className:i.cardBackground},n.createElement(r.Z,{className:i.cardTitle},"Seu endereço para entrega"),n.createElement(Q.Z,{container:!0,spacing:2},Object.values(f.b5).map((function(e){return n.createElement(Q.Z,{key:e.id,item:!0,xs:e.size>5?12:6,md:e.size},n.createElement($,{label:e.name,value:e.format?e.format(o[e.id]):o[e.id]}))})))))},V=t(7573),X=t(5313),G=t(6379),J=t(148),K=function(e){var a=e.data,t=W(),o=(0,m.v9)((function(e){return e.orderDetails.loading})),i=(0,m.I0)(),l=function(e){return function(){i(function(e,a){return function(t){t({type:u.y0,add:!0,payload:e});var n={file:e,address:Object.assign({},a.address,{fullname:a.profile.fullname})};e===f.Wk.contentDeclaration.id&&(n.order={price:a.payment.amount,amount:a.cart.length}),v.Z.app().functions("southamerica-east1").httpsCallable("shipping-exportPackageAddressingFile")(n).then((function(a){t({type:u.y0,payload:e});var n=document.createElement("a");n.href="data:application/pdf;base64,"+a.data,n.download=f.Wk[e].name+".pdf",n.click()})).catch((function(a){t({type:u.y0,payload:e}),t({type:u.uE,message:"Ocorreu um erro: "+a.message,variant:p.p.warning})}))}}(e,a))}};return a.status!==f.Q_.pending.id&&a.chipTransfer?n.createElement("div",{className:t.cardBackground},n.createElement(r.Z,{className:t.cardTitle},"Informações para você enviar seu cartão"),n.createElement(r.Z,{variant:"body2",color:"textSecondary",className:t.shippingInfos},"Chegou o momento de enviar seu cartão (ou cartões). Após realizar o embalo, basta ir até uma agência dos correios e fazer o envio para o endereço mostrado abaixo. Se preferir, você pode imprimir a etiqueta de envio e a declaração de conteúdo usando os 2 botões abaixo, depois é só colar ambas no pacote e ir até os correios, elas já possuem as informações necessárias. Saiba mais sobre o embalo e envio dos cartões na ",n.createElement(X.Link,{to:V.Z.howItWorks.path,target:"_blank"},"aba como funciona")),n.createElement(Q.Z,{container:!0,spacing:2},n.createElement(Q.Z,{item:!0,xs:12,md:4},n.createElement(b.WP,{label:"Nome",value:J.l.fullname})),n.createElement(Q.Z,{item:!0,xs:12,md:8},n.createElement(b.WP,{label:"Endereço",value:J.l.street+", "+J.l.number+" - "+J.l.district})),n.createElement(Q.Z,{item:!0,xs:12,md:4},n.createElement(b.WP,{label:"CEP",value:J.l.postalCode})),n.createElement(Q.Z,{item:!0,xs:12,md:4},n.createElement(b.WP,{label:"Cidade",value:J.l.city})),n.createElement(Q.Z,{item:!0,xs:12,md:4},n.createElement(b.WP,{label:"Estado",value:J.l.state}))),n.createElement("div",{className:t.shippingButtons},n.createElement(C.Z,{size:"small",variant:"outlined",fullWidth:!0,style:{marginTop:20},startIcon:n.createElement(G.Z,null),disabled:o.includes(f.Wk.shippingLabel.id),onClick:l(f.Wk.shippingLabel.id)},"Baixar ",f.Wk.shippingLabel.name),n.createElement("div",{style:{width:20}}),n.createElement(C.Z,{size:"small",variant:"outlined",fullWidth:!0,style:{marginTop:20},startIcon:n.createElement(G.Z,null),onClick:l(f.Wk.contentDeclaration.id),disabled:o.includes(f.Wk.contentDeclaration.id)},"Baixar ",f.Wk.contentDeclaration.name))):null},ee=t(6941),ae=function(e){var a=e.data,t=W(),o=(0,m.v9)((function(e){return e.order.system}));return n.createElement("div",{className:t.cardBackground},n.createElement(r.Z,{className:t.cardTitle},"Seu pedido"),n.createElement(ee.nO,{title:null,elements:a,loading:!o,showAnimation:!1}))},te=(0,o.Z)((function(e){var a,t,n;return{background:(a={padding:"2%"},a[e.breakpoints.down("sm")]={padding:"4%"},a),infosArea:(t={display:"flex"},t[e.breakpoints.down("sm")]={flexDirection:"column"},t),leftSide:(n={flex:2,marginRight:16},n[e.breakpoints.down("sm")]={marginRight:0},n)}})),ne=t(7188),re=function(){var e,a=(0,m.I0)(),t=te(),r=(0,k.Z)(),o=(0,m.v9)((function(e){return e.orderDetails})),i=o.data,l=o.dialogVisible,c=(0,ne.Z)(),s=[f.R$.pending.id,f.R$.rejected.id,f.R$.cancelled.id].includes(null==i||null===(e=i.payment)||void 0===e?void 0:e.status)&&(null==i?void 0:i.status)===f.Q_.pending.id,d=function(){a((function(e){e(y("dialogVisible",!1)),setTimeout((function(){e(y("data",null)),e(y("trackingInfos",null))}),250)}))};return i?n.createElement(B.Z,{onClose:d,disableEnforceFocus:!0,open:l,scroll:"body",maxWidth:"md",fullWidth:!0,fullScreen:c},n.createElement("div",{className:t.background},n.createElement(z,{onClose:d,data:i}),n.createElement("div",{className:t.infosArea},n.createElement("div",{className:t.leftSide},n.createElement(K,{data:i}),n.createElement(F,{data:i}),n.createElement(ae,{data:i.cart})),n.createElement("div",{className:r.flex1},n.createElement(Y,{data:i}),n.createElement(L,{data:i}))),n.createElement("div",{className:(0,R.Z)(r.flexJustifyEnd,r.marginTop20)},s?n.createElement(C.Z,{onClick:function(){a(y("confirmRemove",!0))}},"Excluir pedido"):null,n.createElement(C.Z,{onClick:d,style:{marginLeft:14},color:"primary",variant:"outlined"},"Fechar"))),n.createElement(_,null)):null},oe=function(){return n.createElement(n.Fragment,null,n.createElement(b.HJ,{title:"Acompanhar pedido"}),n.createElement(H.Ar,null,n.createElement(N,null),n.createElement(re,null)))}}}]);