var ee=Object.defineProperty;var fe=(e,t)=>{for(var _ in t)ee(e,_,{get:t[_],enumerable:!0})};var P,a,B,te,C,O,V,L={},z=[],_e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var _ in t)e[_]=t[_];return e}function G(e){var t=e.parentNode;t&&t.removeChild(e)}function ne(e,t,_){var r,l,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?l=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?P.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return S(e,i,r,l,null)}function S(e,t,_,r,l){var o={type:e,props:t,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++B};return l==null&&a.vnode!=null&&a.vnode(o),o}function ae(){return{current:null}}function E(e){return e.children}function N(e,t){this.props=e,this.context=t}function w(e,t){if(t==null)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?w(e):null}function q(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return q(e)}}function F(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!M.__r++||O!==a.debounceRendering)&&((O=a.debounceRendering)||setTimeout)(M)}function M(){for(var e;M.__r=C.length;)e=C.sort(function(t,_){return t.__v.__b-_.__v.__b}),C=[],e.some(function(t){var _,r,l,o,i,f;t.__d&&(i=(o=(_=t).__v).__e,(f=_.__P)&&(r=[],(l=k({},o)).__v=o.__v+1,H(f,o,l,_.__n,f.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i??w(o),o.__h),X(r,o),o.__e!=i&&q(o)))})}function J(e,t,_,r,l,o,i,f,p,d){var n,h,u,s,c,b,v,y=r&&r.__k||z,g=y.length;for(_.__k=[],n=0;n<t.length;n++)if((s=_.__k[n]=(s=t[n])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?S(null,s,null,null,s):Array.isArray(s)?S(E,{children:s},null,null,null):s.__b>0?S(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=_,s.__b=_.__b+1,(u=y[n])===null||u&&s.key==u.key&&s.type===u.type)y[n]=void 0;else for(h=0;h<g;h++){if((u=y[h])&&s.key==u.key&&s.type===u.type){y[h]=void 0;break}u=null}H(e,s,u=u||L,l,o,i,f,p,d),c=s.__e,(h=s.ref)&&u.ref!=h&&(v||(v=[]),u.ref&&v.push(u.ref,null,s),v.push(h,s.__c||c,s)),c!=null?(b==null&&(b=c),typeof s.type=="function"&&s.__k===u.__k?s.__d=p=K(s,p,e):p=Q(e,s,u,y,c,p),typeof _.type=="function"&&(_.__d=p)):p&&u.__e==p&&p.parentNode!=e&&(p=w(u))}for(_.__e=b,n=g;n--;)y[n]!=null&&Z(y[n],y[n]);if(v)for(n=0;n<v.length;n++)Y(v[n],v[++n],v[++n])}function K(e,t,_){for(var r,l=e.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=e,t=typeof r.type=="function"?K(r,t,_):Q(_,r,r,l,r.__e,t));return t}function oe(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(_){oe(_,t)}):t.push(e)),t}function Q(e,t,_,r,l,o){var i,f,p;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(_==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),i=null;else{for(f=o,p=0;(f=f.nextSibling)&&p<r.length;p+=1)if(f==l)break e;e.insertBefore(l,o),i=o}return i!==void 0?i:l.nextSibling}function re(e,t,_,r,l){var o;for(o in _)o==="children"||o==="key"||o in t||W(e,o,null,_[o],r);for(o in t)l&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||_[o]===t[o]||W(e,o,t[o],_[o],r)}function j(e,t,_){t[0]==="-"?e.setProperty(t,_):e[t]=_==null?"":typeof _!="number"||_e.test(t)?_:_+"px"}function W(e,t,_,r,l){var o;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)_&&t in _||j(e.style,t,"");if(_)for(t in _)r&&_[t]===r[t]||j(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=_,_?r||e.addEventListener(t,o?$:R,o):e.removeEventListener(t,o?$:R,o);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,_))}}function R(e){this.l[e.type+!1](a.event?a.event(e):e)}function $(e){this.l[e.type+!0](a.event?a.event(e):e)}function H(e,t,_,r,l,o,i,f,p){var d,n,h,u,s,c,b,v,y,g,A,x,I,T,U,m=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(p=_.__h,f=t.__e=_.__e,t.__h=null,o=[f]),(d=a.__b)&&d(t);try{e:if(typeof m=="function"){if(v=t.props,y=(d=m.contextType)&&r[d.__c],g=d?y?y.props.value:d.__:r,_.__c?b=(n=t.__c=_.__c).__=n.__E:("prototype"in m&&m.prototype.render?t.__c=n=new m(v,g):(t.__c=n=new N(v,g),n.constructor=m,n.render=ie),y&&y.sub(n),n.props=v,n.state||(n.state={}),n.context=g,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,m.getDerivedStateFromProps(v,n.__s))),u=n.props,s=n.state,h)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==u&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,g),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,g)===!1||t.__v===_.__v){for(n.props=v,n.state=n.__s,t.__v!==_.__v&&(n.__d=!1),n.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(D){D&&(D.__=t)}),A=0;A<n._sb.length;A++)n.__h.push(n._sb[A]);n._sb=[],n.__h.length&&i.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,g),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(u,s,c)})}if(n.context=g,n.props=v,n.__v=t,n.__P=e,x=a.__r,I=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,x&&x(t),d=n.render(n.props,n.state,n.context),T=0;T<n._sb.length;T++)n.__h.push(n._sb[T]);n._sb=[]}else do n.__d=!1,x&&x(t),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++I<25);n.state=n.__s,n.getChildContext!=null&&(r=k(k({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(c=n.getSnapshotBeforeUpdate(u,s)),U=d!=null&&d.type===E&&d.key==null?d.props.children:d,J(e,Array.isArray(U)?U:[U],t,_,r,l,o,i,f,p),n.base=t.__e,t.__h=null,n.__h.length&&i.push(n),b&&(n.__E=n.__=null),n.__e=!1}else o==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=le(_.__e,t,_,r,l,o,i,p);(d=a.diffed)&&d(t)}catch(D){t.__v=null,(p||o!=null)&&(t.__e=f,t.__h=!!p,o[o.indexOf(f)]=null),a.__e(D,t,_)}}function X(e,t){a.__c&&a.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(r){r.call(_)})}catch(r){a.__e(r,_.__v)}})}function le(e,t,_,r,l,o,i,f){var p,d,n,h=_.props,u=t.props,s=t.type,c=0;if(s==="svg"&&(l=!0),o!=null){for(;c<o.length;c++)if((p=o[c])&&"setAttribute"in p==!!s&&(s?p.localName===s:p.nodeType===3)){e=p,o[c]=null;break}}if(e==null){if(s===null)return document.createTextNode(u);e=l?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,u.is&&u),o=null,f=!1}if(s===null)h===u||f&&e.data===u||(e.data=u);else{if(o=o&&P.call(e.childNodes),d=(h=_.props||L).dangerouslySetInnerHTML,n=u.dangerouslySetInnerHTML,!f){if(o!=null)for(h={},c=0;c<e.attributes.length;c++)h[e.attributes[c].name]=e.attributes[c].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(re(e,u,h,l,f),n)t.__k=[];else if(c=t.props.children,J(e,Array.isArray(c)?c:[c],t,_,r,l&&s!=="foreignObject",o,i,o?o[0]:_.__k&&w(_,0),f),o!=null)for(c=o.length;c--;)o[c]!=null&&G(o[c]);f||("value"in u&&(c=u.value)!==void 0&&(c!==e.value||s==="progress"&&!c||s==="option"&&c!==h.value)&&W(e,"value",c,h.value,!1),"checked"in u&&(c=u.checked)!==void 0&&c!==e.checked&&W(e,"checked",c,h.checked,!1))}return e}function Y(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(r){a.__e(r,_)}}function Z(e,t,_){var r,l;if(a.unmount&&a.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Y(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){a.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&Z(r[l],t,_||typeof e.type!="function");_||e.__e==null||G(e.__e),e.__=e.__e=e.__d=void 0}function ie(e,t,_){return this.constructor(e,_)}function se(e,t,_){var r,l,o;a.__&&a.__(e,t),l=(r=typeof _=="function")?null:_&&_.__k||t.__k,o=[],H(t,e=(!r&&_||t).__k=ne(E,null,[e]),l||L,L,t.ownerSVGElement!==void 0,!r&&_?[_]:l?null:t.firstChild?P.call(t.childNodes):null,o,!r&&_?_:l?l.__e:t.firstChild,r),X(o,e)}function ue(e,t){se(e,t,ue)}function de(e,t,_){var r,l,o,i=k({},e.props);for(o in t)o=="key"?r=t[o]:o=="ref"?l=t[o]:i[o]=t[o];return arguments.length>2&&(i.children=arguments.length>3?P.call(arguments,2):_),S(e.type,i,r||e.key,l||e.ref,null)}function he(e,t){var _={__c:t="__cC"+V++,__:e,Consumer:function(r,l){return r.children(l)},Provider:function(r){var l,o;return this.getChildContext||(l=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&l.some(F)},this.sub=function(i){l.push(i);var f=i.componentWillUnmount;i.componentWillUnmount=function(){l.splice(l.indexOf(i),1),f&&f.call(i)}}),r.children}};return _.Provider.__=_.Consumer.contextType=_}P=z.slice,a={__e:function(e,t,_,r){for(var l,o,i;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,r||{}),i=l.__d),i)return l.__E=l}catch(f){e=f}throw e}},B=0,te=function(e){return e!=null&&e.constructor===void 0},N.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},_),this.props)),e&&k(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),F(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),F(this))},N.prototype.render=E,C=[],M.__r=0,V=0;var ce=0;function me(e,t,_,r,l){var o,i,f={};for(i in t)i=="ref"?o=t[i]:f[i]=t[i];var p={type:e,props:f,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ce,__source:l,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)f[i]===void 0&&(f[i]=o[i]);return a.vnode&&a.vnode(p),p}export{fe as a,a as b,ne as c,ae as d,E as e,N as f,oe as g,se as h,ue as i,de as j,he as k,me as l};
