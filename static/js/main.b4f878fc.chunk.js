(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__uPXFS",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__QBpn5",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__DtCXQ"}},23:function(e,t,a){e.exports={loader:"loader_loader__3kAfo"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__nZtk9"}},25:function(e,t,a){e.exports={Button:"Button_Button__3AtP9"}},31:function(e,t,a){},42:function(e,t,a){},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2qnZ8",SearchForm:"Searchbar_SearchForm__145yG",SearchFormButton:"Searchbar_SearchFormButton__3QoP3",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__gaUQx",SearchFormInput:"Searchbar_SearchFormInput__OlSn1",SearchIcon:"Searchbar_SearchIcon__1D86E"}},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),s=(a(31),a(17)),l=a(3),i=a(5),u=a(21),m=(a(42),a(43),a(6)),b=a.n(m),j=a(26),h=a(1);function g(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],o=c[1];return Object(h.jsx)("header",{className:b.a.Searchbar,onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),o("")):i.b.error("Enter your search request, please",{position:i.b.POSITION.TOP_CENTER})},children:Object(h.jsxs)("form",{className:b.a.SearchForm,children:[Object(h.jsxs)("button",{type:"submit",className:b.a.SearchFormButton,children:[Object(h.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Seach"}),Object(h.jsx)(j.a,{className:b.a.SearchIcon})]}),Object(h.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var d={fetchImages:function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("22088587-b9222ac51e20698a54a4430fc","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No such image"))}))}},f=a(22),O=a.n(f),I=a(23),p=a.n(I),S=(a(63),function(){return Object(h.jsx)("div",{className:p.a.loader,children:Object(h.jsx)(O.a,{type:"Circles",color:"#3f51b5",height:100,width:100,timeout:0})})}),_=a(24),x=a.n(_),y=a(16),v=a.n(y),w=function(e){var t=e.webformatURL,a=e.tags,n=e.showBigImg;return Object(h.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(h.jsx)("img",{src:t,alt:a,className:v.a.ImageGalleryItemImage,onClick:n})})},N=function(e){var t=e.images,a=e.showBigImg;return Object(h.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,c=e.tags,r=e.largeImageURL;return Object(h.jsx)(w,{webformatURL:n,tags:c,showBigImg:function(){return a(r,c)}},t)}))})},B=a(25),G=a.n(B),F=function(e){var t=e.onLoadMore;return Object(h.jsx)("button",{type:"button",className:G.a.Button,onClick:t,children:"Load more"})},k=(a(64),document.querySelector("#modal-root"));var L=function(e){var t=e.onClose,a=e.bigImg,c=e.tags;return Object(n.useEffect)((function(){function e(e){"Escape"===e.code&&t()}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),Object(r.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:function(e){e.target===e.currentTarget&&t()},children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:a,alt:c})})}),k)};var C=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(l.a)(r,2),m=o[0],b=o[1],j=Object(n.useState)(null),f=Object(l.a)(j,2),O=f[0],I=f[1],p=Object(n.useState)("idle"),_=Object(l.a)(p,2),x=_[0],y=_[1],v=Object(n.useState)(1),w=Object(l.a)(v,2),B=w[0],G=w[1],k=Object(n.useState)(!1),C=Object(l.a)(k,2),E=C[0],P=C[1],T=Object(n.useState)(""),R=Object(l.a)(T,2),U=R[0],q=R[1],M=Object(n.useState)(""),Q=Object(l.a)(M,2),A=Q[0],D=Q[1];function J(){P(!E)}return Object(n.useEffect)((function(){a&&(y("pending"),d.fetchImages(a,B).then((function(e){var t=e.hits;0===t.length&&i.b.info("No images found"),y("resolved"),b((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),u.animateScroll.scrollToBottom()})).catch((function(e){I(e),y("rejected")})))}),[B,a]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{onSubmit:function(e){e!==a?(c(e),G(1),b([]),I(null)):alert("already loaded")}}),"idle"===x&&null,("resolved"===x||"pending"===x)&&Object(h.jsx)(N,{images:m,showBigImg:function(e,t){P(!0),q(e),D(t),J()}}),"pending"===x&&Object(h.jsx)(S,{}),"resolved"===x&&m.length>=12&&Object(h.jsx)(F,{onLoadMore:function(){G((function(e){return e+1})),y("pending")}}),"rejected"===x&&Object(h.jsx)("div",{children:O}),E&&Object(h.jsx)(L,{onClose:J,bigImg:U,tags:A}),Object(h.jsx)(i.a,{autoClose:3e3})]})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.b4f878fc.chunk.js.map