var Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rc=0,go=1,ac=2;var Rs=1,oc=2,$n=3,ji=0,Be=1,ai=2,pn=0,Xn=1,_o=2,xo=3,yo=4,lc=5;var mn=100,cc=101,hc=102,uc=103,dc=104,fc=200,pc=201,mc=202,gc=203,vo=204,bo=205,_c=206,xc=207,yc=208,vc=209,bc=210,Sc=211,Mc=212,wc=213,Ec=214,mr=0,gr=1,_r=2,Fn=3,xr=4,yr=5,vr=6,br=7,So=0,Tc=1,Ac=2,yi=0,Mo=1,wo=2,Eo=3,To=4,Ao=5,Ro=6,Co=7;var Po=300,gn=301,qn=302,qr=303,Yr=304,Sr=1e3,xi=1001,Mr=1002,Ae=1003,Rc=1004;var Cs=1005;var Oe=1006,Zr=1007;var Li=1008;var je=1009,Io=1010,Lo=1011,Yn=1012,Jr=1013,fi=1014,pi=1015,mi=1016,Kr=1017,jr=1018,_n=1020,Do=35902,No=35899,Uo=1021,Fo=1022,gi=1023,Pi=1026,Di=1027,Oo=1028,Qr=1029,Qi=1030,ta=1031;var ea=1033,Ps=33776,Is=33777,Ls=33778,Ds=33779,ia=35840,na=35841,sa=35842,ra=35843,aa=36196,oa=37492,la=37496,ca=37488,ha=37489,Ns=37490,ua=37491,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,xa=37814,ya=37815,va=37816,ba=37817,Sa=37818,Ma=37819,wa=37820,Ea=37821,Ta=36492,Aa=36494,Ra=36495,Ca=36283,Pa=36284,Us=36285,Ia=36286;var ls=2300,wr=2301,fr=2302,co=2303,ho=2400,uo=2401,fo=2402;var Cc=3200;var Bo=0,Pc=1,Ni="",We="srgb",cs="srgb-linear",hs="linear",te="srgb";var pr=7680;var Ic=519,Lc=512,Dc=513,Nc=514,zo=515,Uc=516,Fc=517,ko=518,Go=519,Oc=35044;var Ho="300 es",si=2e3,us=2001;function $h(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xh(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bc(){let n=ds("canvas");return n.style.display="block",n}var Dl={},On=null;function Vo(...n){let t="THREE."+n.shift();On?On("log",t,...n):console.log(t,...n)}function zc(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ct(...n){n=zc(n);let t="THREE."+n.shift();if(On)On("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Nt(...n){n=zc(n);let t="THREE."+n.shift();if(On)On("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function rs(...n){let t=n.join(" ");t in Dl||(Dl[t]=!0,Ct(...n))}function kc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Gc={[mr]:mr,[_r]:vr,[xr]:xr,[Fn]:yr,[gr]:gr,[vr]:_r,[br]:br,[yr]:Fn},di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nl=1234567,as=Math.PI/180,Bn=180/Math.PI;function Zn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Vt(n,t,e){return Math.max(t,Math.min(e,n))}function Wo(n,t){return(n%t+t)%t}function qh(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Yh(n,t,e){return n!==t?(e-n)/(t-n):0}function os(n,t,e){return(1-e)*n+e*t}function Zh(n,t,e,i){return os(n,t,1-Math.exp(-e*i))}function Jh(n,t=1){return t-Math.abs(Wo(n,t*2)-t)}function Kh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function jh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qh(n,t){return n+Math.floor(Math.random()*(t-n+1))}function tu(n,t){return n+Math.random()*(t-n)}function eu(n){return n*(.5-Math.random())}function iu(n){n!==void 0&&(Nl=n);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nu(n){return n*as}function su(n){return n*Bn}function ru(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function au(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $o(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ou(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*f,o*h,o*c);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hc(n,t){if(t.constructor===Float32Array)return n;let e=Xo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Vc(n,t){if(t.constructor===Float32Array)return n;let e=Xo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Fs={DEG2RAD:as,RAD2DEG:Bn,generateUUID:Zn,clamp:Vt,euclideanModulo:Wo,mapLinear:qh,inverseLerp:Yh,lerp:os,damp:Zh,pingpong:Jh,smoothstep:Kh,smootherstep:jh,randInt:Qh,randFloat:tu,randFloatSpread:eu,seededRandom:iu,degToRad:nu,radToDeg:su,isPowerOfTwo:ru,ceilPowerOfTwo:au,floorPowerOfTwo:$o,setQuaternionFromProperEuler:ou,normalize:Vc,denormalize:Hc},Bt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],_=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*v;m<0&&(u=-u,f=-f,_=-_,v=-v,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),T=Math.sin(b);p=Math.sin(p*b)/T,o=Math.sin(o*b)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+v*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-o*f,t[e+2]=c*_+h*f+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new O,Ul=new Xe,Ut=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],_=i[8],v=s[0],m=s[3],p=s[6],b=s[1],T=s[4],w=s[7],A=s[2],E=s[5],g=s[8];return r[0]=a*v+o*b+l*A,r[3]=a*m+o*T+l*E,r[6]=a*p+o*w+l*g,r[1]=c*v+h*b+d*A,r[4]=c*m+h*T+d*E,r[7]=c*p+h*w+d*g,r[2]=u*v+f*b+_*A,r[5]=u*m+f*T+_*E,r[8]=u*p+f*w+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=e*d+i*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new Ut,Fl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lu(){let n={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cs]:{primaries:t,whitePoint:i,transfer:hs,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:i,transfer:te,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),n}var qt=lu();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Un(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sn,Er=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Sn===void 0&&(Sn=ds("canvas")),Sn.width=t.width,Sn.height=t.height;let s=Sn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Sn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ds("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cu=0,zn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($a(s[a].image)):r.push($a(s[a]))}else r=$a(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Er.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var hu=0,Xa=new O,ze=class n extends di{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=xi,s=xi,r=Oe,a=Li,o=gi,l=je,c=n.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Zn(),this.name="",this.source=new zn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sr:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sr:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Po;ze.DEFAULT_ANISOTROPY=1;var ue=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,w=(f+1)/2,A=(p+1)/2,E=(h+u)/4,g=(d+v)/4,S=(_+m)/4;return T>w&&T>A?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=g/i):w>A?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=E/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=g/r,s=S/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tr=class extends di{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ze({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new zn(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends Tr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},fs=class extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ar=class extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var he=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,_,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,_,v,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,_,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Mn.setFromMatrixColumn(t,0).length(),r=1/Mn.setFromMatrixColumn(t,1).length(),a=1/Mn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,_=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,_=c*h,v=c*d;e[0]=u+v*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,_=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,_=o*h,v=o*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uu,t,du)}lookAt(t,e,i){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Oi.crossVectors(i,He),Oi.lengthSq()===0&&(Math.abs(i.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Oi.crossVectors(i,He)),Oi.normalize(),$s.crossVectors(He,Oi),s[0]=Oi.x,s[4]=$s.x,s[8]=He.x,s[1]=Oi.y,s[5]=$s.y,s[9]=He.y,s[2]=Oi.z,s[6]=$s.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],_=i[2],v=i[6],m=i[10],p=i[14],b=i[3],T=i[7],w=i[11],A=i[15],E=s[0],g=s[4],S=s[8],B=s[12],C=s[1],D=s[5],k=s[9],X=s[13],P=s[2],W=s[6],Z=s[10],H=s[14],tt=s[3],N=s[7],j=s[11],V=s[15];return r[0]=a*E+o*C+l*P+c*tt,r[4]=a*g+o*D+l*W+c*N,r[8]=a*S+o*k+l*Z+c*j,r[12]=a*B+o*X+l*H+c*V,r[1]=h*E+d*C+u*P+f*tt,r[5]=h*g+d*D+u*W+f*N,r[9]=h*S+d*k+u*Z+f*j,r[13]=h*B+d*X+u*H+f*V,r[2]=_*E+v*C+m*P+p*tt,r[6]=_*g+v*D+m*W+p*N,r[10]=_*S+v*k+m*Z+p*j,r[14]=_*B+v*X+m*H+p*V,r[3]=b*E+T*C+w*P+A*tt,r[7]=b*g+T*D+w*W+A*N,r[11]=b*S+T*k+w*Z+A*j,r[15]=b*B+T*X+w*H+A*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],v=t[7],m=t[11],p=t[15],b=l*f-c*u,T=o*f-c*d,w=o*u-l*d,A=a*f-c*h,E=a*u-l*h,g=a*d-o*h;return e*(v*b-m*T+p*w)-i*(_*b-m*A+p*E)+s*(_*T-v*A+p*g)-r*(_*w-v*E+m*g)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],v=t[13],m=t[14],p=t[15],b=e*o-i*a,T=e*l-s*a,w=e*c-r*a,A=i*l-s*o,E=i*c-r*o,g=s*c-r*l,S=h*v-d*_,B=h*m-u*_,C=h*p-f*_,D=d*m-u*v,k=d*p-f*v,X=u*p-f*m,P=b*X-T*k+w*D+A*C-E*B+g*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/P;return t[0]=(o*X-l*k+c*D)*W,t[1]=(s*k-i*X-r*D)*W,t[2]=(v*g-m*E+p*A)*W,t[3]=(u*E-d*g-f*A)*W,t[4]=(l*C-a*X-c*B)*W,t[5]=(e*X-s*C+r*B)*W,t[6]=(m*w-_*g-p*T)*W,t[7]=(h*g-u*w+f*T)*W,t[8]=(a*k-o*C+c*S)*W,t[9]=(i*C-e*k-r*S)*W,t[10]=(_*E-v*w+p*b)*W,t[11]=(d*w-h*E-f*b)*W,t[12]=(o*B-a*D-l*S)*W,t[13]=(e*D-i*B+s*S)*W,t[14]=(v*T-_*A-m*b)*W,t[15]=(h*A-d*T+u*b)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,v=a*h,m=a*d,p=o*d,b=l*c,T=l*h,w=l*d,A=i.x,E=i.y,g=i.z;return s[0]=(1-(v+p))*A,s[1]=(f+w)*A,s[2]=(_-T)*A,s[3]=0,s[4]=(f-w)*E,s[5]=(1-(u+p))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(_+T)*g,s[9]=(m-b)*g,s[10]=(1-(u+v))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Mn.set(s[0],s[1],s[2]).length(),o=Mn.set(s[4],s[5],s[6]).length(),l=Mn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),li.copy(this);let c=1/a,h=1/o,d=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,e.setFromRotationMatrix(li),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=si,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),_,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===si)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===us)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=si,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),_,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===si)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===us)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Mn=new O,li=new he,uu=new O(0,0,0),du=new O(1,1,1),Oi=new O,$s=new O,He=new O,Bl=new he,zl=new Xe,Vi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var ps=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fu=0,kl=new O,wn=new Xe,Mi=new he,Xs=new O,ts=new O,pu=new O,mu=new Xe,Gl=new O(1,0,0),Hl=new O(0,1,0),Vl=new O(0,0,1),Wl={type:"added"},gu={type:"removed"},En={type:"childadded",child:null},qa={type:"childremoved",child:null},Ye=class n extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new Vi,i=new Xe,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Ut}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.multiply(wn),this}rotateOnWorldAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.premultiply(wn),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xs.copy(t):Xs.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(ts,Xs,this.up):Mi.lookAt(Xs,ts,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),wn.setFromRotationMatrix(Mi),this.quaternion.premultiply(wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wl),En.child=t,this.dispatchEvent(En),En.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gu),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wl),En.child=t,this.dispatchEvent(En),En.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new O(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},_u={type:"move"},kn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_u)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ri;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Ya(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=qt.workingColorSpace){if(t=Wo(t,1),e=Vt(e,0,1),i=Vt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ya(a,r,t+1/3),this.g=Ya(a,r,t),this.b=Ya(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function i(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let i=Wc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return qt.workingToColorSpace(Le.copy(this),t),Math.round(Vt(Le.r*255,0,255))*65536+Math.round(Vt(Le.g*255,0,255))*256+Math.round(Vt(Le.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Le.copy(this),e);let i=Le.r,s=Le.g,r=Le.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=We){qt.workingToColorSpace(Le.copy(this),t);let e=Le.r,i=Le.g,s=Le.b;return t!==We?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(qs);let i=os(Bi.h,qs.h,e),s=os(Bi.s,qs.s,e),r=os(Bi.l,qs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Yt;Yt.NAMES=Wc;var ms=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ci=new O,wi=new O,Za=new O,Ei=new O,Tn=new O,An=new O,$l=new O,Ja=new O,Ka=new O,ja=new O,Qa=new ue,to=new ue,eo=new ue,Hi=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ci.subVectors(t,e),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ci.subVectors(s,e),wi.subVectors(i,e),Za.subVectors(t,e);let a=ci.dot(ci),o=ci.dot(wi),l=ci.dot(Za),c=wi.dot(wi),h=wi.dot(Za),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Qa.setScalar(0),to.setScalar(0),eo.setScalar(0),Qa.fromBufferAttribute(t,e),to.fromBufferAttribute(t,i),eo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qa,r.x),a.addScaledVector(to,r.y),a.addScaledVector(eo,r.z),a}static isFrontFacing(t,e,i,s){return ci.subVectors(i,e),wi.subVectors(t,e),ci.cross(wi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ci.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Tn.subVectors(s,i),An.subVectors(r,i),Ja.subVectors(t,i);let l=Tn.dot(Ja),c=An.dot(Ja);if(l<=0&&c<=0)return e.copy(i);Ka.subVectors(t,s);let h=Tn.dot(Ka),d=An.dot(Ka);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Tn,a);ja.subVectors(t,r);let f=Tn.dot(ja),_=An.dot(ja);if(_>=0&&f<=_)return e.copy(r);let v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(An,o);let m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return $l.subVectors(r,s),o=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector($l,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(i).addScaledVector(Tn,a).addScaledVector(An,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Zs.subVectors(this.max,es),Rn.subVectors(t.a,es),Cn.subVectors(t.b,es),Pn.subVectors(t.c,es),zi.subVectors(Cn,Rn),ki.subVectors(Pn,Cn),rn.subVectors(Rn,Pn);let e=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-rn.z,rn.y,zi.z,0,-zi.x,ki.z,0,-ki.x,rn.z,0,-rn.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-rn.y,rn.x,0];return!io(e,Rn,Cn,Pn,Zs)||(e=[1,0,0,0,1,0,0,0,1],!io(e,Rn,Cn,Pn,Zs))?!1:(Js.crossVectors(zi,ki),e=[Js.x,Js.y,Js.z],io(e,Rn,Cn,Pn,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new O,new O,new O,new O,new O,new O,new O,new O],hi=new O,Ys=new Wi,Rn=new O,Cn=new O,Pn=new O,zi=new O,ki=new O,rn=new O,es=new O,Zs=new O,Js=new O,an=new O;function io(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){an.fromArray(n,r);let o=s.x*Math.abs(an.x)+s.y*Math.abs(an.y)+s.z*Math.abs(an.z),l=t.dot(an),c=e.dot(an),h=i.dot(an);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ge=new O,Ks=new Bt,xu=0,ui=class extends di{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=pi,this.version=0,this._normalizationScale=t!==void 0?Xo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Hc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Vc(t,this.array)}};var gs=class extends ui{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var _s=class extends ui{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ye=class extends ui{constructor(t,e,i){super(new Float32Array(t),e,i)}},yu=new Wi,is=new O,no=new O,cn=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):yu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);let e=is.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(is,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(no)),this.expandByPoint(is.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vu=0,ni=new he,so=new Ye,In=new O,Ve=new Wi,ns=new Wi,Te=new O,Ze=class n extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?_s:gs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ut().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ve.min,ns.min),Ve.expandByPoint(Te),Te.addVectors(Ve.max,ns.max),Ve.expandByPoint(Te)):(Ve.expandByPoint(ns.min),Ve.expandByPoint(ns.max))}Ve.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(In.fromBufferAttribute(t,c),Te.add(In)),s=Math.max(s,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let B=0;B<i.count;B++)o[B]=new O,l[B]=new O;let h=new O,d=new O,u=new O,f=new Bt,_=new Bt,v=new Bt,m=new O,p=new O;function b(B,C,D){c[B]=c[C]=c[D]=1,h.fromBufferAttribute(i,B),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,D),f.fromBufferAttribute(r,B),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),d.sub(h),u.sub(h),_.sub(f),v.sub(f);let k=1/(_.x*v.y-v.x*_.y);isFinite(k)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(u,-_.y).multiplyScalar(k),p.copy(u).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(k),o[B].add(m),o[C].add(m),o[D].add(m),l[B].add(p),l[C].add(p),l[D].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let B=0,C=T.length;B<C;++B){let D=T[B],k=D.start,X=D.count;for(let P=k,W=k+X;P<W;P+=3)b(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let w=new O,A=new O,E=new O,g=new O;function S(B){E.fromBufferAttribute(s,B),g.copy(E);let C=o[B];w.copy(C),w.sub(E.multiplyScalar(E.dot(C))).normalize(),A.crossVectors(g,C);let k=A.dot(l[B])<0?-1:1;a.setXYZW(B,w.x,w.y,w.z,k)}for(let B=0,C=i.count;B<C;++B)c[B]&&S(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ui(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new ui(u,h,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ro=new O,bu=new O,Su=new Ut,$e=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ro.subVectors(i,e).cross(bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ro),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Su.getNormalMatrix(t),s=this.coplanarPoint(ro).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mu=0,$i=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Xn,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=bo,this.blendEquation=mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $e().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Bt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ai=new O,ao=new O,js=new O,Qs=new O,hn=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ao.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),Qs.copy(this.origin).sub(ao);let r=t.distanceTo(e)*.5,a=-this.direction.dot(js),o=Qs.dot(this.direction),l=-Qs.dot(js),c=Qs.lengthSq(),h=Math.abs(1-a*a),d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ao).addScaledVector(js,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,_=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,b=i.y-a.y,T=i.z-a.z,w=Math.abs(l),A=Math.abs(c),E=Math.abs(h),g,S,B,C,D,k,X,P,W,Z,H,tt;if(w>=A&&w>=E?(B=l,k=d,W=_,tt=p,l>=0?(g=c,S=h,C=u,D=f,X=v,P=m,Z=b,H=T):(g=h,S=c,C=f,D=u,X=m,P=v,Z=T,H=b)):A>=E?(B=c,k=u,W=v,tt=b,c>=0?(g=h,S=l,C=f,D=d,X=m,P=_,Z=T,H=p):(g=l,S=h,C=d,D=f,X=_,P=m,Z=p,H=T)):(B=h,k=f,W=m,tt=T,h>=0?(g=l,S=c,C=d,D=u,X=_,P=v,Z=p,H=b):(g=c,S=l,C=u,D=d,X=v,P=_,Z=b,H=p)),B===0)return null;let N=g/B,j=S/B,V=1/B,ct=C-N*k,xt=D-j*k,$=X-N*W,nt=P-j*W,yt=Z-N*tt,At=H-j*tt,ft=yt*nt-At*$,Dt=ct*At-xt*yt,le=$*xt-nt*ct;if(s){if(ft<0||Dt<0||le<0)return null}else if((ft<0||Dt<0||le<0)&&(ft>0||Dt>0||le>0))return null;let It=ft+Dt+le;if(It===0)return null;let Wt=V*(ft*k+Dt*W+le*tt);return(It>0?Wt<0:Wt>0)?null:this.at(Wt/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xl=new he,on=new hn,tr=new cn,ql=new O,er=new O,ir=new O,nr=new O,oo=new O,sr=new O,Yl=new O,rr=new O,Je=class extends Ye{constructor(t=new Ze,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(oo.fromBufferAttribute(d,t),a?sr.addScaledVector(oo,h):sr.addScaledVector(oo.sub(e),h))}e.add(sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere),tr.applyMatrix4(r),on.copy(t.ray).recast(t.near),!(tr.containsPoint(on.origin)===!1&&(on.intersectSphere(tr,ql)===null||on.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),on.copy(t.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&on.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,on)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){let m=u[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=b,A=T;w<A;w+=3){let E=o.getX(w),g=o.getX(w+1),S=o.getX(w+2);s=ar(this,p,t,i,c,h,d,E,g,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){let b=o.getX(m),T=o.getX(m+1),w=o.getX(m+2);s=ar(this,a,t,i,c,h,d,b,T,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){let m=u[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=b,A=T;w<A;w+=3){let E=w,g=w+1,S=w+2;s=ar(this,p,t,i,c,h,d,E,g,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){let b=m,T=m+1,w=m+2;s=ar(this,a,t,i,c,h,d,b,T,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wu(n,t,e,i,s,r,a,o){let l;if(t.side===Be?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ji,o),l===null)return null;rr.copy(o),rr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(rr);return c<e.near||c>e.far?null:{distance:c,point:rr.clone(),object:n}}function ar(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,er),n.getVertexPosition(l,ir),n.getVertexPosition(c,nr);let h=wu(n,t,e,i,er,ir,nr,Yl);if(h){let d=new O;Hi.getBarycoord(Yl,er,ir,nr,d),s&&(h.uv=Hi.getInterpolatedAttribute(s,o,l,c,d,new Bt)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,o,l,c,d,new Bt)),a&&(h.normal=Hi.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Hi.getNormal(er,ir,nr,u.normal),h.face=u,h.barycoord=d}return h}var Rr=class extends ze{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ae,h=Ae,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xi=class extends ui{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var ln=new cn,Eu=new Bt(.5,.5),or=new O,un=class{constructor(t=new $e,e=new $e,i=new $e,s=new $e,r=new $e,a=new $e){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],v=r[9],m=r[10],p=r[11],b=r[12],T=r[13],w=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-_,A-b).normalize(),s[1].setComponents(c+a,f+h,p+_,A+b).normalize(),s[2].setComponents(c+o,f+d,p+v,A+T).normalize(),s[3].setComponents(c-o,f-d,p-v,A-T).normalize(),i)s[4].setComponents(l,u,m,w).normalize(),s[5].setComponents(c-l,f-u,p-m,A-w).normalize();else if(s[4].setComponents(c-l,f-u,p-m,A-w).normalize(),e===si)s[5].setComponents(c+l,f+u,p+m,A+w).normalize();else if(e===us)s[5].setComponents(l,u,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ln)}intersectsSprite(t){ln.center.set(0,0,0);let e=Eu.distanceTo(t.center);return ln.radius=.7071067811865476+e,ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(ln)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zl=new he,Cr=class n{constructor(){this.coordinateSystem=si,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Zl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new un),i[s].setFromProjectionMatrix(Zl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new un),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var dn=class extends $i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pr=new O,Ir=new O,Jl=new he,ss=new hn,lr=new cn,lo=new O,Kl=new O,xs=class extends Ye{constructor(t=new Ze,e=new dn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Pr.fromBufferAttribute(e,s-1),Ir.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Pr.distanceTo(Ir);t.setAttribute("lineDistance",new ye(i,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;Jl.copy(s).invert(),ss.copy(t.ray).applyMatrix4(Jl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=f,m=_-1;v<m;v+=c){let p=h.getX(v),b=h.getX(v+1),T=cr(this,t,ss,l,p,b,v);T&&e.push(T)}if(this.isLineLoop){let v=h.getX(_-1),m=h.getX(f),p=cr(this,t,ss,l,v,m,_-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=f,m=_-1;v<m;v+=c){let p=cr(this,t,ss,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=cr(this,t,ss,l,_-1,f,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cr(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Pr.fromBufferAttribute(o,s),Ir.fromBufferAttribute(o,r),e.distanceSqToSegment(Pr,Ir,lo,Kl)>i)return;lo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(lo);if(!(c<t.near||c>t.far))return{distance:c,point:Kl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var jl=new O,Ql=new O,ys=class extends xs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)jl.fromBufferAttribute(e,s),Ql.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+jl.distanceTo(Ql);t.setAttribute("lineDistance",new ye(i,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},vs=class extends xs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var bs=class extends ze{constructor(t=[],e=gn,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ii=class extends ze{constructor(t,e,i=fi,s,r,a,o=Ae,l=Ae,c,h=Pi,d=1){if(h!==Pi&&h!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ss=class extends Ii{constructor(t,e=fi,i=gn,s,r,a=Ae,o=Ae,l,c=Pi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ms=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Hn=class n extends Ze{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2));function _(v,m,p,b,T,w,A,E,g,S,B){let C=w/g,D=A/S,k=w/2,X=A/2,P=E/2,W=g+1,Z=S+1,H=0,tt=0,N=new O;for(let j=0;j<Z;j++){let V=j*D-X;for(let ct=0;ct<W;ct++){let xt=ct*C-k;N[v]=xt*b,N[m]=V*T,N[p]=P,c.push(N.x,N.y,N.z),N[v]=0,N[m]=0,N[p]=E>0?1:-1,h.push(N.x,N.y,N.z),d.push(ct/g),d.push(1-j/S),H+=1}}for(let j=0;j<S;j++)for(let V=0;V<g;V++){let ct=u+V+W*j,xt=u+V+W*(j+1),$=u+(V+1)+W*(j+1),nt=u+(V+1)+W*j;l.push(ct,xt,nt),l.push(xt,$,nt),tt+=6}o.addGroup(f,tt,B),f+=tt,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fn=class n extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],_=[],v=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let T=0;T<c;T++){let w=T*d-r;_.push(w,-b,0),v.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let T=b+c*p,w=b+c*(p+1),A=b+1+c*(p+1),E=b+1+c*p;f.push(T,w,E),f.push(w,A,E)}this.setIndex(f),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function xn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(tc(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(tc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function De(n){let t={};for(let e=0;e<n.length;e++){let i=xn(n[e]);for(let s in i)t[s]=i[s]}return t}function tc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Tu(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qo(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var $c={clone:xn,merge:De},Au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Au,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xn(t.uniforms),this.uniformsGroups=Tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Lr=class extends ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Dr=class extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nr=class extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ln(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function hr(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var qi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ur=class extends qi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ho,endingEnd:ho}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case uo:r=t,o=2*e-i;break;case fo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case uo:a=t,l=2*i-e;break;case fo:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(i-e)/(s-e),v=_*_,m=v*_,p=-u*m+2*u*v-u*_,b=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*_+1,T=(-1-f)*m+(1.5+f)*v+.5*_,w=f*m-f*v;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+b*a[c+A]+T*a[l+A]+w*a[d+A];return r}},Fr=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Or=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Br=class extends qi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(i-e)/(s-e),v=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*_;return r}let u=o*2,f=t-1;for(let _=0;_!==o;++_){let v=a[c+_],m=a[l+_],p=f*u+_*2,b=d[p],T=d[p+1],w=t*u+_*2,A=h[w],E=h[w+1],g=Pu(i,e,b,A,s);r[_]=Xc(g,v,T,E,m)}return r}};function Xc(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Cu(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Pu(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Xc(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Cu(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ke=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ln(e,this.TimeBufferType),this.values=Ln(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ln(t.times,Array),values:Ln(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),hr(t.settings)&&(i.settings={inTangents:Ln(t.settings.inTangents,Array),outTangents:Ln(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Or(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ur(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Br(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ls:e=this.InterpolantFactoryMethodDiscrete;break;case wr:e=this.InterpolantFactoryMethodLinear;break;case fr:e=this.InterpolantFactoryMethodSmooth;break;case co:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ct("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return wr;case this.InterpolantFactoryMethodSmooth:return fr;case this.InterpolantFactoryMethodBezier:return co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;hr(this.settings)&&(ec(this.settings.inTangents,t),ec(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;hr(this.settings)&&(ic(this.settings.inTangents,t),ic(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Nt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Xh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let _=0;_!==i;++_){let v=e[d+_];if(v!==e[u+_]||v!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,hr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ec(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function ic(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Ke.prototype.ValueTypeName="";Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=wr;var Yi=class extends Ke{constructor(t,e,i){super(t,e,i)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ls;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var zr=class extends Ke{constructor(t,e,i,s){super(t,e,i,s)}};zr.prototype.ValueTypeName="color";var kr=class extends Ke{constructor(t,e,i,s){super(t,e,i,s)}};kr.prototype.ValueTypeName="number";var Gr=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Xe.slerpFlat(r,0,a,c-o,a,c,l);return r}},ws=class extends Ke{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Gr(this.times,this.values,this.getValueSize(),t)}};ws.prototype.ValueTypeName="quaternion";ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Ke{constructor(t,e,i){super(t,e,i)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ls;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends Ke{constructor(t,e,i,s){super(t,e,i,s)}};Hr.prototype.ValueTypeName="vector";var Vr=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qc=new Vr,Wr=class{constructor(t){this.manager=t!==void 0?t:qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Wr.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=new O,dr=new Xe,_i=new O,Es=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ur,dr,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,dr,_i.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ur,dr,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,dr,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new O,nc=new Bt,sc=new Bt,Fe=class extends Es{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bn*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,nc,sc),e.subVectors(sc,nc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(as*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $r=class extends Es{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ts=class extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Dn=-90,Nn=1,Vn=class extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(Dn,Nn,t,e);s.layers=this.layers,this.add(s);let r=new Fe(Dn,Nn,t,e);r.layers=this.layers,this.add(r);let a=new Fe(Dn,Nn,t,e);a.layers=this.layers,this.add(a);let o=new Fe(Dn,Nn,t,e);o.layers=this.layers,this.add(o);let l=new Fe(Dn,Nn,t,e);l.layers=this.layers,this.add(l);let c=new Fe(Dn,Nn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Xr=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Yo="\\[\\]\\.:\\/",Iu=new RegExp("["+Yo+"]","g"),Zo="[^"+Yo+"]",Lu="[^"+Yo.replace("\\.","")+"]",Du=/((?:WC+[\/:])*)/.source.replace("WC",Zo),Nu=/(WCOD+)?/.source.replace("WCOD",Lu),Uu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zo),Fu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zo),Ou=new RegExp("^"+Du+Nu+Uu+Fu+"$"),Bu=["material","materials","bones","map"],po=class{constructor(t,e,i){let s=i||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},re=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Iu,"")}static parseTrackName(t){let e=Ou.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Bu.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=po;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);var Wn=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var mo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var As=class extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Jo(n,t,e,i){let s=zu(i);switch(e){case Uo:return n*t;case Oo:return n*t/s.components*s.byteLength;case Qr:return n*t/s.components*s.byteLength;case Qi:return n*t*2/s.components*s.byteLength;case ta:return n*t*2/s.components*s.byteLength;case Fo:return n*t*3/s.components*s.byteLength;case gi:return n*t*4/s.components*s.byteLength;case ea:return n*t*4/s.components*s.byteLength;case Ps:case Is:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Ds:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case na:case ra:return Math.max(n,16)*Math.max(t,8)/4;case ia:case sa:return Math.max(n,8)*Math.max(t,8)/2;case aa:case oa:case ca:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case la:case Ns:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ma:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ga:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _a:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ya:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ba:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ta:case Aa:case Ra:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ca:case Pa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Us:case Ia:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zu(n){switch(n){case je:case Io:return{byteLength:1,components:1};case Yn:case Lo:case mi:return{byteLength:2,components:1};case Kr:case jr:return{byteLength:2,components:4};case fi:case Jr:case pi:return{byteLength:4,components:1};case Do:case No:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mh(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Gu(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ed=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ef=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,of=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_f=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ff=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Of=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Hu,alphahash_pars_fragment:Vu,alphamap_fragment:Wu,alphamap_pars_fragment:$u,alphatest_fragment:Xu,alphatest_pars_fragment:qu,aomap_fragment:Yu,aomap_pars_fragment:Zu,batching_pars_vertex:Ju,batching_vertex:Ku,begin_vertex:ju,beginnormal_vertex:Qu,bsdfs:td,iridescence_fragment:ed,bumpmap_pars_fragment:id,clipping_planes_fragment:nd,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:rd,clipping_planes_vertex:ad,color_fragment:od,color_pars_fragment:ld,color_pars_vertex:cd,color_vertex:hd,common:ud,defaultnormal_vertex:dd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:_d,colorspace_pars_fragment:xd,envmap_fragment:yd,envmap_common_pars_fragment:vd,envmap_pars_fragment:bd,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Dd,envmap_vertex:Md,fog_vertex:wd,fog_pars_vertex:Ed,fog_fragment:Td,fog_pars_fragment:Ad,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Id,lights_pars_begin:Ld,lights_toon_fragment:Nd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Fd,lights_phong_pars_fragment:Od,lights_physical_fragment:Bd,lights_physical_pars_fragment:zd,lights_fragment_begin:kd,lights_fragment_maps:Gd,lights_fragment_end:Hd,lightprobes_pars_fragment:Vd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:qd,map_fragment:Yd,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Kd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:Qd,morphinstance_vertex:tf,morphcolor_vertex:ef,morphnormal_vertex:nf,morphtarget_pars_vertex:sf,morphtarget_vertex:rf,normal_fragment_begin:af,normal_fragment_maps:of,normal_pars_fragment:lf,normal_pars_vertex:cf,normal_vertex:hf,normalmap_pars_fragment:uf,clearcoat_normal_fragment_begin:df,clearcoat_normal_fragment_maps:ff,clearcoat_pars_fragment:pf,iridescence_pars_fragment:mf,opaque_fragment:gf,packing:_f,premultiplied_alpha_fragment:xf,project_vertex:yf,dithering_fragment:vf,dithering_pars_fragment:bf,roughnessmap_fragment:Sf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Ef,shadowmap_vertex:Tf,shadowmask_pars_fragment:Af,skinbase_vertex:Rf,skinning_pars_vertex:Cf,skinning_vertex:Pf,skinnormal_vertex:If,specularmap_fragment:Lf,specularmap_pars_fragment:Df,tonemapping_fragment:Nf,tonemapping_pars_fragment:Uf,transmission_fragment:Ff,transmission_pars_fragment:Of,uv_pars_fragment:Bf,uv_pars_vertex:zf,uv_vertex:kf,worldpos_vertex:Gf,background_vert:Hf,background_frag:Vf,backgroundCube_vert:Wf,backgroundCube_frag:$f,cube_vert:Xf,cube_frag:qf,depth_vert:Yf,depth_frag:Zf,distance_vert:Jf,distance_frag:Kf,equirect_vert:jf,equirect_frag:Qf,linedashed_vert:tp,linedashed_frag:ep,meshbasic_vert:ip,meshbasic_frag:np,meshlambert_vert:sp,meshlambert_frag:rp,meshmatcap_vert:ap,meshmatcap_frag:op,meshnormal_vert:lp,meshnormal_frag:cp,meshphong_vert:hp,meshphong_frag:up,meshphysical_vert:dp,meshphysical_frag:fp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:gp,points_frag:_p,shadow_vert:xp,shadow_frag:yp,sprite_vert:vp,sprite_frag:bp},gt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},bi={basic:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:De([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:De([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:De([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:De([gt.points,gt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:De([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:De([gt.common,gt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:De([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:De([gt.sprite,gt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:De([gt.common,gt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:De([gt.lights,gt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};bi.physical={uniforms:De([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var La={r:0,b:0,g:0},Sp=new he,gh=new Ut;gh.set(-1,0,0,0,1,0,0,0,1);function Mp(n,t,e,i,s,r){let a=new Yt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let w=b.backgroundBlurriness>0;T=t.get(T,w)}return T}function _(b){let T=!1,w=f(b);w===null?m(a,o):w&&w.isColor&&(m(w,1),T=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,T){let w=f(T);w&&w.isCubeTexture?(c===void 0&&(c=new Je(new Hn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:xn(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sp.makeRotationFromEuler(T.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gh),c.material.toneMapped=qt.getTransfer(w.colorSpace)!==te,(h!==w||d!==w.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Je(new fn(2,2),new ri({name:"BackgroundMaterial",uniforms:xn(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=qt.getTransfer(w.colorSpace)!==te,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,T){b.getRGB(La,qo(n)),e.buffers.color.setClear(La.r,La.g,La.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:_,addToRenderList:v,dispose:p}}function wp(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(D,k,X,P,W){let Z=!1,H=d(D,P,X,k);r!==H&&(r=H,c(r.object)),Z=f(D,P,X,W),Z&&_(D,P,X,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,w(D,k,X,P),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function d(D,k,X,P){let W=P.wireframe===!0,Z=i[k.id];Z===void 0&&(Z={},i[k.id]=Z);let H=D.isInstancedMesh===!0?D.id:0,tt=Z[H];tt===void 0&&(tt={},Z[H]=tt);let N=tt[X.id];N===void 0&&(N={},tt[X.id]=N);let j=N[W];return j===void 0&&(j=u(l()),N[W]=j),j}function u(D){let k=[],X=[],P=[];for(let W=0;W<e;W++)k[W]=0,X[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,k,X,P){let W=r.attributes,Z=k.attributes,H=0,tt=X.getAttributes();for(let N in tt)if(tt[N].location>=0){let V=W[N],ct=Z[N];if(ct===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),V===void 0||V.attribute!==ct||ct&&V.data!==ct.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function _(D,k,X,P){let W={},Z=k.attributes,H=0,tt=X.getAttributes();for(let N in tt)if(tt[N].location>=0){let V=Z[N];V===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));let ct={};ct.attribute=V,V&&V.data&&(ct.data=V.data),W[N]=ct,H++}r.attributes=W,r.attributesNum=H,r.index=P}function v(){let D=r.newAttributes;for(let k=0,X=D.length;k<X;k++)D[k]=0}function m(D){p(D,0)}function p(D,k){let X=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;X[D]=1,P[D]===0&&(n.enableVertexAttribArray(D),P[D]=1),W[D]!==k&&(n.vertexAttribDivisor(D,k),W[D]=k)}function b(){let D=r.newAttributes,k=r.enabledAttributes;for(let X=0,P=k.length;X<P;X++)k[X]!==D[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function T(D,k,X,P,W,Z,H){H===!0?n.vertexAttribIPointer(D,k,X,W,Z):n.vertexAttribPointer(D,k,X,P,W,Z)}function w(D,k,X,P){v();let W=P.attributes,Z=X.getAttributes(),H=k.defaultAttributeValues;for(let tt in Z){let N=Z[tt];if(N.location>=0){let j=W[tt];if(j===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let V=j.normalized,ct=j.itemSize,xt=t.get(j);if(xt===void 0)continue;let $=xt.buffer,nt=xt.type,yt=xt.bytesPerElement,At=nt===n.INT||nt===n.UNSIGNED_INT||j.gpuType===Jr;if(j.isInterleavedBufferAttribute){let ft=j.data,Dt=ft.isInterleavedBuffer===!0?ft.stride:ft.itemSize,le=j.offset;if(ft.isInstancedInterleavedBuffer||ft.isInstancedBufferAttribute){for(let It=0;It<N.locationSize;It++)p(N.location+It,ft.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let It=0;It<N.locationSize;It++)m(N.location+It);n.bindBuffer(n.ARRAY_BUFFER,$);for(let It=0;It<N.locationSize;It++)T(N.location+It,ct/N.locationSize,nt,V,Dt*yt,(le+ct/N.locationSize*It)*yt,At)}else{if(j.isInstancedBufferAttribute){for(let ft=0;ft<N.locationSize;ft++)p(N.location+ft,j.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ft=0;ft<N.locationSize;ft++)m(N.location+ft);n.bindBuffer(n.ARRAY_BUFFER,$);for(let ft=0;ft<N.locationSize;ft++)T(N.location+ft,ct/N.locationSize,nt,V,ct*yt,ct/N.locationSize*ft*yt,At)}}else if(H!==void 0){let V=H[tt];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(N.location,V);break;case 3:n.vertexAttrib3fv(N.location,V);break;case 4:n.vertexAttrib4fv(N.location,V);break;default:n.vertexAttrib1fv(N.location,V)}}}}b()}function A(){B();for(let D in i){let k=i[D];for(let X in k){let P=k[X];for(let W in P){let Z=P[W];for(let H in Z)h(Z[H].object),delete Z[H];delete P[W]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let k=i[D.id];for(let X in k){let P=k[X];for(let W in P){let Z=P[W];for(let H in Z)h(Z[H].object),delete Z[H];delete P[W]}}delete i[D.id]}function g(D){for(let k in i){let X=i[k];for(let P in X){let W=X[P];if(W[D.id]===void 0)continue;let Z=W[D.id];for(let H in Z)h(Z[H].object),delete Z[H];delete W[D.id]}}}function S(D){for(let k in i){let X=i[k],P=D.isInstancedMesh===!0?D.id:0,W=X[P];if(W!==void 0){for(let Z in W){let H=W[Z];for(let tt in H)h(H[tt].object),delete H[tt];delete W[Z]}delete X[P],Object.keys(X).length===0&&delete i[k]}}}function B(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Ep(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==gi&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==je&&g!==pi&&!S&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ct("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:w,maxSamples:A,samples:E}}function Ap(n){let t=this,e=null,i=0,s=!1,r=!1,a=new $e,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,T=b*4,w=p.clippingState||null;l.value=w,w=h(_,u,T,f);for(let A=0;A!==T;++A)w[A]=e[A];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,_){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let p=f+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,w=f;T!==v;++T,w+=4)a.copy(d[T]).applyMatrix4(b,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var zs=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hn(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:xn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:pn});r.uniforms.tEquirect.value=e;let a=new Je(s,r),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=Oe),new Vn(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Yc=256,Rp=3,Cp=20,_h=256,xh=16,Pp=3,Ip=new O,Lp=new Yt,Na=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vn(1,10,null),this._boxMesh=new Je(new Hn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Ip}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Lp));let m=new Vn(i,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Yc,$o(t))}_fromTexture(t,e){t.mapping===gn||t.mapping===qn?this._setSize(t.image.length===0?Yc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Zc(t,!1,!1),i=Math.log2(t)-Rp;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Zc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===gn||t.mapping===qn?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Dp(),this._integrationMaterial=Np());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/xh);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Pp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(_h*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Up());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Zc(n,t,e){return new zs(n,{minFilter:Li,generateMipmaps:t,type:mi,colorSpace:cs,depthBuffer:e})}function ks(n,t,e){return new ri({name:n,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:Be,blending:pn,depthTest:!1,depthWrite:!1})}function Dp(){return ks("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_h}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Np(){return ks("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Up(){return ks("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Cp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Jc(){return ks("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Kc(){return ks("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fp(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===qr||f===Yr)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let v=new zs(_.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,_=f===qr||f===Yr,v=f===gn||f===qn;if(_||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Na(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return _&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Na(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===qr?u.mapping=gn:f===Yr&&(u.mapping=qn),u}function l(u){let f=0,_=6;for(let v=0;v<_;v++)u[v]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Op(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&rs("WebGLRenderer: "+i+" extension not supported."),s}}}function Bp(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let v=r.get(_);v&&(t.remove(v),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(_){let v=_.attributes;for(let m in v)t.update(v[m],n.ARRAY_BUFFER)}function d(_){let v=_.index,m=_.attributes.position,p=0;if(m===void 0)return;let b=v!==null?v.array.length:m.array.length/3-1,T=m.count>=65535?_s:gs,w=new T(Math.ceil(b/3)*6,1),A=w.array;if(v!==null){let g=v.array;p=v.version;for(let S=0,B=0;S<b;S+=3){let C=g[S+0],D=g[S+1],k=g[S+2];A[B++]=C,A[B++]=D,A[B++]=D,A[B++]=k,A[B++]=k,A[B++]=C}}else{p=m.version;for(let g=0,S=0;g<b;g+=3){let B=g+0,C=g+1,D=g+2;A[S++]=B,A[S++]=C,A[S++]=C,A[S++]=D,A[S++]=D,A[S++]=B}}w.version=p;let E=r.get(_);E&&t.remove(E),r.set(_,w)}function u(_){let v=r.get(_);if(v){let m=_.index;m!==null&&v.version<m.version&&d(_)}else d(_);return r.get(_)}function f(){for(let _ in s){let v=s[_].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function zp(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function kp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gp(n,t,e){let i=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let B=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;f===!0&&(T=1),_===!0&&(T=2),v===!0&&(T=3);let w=o.attributes.position.count*T,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let E=new Float32Array(w*A*4*d),g=new fs(E,w,A,d);g.type=pi,g.needsUpdate=!0;let S=T*4;for(let C=0;C<d;C++){let D=m[C],k=p[C],X=b[C],P=w*A*4*C;for(let W=0;W<D.count;W++){let Z=W*S;f===!0&&(s.fromBufferAttribute(D,W),E[P+Z+0]=s.x,E[P+Z+1]=s.y,E[P+Z+2]=s.z,E[P+Z+3]=0),_===!0&&(s.fromBufferAttribute(k,W),E[P+Z+4]=s.x,E[P+Z+5]=s.y,E[P+Z+6]=s.z,E[P+Z+7]=0),v===!0&&(s.fromBufferAttribute(X,W),E[P+Z+8]=s.x,E[P+Z+9]=s.y,E[P+Z+10]=s.z,E[P+Z+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new Bt(w,A)},i.set(o,u),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Hp(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Vp={[Mo]:"LINEAR_TONE_MAPPING",[wo]:"REINHARD_TONE_MAPPING",[Eo]:"CINEON_TONE_MAPPING",[To]:"ACES_FILMIC_TONE_MAPPING",[Ro]:"AGX_TONE_MAPPING",[Co]:"NEUTRAL_TONE_MAPPING",[Ao]:"CUSTOM_TONE_MAPPING"};function Wp(n,t,e,i,s,r){let a=new qe(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ze;h.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ye([0,2,0,0,2,0],2));let d=new Lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Je(h,d),f=new $r(-1,1,1,-1,0,1),_=null,v=null,m=!1,p,b=null,T=[],w=!1;this.setSize=function(A,E){a.setSize(A,E),o!==null&&o.setSize(A,E),l!==null&&l.setSize(A,E);for(let g=0;g<T.length;g++){let S=T[g];S.setSize&&S.setSize(A,E)}},this.setEffects=function(A){T=A,w=T.length>0&&T[0].isRenderPass===!0;let E=a.width,g=a.height;T.length>0&&o===null&&(o=new qe(E,g,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new qe(E,g,{type:mi,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&T.some(B=>B.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ii(E,g),r===!0&&(c.format=Di,c.type=_n)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let B=0;B<T.length;B++){let C=T[B];C.setSize&&C.setSize(E,g),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,E){if(m||A.toneMapping===yi&&T.length===0)return!1;if(b=E,E!==null){let g=E.width,S=E.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return w===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=yi,!0},this.hasRenderPass=function(){return w},this.end=function(A,E){A.toneMapping=p,m=!0;let g=a,S=o;for(let B=0;B<T.length;B++){let C=T[B];C.enabled!==!1&&(C.render(A,S,g,E),C.needsSwap!==!1&&(g=S,S=S===o?l:o))}if(_!==A.outputColorSpace||v!==A.toneMapping){_=A.outputColorSpace,v=A.toneMapping,d.defines={},qt.getTransfer(_)===te&&(d.defines.SRGB_TRANSFER="");let B=Vp[v];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(b),A.render(u,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var yh=new ze,vh=new Ii(1,1),bh=new Ss(1),Sh=new fs,Mh=new Ar,wh=new bs,jc=[],Qc=[],th=new Float32Array(16),eh=new Float32Array(9),ih=new Float32Array(4);function Kn(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=jc[s];if(r===void 0&&(r=new Float32Array(s),jc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fa(n,t){let e=Qc[t];e===void 0&&(e=new Int32Array(t),Qc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $p(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Xp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function qp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function Yp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function Zp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(ve(e,i))return;ih.set(i),n.uniformMatrix2fv(this.addr,!1,ih),be(e,i)}}function Jp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(ve(e,i))return;eh.set(i),n.uniformMatrix3fv(this.addr,!1,eh),be(e,i)}}function Kp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(ve(e,i))return;th.set(i),n.uniformMatrix4fv(this.addr,!1,th),be(e,i)}}function jp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function tm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function em(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function im(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function nm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function sm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function Oa(n){return n.version===0&&(n.compareFunction=Go,n.needsUpdate=!0),n}function am(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Oa(vh):r=yh,e.setTexture2D(t||r,s)}function om(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Mh,s)}function lm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Oa(bh):r=wh,e.setTextureCube(t||r,s)}function cm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Sh,s)}function hm(n){switch(n){case 5126:return $p;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Zp;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return jp;case 35667:case 35671:return Qp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return im;case 36294:return nm;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}function um(n,t){n.uniform1fv(this.addr,t)}function dm(n,t){let e=Kn(t,this.size,2);n.uniform2fv(this.addr,e)}function fm(n,t){let e=Kn(t,this.size,3);n.uniform3fv(this.addr,e)}function pm(n,t){let e=Kn(t,this.size,4);n.uniform4fv(this.addr,e)}function mm(n,t){let e=Kn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gm(n,t){let e=Kn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _m(n,t){let e=Kn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function xm(n,t){n.uniform1iv(this.addr,t)}function ym(n,t){n.uniform2iv(this.addr,t)}function vm(n,t){n.uniform3iv(this.addr,t)}function bm(n,t){n.uniform4iv(this.addr,t)}function Sm(n,t){n.uniform1uiv(this.addr,t)}function Mm(n,t){n.uniform2uiv(this.addr,t)}function wm(n,t){n.uniform3uiv(this.addr,t)}function Em(n,t){n.uniform4uiv(this.addr,t)}function Tm(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),be(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Oa(vh):a=yh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Am(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mh,r[a])}function Rm(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),be(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Oa(bh):a=wh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Cm(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Sh,r[a])}function Pm(n){switch(n){case 5126:return um;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return xm;case 35667:case 35671:return ym;case 35668:case 35672:return vm;case 35669:case 35673:return bm;case 5125:return Sm;case 36294:return Mm;case 36295:return wm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}var Qo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=hm(e.type)}},tl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pm(e.type)}},el=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Ko=/(\w+)(\])?(\[|\.)?/g;function nh(n,t){n.seq.push(t),n.map[t.id]=t}function Im(n,t,e){let i=n.name,s=i.length;for(Ko.lastIndex=0;;){let r=Ko.exec(i),a=Ko.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nh(e,c===void 0?new Qo(o,n,t):new tl(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new el(o),nh(e,d)),e=d}}}var Jn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Im(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function sh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Lm=37297,Dm=0;function Nm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var rh=new Ut;function Um(n){qt._getMatrix(rh,qt.workingColorSpace,n);let t=`mat3( ${rh.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case hs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ah(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Nm(n.getShaderSource(t),o)}else return r}function Fm(n,t){let e=Um(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Om={[Mo]:"Linear",[wo]:"Reinhard",[Eo]:"Cineon",[To]:"ACESFilmic",[Ro]:"AgX",[Co]:"Neutral",[Ao]:"Custom"};function Bm(n,t){let e=Om[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Da=new O;function zm(){qt.getLuminanceCoefficients(Da);let n=Da.x.toFixed(4),t=Da.y.toFixed(4),e=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function km(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function Gm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hm(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Bs(n){return n!==""}function oh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function lh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(n){return n.replace(Vm,Wm)}function Wm(n,t){let e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return il(e)}var $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(n){return n.replace($m,Xm)}function Xm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var qm={[Rs]:"SHADOWMAP_TYPE_PCF",[$n]:"SHADOWMAP_TYPE_VSM"};function Ym(n){return qm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zm={[qn]:"ENVMAP_MODE_REFRACTION"};function Jm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Zm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Km={[So]:"ENVMAP_BLENDING_MULTIPLY",[Tc]:"ENVMAP_BLENDING_MIX",[Ac]:"ENVMAP_BLENDING_ADD"};function jm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Km[n.combine]||"ENVMAP_BLENDING_NONE"}function Qm(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ym(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Jm(e),d=jm(e),u=km(e),f=Gm(r),_=s.createProgram(),v,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Bs).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Bs).join(`
`),m.length>0&&(m+=`
`)):(v=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),m=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==yi?Bm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Fm("linearToOutputTexel",e.outputColorSpace),zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),a=il(a),a=oh(a,e),a=lh(a,e),o=il(o),o=oh(o,e),o=lh(o,e),a=ch(a),o=ch(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=p+v+a,T=p+m+o,w=sh(s,s.VERTEX_SHADER,b),A=sh(s,s.FRAGMENT_SHADER,T);s.attachShader(_,w),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(A)||"",P=D.trim(),W=k.trim(),Z=X.trim(),H=!0,tt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,A);else{let N=ah(s,w,"vertex"),j=ah(s,A,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+N+`
`+j)}else P!==""?Ct("WebGLProgram: Program Info Log:",P):(W===""||Z==="")&&(tt=!1);tt&&(C.diagnostics={runnable:H,programLog:P,vertexShader:{log:W,prefix:v},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(w),s.deleteShader(A),g=new Jn(s,_),S=Hm(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(_,Lm)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}var tg=0,nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new sl(t),e.set(t,i)),i}},sl=class{constructor(t){this.id=tg++,this.code=t,this.usedTimes=0}};function eg(n){return n===Qi||n===Ns||n===Us}function ig(n,t,e,i,s,r){let a=new ps,o=new nl,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,S,B,C,D,k){let X=C.fog,P=D.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=t.get(g.envMap||W,Z),tt=u[g.type],N=i.precision;g.precision!==null&&(N=i.getMaxPrecision(g.precision),N!==g.precision&&Ct("WebGLProgram.getParameters:",g.precision,"not supported, using",N,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,V=j!==void 0?j.length:0,ct=0;P.morphAttributes.position!==void 0&&(ct=1),P.morphAttributes.normal!==void 0&&(ct=2),P.morphAttributes.color!==void 0&&(ct=3);let xt,$,nt,yt;if(tt){let mt=bi[tt];xt=mt.vertexShader,$=mt.fragmentShader}else{xt=g.vertexShader,$=g.fragmentShader;let mt=o.getVertexShaderStage(g),ee=o.getFragmentShaderStage(g);o.update(g,mt,ee),nt=mt.id,yt=ee.id}let At=n.getRenderTarget(),ft=n.state.buffers.depth.getReversed(),Dt=D.isInstancedMesh===!0,le=D.isBatchedMesh===!0,It=!!g.map,Wt=!!g.matcap,Jt=!!H,kt=Jt&&H.isPMREMTexture===!0,pe=!!g.aoMap,de=!!g.lightMap,_e=!!g.bumpMap&&g.wireframe===!1,ie=!!g.normalMap,Ne=!!g.displacementMap,fe=!!g.emissiveMap,Qe=!!g.metalnessMap,ti=!!g.roughnessMap,ei=g.anisotropy>0,L=g.clearcoat>0,ii=g.diffuseRoughness>0,ae=g.dispersion>0,oe=g.retroreflectivity>0,pt=g.iridescence>0,xe=g.sheen>0,Pt=g.transmission>0,Ft=ei&&!!g.anisotropyMap,M=L&&!!g.clearcoatMap,x=L&&!!g.clearcoatNormalMap,F=L&&!!g.clearcoatRoughnessMap,et=ii&&!!g.diffuseRoughnessMap,Q=pt&&!!g.iridescenceMap,rt=pt&&!!g.iridescenceThicknessMap,ut=xe&&!!g.sheenColorMap,Y=xe&&!!g.sheenRoughnessMap,J=!!g.specularMap,ot=!!g.specularColorMap,R=!!g.specularIntensityMap,K=Pt&&!!g.transmissionMap,q=Pt&&!!g.thicknessMap,lt=!!g.gradientMap,st=!!g.alphaMap,at=g.alphaTest>0,Et=!!g.alphaHash,Gt=!!g.extensions,it=yi;g.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(it=n.toneMapping);let Rt=kt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,zt={shaderID:tt,shaderType:g.type,shaderName:g.name,vertexShader:xt,fragmentShader:$,defines:g.defines,customVertexShaderID:nt,customFragmentShaderID:yt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:N,batching:le,batchingColor:le&&D._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&D.instanceColor!==null,instancingMorph:Dt&&D.morphTexture!==null,outputColorSpace:At===null?n.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:It,matcap:Wt,envMap:Jt,envMapMode:Jt&&H.mapping,envMapPMREM:kt,envMapMaxLod:kt?Rt.length-1:null,envMapSize:kt?Rt[0].width:null,aoMap:pe,lightMap:de,bumpMap:_e,normalMap:ie,displacementMap:Ne,emissiveMap:fe,normalMapObjectSpace:ie&&g.normalMapType===Pc,normalMapTangentSpace:ie&&g.normalMapType===Bo,packedNormalMap:ie&&g.normalMapType===Bo&&eg(g.normalMap.format),metalnessMap:Qe,roughnessMap:ti,anisotropy:ei,anisotropyMap:Ft,clearcoat:L,clearcoatMap:M,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:ii,diffuseRoughnessMap:et,dispersion:ae,retroreflection:oe,iridescence:pt,iridescenceMap:Q,iridescenceThicknessMap:rt,sheen:xe,sheenColorMap:ut,sheenRoughnessMap:Y,specularMap:J,specularColorMap:ot,specularIntensityMap:R,transmission:Pt,transmissionMap:K,thicknessMap:q,gradientMap:lt,opaque:g.transparent===!1&&g.blending===Xn&&g.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:Et,combine:g.combine,mapUv:It&&f(g.map.channel),aoMapUv:pe&&f(g.aoMap.channel),lightMapUv:de&&f(g.lightMap.channel),bumpMapUv:_e&&f(g.bumpMap.channel),normalMapUv:ie&&f(g.normalMap.channel),displacementMapUv:Ne&&f(g.displacementMap.channel),emissiveMapUv:fe&&f(g.emissiveMap.channel),metalnessMapUv:Qe&&f(g.metalnessMap.channel),roughnessMapUv:ti&&f(g.roughnessMap.channel),anisotropyMapUv:Ft&&f(g.anisotropyMap.channel),clearcoatMapUv:M&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(g.sheenRoughnessMap.channel),specularMapUv:J&&f(g.specularMap.channel),specularColorMapUv:ot&&f(g.specularColorMap.channel),specularIntensityMapUv:R&&f(g.specularIntensityMap.channel),transmissionMapUv:K&&f(g.transmissionMap.channel),thicknessMapUv:q&&f(g.thicknessMap.channel),alphaMapUv:st&&f(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ie||ei),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(It||st),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&ie===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ft,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ct,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.filter(mt=>mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,decodeVideoTexture:It&&g.map.isVideoTexture===!0&&qt.getTransfer(g.map.colorSpace)===te,decodeVideoTextureEmissive:fe&&g.emissiveMap.isVideoTexture===!0&&qt.getTransfer(g.emissiveMap.colorSpace)===te,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ai,flipSided:g.side===Be,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Gt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&g.extensions.multiDraw===!0||le)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function v(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let B in g.defines)S.push(B),S.push(g.defines[B]);return g.isRawShaderMaterial===!1&&(m(S,g),p(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function m(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function p(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function b(g){let S=u[g.type],B;if(S){let C=bi[S];B=$c.clone(C.uniforms)}else B=g.uniforms;return B}function T(g,S){let B=h.get(S);return B!==void 0?++B.usedTimes:(B=new Qm(n,S,g,s),c.push(B),h.set(S,B)),B}function w(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:b,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:E}}function ng(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function sg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function uh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function dh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,v,m,p){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=_,b.materialVariant=a(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function l(u,f,_,v,m,p,b){b.reversedDepth===!0&&(m=-m);let T=o(u,f,_,v,m,p);_.transmission>0?i.push(T):_.transparent===!0?s.push(T):e.push(T)}function c(u,f,_,v,m,p){let b=o(u,f,_,v,m,p);_.transmission>0?i.unshift(b):_.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||sg),i.length>1&&i.sort(f||uh),s.length>1&&s.sort(f||uh)}function d(){for(let u=t,f=n.length;u<f;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function rg(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new dh,n.set(i,[a])):s>=r.length?(a=new dh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ag(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function og(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var lg=0;function cg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function hg(n){let t=new ag,e=og(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new he,a=new he;function o(c){let h=0,d=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,_=0,v=0,m=0,p=0,b=0,T=0,w=0,A=0,E=0,g=0,S=0,B=0,C=0;c.sort(cg);for(let k=0,X=c.length;k<X;k++){let P=c[k],W=P.color,Z=P.intensity,H=P.distance,tt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Qi?tt=P.shadow.map.texture:tt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=W.r*Z,d+=W.g*Z,u+=W.b*Z;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],Z);C++}else if(P.isSunLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[_]=V,i.sunShadowMap[_]=tt;let ct=j.getViewportCount();for(let xt=0;xt<ct;xt++)i.sunShadowMatrix[v+xt]=j.getMatrix(xt),i.sunShadowCascade[v+xt]=j._cascadeData[xt];v+=ct,_++}i.sun[f]=N,f++}else if(P.isDirectionalLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=tt,i.directionalShadowMatrix[m]=P.shadow.matrix,A++}i.directional[m]=N,m++}else if(P.isSpotLight){let N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(W).multiplyScalar(Z),N.distance=H,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[b]=N;let j=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,j.updateMatrices(P),P.castShadow&&B++),i.spotLightMatrix[b]=j.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,i.spotShadow[b]=V,i.spotShadowMap[b]=tt,g++}b++}else if(P.isRectAreaLight){let N=t.get(P);N.color.copy(W).multiplyScalar(Z),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[T]=N,T++}else if(P.isPointLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let j=P.shadow,V=e.get(P);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=tt,i.pointShadowMatrix[p]=P.shadow.matrix,E++}i.point[p]=N,p++}else if(P.isHemisphereLight){let N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(Z),N.groundColor.copy(P.groundColor).multiplyScalar(Z),i.hemi[w]=N,w++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==b||D.rectAreaLength!==T||D.hemiLength!==w||D.numSunShadows!==_||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==g||D.numSpotMaps!==S||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=T,i.point.length=p,i.hemi.length=w,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+S-B,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=b,D.rectAreaLength=T,D.hemiLength=w,D.numSunShadows=_,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=g,D.numSpotMaps=S,D.numLightProbes=C,i.version=lg++)}function l(c,h){let d=0,u=0,f=0,_=0,v=0,m=0,p=h.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){let w=c[b];if(w.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(p),d++}else if(w.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(w.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(w.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function fh(n){let t=new hg(n),e=[],i=[],s=[];function r(d){h.camera=d,e.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){i.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ug(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new fh(n),t.set(s,[o])):r>=a.length?(o=new fh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pg=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],mg=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ph=new he,Os=new O,jo=new O;function gg(n,t,e){let i=new un,s=new Bt,r=new Bt,a=new ue,o=new Dr,l=new Nr,c={},h=e.maxTextureSize,d={[ji]:Be,[Be]:ji,[ai]:ai},u=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:dg,fragmentShader:fg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ze;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Je(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let p=this.type;this.render=function(E,g,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===oc&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);let B=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(pn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=p!==this.type;X&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=E.length;P<W;P++){let Z=E[P],H=Z.shadow;if(H===void 0){Ct("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let tt=H.getFrameExtents();s.multiply(tt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,H.mapSize.y=r.y));let N=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=N,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===$n){if(Z.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qe(s.x,s.y,{format:Qi,type:mi,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),H.map.texture.name=Z.name+".shadowMap",H.map.depthTexture=new Ii(s.x,s.y,pi),H.map.depthTexture.name=Z.name+".shadowMapDepth",H.map.depthTexture.format=Pi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ae,H.map.depthTexture.magFilter=Ae}else Z.isPointLight?(H.map=new zs(s.x),H.map.depthTexture=new Ss(s.x,fi)):(H.map=new qe(s.x,s.y),H.map.depthTexture=new Ii(s.x,s.y,fi)),H.map.depthTexture.name=Z.name+".shadowMap",H.map.depthTexture.format=Pi,this.type===Rs?(H.map.depthTexture.compareFunction=N?ko:zo,H.map.depthTexture.minFilter=Oe,H.map.depthTexture.magFilter=Oe):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ae,H.map.depthTexture.magFilter=Ae);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Z.isPointLight!==!0&&H.updateMatrices(Z,S);let V=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let ct=0;ct<j;ct++){let xt=H.getCamera(ct);if(Z.isPointLight){let $=H.camera,nt=H.matrix,yt=Z.distance||$.far;yt!==$.far&&($.far=yt,$.updateProjectionMatrix()),Os.setFromMatrixPosition(Z.matrixWorld),$.position.copy(Os),jo.copy($.position),jo.add(pg[ct]),$.up.copy(mg[ct]),$.lookAt(jo),$.updateMatrixWorld(),nt.makeTranslation(-Os.x,-Os.y,-Os.z),ph.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ph,$.coordinateSystem,$.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ct),n.clear();else{ct===0&&(n.setRenderTarget(H.map),n.clear());let $=H.getViewport(ct);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),k.viewport(a)}i=H.getFrustum(ct),w(g,S,xt,Z,V,this.type)}H.isPointLightShadow!==!0&&this.type===$n&&b(H,S),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(B,C,D)};function b(E,g){let S=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new qe(s.x,s.y,{format:Qi,type:mi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(g,null,S,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(g,null,S,f,v,null)}function T(E,g,S,B){let C=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=S.isPointLight===!0?l:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let k=C.uuid,X=g.uuid,P=c[k];P===void 0&&(P={},c[k]=P);let W=P[X];W===void 0&&(W=C.clone(),P[X]=W,g.addEventListener("dispose",A)),C=W}if(C.visible=g.visible,C.wireframe=g.wireframe,B===$n?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:d[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=n.properties.get(C);k.light=S}return C}function w(E,g,S,B,C,D){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===$n)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let P=t.update(E),W=E.material;if(Array.isArray(W)){let Z=P.groups;for(let H=0,tt=Z.length;H<tt;H++){let N=Z[H],j=W[N.materialIndex];if(j&&j.visible){let V=T(E,j,B,D);E.onBeforeShadow(n,E,g,S,P,V,N),n.renderBufferDirect(S,null,P,V,E,N),E.onAfterShadow(n,E,g,S,P,V,N)}}}else if(W.visible){let Z=T(E,W,B,D);E.onBeforeShadow(n,E,g,S,P,Z,null),n.renderBufferDirect(S,null,P,Z,E,null),E.onAfterShadow(n,E,g,S,P,Z,null)}}let X=E.children;for(let P=0,W=X.length;P<W;P++)w(X[P],g,S,B,C,D)}function A(E){E.target.removeEventListener("dispose",A);for(let S in c){let B=c[S],C=E.target.uuid;C in B&&(B[C].dispose(),delete B[C])}}}function _g(n,t){function e(){let R=!1,K=new ue,q=null,lt=new ue(0,0,0,0);return{setMask:function(st){q!==st&&!R&&(n.colorMask(st,st,st,st),q=st)},setLocked:function(st){R=st},setClear:function(st,at,Et,Gt,it){it===!0&&(st*=Gt,at*=Gt,Et*=Gt),K.set(st,at,Et,Gt),lt.equals(K)===!1&&(n.clearColor(st,at,Et,Gt),lt.copy(K))},reset:function(){R=!1,q=null,lt.set(-1,0,0,0)}}}function i(){let R=!1,K=!1,q=null,lt=null,st=null;return{setReversed:function(at){if(K!==at){let Et=t.get("EXT_clip_control");at?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),K=at;let Gt=st;st=null,this.setClear(Gt)}},getReversed:function(){return K},setTest:function(at){at?ft(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(at){q!==at&&!R&&(n.depthMask(at),q=at)},setFunc:function(at){if(K&&(at=Gc[at]),lt!==at){switch(at){case mr:n.depthFunc(n.NEVER);break;case gr:n.depthFunc(n.ALWAYS);break;case _r:n.depthFunc(n.LESS);break;case Fn:n.depthFunc(n.LEQUAL);break;case xr:n.depthFunc(n.EQUAL);break;case yr:n.depthFunc(n.GEQUAL);break;case vr:n.depthFunc(n.GREATER);break;case br:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=at}},setLocked:function(at){R=at},setClear:function(at){st!==at&&(st=at,K&&(at=1-at),n.clearDepth(at))},reset:function(){R=!1,q=null,lt=null,st=null,K=!1}}}function s(){let R=!1,K=null,q=null,lt=null,st=null,at=null,Et=null,Gt=null,it=null;return{setTest:function(Rt){R||(Rt?ft(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(Rt){K!==Rt&&!R&&(n.stencilMask(Rt),K=Rt)},setFunc:function(Rt,zt,mt){(q!==Rt||lt!==zt||st!==mt)&&(n.stencilFunc(Rt,zt,mt),q=Rt,lt=zt,st=mt)},setOp:function(Rt,zt,mt){(at!==Rt||Et!==zt||Gt!==mt)&&(n.stencilOp(Rt,zt,mt),at=Rt,Et=zt,Gt=mt)},setLocked:function(Rt){R=Rt},setClear:function(Rt){it!==Rt&&(n.clearStencil(Rt),it=Rt)},reset:function(){R=!1,K=null,q=null,lt=null,st=null,at=null,Et=null,Gt=null,it=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],v=null,m=!1,p=null,b=null,T=null,w=null,A=null,E=null,g=null,S=new Yt(0,0,0),B=0,C=!1,D=null,k=null,X=null,P=null,W=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=tt>=1):N.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=tt>=2);let j=null,V={},ct=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),$=new ue().fromArray(ct),nt=new ue().fromArray(xt);function yt(R,K,q,lt){let st=new Uint8Array(4),at=n.createTexture();n.bindTexture(R,at),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<q;Et++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(K+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return at}let At={};At[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(n.DEPTH_TEST),a.setFunc(Fn),_e(!1),ie(go),ft(n.CULL_FACE),pe(pn);function ft(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function Dt(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function le(R,K){return u[R]!==K?(n.bindFramebuffer(R,K),u[R]=K,R===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=K),R===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=K),!0):!1}function It(R,K){let q=_,lt=!1;if(R){q=f.get(K),q===void 0&&(q=[],f.set(K,q));let st=R.textures;if(q.length!==st.length||q[0]!==n.COLOR_ATTACHMENT0){for(let at=0,Et=st.length;at<Et;at++)q[at]=n.COLOR_ATTACHMENT0+at;q.length=st.length,lt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,lt=!0);lt&&n.drawBuffers(q)}function Wt(R){return v!==R?(n.useProgram(R),v=R,!0):!1}let Jt={[mn]:n.FUNC_ADD,[cc]:n.FUNC_SUBTRACT,[hc]:n.FUNC_REVERSE_SUBTRACT};Jt[uc]=n.MIN,Jt[dc]=n.MAX;let kt={[fc]:n.ZERO,[pc]:n.ONE,[mc]:n.SRC_COLOR,[vo]:n.SRC_ALPHA,[bc]:n.SRC_ALPHA_SATURATE,[yc]:n.DST_COLOR,[_c]:n.DST_ALPHA,[gc]:n.ONE_MINUS_SRC_COLOR,[bo]:n.ONE_MINUS_SRC_ALPHA,[vc]:n.ONE_MINUS_DST_COLOR,[xc]:n.ONE_MINUS_DST_ALPHA,[Sc]:n.CONSTANT_COLOR,[Mc]:n.ONE_MINUS_CONSTANT_COLOR,[wc]:n.CONSTANT_ALPHA,[Ec]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(R,K,q,lt,st,at,Et,Gt,it,Rt){if(R===pn){m===!0&&(Dt(n.BLEND),m=!1);return}if(m===!1&&(ft(n.BLEND),m=!0),R!==lc){if(R!==p||Rt!==C){if((b!==mn||A!==mn)&&(n.blendEquation(n.FUNC_ADD),b=mn,A=mn),Rt)switch(R){case Xn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _o:n.blendFunc(n.ONE,n.ONE);break;case xo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Nt("WebGLState: Invalid blending: ",R);break}else switch(R){case Xn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _o:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xo:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yo:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",R);break}T=null,w=null,E=null,g=null,S.set(0,0,0),B=0,p=R,C=Rt}return}st=st||K,at=at||q,Et=Et||lt,(K!==b||st!==A)&&(n.blendEquationSeparate(Jt[K],Jt[st]),b=K,A=st),(q!==T||lt!==w||at!==E||Et!==g)&&(n.blendFuncSeparate(kt[q],kt[lt],kt[at],kt[Et]),T=q,w=lt,E=at,g=Et),(Gt.equals(S)===!1||it!==B)&&(n.blendColor(Gt.r,Gt.g,Gt.b,it),S.copy(Gt),B=it),p=R,C=!1}function de(R,K){R.side===ai?Dt(n.CULL_FACE):ft(n.CULL_FACE);let q=R.side===Be;K&&(q=!q),_e(q),R.blending===Xn&&R.transparent===!1?pe(pn):pe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let lt=R.stencilWrite;o.setTest(lt),lt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),fe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(R){D!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),D=R)}function ie(R){R!==rc?(ft(n.CULL_FACE),R!==k&&(R===go?n.cullFace(n.BACK):R===ac?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),k=R}function Ne(R){R!==X&&(H&&n.lineWidth(R),X=R)}function fe(R,K,q){R?(ft(n.POLYGON_OFFSET_FILL),(P!==K||W!==q)&&(P=K,W=q,a.getReversed()&&(K=-K,q=-q),n.polygonOffset(K,q))):Dt(n.POLYGON_OFFSET_FILL)}function Qe(R){R?ft(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function ti(R){R===void 0&&(R=n.TEXTURE0+Z-1),j!==R&&(n.activeTexture(R),j=R)}function ei(R,K,q){q===void 0&&(j===null?q=n.TEXTURE0+Z-1:q=j);let lt=V[q];lt===void 0&&(lt={type:void 0,texture:void 0},V[q]=lt),(lt.type!==R||lt.texture!==K)&&(j!==q&&(n.activeTexture(q),j=q),n.bindTexture(R,K||At[R]),lt.type=R,lt.texture=K)}function L(){let R=V[j];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ii(){try{n.compressedTexImage2D(...arguments)}catch(R){Nt("WebGLState:",R)}}function ae(){try{n.compressedTexImage3D(...arguments)}catch(R){Nt("WebGLState:",R)}}function oe(){try{n.texSubImage2D(...arguments)}catch(R){Nt("WebGLState:",R)}}function pt(){try{n.texSubImage3D(...arguments)}catch(R){Nt("WebGLState:",R)}}function xe(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Nt("WebGLState:",R)}}function Pt(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Nt("WebGLState:",R)}}function Ft(){try{n.texStorage2D(...arguments)}catch(R){Nt("WebGLState:",R)}}function M(){try{n.texStorage3D(...arguments)}catch(R){Nt("WebGLState:",R)}}function x(){try{n.texImage2D(...arguments)}catch(R){Nt("WebGLState:",R)}}function F(){try{n.texImage3D(...arguments)}catch(R){Nt("WebGLState:",R)}}function et(R){return d[R]!==void 0?d[R]:n.getParameter(R)}function Q(R,K){d[R]!==K&&(n.pixelStorei(R,K),d[R]=K)}function rt(R){$.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),$.copy(R))}function ut(R){nt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),nt.copy(R))}function Y(R,K){let q=c.get(K);q===void 0&&(q=new WeakMap,c.set(K,q));let lt=q.get(R);lt===void 0&&(lt=n.getUniformBlockIndex(K,R.name),n.uniformBlockBinding(K,lt,lt),q.set(R,lt))}function J(R,K,q){let st=c.get(K).get(R);l[st]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,st,q),l[st]=q)}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,V={},u={},l={},f=new WeakMap,_=[],v=null,m=!1,p=null,b=null,T=null,w=null,A=null,E=null,g=null,S=new Yt(0,0,0),B=0,C=!1,D=null,k=null,X=null,P=null,W=null,$.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:Dt,bindFramebuffer:le,drawBuffers:It,useProgram:Wt,setBlending:pe,setMaterial:de,setFlipSided:_e,setCullFace:ie,setLineWidth:Ne,setPolygonOffset:fe,setScissorTest:Qe,activeTexture:ti,bindTexture:ei,unbindTexture:L,compressedTexImage2D:ii,compressedTexImage3D:ae,texImage2D:x,texImage3D:F,pixelStorei:Q,getParameter:et,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Ft,texStorage3D:M,texSubImage2D:oe,texSubImage3D:pt,compressedTexSubImage2D:xe,compressedTexSubImage3D:Pt,scissor:rt,viewport:ut,reset:ot}}function xg(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,d=new Set,u,f=new WeakMap,_=new Set,v=new FinalizationRegistry(M=>_.delete(M)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(M,x){return m?new OffscreenCanvas(M,x):ds("canvas")}function b(M,x,F){let et=1,Q=Ft(M);if((Q.width>F||Q.height>F)&&(et=F/Math.max(Q.width,Q.height)),et<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let rt=Math.floor(et*Q.width),ut=Math.floor(et*Q.height);u===void 0&&(u=p(rt,ut));let Y=x?p(rt,ut):u;return Y.width=rt,Y.height=ut,Y.getContext("2d").drawImage(M,0,0,rt,ut),Ct("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+rt+"x"+ut+")."),Y}else return"data"in M&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function T(M){return M.generateMipmaps}function w(M){n.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,x,F,et,Q,rt=!1){if(M!==null){if(n[M]!==void 0)return n[M];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ut;et&&(ut=t.get("EXT_texture_norm16"),ut||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8),F===n.UNSIGNED_SHORT&&ut&&(Y=ut.R16_EXT),F===n.SHORT&&ut&&(Y=ut.R16_SNORM_EXT)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),x===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8),F===n.UNSIGNED_SHORT&&ut&&(Y=ut.RG16_EXT),F===n.SHORT&&ut&&(Y=ut.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_SHORT&&ut&&(Y=ut.RGB16_EXT),F===n.SHORT&&ut&&(Y=ut.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){let J=rt?hs:qt.getTransfer(Q);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=J===te?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&ut&&(Y=ut.RGBA16_EXT),F===n.SHORT&&ut&&(Y=ut.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(M,x){let F;return M?x===null||x===fi||x===_n?F=n.DEPTH24_STENCIL8:x===pi?F=n.DEPTH32F_STENCIL8:x===Yn&&(F=n.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fi||x===_n?F=n.DEPTH_COMPONENT24:x===pi?F=n.DEPTH_COMPONENT32F:x===Yn&&(F=n.DEPTH_COMPONENT16),F}function S(M,x){return T(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ae&&M.minFilter!==Oe?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function B(M){let x=new WeakRef(M);i.get(M).__ref=x,_.add(x),v.register(M,x,x)}function C(M){let x=i.get(M).__ref;x!==void 0&&(_.delete(x),v.unregister(x))}function D(M){X(M.target)}function k(M){P(M.target)}function X(M){M.removeEventListener("dispose",D),C(M),Z(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function P(M){M.removeEventListener("dispose",k),C(M),tt(M)}function W(){for(let M of _){let x=M.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):X(x))}_.clear(),d.clear()}function Z(M){let x=i.get(M);if(x.__webglInit===void 0)return;let F=M.source,et=f.get(F);if(et){let Q=et[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&H(M),Object.keys(et).length===0&&f.delete(F)}i.remove(M)}function H(M){let x=i.get(M);n.deleteTexture(x.__webglTexture);let F=M.source,et=f.get(F);delete et[x.__cacheKey],a.memory.textures--}function tt(M){let x=i.get(M);x.__depthDisposeCallback&&x.__depthDisposeCallback();let F=M.depthTexture;if(F&&F.renderTarget===M&&X(F),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let rt=0;rt<x.__webglFramebuffer[Q].length;rt++)n.deleteFramebuffer(x.__webglFramebuffer[Q][rt]);else n.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[Q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let et=M.textures;for(let Q=0,rt=et.length;Q<rt;Q++){let ut=i.get(et[Q]);ut.__webglTexture&&(n.deleteTexture(ut.__webglTexture),a.memory.textures--),i.remove(et[Q])}i.remove(M)}let N=0;function j(){N=0}function V(){return N}function ct(M){N=M}function xt(){let M=N;return M>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,M}function $(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.mipmapsAutoUpdate),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function nt(M,x){let F=i.get(M);if(M.isVideoTexture&&xe(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){let et=M.image;if(et===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{de(F,M,x);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function yt(M,x){let F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){de(F,M,x);return}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function At(M,x){let F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){de(F,M,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function ft(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){_e(F,M,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}let Dt={[Sr]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Mr]:n.MIRRORED_REPEAT},le={[Ae]:n.NEAREST,[Rc]:n.NEAREST_MIPMAP_NEAREST,[Cs]:n.NEAREST_MIPMAP_LINEAR,[Oe]:n.LINEAR,[Zr]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},It={[Lc]:n.NEVER,[Go]:n.ALWAYS,[Dc]:n.LESS,[zo]:n.LEQUAL,[Nc]:n.EQUAL,[ko]:n.GEQUAL,[Uc]:n.GREATER,[Fc]:n.NOTEQUAL};function Wt(M,x){if(x.type===pi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Oe||x.magFilter===Zr||x.magFilter===Cs||x.magFilter===Li||x.minFilter===Oe||x.minFilter===Zr||x.minFilter===Cs||x.minFilter===Li)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Dt[x.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Dt[x.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Dt[x.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,le[x.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,It[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ae||x.minFilter!==Cs&&x.minFilter!==Li||x.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Jt(M,x){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",D),B(x));let et=x.source,Q=f.get(et);Q===void 0&&(Q={},f.set(et,Q));let rt=$(x);if(rt!==M.__cacheKey){Q[rt]===void 0&&(Q[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Q[rt].usedTimes++;let ut=Q[M.__cacheKey];ut!==void 0&&(Q[M.__cacheKey].usedTimes--,ut.usedTimes===0&&H(x)),M.__cacheKey=rt,M.__webglTexture=Q[rt].texture}return F}function kt(M,x,F){return Math.floor(Math.floor(M/F)/x)}function pe(M,x,F,et){let rt=M.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,et,x.data);else{rt.sort((R,K)=>R.start-K.start);let ut=0;for(let R=1;R<rt.length;R++){let K=rt[ut],q=rt[R],lt=K.start+K.count,st=kt(q.start,x.width,4),at=kt(K.start,x.width,4);q.start<=lt+1&&st===at&&kt(q.start+q.count-1,x.width,4)===st?K.count=Math.max(K.count,q.start+q.count-K.start):(++ut,rt[ut]=q)}rt.length=ut+1;let Y=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let R=0,K=rt.length;R<K;R++){let q=rt[R],lt=Math.floor(q.start/4),st=Math.ceil(q.count/4),at=lt%x.width,Et=Math.floor(lt/x.width),Gt=st,it=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(n.TEXTURE_2D,0,at,Et,Gt,it,F,et,x.data)}M.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function de(M,x,F){let et=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=n.TEXTURE_3D);let Q=Jt(M,x),rt=x.source;e.bindTexture(et,M.__webglTexture,n.TEXTURE0+F);let ut=i.get(rt);if(rt.version!==ut.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let it=qt.getPrimaries(qt.workingColorSpace),Rt=x.colorSpace===Ni?null:qt.getPrimaries(x.colorSpace),zt=x.colorSpace===Ni||it===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let J=b(x.image,!1,s.maxTextureSize);J=Pt(x,J);let ot=r.convert(x.format,x.colorSpace),R=r.convert(x.type),K=E(x.internalFormat,ot,R,x.normalized,x.colorSpace,x.isVideoTexture);Wt(et,x);let q,lt=x.mipmaps,st=x.isVideoTexture!==!0,at=ut.__version===void 0||Q===!0,Et=rt.dataReady,Gt=S(x,J);if(x.isDepthTexture)K=g(x.format===Di,x.type),at&&(st?e.texStorage2D(n.TEXTURE_2D,1,K,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,ot,R,null));else if(x.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(n.TEXTURE_2D,Gt,K,lt[0].width,lt[0].height);for(let it=0,Rt=lt.length;it<Rt;it++)q=lt[it],st?Et&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,q.width,q.height,ot,R,q.data):e.texImage2D(n.TEXTURE_2D,it,K,q.width,q.height,0,ot,R,q.data);x.generateMipmaps=!1}else st?(at&&e.texStorage2D(n.TEXTURE_2D,Gt,K,J.width,J.height),Et&&pe(x,J,ot,R)):e.texImage2D(n.TEXTURE_2D,0,K,J.width,J.height,0,ot,R,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&at&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Gt,K,lt[0].width,lt[0].height,J.depth);for(let it=0,Rt=lt.length;it<Rt;it++)if(q=lt[it],x.format!==gi)if(ot!==null)if(st){if(Et)if(x.layerUpdates.size>0){let zt=Jo(q.width,q.height,x.format,x.type);for(let mt of x.layerUpdates){let ee=q.data.subarray(mt*zt/q.data.BYTES_PER_ELEMENT,(mt+1)*zt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,mt,q.width,q.height,1,ot,ee)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ot,q.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,K,q.width,q.height,J.depth,0,q.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ot,R,q.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,K,q.width,q.height,J.depth,0,ot,R,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{st&&at&&e.texStorage2D(n.TEXTURE_2D,Gt,K,lt[0].width,lt[0].height);for(let it=0,Rt=lt.length;it<Rt;it++)q=lt[it],x.format!==gi?ot!==null?st?Et&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,q.width,q.height,ot,q.data):e.compressedTexImage2D(n.TEXTURE_2D,it,K,q.width,q.height,0,q.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Et&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,q.width,q.height,ot,R,q.data):e.texImage2D(n.TEXTURE_2D,it,K,q.width,q.height,0,ot,R,q.data)}else if(x.isDataArrayTexture)if(st){if(at&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Gt,K,J.width,J.height,J.depth),Et)if(x.layerUpdates.size>0){let it=Jo(J.width,J.height,x.format,x.type);for(let Rt of x.layerUpdates){let zt=J.data.subarray(Rt*it/J.data.BYTES_PER_ELEMENT,(Rt+1)*it/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Rt,J.width,J.height,1,ot,R,zt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,R,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,ot,R,J.data);else if(x.isData3DTexture)st?(at&&e.texStorage3D(n.TEXTURE_3D,Gt,K,J.width,J.height,J.depth),Et&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,R,J.data)):e.texImage3D(n.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,ot,R,J.data);else if(x.isFramebufferTexture){if(at)if(st)e.texStorage2D(n.TEXTURE_2D,Gt,K,J.width,J.height);else{let it=J.width,Rt=J.height;for(let zt=0;zt<Gt;zt++)e.texImage2D(n.TEXTURE_2D,zt,K,it,Rt,0,ot,R,null),it>>=1,Rt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let it=n.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),J.parentNode!==it){it.appendChild(J),d.add(x),it.onpaint=Rt=>{let zt=Rt.changedElements;for(let mt of d)zt.includes(mt.image)&&(mt.needsUpdate=!0)},it.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let zt=n.RGBA,mt=n.RGBA,ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,zt,mt,ee,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){let it=Ft(lt[0]);e.texStorage2D(n.TEXTURE_2D,Gt,K,it.width,it.height)}for(let it=0,Rt=lt.length;it<Rt;it++)q=lt[it],st?Et&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ot,R,q):e.texImage2D(n.TEXTURE_2D,it,K,ot,R,q);x.generateMipmaps=!1}else if(st){if(at){let it=Ft(J);e.texStorage2D(n.TEXTURE_2D,Gt,K,it.width,it.height)}Et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,R,J)}else e.texImage2D(n.TEXTURE_2D,0,K,ot,R,J);T(x)&&x.mipmapsAutoUpdate===!0&&w(et),ut.__version=rt.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _e(M,x,F){if(x.image.length!==6)return;let et=Jt(M,x),Q=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+F);let rt=i.get(Q);if(Q.version!==rt.__version||et===!0){e.activeTexture(n.TEXTURE0+F);let ut=qt.getPrimaries(qt.workingColorSpace),Y=x.colorSpace===Ni?null:qt.getPrimaries(x.colorSpace),J=x.colorSpace===Ni||ut===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ot=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,K=[];for(let mt=0;mt<6;mt++)!ot&&!R?K[mt]=b(x.image[mt],!0,s.maxCubemapSize):K[mt]=R?x.image[mt].image:x.image[mt],K[mt]=Pt(x,K[mt]);let q=K[0],lt=r.convert(x.format,x.colorSpace),st=r.convert(x.type),at=E(x.internalFormat,lt,st,x.normalized,x.colorSpace),Et=x.isVideoTexture!==!0,Gt=rt.__version===void 0||et===!0,it=Q.dataReady,Rt=S(x,q);Wt(n.TEXTURE_CUBE_MAP,x);let zt;if(x.isDepthTexture){if(at=g(x.format===Di,x.type),Gt)if(Et)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,at,q.width,q.height);else for(let mt=0;mt<6;mt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,at,q.width,q.height,0,lt,st,null)}else if(ot){Et&&Gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,at,q.width,q.height);for(let mt=0;mt<6;mt++){zt=K[mt].mipmaps;for(let ee=0;ee<zt.length;ee++){let we=zt[ee];x.format!==gi?lt!==null?Et?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee,0,0,we.width,we.height,lt,we.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee,at,we.width,we.height,0,we.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee,0,0,we.width,we.height,lt,st,we.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee,at,we.width,we.height,0,lt,st,we.data)}}}else{if(zt=x.mipmaps,Et&&Gt){zt.length>0&&Rt++;let mt=Ft(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,at,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(R){Et?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,K[mt].width,K[mt].height,lt,st,K[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,at,K[mt].width,K[mt].height,0,lt,st,K[mt].data);for(let ee=0;ee<zt.length;ee++){let Ui=zt[ee].image[mt].image;Et?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee+1,0,0,Ui.width,Ui.height,lt,st,Ui.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee+1,at,Ui.width,Ui.height,0,lt,st,Ui.data)}}else{Et?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,lt,st,K[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,at,lt,st,K[mt]);for(let ee=0;ee<zt.length;ee++){let we=zt[ee];Et?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee+1,0,0,lt,st,we.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ee+1,at,lt,st,we.image[mt])}}}T(x)&&x.mipmapsAutoUpdate===!0&&w(n.TEXTURE_CUBE_MAP),rt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function ie(M,x,F,et,Q,rt){let ut=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),J=E(F.internalFormat,ut,Y,F.normalized,F.colorSpace),ot=i.get(x),R=i.get(F);if(R.__renderTarget=x,!ot.__hasExternalTextures){let K=Math.max(1,x.width>>rt),q=Math.max(1,x.height>>rt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,rt,J,K,q,x.depth,0,ut,Y,null):e.texImage2D(Q,rt,J,K,q,0,ut,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Q,R.__webglTexture,0,oe(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Q,R.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(M,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,M),x.depthBuffer){let et=x.depthTexture,Q=et&&et.isDepthTexture?et.type:null,rt=g(x.stencilBuffer,Q),ut=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(x),rt,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(x),rt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,rt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,M)}else{let et=x.textures;for(let Q=0;Q<et.length;Q++){let rt=et[Q],ut=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),J=E(rt.internalFormat,ut,Y,rt.normalized,rt.colorSpace);pt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(x),J,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(x),J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(M,x,F){let et=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(x.depthTexture);Q.__renderTarget=x;let rt=et?x.depthTexture.image[0]:x.depthTexture.image;(!Q.__webglTexture||rt.width!==x.width||rt.height!==x.height)&&(rt.width=x.width,rt.height=x.height,x.depthTexture.needsUpdate=!0),et?ft(x.depthTexture,0):nt(x.depthTexture,0);let ut=Q.__webglTexture,Y=oe(x),J=et?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,ot=x.depthTexture.format===Di?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Pi)pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,J,ut,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,ot,J,ut,0);else if(x.depthTexture.format===Di)pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,J,ut,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,ot,J,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(M){let x=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let et=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",Q)};et.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=et}if(M.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let et=0;et<6;et++)fe(x.__webglFramebuffer[et],M,et);else M.texture.mipmaps.length>0?fe(x.__webglFramebuffer[0],M,0):fe(x.__webglFramebuffer,M,0);else if(F){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=n.createRenderbuffer(),Ne(x.__webglDepthbuffer[et],M,!1);else{let Q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[et];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,rt)}}else if(M.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ne(x.__webglDepthbuffer,M,!1);else{let Q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ti(M,x,F){let et=i.get(M);x!==void 0&&ie(et.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Qe(M)}function ei(M){let x=M.texture,F=i.get(M),et=i.get(x);M.addEventListener("dispose",k),B(M);let Q=M.textures,rt=M.isWebGLCubeRenderTarget===!0,ut=Q.length>1;if(ut||(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=x.version,a.memory.textures++),rt){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let J=0;J<x.mipmaps.length;J++)F.__webglFramebuffer[Y][J]=n.createFramebuffer()}else F.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)F.__webglFramebuffer[Y]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ut)for(let Y=0,J=Q.length;Y<J;Y++){let ot=i.get(Q[Y]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&pt(M)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){let J=Q[Y];F.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let ot=r.convert(J.format,J.colorSpace),R=r.convert(J.type),K=E(J.internalFormat,ot,R,J.normalized,J.colorSpace,M.isXRRenderTarget===!0),q=oe(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,K,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(F.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),Wt(n.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ie(F.__webglFramebuffer[Y][J],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else ie(F.__webglFramebuffer[Y],M,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);T(x)?w(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let Y=0,J=Q.length;Y<J;Y++){let ot=Q[Y],R=i.get(ot),K=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(K=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,R.__webglTexture),Wt(K,ot),ie(F.__webglFramebuffer,M,ot,n.COLOR_ATTACHMENT0+Y,K,0),T(ot)&&w(K)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Y=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,et.__webglTexture),Wt(Y,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ie(F.__webglFramebuffer[J],M,x,n.COLOR_ATTACHMENT0,Y,J);else ie(F.__webglFramebuffer,M,x,n.COLOR_ATTACHMENT0,Y,0);T(x)?w(Y):x.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}M.depthBuffer&&Qe(M)}function L(M){let x=M.textures;for(let F=0,et=x.length;F<et;F++){let Q=x[F];if(T(Q)&&Q.mipmapsAutoUpdate===!0){let rt=A(M),ut=i.get(Q).__webglTexture;e.bindTexture(rt,ut),w(rt),e.unbindTexture()}}}let ii=[];function ae(M){if(M.samples>0){if(pt(M)===!1){let x=M.textures,F=M.width,et=M.height,Q=n.COLOR_BUFFER_BIT,rt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(M),Y=x.length>1;if(Y)for(let ot=0;ot<x.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ot=0;ot<x.length;ot++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);let R=i.get(x[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,F,et,0,0,F,et,Q,n.NEAREST),l===!0&&(ii.length=0,ii.push(n.COLOR_ATTACHMENT0+ot),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&ii.push(rt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ii))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ot=0;ot<x.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);let R=i.get(x[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,R,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let x=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function oe(M){return Math.min(s.maxSamples,M.samples)}function pt(M){let x=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xe(M){let x=a.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function Pt(M,x){let F=M.colorSpace,et=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==cs&&F!==Ni&&(qt.getTransfer(F)===te?(et!==gi||Q!==je)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",F)),x}function Ft(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=xt,this.resetTextureUnits=j,this.getTextureUnits=V,this.setTextureUnits=ct,this.setTexture2D=nt,this.setTexture2DArray=yt,this.setTexture3D=At,this.setTextureCube=ft,this.rebindTextures=ti,this.setupRenderTarget=ei,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=pt,this.dispose=W}function yg(n,t){function e(i,s=Ni){let r,a=qt.getTransfer(s);if(i===je)return n.UNSIGNED_BYTE;if(i===Kr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Do)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===No)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Io)return n.BYTE;if(i===Lo)return n.SHORT;if(i===Yn)return n.UNSIGNED_SHORT;if(i===Jr)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===Uo)return n.ALPHA;if(i===Fo)return n.RGB;if(i===gi)return n.RGBA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Di)return n.DEPTH_STENCIL;if(i===Oo)return n.RED;if(i===Qr)return n.RED_INTEGER;if(i===Qi)return n.RG;if(i===ta)return n.RG_INTEGER;if(i===ea)return n.RGBA_INTEGER;if(i===Ps||i===Is||i===Ls||i===Ds)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ia||i===na||i===sa||i===ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===aa||i===oa||i===la||i===ca||i===ha||i===Ns||i===ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===aa||i===oa)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===la)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ca)return r.COMPRESSED_R11_EAC;if(i===ha)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ns)return r.COMPRESSED_RG11_EAC;if(i===ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===da||i===fa||i===pa||i===ma||i===ga||i===_a||i===xa||i===ya||i===va||i===ba||i===Sa||i===Ma||i===wa||i===Ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ga)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_a)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ea)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ta||i===Aa||i===Ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ta)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ca||i===Pa||i===Us||i===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Us)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_n?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ms(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ri({vertexShader:vg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends di{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null,v=typeof XRWebGLBinding<"u",m=new rl,p={},b=e.getContextAttributes(),T=null,w=null,A=[],E=[],g=new Bt,S=null,B=null,C=new Fe;C.viewport=new ue;let D=new Fe;D.viewport=new ue;let k=[C,D],X=new Xr,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=A[$];return nt===void 0&&(nt=new kn,A[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=A[$];return nt===void 0&&(nt=new kn,A[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=A[$];return nt===void 0&&(nt=new kn,A[$]=nt),nt.getHandSpace()};function Z($){let nt=E.indexOf($.inputSource);if(nt===-1)return;let yt=A[nt];yt!==void 0&&(yt.update($.inputSource,$.frame,c||a),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",tt);for(let $=0;$<A.length;$++){let nt=E[$];nt!==null&&(E[$]=null,A[$].disconnect(nt))}P=null,W=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(T),f=null,u=null,d=null,s=null,w=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),B!==null){let $=B.camera;$.fov=B.fov,$.zoom=B.zoom,$.updateProjectionMatrix(),B=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",tt),b.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,ft=null;b.depth&&(ft=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=b.stencil?Di:Pi,At=b.stencil?_n:fi);let Dt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new qe(u.textureWidth,u.textureHeight,{format:gi,type:je,depthTexture:new Ii(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new qe(f.framebufferWidth,f.framebufferHeight,{format:gi,type:je,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),xt.setContext(s),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt($){for(let nt=0;nt<$.removed.length;nt++){let yt=$.removed[nt],At=E.indexOf(yt);At>=0&&(E[At]=null,A[At].disconnect(yt))}for(let nt=0;nt<$.added.length;nt++){let yt=$.added[nt],At=E.indexOf(yt);if(At===-1){for(let Dt=0;Dt<A.length;Dt++)if(Dt>=E.length){E.push(yt),At=Dt;break}else if(E[Dt]===null){E[Dt]=yt,At=Dt;break}if(At===-1)break}let ft=A[At];ft&&ft.connect(yt)}}function N($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,yt=$.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),X.near=D.near=C.near=nt,X.far=D.far=C.far=yt,(P!==X.near||W!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,W=X.far),X.layers.mask=$.layers.mask|6,C.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let At=$.parent,ft=X.cameras;N(X,At);for(let Dt=0;Dt<ft.length;Dt++)N(ft[Dt],At);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),B===null&&$.isPerspectiveCamera&&(B={camera:$,fov:$.fov,zoom:$.zoom}),j($,X,At)};function j($,nt,yt){yt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Bn*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function($){return p[$]};let V=null;function ct($,nt){if(h=nt.getViewerPose(c||a),_=nt,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let At=!1;yt.length!==X.cameras.length&&(X.cameras.length=0,At=!0);for(let It=0;It<yt.length;It++){let Wt=yt[It],Jt=null;if(f!==null)Jt=f.getViewport(Wt);else{let pe=d.getViewSubImage(u,Wt);Jt=pe.viewport,It===0&&(t.setRenderTargetTextures(w,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(w))}let kt=k[It];kt===void 0&&(kt=new Fe,kt.layers.enable(It),kt.viewport=new ue,k[It]=kt),kt.matrix.fromArray(Wt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Wt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),It===0&&(X.matrix.copy(kt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),At===!0&&X.cameras.push(kt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let It=d.getDepthInformation(yt[0]);It&&It.isValid&&It.texture&&m.init(It,s.renderState)}if(ft&&ft.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let It=0;It<yt.length;It++){let Wt=yt[It].camera;if(Wt){let Jt=p[Wt];Jt||(Jt=new Ms,p[Wt]=Jt);let kt=d.getCameraImage(Wt);Jt.sourceTexture=kt}}}}for(let yt=0;yt<A.length;yt++){let At=E[yt],ft=A[yt];At!==null&&ft!==void 0&&ft.update(At,nt,c||a)}V&&V($,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),_=null}let xt=new mh;xt.setAnimationLoop(ct),this.setAnimationLoop=function($){V=$},this.dispose=function(){}}},Sg=new he,Eh=new Ut;Eh.set(-1,0,0,0,1,0,0,0,1);function Mg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qo(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,T,w){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),T=b.envMap,w=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(w)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wg(n,t,e,i){let s={},r={};function a(b,T){let w=T.program;i.uniformBlockBinding(b,w,s[b.id])}function o(b,T){let w=s[b.id];w===void 0&&(_(b),w=l(b),s[b.id]=w,b.addEventListener("dispose",m));let A=T.program;i.updateUBOMapping(b,A);let E=t.render.frame;r[b.id]!==E&&(c(b),r[b.id]=E)}function l(b){let T=n.createBuffer(),w=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(b){let T=s[b.id],w=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,g=w.length;E<g;E++){let S=w[E];if(Array.isArray(S))for(let B=0,C=S.length;B<C;B++)h(S[B],E,B,A);else h(S,E,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,T,w,A){if(u(b,T,w,A)===!0){let E=b.__offset,g=b.value;if(Array.isArray(g)){let S=0;for(let B=0;B<g.length;B++){let C=g[B],D=v(C,!0);d(C,b.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,b.__data)}}function d(b,T,w){typeof b=="number"||typeof b=="boolean"?T[w]=b:b.isMatrix3?(T[w]=b.elements[0],T[w+1]=b.elements[1],T[w+2]=b.elements[2],T[w+3]=0,T[w+4]=b.elements[3],T[w+5]=b.elements[4],T[w+6]=b.elements[5],T[w+7]=0,T[w+8]=b.elements[6],T[w+9]=b.elements[7],T[w+10]=b.elements[8],T[w+11]=0):ArrayBuffer.isView(b)?T.set(b.subarray(0,T.length-w),w):b.toArray(T,w)}function u(b,T,w,A){let E=b.value,g=T+"_"+w;if(Array.isArray(E)){A[g]===void 0&&(A[g]=[]);let S=A[g],B=!1;for(let C=0;C<E.length;C++)f(E[C],S,C)===!0&&(B=!0);return B}return f(E,A,g)}function f(b,T,w){if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:ArrayBuffer.isView(b)?T[w]=b.slice():T[w]=b.clone(),!0;{let A=T[w];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return T[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function _(b){let T=b.uniforms,w=0,A=16;for(let g=0,S=T.length;g<S;g++){let B=Array.isArray(T[g])?T[g]:[T[g]];for(let C=0,D=B.length;C<D;C++){let k=B[C],X=Array.isArray(k.value)?k.value:[k.value],P=Array.isArray(T[g])||Array.isArray(k.value),W=w;for(let H=0,tt=X.length;H<tt;H++){let N=X[H],j=v(N,P),V=w%A,ct=V%j.boundary,xt=V+ct;w+=ct,xt!==0&&A-xt<j.storage&&(w+=A-xt),H===0&&(W=w),w+=j.storage}let Z=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Z((w-W)/Float32Array.BYTES_PER_ELEMENT),k.__offset=W}}let E=w%A;return E>0&&(w+=A-E),b.__size=w,b.__cache={},this}function v(b,T){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=16,w.storage=48):b.isMatrix4?(w.boundary=16,w.storage=64):b.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",b),T===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(b){let T=b.target;T.removeEventListener("dispose",m),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:p}}var Eg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function Tg(){return vi===null&&(vi=new Rr(Eg,16,16,Qi,mi),vi.name="DFG_LUT",vi.minFilter=Oe,vi.magFilter=Oe,vi.wrapS=xi,vi.wrapT=xi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Ua=class{constructor(t={}){let{canvas:e=Bc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=je}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let v=f,m=new Set([ea,ta,Qr]),p=new Set([je,fi,Yn,_n,Kr,jr]),b=new Uint32Array(4),T=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},A=null,E=null,g=[],S=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,k=null,X=null,P=null,W=null;this._outputColorSpace=We;let Z=0,H=0,tt=null,N=-1,j=null,V=new ue,ct=new ue,xt=null,$=new Yt(0),nt=0,yt=e.width,At=e.height,ft=1,Dt=null,le=null,It=new ue(0,0,yt,At),Wt=new ue(0,0,yt,At),Jt=!1,kt=new un,pe=new Cr,de=!1,_e=!1,ie=new he,Ne=new O,fe=new ue,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ti=!1;function ei(){return tt===null?ft:1}let L=i;function ii(y,I){return e.getContext(y,I)}let ae,oe,pt,xe,Pt,Ft,M,x,F,et,Q,rt,ut,Y,J,ot,R,K,q,lt,st,at,Et;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),L===null){let I="webgl2";if(L=ii(I,y),L===null)throw ii(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(y){throw e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Nt("WebGLRenderer: "+y.message),y}function Gt(){ae=new Op(L),ae.init(),st=new yg(L,ae),oe=new Tp(L,ae,t,st),pt=new _g(L,ae),oe.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),X=L.createFramebuffer(),P=L.createFramebuffer(),W=L.createFramebuffer(),xe=new kp(L),Pt=new ng,Ft=new xg(L,ae,pt,Pt,oe,st,xe),M=new Fp(C),x=new Gu(L),at=new wp(L,x),F=new Bp(L,x,xe,at),et=new Hp(L,F,x,at,xe),K=new Gp(L,oe,Ft),J=new Ap(Pt),Q=new ig(C,M,ae,oe,at,J),rt=new Mg(C,Pt),ut=new rg,Y=new ug(ae),R=new Mp(C,M,pt,et,_,l),ot=new gg(C,et,oe),Et=new wg(L,xe,oe,pt),q=new Ep(L,ae,xe),lt=new zp(L,ae,xe),xe.programs=Q.programs,C.capabilities=oe,C.extensions=ae,C.properties=Pt,C.renderLists=ut,C.shadowMap=ot,C.state=pt,C.info=xe}v!==je&&(B=new Wp(v,e.width,e.height,o,s,r));let it=new al(C,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=ae.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ae.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(y){y!==void 0&&(ft=y,this.setSize(yt,At,!1))},this.getSize=function(y){return y.set(yt,At)},this.setSize=function(y,I,G=!0){if(it.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=y,At=I,e.width=Math.floor(y*ft),e.height=Math.floor(I*ft),G===!0&&(e.style.width=y+"px",e.style.height=I+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(yt*ft,At*ft).floor()},this.setDrawingBufferSize=function(y,I,G){yt=y,At=I,ft=G,e.width=Math.floor(y*G),e.height=Math.floor(I*G),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(v===je){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(V)},this.getViewport=function(y){return y.copy(It)},this.setViewport=function(y,I,G,U){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,I,G,U),pt.viewport(V.copy(It).multiplyScalar(ei()).round())},this.getScissor=function(y){return y.copy(Wt)},this.setScissor=function(y,I,G,U){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,I,G,U),pt.scissor(ct.copy(Wt).multiplyScalar(ei()).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(y){pt.setScissorTest(Jt=y)},this.setOpaqueSort=function(y){Dt=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,G=!0){let U=0;if(y){let z=!1;if(tt!==null){let dt=tt.texture.format;z=m.has(dt)}if(z){let dt=tt.texture.type,vt=p.has(dt),ht=R.getClearColor(),_t=R.getClearAlpha(),wt=ht.r,Ot=ht.g,$t=ht.b;vt?(b[0]=wt,b[1]=Ot,b[2]=$t,b[3]=_t,L.clearBufferuiv(L.COLOR,0,b)):(T[0]=wt,T[1]=Ot,T[2]=$t,T[3]=_t,L.clearBufferiv(L.COLOR,0,T))}else U|=L.COLOR_BUFFER_BIT}I&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),R.dispose(),ut.dispose(),Y.dispose(),Ft.dispose(),Pt.dispose(),M.dispose(),et.dispose(),F.dispose(),at.dispose(),Et.dispose(),Q.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ml),it.removeEventListener("sessionend",wl),en.stop()};function Rt(y){y.preventDefault(),Vo("WebGLRenderer: Context Lost."),D=!0}function zt(){Vo("WebGLRenderer: Context Restored."),D=!1;let y=xe.autoReset,I=ot.enabled,G=ot.autoUpdate,U=ot.needsUpdate,z=ot.type;Gt(),xe.autoReset=y,ot.enabled=I,ot.autoUpdate=G,ot.needsUpdate=U,ot.type=z}function mt(y){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ee(y){let I=y.target;I.removeEventListener("dispose",ee),we(I)}function we(y){Ui(y),Pt.remove(y)}function Ui(y){let I=Pt.get(y).programs;I!==void 0&&(I.forEach(function(G){Q.releaseProgram(G)}),y.isShaderMaterial&&Q.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,G,U,z,dt){I===null&&(I=Qe);let vt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ht=Hh(y,I,G,U,z);pt.setMaterial(U,vt);let _t=G.index,wt=1;if(U.wireframe===!0){if(_t=F.getWireframeAttribute(G),_t===void 0)return;wt=2}let Ot=G.drawRange,$t=G.attributes.position,bt=Ot.start*wt,Xt=(Ot.start+Ot.count)*wt;dt!==null&&(bt=Math.max(bt,dt.start*wt),Xt=Math.min(Xt,(dt.start+dt.count)*wt)),_t!==null?(bt=Math.max(bt,0),Xt=Math.min(Xt,_t.count)):$t!=null&&(bt=Math.max(bt,0),Xt=Math.min(Xt,$t.count));let me=Xt-bt;if(me<0||me===1/0)return;at.setup(z,U,ht,G,_t);let se,ne=q;if(_t!==null&&(se=x.get(_t),ne=lt,ne.setIndex(se)),z.isMesh)U.wireframe===!0?(pt.setLineWidth(U.wireframeLinewidth*ei()),ne.setMode(L.LINES)):ne.setMode(L.TRIANGLES);else if(z.isLine){let Ce=U.linewidth;Ce===void 0&&(Ce=1),pt.setLineWidth(Ce*ei()),z.isLineSegments?ne.setMode(L.LINES):z.isLineLoop?ne.setMode(L.LINE_LOOP):ne.setMode(L.LINE_STRIP)}else z.isPoints?ne.setMode(L.POINTS):z.isSprite&&ne.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))ne.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ce=z._multiDrawStarts,St=z._multiDrawCounts,Ue=z._multiDrawCount,Kt=_t?x.get(_t).bytesPerElement:1,nn=Pt.get(U).currentProgram.getUniforms();for(let Pe=0;Pe<Ue;Pe++)nn.setValue(L,"_gl_DrawID",Pe),ne.render(Ce[Pe]/Kt,St[Pe])}else if(z.isInstancedMesh)ne.renderInstances(bt,me,z.count);else if(G.isInstancedBufferGeometry){let Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,St=Math.min(G.instanceCount,Ce);ne.renderInstances(bt,me,St)}else ne.render(bt,me)};function Sl(y,I,G,U){k!==null&&y.isNodeMaterial&&k.setObject(U,y),de===!0&&J.setState(y,G,!1),y.transparent===!0&&y.side===ai&&y.forceSinglePass===!1?(y.side=Be,y.needsUpdate=!0,Qn(y,I,U),y.side=ji,y.needsUpdate=!0,Qn(y,I,U),y.side=ai):Qn(y,I,U)}this.compile=function(y,I,G=null){G===null&&(G=y),k!==null&&k.renderStart(y,I,G),E=Y.get(G),E.init(I),S.push(E),G.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),y!==G&&y.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),k!==null&&k.updateLights(E.state.lightsArray),_e=this.localClippingEnabled,de=J.init(this.clippingPlanes,_e),de===!0&&J.setGlobalState(this.clippingPlanes,I),k!==null&&ot.render(E.state.shadowsArray,G,I);let U=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let dt=z.material;if(dt)if(Array.isArray(dt))for(let vt=0;vt<dt.length;vt++){let ht=dt[vt];Sl(ht,G,I,z),U.add(ht)}else Sl(dt,G,I,z),U.add(dt)}),E=S.pop(),k!==null&&k.renderEnd(),U},this.compileAsync=function(y,I,G=null){let U=this.compile(y,I,G);return new Promise(z=>{function dt(){if(U.forEach(function(vt){let _t=Pt.get(vt).currentProgram;(_t===void 0||_t.isReady())&&U.delete(vt)}),U.size===0){z(y);return}setTimeout(dt,10)}ae.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ga=null;function kh(y){Ga&&Ga(y)}function Ml(){en.stop()}function wl(){en.start()}let en=new mh;en.setAnimationLoop(kh),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(y){Ga=y,it.setAnimationLoop(y),y===null?en.stop():en.start()},it.addEventListener("sessionstart",Ml),it.addEventListener("sessionend",wl),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(y,I);let G=it.enabled===!0&&it.isPresenting===!0,U=B!==null&&(tt===null||G)&&B.begin(C,tt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,I,tt),E=Y.get(y,S.length),E.init(I),E.state.textureUnits=Ft.getTextureUnits(),S.push(E),ie.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?pe.setFromArrayCamera(I):kt.setFromProjectionMatrix(ie,si,I.reversedDepth),_e=this.localClippingEnabled,de=J.init(this.clippingPlanes,_e),A=ut.get(y,g.length),A.init(),g.push(A),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let vt=C.xr.getDepthSensingMesh();vt!==null&&Ha(vt,I,-1/0,C.sortObjects)}Ha(y,I,0,C.sortObjects),A.finish(),k!==null&&k.updateLights(E.state.lightsArray),C.sortObjects===!0&&A.sort(Dt,le),ti=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ti&&R.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),de===!0&&J.beginShadows();let z=E.state.shadowsArray;if(ot.render(z,y,I),de===!0&&J.endShadows(),(U&&B.hasRenderPass())===!1){let vt=A.opaque,ht=A.transmissive;if(E.setupLights(),I.isArrayCamera){let _t=I.cameras;if(ht.length>0)for(let wt=0,Ot=_t.length;wt<Ot;wt++){let $t=_t[wt];Tl(vt,ht,y,$t)}ti&&R.render(y);for(let wt=0,Ot=_t.length;wt<Ot;wt++){let $t=_t[wt];El(A,y,$t,$t.viewport)}}else ht.length>0&&Tl(vt,ht,y,I),ti&&R.render(y),El(A,y,I)}tt!==null&&H===0&&(Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt)),U&&B.end(C),y.isScene===!0&&y.onAfterRender(C,y,I),at.resetDefaultState(),N=-1,j=null,S.pop(),S.length>0?(E=S[S.length-1],Ft.setTextureUnits(E.state.textureUnits),de===!0&&J.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,k!==null&&k.renderEnd()};function Ha(y,I,G,U){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let vt=I.isArrayCamera?pe:kt;if(!y.frustumCulled||y.intersectsFrustum(vt)){U&&fe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ie);let ht=et.update(y),_t=y.material;_t.visible&&A.push(y,ht,_t,G,fe.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let vt=I.isArrayCamera?pe:kt;if(!y.frustumCulled||y.intersectsFrustum(vt)){let ht=et.update(y),_t=y.material;if(U&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),fe.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),fe.copy(ht.boundingSphere.center)),fe.applyMatrix4(y.matrixWorld).applyMatrix4(ie)),Array.isArray(_t)){let wt=ht.groups;for(let Ot=0,$t=wt.length;Ot<$t;Ot++){let bt=wt[Ot],Xt=_t[bt.materialIndex];Xt&&Xt.visible&&A.push(y,ht,Xt,G,fe.z,bt,I)}}else _t.visible&&A.push(y,ht,_t,G,fe.z,null,I)}}}let dt=y.children;for(let vt=0,ht=dt.length;vt<ht;vt++)Ha(dt[vt],I,G,U)}function El(y,I,G,U){let{opaque:z,transmissive:dt,transparent:vt}=y;E.setupLightsView(G),de===!0&&J.setGlobalState(C.clippingPlanes,G),U&&pt.viewport(V.copy(U)),z.length>0&&Vs(z,I,G),dt.length>0&&Vs(dt,I,G),vt.length>0&&Vs(vt,I,G),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Tl(y,I,G,U){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[U.id]===void 0){let bt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[U.id]=new qe(1,1,{generateMipmaps:!0,type:bt?mi:je,minFilter:Li,samples:Math.max(4,oe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let dt=E.state.transmissionRenderTarget[U.id],vt=U.viewport||V;dt.setSize(vt.z*C.transmissionResolutionScale,vt.w*C.transmissionResolutionScale);let ht=C.getRenderTarget(),_t=C.getActiveCubeFace(),wt=C.getActiveMipmapLevel();C.setRenderTarget(dt),C.getClearColor($),nt=C.getClearAlpha(),nt<1&&C.setClearColor(16777215,.5),C.clear(),ti&&R.render(G);let Ot=C.toneMapping;C.toneMapping=yi;let $t=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),E.setupLightsView(U),de===!0&&J.setGlobalState(C.clippingPlanes,U),Vs(y,G,U),Ft.updateMultisampleRenderTarget(dt),Ft.updateRenderTargetMipmap(dt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Xt=0,me=I.length;Xt<me;Xt++){let se=I[Xt],{object:ne,geometry:Ce,material:St,group:Ue}=se;if(St.side===ai&&ne.layers.test(U.layers)){let Kt=St.side;St.side=Be,St.needsUpdate=!0,Al(ne,G,U,Ce,St,Ue),St.side=Kt,St.needsUpdate=!0,bt=!0}}bt===!0&&(Ft.updateMultisampleRenderTarget(dt),Ft.updateRenderTargetMipmap(dt))}C.setRenderTarget(ht,_t,wt),C.setClearColor($,nt),$t!==void 0&&(U.viewport=$t),C.toneMapping=Ot}function Vs(y,I,G){let U=I.isScene===!0?I.overrideMaterial:null;for(let z=0,dt=y.length;z<dt;z++){let vt=y[z],{object:ht,geometry:_t,group:wt}=vt,Ot=vt.material;Ot.allowOverride===!0&&U!==null&&(Ot=U),ht.layers.test(G.layers)&&Al(ht,I,G,_t,Ot,wt)}}function Al(y,I,G,U,z,dt){k!==null&&z.isNodeMaterial&&k.setObject(y,z),y.onBeforeRender(C,I,G,U,z,dt),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(C,I,G,U,y,dt),z.transparent===!0&&z.side===ai&&z.forceSinglePass===!1?(z.side=Be,z.needsUpdate=!0,C.renderBufferDirect(G,I,U,z,y,dt),z.side=ji,z.needsUpdate=!0,C.renderBufferDirect(G,I,U,z,y,dt),z.side=ai):C.renderBufferDirect(G,I,U,z,y,dt),y.onAfterRender(C,I,G,U,z,dt)}function Rl(y){let I=0;for(let G of y)G.texture!==null&&I++;return I}function Qn(y,I,G){I.isScene!==!0&&(I=Qe);let U=Pt.get(y),z=E.state.lights,dt=E.state.shadowsArray,vt=z.state.version,ht=Q.getParameters(y,z.state,dt,I,G,E.state.lightProbeGridArray),_t=Q.getProgramCacheKey(ht),wt=U.programs;U.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,U.fog=I.fog;let Ot=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;U.envMap=M.get(y.envMap||U.environment,Ot),U.envMapRotation=U.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,wt===void 0&&(y.addEventListener("dispose",ee),wt=new Map,U.programs=wt,U.programVariants=new Map);let $t=wt.get(_t);if($t!==void 0){if(U.currentProgram===$t&&U.lightsStateVersion===vt)return Pl(y,ht),$t}else ht.uniforms=Q.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,G,ht),y.onBeforeCompile(ht,C),$t=Q.acquireProgram(ht,_t),wt.set(_t,$t),U.uniforms=ht.uniforms;let bt=U.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(bt.clippingPlanes=J.uniform),Pl(y,ht),U.needsLights=Wh(y),U.lightsStateVersion=vt,U.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.sunLights.value=z.state.sun,bt.sunLightShadows.value=z.state.sunShadow,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.sunShadowMatrix.value=z.state.sunShadowMatrix,bt.sunShadowCascade.value=z.state.sunShadowCascade,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),U.numLightProbeGrids=Rl(E.state.lightProbeGridArray),U.currentProgram=$t,U.uniformsList=null,$t}function Gh(y,I,G,U,z){let dt=Pt.get(y),vt=dt.currentProgram.id+","+U+","+z,ht=dt.programVariants.get(vt);return ht===void 0?(ht=Qn(y,I,G),dt.programVariants.set(vt,ht)):(dt.currentProgram=ht,dt.uniformsList=null,dt.outputColorSpace=U,dt.toneMapping=z),ht}function Cl(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Jn.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Pl(y,I){let G=Pt.get(y);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Hh(y,I,G,U,z){I.isScene!==!0&&(I=Qe),Ft.resetTextureUnits();let dt=I.fog,vt=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?I.environment:null,ht=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:qt.workingColorSpace,_t=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,wt=M.get(U.envMap||vt,_t),Ot=U.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$t=!!G.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),bt=!!G.morphAttributes.position,Xt=!!G.morphAttributes.normal,me=!!G.morphAttributes.color,se=yi;U.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(se=C.toneMapping);let ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ce=ne!==void 0?ne.length:0,St=Pt.get(U),Ue=E.state.lights;if(de===!0&&(_e===!0||y!==j)){let ce=y===j&&U.id===N;J.setState(U,y,ce)}let Kt=!1,nn=!1;U.version===St.__version?St.needsLights&&St.lightsStateVersion!==Ue.state.version||z.isBatchedMesh&&St.batching===!1||!z.isBatchedMesh&&St.batching===!0||z.isBatchedMesh&&St.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&St.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&St.instancing===!1||!z.isInstancedMesh&&St.instancing===!0||z.isSkinnedMesh&&St.skinning===!1||!z.isSkinnedMesh&&St.skinning===!0||z.isInstancedMesh&&St.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&St.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&St.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&St.instancingMorph===!1&&z.morphTexture!==null||St.envMap!==wt||U.fog===!0&&St.fog!==dt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==J.numPlanes||St.numIntersection!==J.numIntersection)||St.vertexAlphas!==Ot||St.vertexTangents!==$t||St.morphTargets!==bt||St.morphNormals!==Xt||St.morphColors!==me||St.morphTargetsCount!==Ce||St.numLightProbeGrids!==Rl(E.state.lightProbeGridArray)?Kt=!0:(St.outputColorSpace!==ht||St.toneMapping!==se)&&(nn=!0):(Kt=!0,St.__version=U.version);let Pe=St.currentProgram;(Kt===!0||nn===!0)&&(Pe=nn===!0?Gh(U,I,z,ht,se):Qn(U,I,z),k&&U.isNodeMaterial&&k.onUpdateProgram(U,Pe,St));let Ws=!1,Fi=!1,sn=!1,Zt=Pe.getUniforms(),Re=St.uniforms;if(pt.useProgram(Pe.program)&&(Ws=!0,Fi=!0,sn=!0),U.id!==N&&(N=U.id,Fi=!0),Ws||j!==y){pt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Zt.setValue(L,"projectionMatrix",y.projectionMatrix),Zt.setValue(L,"viewMatrix",y.matrixWorldInverse);let Ee=Zt.map.cameraPosition;Ee!==void 0&&Ee.setValue(L,Ne.setFromMatrixPosition(y.matrixWorld)),oe.logarithmicDepthBuffer&&Zt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Zt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,Fi=!0,sn=!0)}if(St.needsLights&&(Ue.state.sunShadowMap.length>0&&Zt.setValue(L,"sunShadowMap",Ue.state.sunShadowMap,Ft),Ue.state.directionalShadowMap.length>0&&Zt.setValue(L,"directionalShadowMap",Ue.state.directionalShadowMap,Ft),Ue.state.spotShadowMap.length>0&&Zt.setValue(L,"spotShadowMap",Ue.state.spotShadowMap,Ft),Ue.state.pointShadowMap.length>0&&Zt.setValue(L,"pointShadowMap",Ue.state.pointShadowMap,Ft)),z.isSkinnedMesh){Zt.setOptional(L,z,"bindMatrix"),Zt.setOptional(L,z,"bindMatrixInverse");let ce=z.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),Zt.setValue(L,"boneTexture",ce.boneTexture,Ft))}z.isBatchedMesh&&(Zt.setOptional(L,z,"batchingTexture"),Zt.setValue(L,"batchingTexture",z._matricesTexture,Ft),Zt.setOptional(L,z,"batchingIdTexture"),Zt.setValue(L,"batchingIdTexture",z._indirectTexture,Ft),Zt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Zt.setValue(L,"batchingColorTexture",z._colorsTexture,Ft));let oi=G.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&K.update(z,G,Pe),(Fi||St.receiveShadow!==z.receiveShadow)&&(St.receiveShadow=z.receiveShadow,Zt.setValue(L,"receiveShadow",z.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&I.environment!==null&&(Re.envMapIntensity.value=I.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Tg()),Fi){if(Zt.setValue(L,"toneMappingExposure",C.toneMappingExposure),St.needsLights&&Vh(Re,sn),dt&&U.fog===!0&&rt.refreshFogUniforms(Re,dt),rt.refreshMaterialUniforms(Re,U,ft,At,E.state.transmissionRenderTarget[y.id]),St.needsLights&&St.numLightProbeGrids>0){let ce=w,Ee=0;for(let Si of E.state.lightProbeGridArray)Si.texture!==null&&(ce.textures[Ee]=Si.texture,ce.min[Ee]=Si.boundingBox.min,ce.max[Ee]=Si.boundingBox.max,ce.resolution[Ee]=Si.resolution,Ee++);for(let Si in ce)ce[Si].length=Ee;Re.probesSH.value=ce.textures,Re.probesMin.value=ce.min,Re.probesMax.value=ce.max,Re.probesResolution.value=ce.resolution}Jn.upload(L,Cl(St),Re,Ft)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Jn.upload(L,Cl(St),Re,Ft),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Zt.setValue(L,"center",z.center),Zt.setValue(L,"modelViewMatrix",z.modelViewMatrix),Zt.setValue(L,"normalMatrix",z.normalMatrix),Zt.setValue(L,"modelMatrix",z.matrixWorld),U.uniformsGroups!==void 0){let ce=U.uniformsGroups;for(let Ee=0,Si=ce.length;Ee<Si;Ee++){let Ll=ce[Ee];Et.update(Ll,Pe),Et.bind(Ll,Pe)}}return Pe}function Vh(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Wh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(y,I,G){let U=Pt.get(y);U.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Pt.get(y.texture).__webglTexture=I,Pt.get(y.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:G,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let G=Pt.get(y);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,G=0){tt=y,Z=I,H=G;let U=null,z=!1,dt=!1;if(y){let ht=Pt.get(y);if(ht.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(L.FRAMEBUFFER,ht.__webglFramebuffer),V.copy(y.viewport),ct.copy(y.scissor),xt=y.scissorTest,pt.viewport(V),pt.scissor(ct),pt.setScissorTest(xt),N=-1;return}else if(ht.__webglFramebuffer===void 0)Ft.setupRenderTarget(y);else if(ht.__hasExternalTextures)Ft.rebindTextures(y,Pt.get(y.texture).__webglTexture,Pt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ot=y.depthTexture;if(ht.__boundDepthTexture!==Ot){if(Ot!==null&&Pt.has(Ot)&&(y.width!==Ot.image.width||y.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(y)}}let _t=y.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(dt=!0);let wt=Pt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?U=wt[I][G]:U=wt[I],z=!0):y.samples>0&&Ft.useMultisampledRTT(y)===!1?U=Pt.get(y).__webglMultisampledFramebuffer:Array.isArray(wt)?U=wt[G]:U=wt,V.copy(y.viewport),ct.copy(y.scissor),xt=y.scissorTest}else V.copy(It).multiplyScalar(ft).floor(),ct.copy(Wt).multiplyScalar(ft).floor(),xt=Jt;if(G!==0&&(U=X),pt.bindFramebuffer(L.FRAMEBUFFER,U)&&pt.drawBuffers(y,U),pt.viewport(V),pt.scissor(ct),pt.setScissorTest(xt),z){let ht=Pt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ht.__webglTexture,G)}else if(dt){let ht=I;for(let _t=0;_t<y.textures.length;_t++){let wt=Pt.get(y.textures[_t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_t,wt.__webglTexture,G,ht)}}else if(y!==null&&G!==0){let ht=Pt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ht.__webglTexture,G)}N=-1};function Il(y){let I=Pt.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=oe.textureFormatReadable(y.format),I.__typeReadable=oe.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,G,U,z,dt,vt,ht=0){if(!(y&&y.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t){pt.bindFramebuffer(L.FRAMEBUFFER,_t);try{let wt=y.textures[ht],Ot=wt.format,$t=wt.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht);let bt=Il(wt);if(bt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-U&&G>=0&&G<=y.height-z&&L.readPixels(I,G,U,z,st.convert(Ot),st.convert($t),dt)}finally{let wt=tt!==null?Pt.get(tt).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,I,G,U,z,dt,vt,ht=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(_t=_t[vt],Array.isArray(_t)&&(_t=_t[0])),_t)if(I>=0&&I<=y.width-U&&G>=0&&G<=y.height-z){pt.bindFramebuffer(L.FRAMEBUFFER,_t);let wt=y.textures[ht],Ot=wt.format,$t=wt.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht);let bt=Il(wt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(I,G,U,z,st.convert(Ot),st.convert($t),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let me=tt!==null?Pt.get(tt).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,me);let se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await kc(L,se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Xt),L.deleteSync(se),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,G=0){let U=Math.pow(2,-G),z=Math.floor(y.image.width*U),dt=Math.floor(y.image.height*U),vt=I!==null?I.x:0,ht=I!==null?I.y:0;Ft.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,vt,ht,z,dt),pt.unbindTexture()},this.copyTextureToTexture=function(y,I,G=null,U=null,z=0,dt=0){let vt,ht,_t,wt,Ot,$t,bt,Xt,me,se=y.isCompressedTexture?y.mipmaps[dt]:y.image;if(G!==null)vt=G.max.x-G.min.x,ht=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,wt=G.min.x,Ot=G.min.y,$t=G.isBox3?G.min.z:0;else{let Zt=Math.pow(2,-z);vt=Math.floor(se.width*Zt),ht=Math.floor(se.height*Zt),y.isDataArrayTexture?_t=se.depth:y.isData3DTexture?_t=Math.floor(se.depth*Zt):_t=1,wt=0,Ot=0,$t=0}U!==null?(bt=U.x,Xt=U.y,me=U.z):(bt=0,Xt=0,me=0);let ne=st.convert(I.format),Ce=st.convert(I.type),St;I.isData3DTexture?(Ft.setTexture3D(I,0),St=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ft.setTexture2DArray(I,0),St=L.TEXTURE_2D_ARRAY):(Ft.setTexture2D(I,0),St=L.TEXTURE_2D),pt.activeTexture(L.TEXTURE0),pt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),pt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pt.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let Ue=pt.getParameter(L.UNPACK_ROW_LENGTH),Kt=pt.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=pt.getParameter(L.UNPACK_SKIP_PIXELS),Pe=pt.getParameter(L.UNPACK_SKIP_ROWS),Ws=pt.getParameter(L.UNPACK_SKIP_IMAGES);pt.pixelStorei(L.UNPACK_ROW_LENGTH,se.width),pt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se.height),pt.pixelStorei(L.UNPACK_SKIP_PIXELS,wt),pt.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),pt.pixelStorei(L.UNPACK_SKIP_IMAGES,$t);let Fi=y.isDataArrayTexture||y.isData3DTexture,sn=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let Zt=Pt.get(y),Re=Pt.get(I),oi=Pt.get(Zt.__renderTarget),ce=Pt.get(Re.__renderTarget);pt.bindFramebuffer(L.READ_FRAMEBUFFER,oi.__webglFramebuffer),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<_t;Ee++)Fi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(y).__webglTexture,z,$t+Ee),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(I).__webglTexture,dt,me+Ee)),L.blitFramebuffer(wt,Ot,wt+vt,Ot+ht,bt,Xt,bt+vt,Xt+ht,L.DEPTH_BUFFER_BIT,L.NEAREST);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||Pt.has(y)){let Zt=Pt.get(y),Re=Pt.get(I);pt.bindFramebuffer(L.READ_FRAMEBUFFER,P),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,W);for(let oi=0;oi<_t;oi++)Fi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,z,$t+oi):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,z),sn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.__webglTexture,dt,me+oi):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Re.__webglTexture,dt),z!==0?L.blitFramebuffer(wt,Ot,wt+vt,Ot+ht,bt,Xt,bt+vt,Xt+ht,L.COLOR_BUFFER_BIT,L.NEAREST):sn?L.copyTexSubImage3D(St,dt,bt,Xt,me+oi,wt,Ot,vt,ht):L.copyTexSubImage2D(St,dt,bt,Xt,wt,Ot,vt,ht);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else sn?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(St,dt,bt,Xt,me,vt,ht,_t,ne,Ce,se.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(St,dt,bt,Xt,me,vt,ht,_t,ne,se.data):L.texSubImage3D(St,dt,bt,Xt,me,vt,ht,_t,ne,Ce,se):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,bt,Xt,vt,ht,ne,Ce,se.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,bt,Xt,se.width,se.height,ne,se.data):L.texSubImage2D(L.TEXTURE_2D,dt,bt,Xt,vt,ht,ne,Ce,se);pt.pixelStorei(L.UNPACK_ROW_LENGTH,Ue),pt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),pt.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),pt.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),pt.pixelStorei(L.UNPACK_SKIP_IMAGES,Ws),dt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&L.generateMipmap(St),pt.unbindTexture()},this.initRenderTarget=function(y){Pt.get(y).__webglFramebuffer===void 0&&Ft.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ft.setTextureCube(y,0):y.isData3DTexture?Ft.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ft.setTexture2DArray(y,0):Ft.setTexture2D(y,0),pt.unbindTexture()},this.resetState=function(){Z=0,H=0,tt=null,pt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Th={type:"change"},ll={type:"start"},Rh={type:"end"},Ba=new hn,Ah=new $e,Rg=Math.cos(70*Fs.DEG2RAD),Se=new O,ke=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ol=1e-6,za=class extends As{constructor(t,e=null){super(t,e),this.state=jt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Xe,this._lastTargetPosition=new O,this._quat=new Xe().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wn,this._sphericalDelta=new Wn,this._scale=1,this._panOffset=new O,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new O,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Pg.bind(this),this._onPointerDown=Cg.bind(this),this._onPointerUp=Ig.bind(this),this._onContextMenu=Bg.bind(this),this._onMouseWheel=Ng.bind(this),this._onKeyDown=Ug.bind(this),this._onTouchStart=Fg.bind(this),this._onTouchMove=Og.bind(this),this._onMouseDown=Lg.bind(this),this._onMouseMove=Dg.bind(this),this._interceptControlDown=zg.bind(this),this._interceptControlUp=kg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=jt.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ke:i>Math.PI&&(i-=ke),s<-Math.PI?s+=ke:s>Math.PI&&(s-=ke),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Se.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ba.origin.copy(this.object.position),Ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ba.direction))<Rg?this.object.lookAt(this.target):(Ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ba.intersectPlane(Ah,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ol||this._lastTargetPosition.distanceToSquared(this.target)>ol?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ke/60*this.autoRotateSpeed*t:ke/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Se.copy(s).sub(this.target);let r=Se.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Cg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Pg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ig(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rh),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Lg(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=jt.DOLLY;break;case Ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}break;case Ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(ll)}function Dg(n){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ng(n){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(n.preventDefault(),this.dispatchEvent(ll),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rh))}function Ug(n){this.enabled!==!1&&this._handleKeyDown(n)}function Fg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1){this.state=jt.NONE;break}this._handleTouchStartRotate(n),this.state=jt.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1){this.state=jt.NONE;break}this._handleTouchStartPan(n),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=jt.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(ll)}function Og(n){switch(this._trackPointer(n),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=jt.NONE}}function Bg(n){this.enabled!==!1&&n.preventDefault()}function zg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ch='(()=>{var le=["Other","Outer wall","Inner wall","Overhang wall","Sparse infill","Internal solid infill","Top surface","Bottom surface","Bridge","Gap infill","Skirt","Brim","Support","Support interface","Support transition","Prime tower","Custom","Ironing","Floating vertical shell"],M=new Map(le.map((o,s)=>[o.toLowerCase(),s])),fe=o=>{let s=o.trim().toLowerCase();return M.has(s)?M.get(s):s.includes("tower")?M.get("prime tower"):s.includes("support")?M.get("support"):s.includes("bridge")?M.get("bridge"):s.includes("ironing")?M.get("ironing"):0},A=class{constructor(s){this.a=new Float32Array(s),this.n=0}push3(s,n,f){this.n+3>this.a.length&&this.grow();let a=this.a;a[this.n++]=s,a[this.n++]=n,a[this.n++]=f}push2(s,n){this.n+2>this.a.length&&this.grow();let f=this.a;f[this.n++]=s,f[this.n++]=n}grow(){let s=new Float32Array(this.a.length*2);s.set(this.a),this.a=s}done(){return this.a.slice(0,this.n)}},N=class{constructor(s){this.a=new Uint8Array(s),this.n=0}push(s){if(this.n>=this.a.length){let n=new Uint8Array(this.a.length*2);n.set(this.a),this.a=n}this.a[this.n++]=s}done(){return this.a.slice(0,this.n)}};function K(o,s,n){n.X=n.Y=n.Z=n.E=n.I=n.J=void 0;let f=o.length,a=s;for(;a<f;){let b=o.charCodeAt(a);if(b===59)break;if(b===32||b===9){a++;continue}let X=o[a];a++;let g=a;for(;g<f;){let c=o.charCodeAt(g);if(c===32||c===9||c===59)break;g++}if(g>a){let c=+o.slice(a,g);if(!Number.isNaN(c))switch(X){case"X":case"x":n.X=c;break;case"Y":case"y":n.Y=c;break;case"Z":case"z":n.Z=c;break;case"E":case"e":n.E=c;break;case"I":case"i":n.I=c;break;case"J":case"j":n.J=c;break;default:break}}a=g}return n}function ae(o,s={}){let n=s.arcTolerance??.05,f=Math.max(1024,Math.floor(o.length/40)),a=new A(f*3),b=new A(f*3),X=new A(f*2),g=new N(f),c=new N(f),Z=[0],m={filamentColors:[],totalLayers:0,maxZ:0,printableArea:null,printableHeight:0,printerModel:"",nozzle:.4,slicer:""},h=0,d=0,E=0,Y=!0,S=!1,k=0,Q=0,P=0,H=-1,V=.42,$=.2,W=0,t={},J=1/0,O=1/0,U=1/0,B=-1/0,G=-1/0,R=-1/0,D=(I,e,w,i,l,r)=>{a.push3(I,e,w),b.push3(i,l,r),X.push2(V,$),g.push(Q),c.push(P),W++,i<J&&(J=i),i>B&&(B=i),l<O&&(O=l),l>G&&(G=l),r<U&&(U=r),r>R&&(R=r)},x=0,ee=o.length;for(;x<ee;){let I=o.indexOf(`\n`,x);I<0&&(I=ee);let e=o.slice(x,I);if(x=I+1,e.length===0)continue;e.charCodeAt(e.length-1)===13&&(e=e.slice(0,-1));let w=e.charCodeAt(0);if(w===59){if(e.startsWith("; FEATURE: "))Q=fe(e.slice(11));else if(e.startsWith("; LINE_WIDTH: ")){let i=+e.slice(14);i>0&&(V=i)}else if(e.startsWith("; LAYER_HEIGHT: ")){let i=+e.slice(16);i>0&&($=i)}else if(e.startsWith("; filament_colour = "))m.filamentColors=e.slice(20).split(";").map(i=>i.trim());else if(e.startsWith("; total layer number: "))m.totalLayers=parseInt(e.slice(22),10)||0;else if(e.startsWith("; max_z_height: "))m.maxZ=+e.slice(16)||0;else if(e.startsWith("; printable_area = ")){let i=e.slice(19).split(",").map(l=>l.split("x").map(Number));i.length>=3&&i.every(l=>l.length===2&&l.every(Number.isFinite))&&(m.printableArea=i)}else e.startsWith("; printable_height = ")?m.printableHeight=+e.slice(21)||0:e.startsWith("; printer_model = ")?m.printerModel=e.slice(18).trim():e.startsWith("; nozzle_diameter = ")?m.nozzle=parseFloat(e.slice(20))||.4:(e.startsWith("; BambuStudio")||e.startsWith("; OrcaSlicer"))&&(m.slicer=e.slice(2).trim());continue}if(w===71||w===103){let i=1,l=0;for(;i<e.length;){let r=e.charCodeAt(i);if(r<48||r>57)break;l=l*10+(r-48),i++}if(i<e.length&&e.charCodeAt(i)===46)continue;if(l===0||l===1){K(e,i,t);let r=h,u=d,p=E;Y?(t.X!==void 0&&(r=t.X),t.Y!==void 0&&(u=t.Y),t.Z!==void 0&&(p=t.Z)):(t.X!==void 0&&(r+=t.X),t.Y!==void 0&&(u+=t.Y),t.Z!==void 0&&(p+=t.Z));let T=t.E===void 0||S?0:t.E;k>0&&T>0&&(r!==h||u!==d)&&D(h,d,p,r,u,p),h=r,d=u,E=p}else if(l===2||l===3){K(e,i,t);let r=h,u=d,p=E;Y?(t.X!==void 0&&(r=t.X),t.Y!==void 0&&(u=t.Y),t.Z!==void 0&&(p=t.Z)):(t.X!==void 0&&(r+=t.X),t.Y!==void 0&&(u+=t.Y),t.Z!==void 0&&(p+=t.Z));let T=t.E===void 0||S?0:t.E;if(k>0&&T>0&&(t.I!==void 0||t.J!==void 0)){let C=h+(t.I||0),_=d+(t.J||0),z=Math.hypot(h-C,d-_),te=Math.atan2(d-_,h-C),y=Math.atan2(u-_,r-C)-te;l===2?y>=-1e-9&&(y-=2*Math.PI):y<=1e-9&&(y+=2*Math.PI);let j=z>n?2*Math.acos(1-n/z):Math.PI/4;j=Math.min(j,Math.PI/8);let q=Math.min(128,Math.max(1,Math.ceil(Math.abs(y)/j))),ie=h,se=d;for(let L=1;L<=q;L++){let F,v;if(L===q)F=r,v=u;else{let ne=te+y*L/q;F=C+z*Math.cos(ne),v=_+z*Math.sin(ne)}D(ie,se,p,F,v,p),ie=F,se=v}}else k>0&&T>0&&(r!==h||u!==d)&&D(h,d,p,r,u,p);h=r,d=u,E=p}else l===90?Y=!0:l===91?Y=!1:l===92&&(K(e,i,t),t.X!==void 0&&(h=t.X),t.Y!==void 0&&(d=t.Y),t.Z!==void 0&&(E=t.Z));continue}if(w===77||w===109){if(e.startsWith("M73 L")){let i=parseInt(e.slice(5),10);if(i>0){for(;Z.length<=i;)Z.push(W);k=i}}else if(e.startsWith("M82"))S=!0;else if(e.startsWith("M83"))S=!1;else if(e.startsWith("M620 S")){let i=parseInt(e.slice(6),10);i>=0&&i<64&&(H=i)}continue}if(w===84){let i=parseInt(e.slice(1),10);i>=0&&i<64?P=i:H>=0&&i!==255&&i!==1e3&&(P=H);continue}}Z.push(W);let re=Z.length-2;return{p0:a.done(),p1:b.done(),size:X.done(),feature:g.done(),tool:c.done(),layerStart:Uint32Array.from(Z),layers:re,segments:W,bounds:W?{min:[J,O,U],max:[B,G,R]}:null,meta:m}}self.onmessage=o=>{let{id:s,buffer:n}=o.data;try{let f=new TextDecoder("utf-8").decode(n),a=ae(f);self.postMessage({id:s,ok:!0,r:a},[a.p0.buffer,a.p1.buffer,a.size.buffer,a.feature.buffer,a.tool.buffer,a.layerStart.buffer])}catch(f){self.postMessage({id:s,ok:!1,error:String(f&&f.message||f)})}};})();\n';var Hs=["Other","Outer wall","Inner wall","Overhang wall","Sparse infill","Internal solid infill","Top surface","Bottom surface","Bridge","Gap infill","Skirt","Brim","Support","Support interface","Support transition","Prime tower","Custom","Ironing","Floating vertical shell"],jn=new Map(Hs.map((n,t)=>[n.toLowerCase(),t])),Hg=n=>{let t=n.trim().toLowerCase();return jn.has(t)?jn.get(t):t.includes("tower")?jn.get("prime tower"):t.includes("support")?jn.get("support"):t.includes("bridge")?jn.get("bridge"):t.includes("ironing")?jn.get("ironing"):0},Gs=class{constructor(t){this.a=new Float32Array(t),this.n=0}push3(t,e,i){this.n+3>this.a.length&&this.grow();let s=this.a;s[this.n++]=t,s[this.n++]=e,s[this.n++]=i}push2(t,e){this.n+2>this.a.length&&this.grow();let i=this.a;i[this.n++]=t,i[this.n++]=e}grow(){let t=new Float32Array(this.a.length*2);t.set(this.a),this.a=t}done(){return this.a.slice(0,this.n)}},ka=class{constructor(t){this.a=new Uint8Array(t),this.n=0}push(t){if(this.n>=this.a.length){let e=new Uint8Array(this.a.length*2);e.set(this.a),this.a=e}this.a[this.n++]=t}done(){return this.a.slice(0,this.n)}};function cl(n,t,e){e.X=e.Y=e.Z=e.E=e.I=e.J=void 0;let i=n.length,s=t;for(;s<i;){let r=n.charCodeAt(s);if(r===59)break;if(r===32||r===9){s++;continue}let a=n[s];s++;let o=s;for(;o<i;){let l=n.charCodeAt(o);if(l===32||l===9||l===59)break;o++}if(o>s){let l=+n.slice(s,o);if(!Number.isNaN(l))switch(a){case"X":case"x":e.X=l;break;case"Y":case"y":e.Y=l;break;case"Z":case"z":e.Z=l;break;case"E":case"e":e.E=l;break;case"I":case"i":e.I=l;break;case"J":case"j":e.J=l;break;default:break}}s=o}return e}function Ph(n,t={}){let e=t.arcTolerance??.05,i=Math.max(1024,Math.floor(n.length/40)),s=new Gs(i*3),r=new Gs(i*3),a=new Gs(i*2),o=new ka(i),l=new ka(i),c=[0],h={filamentColors:[],totalLayers:0,maxZ:0,printableArea:null,printableHeight:0,printerModel:"",nozzle:.4,slicer:""},d=0,u=0,f=0,_=!0,v=!1,m=0,p=0,b=0,T=-1,w=.42,A=.2,E=0,g={},S=1/0,B=1/0,C=1/0,D=-1/0,k=-1/0,X=-1/0,P=(tt,N,j,V,ct,xt)=>{s.push3(tt,N,j),r.push3(V,ct,xt),a.push2(w,A),o.push(p),l.push(b),E++,V<S&&(S=V),V>D&&(D=V),ct<B&&(B=ct),ct>k&&(k=ct),xt<C&&(C=xt),xt>X&&(X=xt)},W=0,Z=n.length;for(;W<Z;){let tt=n.indexOf(`
`,W);tt<0&&(tt=Z);let N=n.slice(W,tt);if(W=tt+1,N.length===0)continue;N.charCodeAt(N.length-1)===13&&(N=N.slice(0,-1));let j=N.charCodeAt(0);if(j===59){if(N.startsWith("; FEATURE: "))p=Hg(N.slice(11));else if(N.startsWith("; LINE_WIDTH: ")){let V=+N.slice(14);V>0&&(w=V)}else if(N.startsWith("; LAYER_HEIGHT: ")){let V=+N.slice(16);V>0&&(A=V)}else if(N.startsWith("; filament_colour = "))h.filamentColors=N.slice(20).split(";").map(V=>V.trim());else if(N.startsWith("; total layer number: "))h.totalLayers=parseInt(N.slice(22),10)||0;else if(N.startsWith("; max_z_height: "))h.maxZ=+N.slice(16)||0;else if(N.startsWith("; printable_area = ")){let V=N.slice(19).split(",").map(ct=>ct.split("x").map(Number));V.length>=3&&V.every(ct=>ct.length===2&&ct.every(Number.isFinite))&&(h.printableArea=V)}else N.startsWith("; printable_height = ")?h.printableHeight=+N.slice(21)||0:N.startsWith("; printer_model = ")?h.printerModel=N.slice(18).trim():N.startsWith("; nozzle_diameter = ")?h.nozzle=parseFloat(N.slice(20))||.4:(N.startsWith("; BambuStudio")||N.startsWith("; OrcaSlicer"))&&(h.slicer=N.slice(2).trim());continue}if(j===71||j===103){let V=1,ct=0;for(;V<N.length;){let xt=N.charCodeAt(V);if(xt<48||xt>57)break;ct=ct*10+(xt-48),V++}if(V<N.length&&N.charCodeAt(V)===46)continue;if(ct===0||ct===1){cl(N,V,g);let xt=d,$=u,nt=f;_?(g.X!==void 0&&(xt=g.X),g.Y!==void 0&&($=g.Y),g.Z!==void 0&&(nt=g.Z)):(g.X!==void 0&&(xt+=g.X),g.Y!==void 0&&($+=g.Y),g.Z!==void 0&&(nt+=g.Z));let yt=g.E===void 0||v?0:g.E;m>0&&yt>0&&(xt!==d||$!==u)&&P(d,u,nt,xt,$,nt),d=xt,u=$,f=nt}else if(ct===2||ct===3){cl(N,V,g);let xt=d,$=u,nt=f;_?(g.X!==void 0&&(xt=g.X),g.Y!==void 0&&($=g.Y),g.Z!==void 0&&(nt=g.Z)):(g.X!==void 0&&(xt+=g.X),g.Y!==void 0&&($+=g.Y),g.Z!==void 0&&(nt+=g.Z));let yt=g.E===void 0||v?0:g.E;if(m>0&&yt>0&&(g.I!==void 0||g.J!==void 0)){let At=d+(g.I||0),ft=u+(g.J||0),Dt=Math.hypot(d-At,u-ft),le=Math.atan2(u-ft,d-At),Wt=Math.atan2($-ft,xt-At)-le;ct===2?Wt>=-1e-9&&(Wt-=2*Math.PI):Wt<=1e-9&&(Wt+=2*Math.PI);let Jt=Dt>e?2*Math.acos(1-e/Dt):Math.PI/4;Jt=Math.min(Jt,Math.PI/8);let kt=Math.min(128,Math.max(1,Math.ceil(Math.abs(Wt)/Jt))),pe=d,de=u;for(let _e=1;_e<=kt;_e++){let ie,Ne;if(_e===kt)ie=xt,Ne=$;else{let fe=le+Wt*_e/kt;ie=At+Dt*Math.cos(fe),Ne=ft+Dt*Math.sin(fe)}P(pe,de,nt,ie,Ne,nt),pe=ie,de=Ne}}else m>0&&yt>0&&(xt!==d||$!==u)&&P(d,u,nt,xt,$,nt);d=xt,u=$,f=nt}else ct===90?_=!0:ct===91?_=!1:ct===92&&(cl(N,V,g),g.X!==void 0&&(d=g.X),g.Y!==void 0&&(u=g.Y),g.Z!==void 0&&(f=g.Z));continue}if(j===77||j===109){if(N.startsWith("M73 L")){let V=parseInt(N.slice(5),10);if(V>0){for(;c.length<=V;)c.push(E);m=V}}else if(N.startsWith("M82"))v=!0;else if(N.startsWith("M83"))v=!1;else if(N.startsWith("M620 S")){let V=parseInt(N.slice(6),10);V>=0&&V<64&&(T=V)}continue}if(j===84){let V=parseInt(N.slice(1),10);V>=0&&V<64?b=V:T>=0&&V!==255&&V!==1e3&&(b=T);continue}}c.push(E);let H=c.length-2;return{p0:s.done(),p1:r.done(),size:a.done(),feature:o.done(),tool:l.done(),layerStart:Uint32Array.from(c),layers:H,segments:E,bounds:E?{min:[S,B,C],max:[D,k,X]}:null,meta:h}}var hl={en:{"status.running":"Printing","status.prepare":"Preparing","status.slicing":"Slicing","status.pause":"Paused","status.finish":"Finished","status.failed":"Failed","status.idle":"Idle","status.offline":"Offline","status.unavailable":"Unavailable","cfg.printer":"Set `printer:` (e.g. a1)","gcode.notfound":"G-code file not found in Home Assistant (HTTP {s})","live.title":"Follow the printer's current layer","info.title":"Layer info","reset.title":"Reset view","mode.feature":"Colour: line type (click for filament colour)","mode.filament":"Colour: filament (click for line type)","info.z":"Z height","info.lh":"Layer height","info.len":"Line length","info.share":"Of object height","info.types":"Line types in this layer","info.fils":"Filaments in this layer","info.fil":"Filament {n}","info.rest":"Rest of the print","info.notyet":"The first layer has not started yet.","head.printer":"printer: {n}","nofile.print":"No G-code for this print.","nofile.hint":'ha-bambulab downloads the G-code from the printer. H2D/H2S/H2C need a USB drive or SD card and "Store Sent Files on External Storage".',"nofile.idle":"No print with G-code yet.",load:"Loading G-code\u2026",parse:"Parsing G-code ({mb} MB)\u2026",error:"Error: {e}",webgl:"WebGL could not start. Reload the page.","card.layer.desc":"Live 3D G-code view that follows the printer's current layer (ha-bambulab).","card.status.name":"Bambu printer status","card.status.desc":"Compact card: status, progress, layer, time, temperatures, filament, camera and light buttons (ha-bambulab).","t.nozzle":"Nozzle","t.bed":"Bed","t.chamber":"Chamber",left:"<b>{t}</b> left",ends:"ends <b>{c}</b>",tomorrow:"tomorrow ",h:"h",m:"min",light:"Chamber light","cam.off":"Turn the camera off","cam.on":"Turn the camera on",hms:"HMS messages: {n}",perr:"Print error",details:"tap for details",fil:"Filament: <b>{n}</b>","fil.none":"No active filament",overview:"Overview",spool:"External spool",setup:"Settings",controls:"Printer controls",filament:"Filament",sp_trays:"Printers and trays",sp_spools:"Spools",sp_add:"Add a spool",sp_name:"Name",sp_material:"Material",sp_color:"Colour",sp_weight:"Net weight (g)",sp_used:"Already used (g)",sp_price:"Price per kg ({c}, optional)",sp_where:"Where",sp_save:"Save",sp_cancel:"Cancel",sp_edit:"Edit",sp_archive:"Used up",sp_archive_hint:"Take the spool out of the list (it stays in the history)",sp_archive_q:"Mark this spool as used up?",sp_shelf:"on the shelf",sp_none:"no spool chosen",sp_empty:"empty",sp_saving:"Saving\u2026",sp_saved:"Saved",sp_err:"Not saved: {e}",sp_missing:"Needs the Bambu Tools app 1.8 or newer, running.",sp_noprinters:"No printers yet.",sp_nospools:"No spools yet. Add the spools you use and choose the tray each one is in.",sp_how:"What is left is worked out from the prints: each print counts the filament it used from the spool in its tray. Below {g} g a spool counts as almost empty.",d_history:"History",h_month:"This month",h_total:"All time",h_prints:"{n} prints",h_now:"Printing now",h_since:"since {t}",h_empty:"No prints recorded yet.",h_missing:'The print history is kept by the Bambu Tools app while it runs. Start the app and turn on "Start with Home Assistant" (Bambu \u2192 Settings, step 5).',h_finish:"finished",h_failed:"failed",h_stopped:"stopped",h_months:"Per month",h_col_prints:"prints",h_col_ok:"ok",h_col_time:"time",h_col_g:"filament",h_hm:"{h} h {m} min",h_m:"{m} min",h_at:"at {p}%",h_c_fil:"filament",h_c_kwh:"electricity (estimate)",d_print:"Print",d_temps:"Temperatures",d_printer:"Printer & filament",e_print_status:"Status",e_current_stage:"Stage",e_print_progress:"Progress",e_current_layer:"Layer",e_total_layer_count:"Total layers",e_remaining_time:"Remaining",e_start_time:"Started",e_end_time:"Ends",e_print_weight:"Weight",e_print_length:"Filament length",e_print_bed_type:"Plate",e_speed_profile:"Speed",e_task_name:"File / job",e_nozzle_temperature:"Nozzle",e_nozzle_target_temperature:"Nozzle target",e_bed_temperature:"Bed",e_bed_target_temperature:"Bed target",e_chamber_temperature:"Chamber",e_chamber_target_temperature:"Chamber target",e_door:"Door",e_active_tray:"Active filament",e_extruder_filament:"Extruder filament",e_nozzle_type:"Nozzle type",e_nozzle_size:"Nozzle size",e_cooling_fan_speed:"Cooling fan",e_heatbreak_fan_speed:"Heatbreak fan",e_aux_fan_speed:"Aux fan",e_chamber_fan_speed:"Chamber fan",e_airduct_mode:"Air duct",e_timelapse:"Timelapse",e_wi_fi_signal:"Wi-Fi",e_total_usage:"Total usage"},el:{"status.running":"\u03A4\u03C5\u03C0\u03CE\u03BD\u03B5\u03B9","status.prepare":"\u03A0\u03C1\u03BF\u03B5\u03C4\u03BF\u03B9\u03BC\u03B1\u03C3\u03AF\u03B1","status.slicing":"Slicing","status.pause":"\u03A3\u03B5 \u03C0\u03B1\u03CD\u03C3\u03B7","status.finish":"\u03A4\u03B5\u03BB\u03B5\u03AF\u03C9\u03C3\u03B5","status.failed":"\u0391\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5","status.idle":"\u0391\u03B4\u03C1\u03B1\u03BD\u03AE\u03C2","status.offline":"\u0395\u03BA\u03C4\u03CC\u03C2 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7\u03C2","status.unavailable":"\u039C\u03B7 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03BF\u03C2","cfg.printer":"\u038C\u03C1\u03B9\u03C3\u03B5 `printer:` (\u03C0.\u03C7. a1)","gcode.notfound":"\u03A4\u03BF \u03B1\u03C1\u03C7\u03B5\u03AF\u03BF G-code \u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03C3\u03C4\u03BF HA (HTTP {s})","live.title":"\u0391\u03BA\u03BF\u03BB\u03BF\u03C5\u03B8\u03B5\u03AF \u03C4\u03BF layer \u03C4\u03BF\u03C5 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE","info.title":"\u03A0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2 layer","reset.title":"\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03C0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE\u03C2","mode.feature":"\u03A7\u03C1\u03CE\u03BC\u03B1: \u03C4\u03CD\u03C0\u03BF\u03C2 \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2 (\u03C0\u03AC\u03C4\u03B1 \u03B3\u03B9\u03B1 \u03C7\u03C1\u03CE\u03BC\u03B1 \u03BD\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2)","mode.filament":"\u03A7\u03C1\u03CE\u03BC\u03B1: \u03BD\u03AE\u03BC\u03B1 (\u03C0\u03AC\u03C4\u03B1 \u03B3\u03B9\u03B1 \u03C4\u03CD\u03C0\u03BF \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2)","info.z":"\u038E\u03C8\u03BF\u03C2 Z","info.lh":"\u03A0\u03AC\u03C7\u03BF\u03C2 layer","info.len":"\u039C\u03AE\u03BA\u03BF\u03C2 \u03B3\u03C1\u03B1\u03BC\u03BC\u03CE\u03BD","info.share":"\u038E\u03C8\u03BF\u03C2 \u03B1\u03BD\u03C4\u03B9\u03BA\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF\u03C5","info.types":"\u03A4\u03CD\u03C0\u03BF\u03B9 \u03B3\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF layer","info.fils":"\u039D\u03AE\u03BC\u03B1\u03C4\u03B1 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF layer","info.fil":"\u039D\u03AE\u03BC\u03B1 {n}","info.rest":"\u03A5\u03C0\u03CC\u03BB\u03BF\u03B9\u03C0\u03B7 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7","info.notyet":"\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03B5\u03B9 \u03B1\u03BA\u03CC\u03BC\u03B1 \u03C4\u03BF 1\u03BF layer.","head.printer":"\u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE\u03C2: {n}","nofile.print":"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 G-code \u03B3\u03B9\u03B1 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7\u03BD \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7.","nofile.hint":"\u03A4\u03BF ha-bambulab \u03BA\u03B1\u03C4\u03B5\u03B2\u03AC\u03B6\u03B5\u03B9 \u03C4\u03BF G-code \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE. \u039F\u03B9 H2D/H2S/H2C \u03B8\u03AD\u03BB\u03BF\u03C5\u03BD USB stick \u03AE \u03BA\u03AC\u03C1\u03C4\u03B1 \u03BA\u03B1\u03B9 \u03C4\u03B7 \u03C1\u03CD\u03B8\u03BC\u03B9\u03C3\u03B7 \xABStore Sent Files on External Storage\xBB.","nofile.idle":"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7 \u03BC\u03B5 G-code \u03B1\u03BA\u03CC\u03BC\u03B1.",load:"\u03A6\u03CC\u03C1\u03C4\u03C9\u03C3\u03B7 G-code\u2026",parse:"\u0391\u03BD\u03AC\u03BB\u03C5\u03C3\u03B7 G-code ({mb} MB)\u2026",error:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1: {e}",webgl:"\u0394\u03B5\u03BD \u03AC\u03BD\u03BF\u03B9\u03BE\u03B5 \u03C4\u03BF WebGL. \u0391\u03BD\u03B1\u03BD\u03AD\u03C9\u03C3\u03B5 \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1.","card.layer.desc":"\u0396\u03C9\u03BD\u03C4\u03B1\u03BD\u03AE 3D \u03C0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u03C4\u03BF\u03C5 G-code \u03C0\u03BF\u03C5 \u03B1\u03BA\u03BF\u03BB\u03BF\u03C5\u03B8\u03B5\u03AF \u03C4\u03BF layer \u03C4\u03BF\u03C5 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE (ha-bambulab).","card.status.name":"Bambu \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE","card.status.desc":"\u03A3\u03C5\u03BC\u03C0\u03B1\u03B3\u03AE\u03C2 \u03BA\u03AC\u03C1\u03C4\u03B1: \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7, \u03C0\u03C1\u03CC\u03BF\u03B4\u03BF\u03C2, layer, \u03C7\u03C1\u03CC\u03BD\u03BF\u03C2, \u03B8\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2, \u03BD\u03AE\u03BC\u03B1, \u03BA\u03BF\u03C5\u03BC\u03C0\u03B9\u03AC \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1\u03C2 \u03BA\u03B1\u03B9 \u03C6\u03C9\u03C4\u03CC\u03C2 (ha-bambulab).","t.nozzle":"\u0391\u03BA\u03C1\u03BF\u03C6\u03CD\u03C3\u03B9\u03BF","t.bed":"\u03A0\u03BB\u03B1\u03C4\u03C6\u03CC\u03C1\u03BC\u03B1","t.chamber":"\u0398\u03AC\u03BB\u03B1\u03BC\u03BF\u03C2",left:"\u03B1\u03C0\u03BF\u03BC\u03AD\u03BD\u03BF\u03C5\u03BD <b>{t}</b>",ends:"\u03C4\u03AD\u03BB\u03BF\u03C2 <b>{c}</b>",tomorrow:"\u03B1\u03CD\u03C1\u03B9\u03BF ",h:"\u03CE",m:"\u03BB",light:"\u03A6\u03C9\u03C2 \u03B8\u03B1\u03BB\u03AC\u03BC\u03BF\u03C5","cam.off":"\u039A\u03BB\u03B5\u03AF\u03C3\u03B5 \u03C4\u03B7\u03BD \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1","cam.on":"\u0386\u03BD\u03BF\u03B9\u03BE\u03B5 \u03C4\u03B7\u03BD \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1",hms:"\u039C\u03B7\u03BD\u03CD\u03BC\u03B1\u03C4\u03B1 HMS: {n}",perr:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7\u03C2",details:"\u03C0\u03AC\u03C4\u03B1 \u03B3\u03B9\u03B1 \u03BB\u03B5\u03C0\u03C4\u03BF\u03BC\u03AD\u03C1\u03B5\u03B9\u03B5\u03C2",fil:"\u039D\u03AE\u03BC\u03B1: <b>{n}</b>","fil.none":"\u039A\u03B1\u03BD\u03AD\u03BD\u03B1 \u03B5\u03BD\u03B5\u03C1\u03B3\u03CC \u03BD\u03AE\u03BC\u03B1",overview:"\u0395\u03C0\u03B9\u03C3\u03BA\u03CC\u03C0\u03B7\u03C3\u03B7",spool:"\u0395\u03BE\u03C9\u03C4\u03B5\u03C1\u03B9\u03BA\u03AE \u03BC\u03C0\u03BF\u03BC\u03C0\u03AF\u03BD\u03B1",setup:"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",controls:"\u03A7\u03B5\u03B9\u03C1\u03B9\u03C3\u03BC\u03BF\u03AF \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE",filament:"\u039D\u03AE\u03BC\u03B1\u03C4\u03B1",sp_trays:"\u0395\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AD\u03C2 \u03BA\u03B1\u03B9 \u03B8\u03AD\u03C3\u03B5\u03B9\u03C2",sp_spools:"\u039C\u03C0\u03BF\u03BC\u03C0\u03AF\u03BD\u03B5\u03C2",sp_add:"\u039D\u03AD\u03B1 \u03BC\u03C0\u03BF\u03BC\u03C0\u03AF\u03BD\u03B1",sp_name:"\u038C\u03BD\u03BF\u03BC\u03B1",sp_material:"\u03A5\u03BB\u03B9\u03BA\u03CC",sp_color:"\u03A7\u03C1\u03CE\u03BC\u03B1",sp_weight:"\u039A\u03B1\u03B8\u03B1\u03C1\u03CC \u03B2\u03AC\u03C1\u03BF\u03C2 (g)",sp_used:"\u0389\u03B4\u03B7 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03BF (g)",sp_price:"\u03A4\u03B9\u03BC\u03AE \u03B1\u03BD\u03AC \u03BA\u03B9\u03BB\u03CC ({c}, \u03C0\u03C1\u03BF\u03B1\u03B9\u03C1\u03B5\u03C4\u03B9\u03BA\u03AC)",sp_where:"\u0398\u03AD\u03C3\u03B7",sp_save:"\u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7",sp_cancel:"\u0386\u03BA\u03C5\u03C1\u03BF",sp_edit:"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1",sp_archive:"\u03A4\u03B5\u03BB\u03B5\u03AF\u03C9\u03C3\u03B5",sp_archive_hint:"\u0392\u03B3\u03AC\u03B6\u03B5\u03B9 \u03C4\u03B7 \u03BC\u03C0\u03BF\u03BC\u03C0\u03AF\u03BD\u03B1 \u03B1\u03C0\u03CC \u03C4\u03B7 \u03BB\u03AF\u03C3\u03C4\u03B1 (\u03BC\u03AD\u03BD\u03B5\u03B9 \u03C3\u03C4\u03BF \u03B9\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC)",sp_archive_q:"\u039D\u03B1 \u03C3\u03B7\u03BC\u03B5\u03B9\u03C9\u03B8\u03B5\u03AF \u03CC\u03C4\u03B9 \u03C4\u03B5\u03BB\u03B5\u03AF\u03C9\u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE \u03B7 \u03BC\u03C0\u03BF\u03BC\u03C0\u03AF\u03BD\u03B1;",sp_shelf:"\u03C3\u03C4\u03BF \u03C1\u03AC\u03C6\u03B9",sp_none:"\u03C7\u03C9\u03C1\u03AF\u03C2 \u03BC\u03C0\u03BF\u03BC\u03C0\u03AF\u03BD\u03B1",sp_empty:"\u03AC\u03B4\u03B5\u03B9\u03B1",sp_saving:"\u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u2026",sp_saved:"\u0391\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03CD\u03C4\u03B7\u03BA\u03B5",sp_err:"\u0394\u03B5\u03BD \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03CD\u03C4\u03B7\u03BA\u03B5: {e}",sp_missing:"\u0398\u03AD\u03BB\u03B5\u03B9 \u03C4\u03BF app Bambu Tools 1.8 \u03AE \u03BD\u03B5\u03CC\u03C4\u03B5\u03C1\u03BF, \u03C3\u03B5 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1.",sp_noprinters:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03B1\u03BA\u03CC\u03BC\u03B1 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AD\u03C2.",sp_nospools:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03B1\u03BA\u03CC\u03BC\u03B1 \u03BC\u03C0\u03BF\u03BC\u03C0\u03AF\u03BD\u03B5\u03C2. \u03A0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C3\u03B5 \u03CC\u03C3\u03B5\u03C2 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C2 \u03BA\u03B1\u03B9 \u03B4\u03B9\u03AC\u03BB\u03B5\u03BE\u03B5 \u03C3\u03B5 \u03C0\u03BF\u03B9\u03B1 \u03B8\u03AD\u03C3\u03B7 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 \u03BA\u03B1\u03B8\u03B5\u03BC\u03AF\u03B1.",sp_how:"\u03A4\u03BF \u03C5\u03C0\u03CC\u03BB\u03BF\u03B9\u03C0\u03BF \u03B2\u03B3\u03B1\u03AF\u03BD\u03B5\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B9\u03C2 \u03B5\u03BA\u03C4\u03C5\u03C0\u03CE\u03C3\u03B5\u03B9\u03C2: \u03BA\u03AC\u03B8\u03B5 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7 \u03BC\u03B5\u03C4\u03C1\u03AC \u03C4\u03BF \u03BD\u03AE\u03BC\u03B1 \u03C0\u03BF\u03C5 \u03C0\u03AE\u03C1\u03B5 \u03B1\u03C0\u03CC \u03C4\u03B7 \u03BC\u03C0\u03BF\u03BC\u03C0\u03AF\u03BD\u03B1 \u03C4\u03B7\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2. \u039A\u03AC\u03C4\u03C9 \u03B1\u03C0\u03CC {g} g \u03B7 \u03BC\u03C0\u03BF\u03BC\u03C0\u03AF\u03BD\u03B1 \u03B8\u03B5\u03C9\u03C1\u03B5\u03AF\u03C4\u03B1\u03B9 \u03C3\u03C7\u03B5\u03B4\u03CC\u03BD \u03AC\u03B4\u03B5\u03B9\u03B1.",d_history:"\u0399\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC",h_month:"\u0391\u03C5\u03C4\u03CC\u03BD \u03C4\u03BF\u03BD \u03BC\u03AE\u03BD\u03B1",h_total:"\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03AC",h_prints:"{n} \u03B5\u03BA\u03C4\u03C5\u03C0\u03CE\u03C3\u03B5\u03B9\u03C2",h_now:"\u03A4\u03C5\u03C0\u03CE\u03BD\u03B5\u03B9 \u03C4\u03CE\u03C1\u03B1",h_since:"\u03B1\u03C0\u03CC {t}",h_empty:"\u0394\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF \u03B1\u03BA\u03CC\u03BC\u03B1 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7.",h_missing:"\u03A4\u03BF \u03B9\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC \u03C4\u03BF \u03BA\u03C1\u03B1\u03C4\u03AC\u03B5\u03B9 \u03C4\u03BF app Bambu Tools \u03CC\u03C3\u03BF \u03C4\u03C1\u03AD\u03C7\u03B5\u03B9. \u039E\u03B5\u03BA\u03AF\u03BD\u03B1 \u03C4\u03BF app \u03BA\u03B1\u03B9 \u03AC\u03BD\u03BF\u03B9\u03BE\u03B5 \u03C4\u03BF \xAB\u039E\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B1\u03B6\u03AF \u03BC\u03B5 \u03C4\u03BF Home Assistant\xBB (Bambu \u2192 \u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2, \u03B2\u03AE\u03BC\u03B1 5).",h_finish:"\u03C4\u03B5\u03BB\u03B5\u03AF\u03C9\u03C3\u03B5",h_failed:"\u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5",h_stopped:"\u03C3\u03C4\u03B1\u03BC\u03AC\u03C4\u03B7\u03C3\u03B5",h_months:"\u0391\u03BD\u03AC \u03BC\u03AE\u03BD\u03B1",h_col_prints:"\u03B5\u03BA\u03C4\u03C5\u03C0.",h_col_ok:"ok",h_col_time:"\u03C7\u03C1\u03CC\u03BD\u03BF\u03C2",h_col_g:"\u03BD\u03AE\u03BC\u03B1",h_hm:"{h} \u03CE {m} \u03BB",h_m:"{m} \u03BB",h_at:"\u03C3\u03C4\u03BF {p}%",h_c_fil:"\u03BD\u03AE\u03BC\u03B1",h_c_kwh:"\u03C1\u03B5\u03CD\u03BC\u03B1 (\u03B5\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7)",d_print:"\u0395\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7",d_temps:"\u0398\u03B5\u03C1\u03BC\u03BF\u03BA\u03C1\u03B1\u03C3\u03AF\u03B5\u03C2",d_printer:"\u0395\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE\u03C2 & \u03BD\u03AE\u03BC\u03B1",e_print_status:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7",e_current_stage:"\u03A3\u03C4\u03AC\u03B4\u03B9\u03BF",e_print_progress:"\u03A0\u03C1\u03CC\u03BF\u03B4\u03BF\u03C2",e_current_layer:"Layer",e_total_layer_count:"\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF layers",e_remaining_time:"\u03A5\u03C0\u03CC\u03BB\u03BF\u03B9\u03C0\u03BF",e_start_time:"\u0388\u03BD\u03B1\u03C1\u03BE\u03B7",e_end_time:"\u03A4\u03AD\u03BB\u03BF\u03C2",e_print_weight:"\u0392\u03AC\u03C1\u03BF\u03C2",e_print_length:"\u039C\u03AE\u03BA\u03BF\u03C2 \u03BD\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2",e_print_bed_type:"\u03A0\u03BB\u03AC\u03BA\u03B1",e_speed_profile:"\u03A4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1",e_task_name:"\u0391\u03C1\u03C7\u03B5\u03AF\u03BF / \u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1",e_nozzle_temperature:"\u0391\u03BA\u03C1\u03BF\u03C6\u03CD\u03C3\u03B9\u03BF",e_nozzle_target_temperature:"\u03A3\u03C4\u03CC\u03C7\u03BF\u03C2 \u03B1\u03BA\u03C1\u03BF\u03C6.",e_bed_temperature:"\u03A0\u03BB\u03B1\u03C4\u03C6\u03CC\u03C1\u03BC\u03B1",e_bed_target_temperature:"\u03A3\u03C4\u03CC\u03C7\u03BF\u03C2 \u03C0\u03BB\u03B1\u03C4\u03C6.",e_chamber_temperature:"\u0398\u03AC\u03BB\u03B1\u03BC\u03BF\u03C2",e_chamber_target_temperature:"\u03A3\u03C4\u03CC\u03C7\u03BF\u03C2 \u03B8\u03B1\u03BB\u03AC\u03BC\u03BF\u03C5",e_door:"\u03A0\u03CC\u03C1\u03C4\u03B1",e_active_tray:"\u0395\u03BD\u03B5\u03C1\u03B3\u03CC \u03BD\u03AE\u03BC\u03B1",e_extruder_filament:"\u039D\u03AE\u03BC\u03B1 extruder",e_nozzle_type:"\u03A4\u03CD\u03C0\u03BF\u03C2 \u03B1\u03BA\u03C1\u03BF\u03C6.",e_nozzle_size:"\u039C\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03B1\u03BA\u03C1\u03BF\u03C6.",e_cooling_fan_speed:"\u0391\u03BD\u03B5\u03BC. \u03C8\u03CD\u03BE\u03B7\u03C2",e_heatbreak_fan_speed:"\u0391\u03BD\u03B5\u03BC. heatbreak",e_aux_fan_speed:"\u0391\u03BD\u03B5\u03BC. \u03B2\u03BF\u03B7\u03B8\u03B7\u03C4\u03B9\u03BA\u03CC\u03C2",e_chamber_fan_speed:"\u0391\u03BD\u03B5\u03BC. \u03B8\u03B1\u03BB\u03AC\u03BC\u03BF\u03C5",e_airduct_mode:"\u0391\u03B5\u03C1\u03B1\u03B3\u03C9\u03B3\u03CC\u03C2",e_timelapse:"Timelapse",e_wi_fi_signal:"Wi-Fi",e_total_usage:"\u03A3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03AE \u03C7\u03C1\u03AE\u03C3\u03B7"}};function Ge(n){return(typeof n=="string"?n:n?.locale?.language||n?.language||navigator.language||"en").toLowerCase().startsWith("el")?"el":"en"}function Mt(n,t,e){let i=(hl[Ge(n)]||hl.en)[t]??hl.en[t]??t;return e?i.replace(/\{(\w+)\}/g,(s,r)=>e[r]??""):i}var Vg="1.2.0",ul={Other:"#e6b3b3","Outer wall":"#ff7d38","Inner wall":"#ffe64d","Overhang wall":"#3a3aff","Sparse infill":"#b03029","Internal solid infill":"#9654cc","Top surface":"#f04040","Bottom surface":"#665cc7",Bridge:"#4d80ba","Gap infill":"#f2f2f2",Skirt:"#00876e",Brim:"#2f6f9f",Support:"#3fd13f","Support interface":"#1f8f1f","Support transition":"#205020","Prime tower":"#b3e3ab",Custom:"#5ed194",Ironing:"#ff8c69","Floating vertical shell":"#e8a35a"},Wg=(n,t)=>t&&t!=="unknown"?Mt(n,`status.${t}`):"\u2014",dl=new Set(["","unknown","unavailable","none","None","ERROR","error"]),yn=new Map,vn=null,$g=0,fl=new Map;function Xg(){if(vn)return vn;try{let n=URL.createObjectURL(new Blob([Ch],{type:"text/javascript"}));vn=new Worker(n),vn.onmessage=t=>{let e=fl.get(t.data.id);e&&(fl.delete(t.data.id),t.data.ok?e.resolve(t.data.r):e.reject(new Error(t.data.error)))},vn.onerror=t=>{console.warn("bambu-layer-card worker error",t)}}catch(n){console.warn("bambu-layer-card: worker unavailable, parsing on main thread",n),vn=null}return vn}function qg(n){let t=Xg();if(!t)return Promise.resolve(Ph(new TextDecoder().decode(n)));let e=++$g;return new Promise((i,s)=>{fl.set(e,{resolve:i,reject:s}),t.postMessage({id:e,buffer:n},[n])})}async function Yg(n,t,e,i){let s=encodeURIComponent(e),r=[{url:`/api/bambu_lab/file_cache/${t}/prints/cache/${s}`,auth:!0},{url:`/api/bambu_lab/file_cache/${t}/prints/${s}`,auth:!0},{url:`/local/media/ha-bambulab/${t}/prints/cache/${s}`,auth:!1},{url:`/local/media/ha-bambulab/${t}/prints/${s}`,auth:!1}],a=0;for(let o of r){let l;try{l=o.auth&&n.fetchWithAuth?await n.fetchWithAuth(o.url):await fetch(o.url,{cache:"no-cache"})}catch{continue}if(a=l.status,!l.ok)continue;let c=+l.headers.get("content-length")||0;if(!l.body||!l.body.getReader)return l.arrayBuffer();let h=l.body.getReader(),d=[],u=0;for(;;){let{done:v,value:m}=await h.read();if(v)break;d.push(m),u+=m.length,i&&i(u,c)}let f=new Uint8Array(u),_=0;for(let v of d)f.set(v,_),_+=v.length;return f.buffer}throw new Error(Mt(n,"gcode.notfound",{s:a||"\u2014"}))}function Zg(n,t,e,i){let s=`${t}/${e}`;if(yn.has(s))return yn.get(s);let r=(async()=>{let a=await Yg(n,t,e,i);return i&&i(-1,a.byteLength),qg(a)})();for(yn.set(s,r),r.catch(()=>yn.delete(s));yn.size>3;)yn.delete(yn.keys().next().value);return r}function Jg(){let n=[[-.5,-.5],[-.3,0],[.3,0],[.5,-.5],[.3,-1],[-.3,-1]],t=[],e=[],i=[],s=0;for(let a=0;a<n.length;a++){let o=n[a],l=n[(a+1)%n.length],c=l[0]-o[0],d=l[1]-o[1],u=-c,f=(o[0]+l[0])/2,_=(o[1]+l[1])/2+.5;d*f+u*_<0&&(d=-d,u=-u);let v=Math.hypot(d,u);d/=v,u/=v;for(let[m,p]of[[0,o],[1,o],[1,l],[0,l]])t.push(m,p[0],p[1]),e.push(0,d,u);i.push(s,s+1,s+2,s,s+2,s+3),s+=4}for(let[a,o]of[[0,-1],[1,1]]){let l=s;for(let c of n)t.push(a,c[0],c[1]),e.push(o,0,0),s++;for(let c=1;c<n.length-1;c++)o>0?i.push(l,l+c,l+c+1):i.push(l,l+c+1,l+c)}let r=new Ts;return r.setAttribute("position",new ye(t,3)),r.setAttribute("normal",new ye(e,3)),r.setIndex(i),r}var Kg=`
attribute vec3 iStart;
attribute vec3 iEnd;
attribute vec2 iSize;
attribute vec3 iColor;
uniform float uHiStart;
uniform float uDim;
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vWorld;
void main() {
  vec3 d = iEnd - iStart;
  float L = length(d.xy);
  vec2 dir = L > 1e-6 ? d.xy / L : vec2(1.0, 0.0);
  vec3 fwd = vec3(dir, 0.0);
  vec3 side = vec3(-dir.y, dir.x, 0.0);
  vec3 up = vec3(0.0, 0.0, 1.0);
  float w = iSize.x;
  float h = max(iSize.y, 0.05);
  float ext = 0.5 * w;
  float span = L + 2.0 * ext;
  vec3 p = iStart + fwd * (-ext + position.x * span) + side * (position.y * w) + up * (position.z * h);
  vNormal = normalize(fwd * (normal.x / span) + side * (normal.y / w) + up * (normal.z / h));
  vec3 c = iColor;
  if (float(gl_InstanceID) < uHiStart) c *= uDim;
  vColor = c;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,jg=`
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vWorld;
void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(cameraPosition - vWorld);
  if (dot(n, v) < 0.0) n = -n;
  vec3 top = normalize(vec3(-0.3, -0.5, 1.0));
  float lit = 0.45 + 0.42 * max(dot(n, v), 0.0) + 0.25 * max(dot(n, top), 0.0);
  float spec = pow(max(dot(reflect(-top, n), v), 0.0), 24.0) * 0.12;
  gl_FragColor = vec4(vColor * lit + spec, 1.0);
}`;function Ih(n){let t=new Yt;try{t.set(n)}catch{t.set("#cccccc")}return[Math.round(t.r*255),Math.round(t.g*255),Math.round(t.b*255)]}var pl=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._live=!0,this._shownLayer=0,this._data=null,this._fileKey="",this._colorMode="feature",this._raf=0}static getStubConfig(t){let e=Object.keys(t?.states||{}).find(i=>i.startsWith("sensor.")&&i.endsWith("_current_layer"));return{printer:e?e.slice(7,-14):"my_printer"}}setConfig(t){if(!t||!t.printer&&!t.entities)throw new Error(Mt(this._tl(),"cfg.printer"));this._config={height:420,color_mode:"feature",dim_below:.8,...t},this._colorMode=this._config.color_mode==="filament"?"filament":"feature";let e=this._config.printer,i=this._config.entities||{};this._ent={layer:i.current_layer||`sensor.${e}_current_layer`,total:i.total_layers||`sensor.${e}_total_layer_count`,file:i.gcode_file||`sensor.${e}_gcode_file_downloaded`,serial:i.serial||`sensor.${e}_serial_number`,status:i.print_status||`sensor.${e}_print_status`,progress:i.progress||`sensor.${e}_print_progress`,remaining:i.remaining_time||`sensor.${e}_remaining_time`,task:i.task_name||`sensor.${e}_task_name`,cover:i.cover_image||`image.${e}_cover_image`},this._renderShell()}getCardSize(){return Math.ceil((this._config?.height||420)/50)+1}getGridOptions(){return{columns:12,rows:8,min_rows:5,min_columns:6}}_tl(){return this._config?.language||this._hass}set hass(t){if(this._hass=t,!this._config)return;this._lang!==Ge(this._tl())&&(this._applyI18n(),this._snap="");let e=l=>t.states[l]?.state,i=e(this._ent.file),s=this._config.serial||e(this._ent.serial),r=parseInt(e(this._ent.layer),10)||0,a=e(this._ent.status)||"unknown",o=[i,s,r,a,e(this._ent.progress),e(this._ent.remaining),e(this._ent.task),t.states[this._ent.cover]?.attributes?.entity_picture].join("|");if(o!==this._snap){if(this._snap=o,this._state={file:i,serial:s,layer:r,status:a},this._updateInfo(),!dl.has(i||"")&&s&&!dl.has(s)){let l=`${s}/${i}`;l!==this._fileKey&&(this._fileKey=l,this._loadFile(s,i))}else this._fileKey&&(this._fileKey="",this._data=null,this._clearMesh());this._data||this._showNoFile(),this._applyLayer()}}connectedCallback(){clearTimeout(this._disposeTimer),this._config&&(this._renderer?(this._ro?.observe(this._el.wrap),this._resize()):this._initThree())}disconnectedCallback(){this._ro?.disconnect(),clearTimeout(this._disposeTimer),this._disposeTimer=setTimeout(()=>this._disposeThree(),6e4)}_renderShell(){let t=this._config.height;this._infoOpen=this._loadPref("info",!1),this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; height: 100%; }
        ha-card { height: 100%; overflow: hidden; display: flex; flex-direction: column; }
        .head { display: flex; align-items: center; gap: 8px; padding: 10px 10px 6px 14px; min-height: 36px; }
        .ttl { flex: 1; min-width: 0; display: flex; align-items: baseline; gap: 10px; }
        .title { font-weight: 500; font-size: 15px; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 0 1 auto; }
        .lyr { font-size: 13px; color: var(--secondary-text-color); white-space: nowrap; font-variant-numeric: tabular-nums; }
        .lyr b { color: var(--primary-text-color); font-weight: 600; }
        .btns { display: flex; align-items: center; gap: 2px; flex: none; }
        .ib { border: none; background: none; color: var(--secondary-text-color); cursor: pointer; padding: 6px; border-radius: 50%; line-height: 0; }
        .ib:hover { background: color-mix(in srgb, var(--primary-text-color) 8%, transparent); }
        .ib.on { color: var(--primary-color); }
        .ib ha-icon { --mdc-icon-size: 20px; }
        .live { border: 1px solid var(--divider-color, #8885); background: none; color: var(--secondary-text-color); border-radius: 12px;
          padding: 3px 9px 3px 7px; font: inherit; font-size: 11px; font-weight: 600; letter-spacing: .06em; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; margin-right: 4px; }
        .live .dot { width: 7px; height: 7px; border-radius: 50%; background: currentColor; opacity: .6; }
        .live.on { color: #fff; background: var(--error-color, #db4437); border-color: transparent; }
        .live.on .dot { background: #fff; opacity: 1; animation: pulse 1.6s infinite; }
        @keyframes pulse { 50% { opacity: .35; } }
        .wrap { position: relative; flex: 1; min-height: ${Math.max(160,t-84)}px; }
        :host([grid]) .wrap { min-height: 0; }
        canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; touch-action: none; outline: none; }
        .foot { display: flex; align-items: center; gap: 10px; padding: 4px 14px 10px; }
        input[type=range] { flex: 1; accent-color: var(--primary-color); margin: 0; }
        .lnum { font-size: 12px; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; min-width: 64px; text-align: right; }
        .msg { position: absolute; inset: 8px 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 10px; color: var(--secondary-text-color); font-size: 14px; pointer-events: none; }
        .msg img { max-width: 70%; max-height: 60%; object-fit: contain; border-radius: 8px; }
        .msg .hint { font-size: 12px; opacity: .85; max-width: 420px; }
        .panel { position: absolute; top: 6px; right: 8px; width: 210px; max-width: calc(100% - 16px); max-height: calc(100% - 12px); overflow: auto;
          box-sizing: border-box; padding: 8px 10px; border-radius: 10px; font-size: 12px; color: var(--primary-text-color);
          background: color-mix(in srgb, var(--card-background-color, #1c1c1c) 88%, transparent); backdrop-filter: blur(6px);
          border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent); }
        .ph { display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 12.5px; margin-bottom: 6px; cursor: pointer; }
        .ph ha-icon { --mdc-icon-size: 16px; color: var(--secondary-text-color); }
        .row { display: flex; justify-content: space-between; gap: 8px; margin: 2px 0; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .row b { color: var(--primary-text-color); font-weight: 500; }
        .zbar { height: 5px; border-radius: 3px; margin: 5px 0 8px; background: color-mix(in srgb, var(--primary-text-color) 12%, transparent); overflow: hidden; }
        .zbar div { height: 100%; background: var(--primary-color); border-radius: 3px; }
        .sec { margin: 8px 0 3px; color: var(--secondary-text-color); font-size: 11px; text-transform: uppercase; letter-spacing: .05em; }
        .li { display: flex; align-items: center; gap: 6px; margin: 3px 0; white-space: nowrap; }
        .li .n { flex: 1; overflow: hidden; text-overflow: ellipsis; }
        .li .pct { color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .li.dim { opacity: .45; }
        .sw { width: 10px; height: 10px; border-radius: 2px; flex: none; }
        .hidden { display: none !important; }
      </style>
      <ha-card>
        <div class="head">
          <div class="ttl"><span class="title" id="title"></span><span class="lyr" id="big"></span></div>
          <div class="btns">
            <button class="live on" id="live"><span class="dot"></span>LIVE</button>
            <button class="ib" id="info"><ha-icon icon="mdi:information-outline"></ha-icon></button>
            <button class="ib" id="mode"><ha-icon icon="mdi:palette-outline"></ha-icon></button>
            <button class="ib" id="reset"><ha-icon icon="mdi:fit-to-screen-outline"></ha-icon></button>
          </div>
        </div>
        <div class="wrap">
          <canvas tabindex="0"></canvas>
          <div class="msg hidden" id="msg"></div>
          <div class="panel hidden" id="panel"></div>
        </div>
        <div class="foot">
          <input type="range" id="slider" min="0" max="1" value="0" step="1" disabled aria-label="Layer">
          <span class="lnum" id="lnum"></span>
        </div>
      </ha-card>`;let e=s=>this.shadowRoot.getElementById(s);this._el={canvas:this.shadowRoot.querySelector("canvas"),wrap:this.shadowRoot.querySelector(".wrap"),title:e("title"),big:e("big"),live:e("live"),info:e("info"),mode:e("mode"),reset:e("reset"),msg:e("msg"),slider:e("slider"),lnum:e("lnum"),panel:e("panel")};let i=()=>Mt(this._tl(),this._colorMode==="feature"?"mode.feature":"mode.filament");this._applyI18n(),this._el.live.addEventListener("click",()=>{this._live=!this._live,this._applyLayer()}),this._el.info.addEventListener("click",()=>this._toggleInfo()),this._el.panel.addEventListener("click",s=>{s.composedPath().some(r=>r.classList?.contains("ph"))&&this._toggleInfo()}),this._el.mode.addEventListener("click",()=>{this._colorMode=this._colorMode==="feature"?"filament":"feature",this._el.mode.title=i(),this._applyColors()}),this._modeTitle=i,this._el.reset.addEventListener("click",()=>this._fitCamera()),this._el.slider.addEventListener("input",()=>{this._live=!1,this._applyLayer(+this._el.slider.value)}),this._el.title.textContent=this._config.title||"",this._syncInfoUi(),this.isConnected&&this._initThree()}_applyI18n(){if(!this._el)return;let t=this._hass;this._lang=Ge(this._tl()),this._el.live.title=Mt(this._tl(),"live.title"),this._el.info.title=Mt(this._tl(),"info.title"),this._el.reset.title=Mt(this._tl(),"reset.title"),this._el.mode.title=Mt(this._tl(),this._colorMode==="feature"?"mode.feature":"mode.filament")}_loadPref(t,e){try{let i=localStorage.getItem(`bambu-layer-card:${this._config.printer}:${t}`);return i===null?e:i==="1"}catch{return e}}_savePref(t,e){try{localStorage.setItem(`bambu-layer-card:${this._config.printer}:${t}`,e?"1":"0")}catch{}}_toggleInfo(){this._infoOpen=!this._infoOpen,this._savePref("info",this._infoOpen),this._syncInfoUi()}_syncInfoUi(){this._el&&(this._el.info.classList.toggle("on",this._infoOpen),this._el.panel.classList.toggle("hidden",!this._infoOpen||!this._data),this._infoOpen&&this._updateLayerInfo())}_updateLayerInfo(){let t=this._data,e=this._el;if(!e||!this._infoOpen)return;if(!t){e.panel.classList.add("hidden");return}e.panel.classList.remove("hidden");let i=this._shownLayer,s=t.layerStart,r=t.layers,a=`<div class="ph"><span>Layer ${i} / ${r}</span><ha-icon icon="mdi:chevron-up"></ha-icon></div>`;if(i>=1&&s[i+1]>s[i]){let o=s[i],l=s[i+1],c=t.p0[o*3+2],h=t.size[o*2+1],d=t.bounds?t.bounds.max[2]:c,u=new Map,f=0;for(let m=o;m<l;m++){let p=t.p1[m*3]-t.p0[m*3],b=t.p1[m*3+1]-t.p0[m*3+1],T=Math.hypot(p,b),w=this._colorMode==="feature"?t.feature[m]:t.tool[m];u.set(w,(u.get(w)||0)+T),f+=T}let _=this._hass;a+=`<div class="row"><span>${Mt(this._tl(),"info.z")}</span><b>${c.toFixed(2)} mm</b></div>
        <div class="row"><span>${Mt(this._tl(),"info.lh")}</span><b>${h.toFixed(2)} mm</b></div>
        <div class="row"><span>${Mt(this._tl(),"info.len")}</span><b>${f>=1e3?`${(f/1e3).toFixed(2)} m`:`${Math.round(f)} mm`}</b></div>
        <div class="row"><span>${Mt(this._tl(),"info.share")}</span><b>${d?Math.round(100*c/d):0}%</b></div>
        <div class="zbar"><div style="width:${d?Math.min(100,100*c/d):0}%"></div></div>
        <div class="sec">${Mt(this._tl(),this._colorMode==="feature"?"info.types":"info.fils")}</div>`;let v=[...u.entries()].sort((m,p)=>p[1]-m[1]);for(let[m,p]of v){let b=this._colorMode==="feature"?Hs[m]:Mt(this._tl(),"info.fil",{n:m+1}),T=this._colorMode==="feature"?ul[b]||"#ccc":t.meta.filamentColors[m]||"#ccc";a+=`<div class="li"><span class="sw" style="background:${T}"></span><span class="n">${b}</span><span class="pct">${Math.round(100*p/f)}%</span></div>`}if(this._colorMode==="feature"){let m=[...new Set(t.feature)].filter(p=>!u.has(p)).sort((p,b)=>p-b);if(m.length){a+=`<div class="sec">${Mt(this._tl(),"info.rest")}</div>`;for(let p of m){let b=Hs[p];a+=`<div class="li dim"><span class="sw" style="background:${ul[b]||"#ccc"}"></span><span class="n">${b}</span></div>`}}}}else a+=`<div class="row"><span>${Mt(this._tl(),"info.notyet")}</span></div>`;e.panel.innerHTML=a}set layout(t){this._layout=t,t==="grid"?this.setAttribute("grid",""):this.removeAttribute("grid")}get layout(){return this._layout}_updateInfo(){let t=this._hass,e=a=>t.states[a],i=this._state,s=e(this._ent.task)?.state;if(!this._config.title){let a=e(this._ent.status)?.attributes?.friendly_name||"";this._el.title.textContent=a.replace(/\s*Print status$/i,"")||this._config.printer}let r=[Wg(this._tl(),i.status)];s&&!dl.has(s)&&r.push(s),this._el.title.title=r.join(" \xB7 "),this._updateHeadLayer()}_updateHeadLayer(){let t=this._data,e=this._state||{},i=t?.layers||parseInt(this._hass?.states[this._ent.total]?.state,10)||0;if(!i){this._el.big.textContent="";return}let s=t?this._shownLayer:e.layer,r=`Layer <b>${s}</b> / ${i}`;t&&s>=1&&t.layerStart[s+1]>t.layerStart[s]&&(r+=` \xB7 Z ${t.p0[t.layerStart[s]*3+2].toFixed(2)} mm`),t&&!this._live&&e.layer&&e.layer!==s&&(r+=` \xB7 ${Mt(this._tl(),"head.printer",{n:e.layer})}`),this._el.big.innerHTML=r}_showMsg(t){this._el.msg.innerHTML=t,this._el.msg.classList.toggle("hidden",!t)}_showNoFile(){let e=this._hass.states[this._ent.cover]?.attributes?.entity_picture,i=this._state||{};if(this._loading)return;let s="";i.status==="running"||i.status==="pause"||i.status==="prepare"?s=`<div>${Mt(this._tl(),"nofile.print")}</div><div class="hint">${Mt(this._tl(),"nofile.hint")}</div>`:s=`<div>${Mt(this._tl(),"nofile.idle")}</div>`,e&&(s=`<img src="${e}" alt="">`+s),this._showMsg(s),this._el.slider.disabled=!0,this._el.lnum.textContent="",this._el.panel.classList.add("hidden")}async _loadFile(t,e){let i=`${t}/${e}`;this._loading=!0,this._data=null,this._clearMesh(),this._showMsg(`<div>${Mt(this._tl(),"load")}</div>`);try{let s=await Zg(this._hass,t,e,(r,a)=>{this._fileKey===i&&(r<0?this._showMsg(`<div>${Mt(this._tl(),"parse",{mb:(a/1e6).toFixed(1)})}</div>`):this._showMsg(`<div>${Mt(this._tl(),"load")} ${(r/1e6).toFixed(1)}${a?` / ${(a/1e6).toFixed(1)}`:""} MB</div>`))});if(this._fileKey!==i)return;this._loading=!1,this._data=s,this._showMsg(""),this._buildMesh(),this._fitCamera(),this._applyLayer(),this._updateInfo(),this._syncInfoUi()}catch(s){if(this._fileKey!==i)return;this._loading=!1,this._showMsg(`<div>${Mt(this._tl(),"error",{e:String(s.message||s).replace(/</g,"&lt;")})}</div>`)}}_initThree(){if(this._renderer||!this._el)return;let t;for(let a=0;a<2&&!t;a++)try{t=new Ua({canvas:this._el.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(o){console.warn("bambu-layer-card: WebGL init failed",o),this._freshCanvas()}if(!t){this._showMsg(`<div>${Mt(this._tl(),"webgl")}</div>`);return}let e=this._el.canvas;e.addEventListener("webglcontextlost",a=>{a.preventDefault()}),e.addEventListener("webglcontextrestored",()=>this._requestRender()),t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setClearColor(0,0),this._renderer=t;let i=new ms;this._scene=i;let s=new Fe(35,1,.5,5e3);s.up.set(0,0,1),this._camera=s;let r=new za(s,e);r.enableDamping=!1,r.screenSpacePanning=!0,r.addEventListener("change",()=>this._requestRender()),this._controls=r,this._material=new ri({vertexShader:Kg,fragmentShader:jg,side:ai,uniforms:{uHiStart:{value:0},uDim:{value:this._config.dim_below}}}),this._ro=new ResizeObserver(()=>this._resize()),this._ro.observe(this._el.wrap),this._resize(),this._data&&(this._buildMesh(),this._fitCamera(),this._applyLayer())}_disposeThree(){this._renderer&&(cancelAnimationFrame(this._raf),this._raf=0,this._ro?.disconnect(),this._controls?.dispose(),this._clearMesh(),this._clearBed(),this._material?.dispose(),this._renderer.dispose(),this._renderer.forceContextLoss?.(),this._renderer=this._scene=this._camera=this._controls=this._material=null,this._freshCanvas())}_freshCanvas(){let t=this._el?.canvas;if(!t)return;let e=document.createElement("canvas");e.tabIndex=0,t.replaceWith(e),this._el.canvas=e}_resize(){if(!this._renderer)return;let t=this._el.wrap.getBoundingClientRect(),e=Math.max(1,Math.round(t.width)),i=Math.max(1,Math.round(t.height));this._renderer.setSize(e,i,!1),this._camera.aspect=e/i,this._camera.updateProjectionMatrix(),this._requestRender()}_requestRender(){!this._renderer||this._raf||(this._raf=requestAnimationFrame(()=>{this._raf=0,this._renderer&&this._renderer.render(this._scene,this._camera)}))}_clearMesh(){this._mesh&&(this._scene?.remove(this._mesh),this._mesh.geometry.dispose(),this._mesh=null),this._requestRender()}_clearBed(){this._bed&&(this._scene?.remove(this._bed),this._bed.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()}),this._bed=null)}_buildBed(){this._clearBed();let e=this._data?.meta?.printableArea;e||(e=[[0,0],[256,0],[256,256],[0,256]]);let i=e.map(v=>v[0]),s=e.map(v=>v[1]),r=Math.min(...i),a=Math.max(...i),o=Math.min(...s),l=Math.max(...s),c=new Ri,h=this._isDark(),d=new Je(new fn(a-r,l-o),new Gn({color:h?2764081:14277856,transparent:!0,opacity:.9,depthWrite:!1}));d.position.set((r+a)/2,(o+l)/2,-.05),c.add(d);let u=[];for(let v=Math.ceil(r/10)*10;v<=a;v+=10)u.push(v,o,0,v,l,0);for(let v=Math.ceil(o/10)*10;v<=l;v+=10)u.push(r,v,0,a,v,0);let f=new ys(new Ze().setAttribute("position",new ye(u,3)),new dn({color:h?4474958:12106946,transparent:!0,opacity:.8}));c.add(f);let _=new vs(new Ze().setAttribute("position",new ye(e.flatMap(v=>[v[0],v[1],0]),3)),new dn({color:h?8028039:8423056}));c.add(_),this._bed=c,this._scene.add(c)}_isDark(){return this._hass?.themes?.darkMode!==void 0?!!this._hass.themes.darkMode:window.matchMedia?.("(prefers-color-scheme: dark)").matches}_buildMesh(){if(!this._renderer||!this._data)return;this._clearMesh(),this._buildBed();let t=this._data,e=Jg();e.setAttribute("iStart",new Xi(t.p0,3)),e.setAttribute("iEnd",new Xi(t.p1,3)),e.setAttribute("iSize",new Xi(t.size,2)),e.setAttribute("iColor",new Xi(new Uint8Array(t.segments*3),3,!0)),e.instanceCount=0;let i=new Je(e,this._material);i.frustumCulled=!1,this._mesh=i,this._scene.add(i),this._applyColors();let s=this._el.slider;s.min="1",s.max=String(Math.max(1,t.layers)),s.disabled=t.layers<1}_applyColors(){if(!this._mesh||!this._data)return;let t=this._data,e=this._mesh.geometry.getAttribute("iColor"),i=e.array;if(this._colorMode==="feature"){let s=Hs.map(r=>Ih(ul[r]||"#cccccc"));for(let r=0,a=t.segments;r<a;r++){let o=s[t.feature[r]]||s[0];i[r*3]=o[0],i[r*3+1]=o[1],i[r*3+2]=o[2]}}else{let r=(t.meta.filamentColors.length?t.meta.filamentColors:["#cccccc"]).map(a=>{let o=Ih(a);return .2126*o[0]+.7152*o[1]+.0722*o[2]<40?o.map(c=>c+45):o});for(let a=0,o=t.segments;a<o;a++){let l=r[t.tool[a]]||r[0];i[a*3]=l[0],i[a*3+1]=l[1],i[a*3+2]=l[2]}}e.needsUpdate=!0,this._updateLayerInfo(),this._requestRender()}_targetLayer(){let t=this._data,e=this._state||{};return t?e.status==="finish"||e.status==="idle"&&!e.layer?t.layers:Math.min(Math.max(0,e.layer||0),t.layers):0}_applyLayer(t){if(!this._el)return;this._el.live.classList.toggle("on",this._live);let e=this._data;if(!e)return;let i;t!==void 0?i=t:this._live?i=this._targetLayer():i=this._shownLayer,i=Math.min(Math.max(0,i),e.layers);let s=i!==this._shownLayer;if(this._shownLayer=i,this._el.slider.value=String(Math.max(1,i)),this._el.lnum.textContent=`${i} / ${e.layers}`,this._updateHeadLayer(),(s||!this._el.panel.innerHTML)&&this._updateLayerInfo(),this._mesh){let r=e.layerStart[Math.min(i+1,e.layerStart.length-1)],a=i>=1?e.layerStart[i]:0;this._mesh.geometry.instanceCount=i>=1?r:0,this._material.uniforms.uHiStart.value=a,this._requestRender()}}_fitCamera(){if(!this._camera||!this._data?.bounds)return;let t=this._data.bounds,e=(t.min[0]+t.max[0])/2,i=(t.min[1]+t.max[1])/2,s=Math.max(t.max[2],1),r=Math.max(Math.hypot(t.max[0]-t.min[0],t.max[1]-t.min[1],s)/2,15),a=Fs.degToRad(this._camera.fov),o=2*Math.atan(Math.tan(a/2)*Math.max(.2,this._camera.aspect||1)),l=r/Math.sin(Math.min(a,o)/2)*1.08,c=new O(e,i,s/2),h=new O(.35,-.85,.6).normalize();this._camera.position.copy(c).addScaledVector(h,l),this._camera.near=Math.max(.5,l/100),this._camera.far=l*20,this._camera.updateProjectionMatrix(),this._controls.target.copy(c),this._controls.update(),this._requestRender()}};customElements.get("bambu-layer-card")||(customElements.define("bambu-layer-card",pl),window.customCards=window.customCards||[],window.customCards.push({type:"bambu-layer-card",name:"Bambu live layer view",description:Mt(void 0,"card.layer.desc"),preview:!1}),console.info(`%c BAMBU-LAYER-CARD %c v${Vg} `,"background:#00ae42;color:#fff","background:#333;color:#fff"));var Qg=(n,t)=>n.entity_id.localeCompare(t.entity_id,void 0,{numeric:!0});function bn(n){let t=Object.values(n?.entities||{}),e=n?.devices||{};return t.filter(s=>s.platform==="bambu_lab"&&s.entity_id.startsWith("sensor.")&&(s.translation_key==="print_status"||s.entity_id.endsWith("_print_status"))&&s.device_id).map(s=>{let r=e[s.device_id]||{},a=Object.values(e).filter(d=>d.via_device_id===s.device_id),o=a.filter(d=>/ams/i.test(`${d.model||""} ${d.name||""}`)),l=a.filter(d=>/spool/i.test(`${d.model||""} ${d.name||""}`)),c=new Set(a.map(d=>d.id)),h=t.filter(d=>c.has(d.device_id)&&d.entity_id.startsWith("sensor.")&&(/_tray_\d+$/.test(d.entity_id)||/external_spool(_\d+)?$/.test(d.entity_id))).sort((d,u)=>{let f=/external/.test(d.entity_id),_=/external/.test(u.entity_id);return f===_?Qg(d,u):f?1:-1}).map(d=>d.entity_id);return{prefix:s.entity_id.slice(7).replace(/_print_status$/,""),name:r.name_by_user||r.name||s.entity_id,deviceId:s.device_id,statusEntity:s.entity_id,trays:h,amsDevices:o.map(d=>({id:d.id,name:d.name_by_user||d.model||d.name||"AMS"})),spoolDevices:l.map(d=>({id:d.id,name:d.name_by_user||d.name||""}))}}).sort((s,r)=>s.name.localeCompare(r.name))}function Lh(n,t){return bn(n).find(e=>e.prefix===t)}var Dh=new Set(["","unknown","unavailable","none","None"]),Nh={running:{color:"var(--info-color, #039be5)",icon:"mdi:printer-3d-nozzle"},prepare:{color:"var(--info-color, #039be5)",icon:"mdi:progress-clock"},slicing:{color:"var(--info-color, #039be5)",icon:"mdi:progress-clock"},pause:{color:"var(--warning-color, #ff9800)",icon:"mdi:pause-circle"},finish:{color:"var(--success-color, #43a047)",icon:"mdi:check-circle"},failed:{color:"var(--error-color, #db4437)",icon:"mdi:alert-circle"},idle:{color:"var(--disabled-text-color, #888)",icon:"mdi:sleep"},offline:{color:"var(--disabled-text-color, #888)",icon:"mdi:lan-disconnect"},unavailable:{color:"var(--disabled-text-color, #888)",icon:"mdi:lan-disconnect"}},t_=new Set(["running","prepare","slicing","pause"]),Me=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ml=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.addEventListener("click",t=>this._onClick(t))}static getStubConfig(t){let e=Object.keys(t?.states||{}).find(i=>i.startsWith("sensor.")&&i.endsWith("_print_status"));return{printer:e?e.slice(7,-13):"my_printer"}}setConfig(t){if(!t||!t.printer)throw new Error(Mt(void 0,"cfg.printer"));let e=t.printer;this._config=t,this._ent={status:`sensor.${e}_print_status`,stage:`sensor.${e}_current_stage`,progress:`sensor.${e}_print_progress`,layer:`sensor.${e}_current_layer`,total:`sensor.${e}_total_layer_count`,remaining:`sensor.${e}_remaining_time`,task:`sensor.${e}_task_name`,nozzle:`sensor.${e}_nozzle_temperature`,nozzleT:`sensor.${e}_nozzle_target_temperature`,bed:`sensor.${e}_bed_temperature`,bedT:`sensor.${e}_bed_target_temperature`,chamber:`sensor.${e}_chamber_temperature`,chamberT:`sensor.${e}_chamber_target_temperature`,online:`binary_sensor.${e}_online`,error:`binary_sensor.${e}_print_error`,hms:`binary_sensor.${e}_hms_errors`,camera:t.camera_switch||`switch.${e}_camera`,light:t.light||`light.${e}_chamber_light`,...t.entities||{}},this._trays=t.trays||null,this._snap=""}getCardSize(){return 4}getGridOptions(){return{columns:12,min_columns:6}}_tl(){return this._config?.language||this._hass}set hass(t){if(this._hass=t,!this._config)return;if(!this._trays||this._autoTrays){let r=Lh(t,this._config.printer)?.trays;r&&r.length&&(this._trays=r,this._autoTrays=!0)}let e=this._trays||[],s=[...Object.values(this._ent),...e].map(r=>{let a=t.states[r];return a?a.state+(a.attributes.active?"*":""):"-"}).join("|")+`|${Math.floor(Date.now()/6e4)}|${Ge(this._tl())}`;s!==this._snap&&(this._snap=s,this._render())}_st(t){return this._hass.states[t]}_num(t){let e=parseFloat(this._st(t)?.state);return Number.isFinite(e)?e:null}_fmt(t){let e=this._st(t);if(!e)return"";try{return this._hass.formatEntityState?this._hass.formatEntityState(e):e.state}catch{return e.state}}_temp(t,e,i,s){if(i===null)return"";let r=s!==null&&s>0&&s-i>3,a=s!==null&&s>0?`<span class="tgt">/ ${Math.round(s)}\xB0</span>`:"";return`<div class="temp${r?" heating":""}" title="${Me(t)}"><ha-icon icon="${e}"></ha-icon>
      <span class="lbl">${Me(t)}</span><span class="val">${Math.round(i)}\xB0</span>${a}</div>`}_render(){let t=this._hass,e=this._ent,i=this._st(e.status)?.state||"unknown",r=this._st(e.online)?.state==="off"?"offline":i,a=Nh[r]||{color:"var(--disabled-text-color, #888)",icon:"mdi:printer-3d"},o=Nh[r]?Mt(this._tl(),`status.${r}`):r,l=t_.has(r),c=this._config.title||(this._st(e.status)?.attributes?.friendly_name||this._config.printer).replace(/\s*Print status$/i,""),h=this._st(e.task)?.state,d=this._num(e.progress),u=this._num(e.layer),f=this._num(e.total),_=this._num(e.remaining),v=l?this._fmt(e.stage):"",m="";if(l&&_!==null&&_>0){let C=Math.floor(_),D=Math.round((_-C)*60),k=new Date(Date.now()+_*36e5),X=k.toDateString()===new Date().toDateString(),P=Ge(this._tl())==="el"?"el-GR":t.locale?.language||void 0,W=k.toLocaleTimeString(P,{hour:"2-digit",minute:"2-digit",hour12:!1}),Z=`${C?`${C} ${Mt(this._tl(),"h")} `:""}${D} ${Mt(this._tl(),"m")}`;m=`${Mt(this._tl(),"left",{t:Z})} \xB7 ${Mt(this._tl(),"ends",{c:(X?"":Mt(this._tl(),"tomorrow"))+W})}`}let p=this._st(e.camera),b=this._st(e.light),T=(C,D,k,X,P)=>C&&this._st(C)?`<button class="ib${D?" on":""}" data-toggle="${Me(C)}" title="${Me(P)}"><ha-icon icon="${D?k:X}"></ha-icon></button>`:"",w=(this._trays||[]).map(C=>this._st(C)).filter(Boolean),A=w.find(C=>C.attributes.active),E=C=>{let D=(C.attributes.color||"#888888").slice(0,7),k=C.attributes.empty||Dh.has(C.state);return`<span class="sw${C.attributes.active?" act":""}${k?" empty":""}" style="--c:${Me(D)}" data-more="${Me(C.entity_id)}" title="${Me(C.attributes.friendly_name||"")}: ${Me(C.state)}"></span>`},g=this._st(e.error)?.state==="on",S=this._st(e.hms),B=S?.state==="on";this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; }
        ha-card { padding: 12px 14px 12px; display: flex; flex-direction: column; gap: 8px; }
        .top { display: flex; align-items: center; gap: 8px; }
        .name { font-size: 16px; font-weight: 500; color: var(--primary-text-color); cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .chip { display: inline-flex; align-items: center; gap: 4px; padding: 2px 9px 2px 6px; border-radius: 12px; font-size: 12px; font-weight: 500; color: #fff; background: ${a.color}; white-space: nowrap; cursor: pointer; }
        .chip ha-icon { --mdc-icon-size: 15px; }
        .grow { flex: 1; min-width: 0; }
        .ib { border: none; background: none; color: var(--secondary-text-color); cursor: pointer; padding: 5px; border-radius: 50%; line-height: 0; }
        .ib:hover { background: color-mix(in srgb, var(--primary-text-color) 8%, transparent); }
        .ib.on { color: var(--state-active-color, var(--amber-color, #ffc107)); }
        .ib ha-icon { --mdc-icon-size: 22px; }
        .task { font-size: 13px; color: var(--secondary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .task b { color: var(--primary-text-color); font-weight: 500; }
        .bar { height: 8px; border-radius: 4px; background: color-mix(in srgb, var(--primary-text-color) 12%, transparent); overflow: hidden; }
        .bar > div { height: 100%; background: ${a.color}; border-radius: 4px; transition: width .6s; }
        .meta { display: flex; flex-wrap: wrap; gap: 4px 14px; font-size: 13px; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .meta b { color: var(--primary-text-color); font-weight: 500; }
        .big { font-size: 20px; font-weight: 600; color: var(--primary-text-color); }
        .temps { display: flex; flex-wrap: wrap; gap: 6px; }
        .temp { display: inline-flex; align-items: center; gap: 4px; padding: 3px 9px 3px 6px; border-radius: 10px; font-size: 12.5px;
          background: color-mix(in srgb, var(--primary-text-color) 6%, transparent); color: var(--secondary-text-color); font-variant-numeric: tabular-nums; }
        .temp ha-icon { --mdc-icon-size: 16px; }
        .temp .val { color: var(--primary-text-color); font-weight: 500; }
        .temp.heating ha-icon, .temp.heating .val { color: var(--warning-color, #ff9800); }
        .fil { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--secondary-text-color); }
        .fil b { color: var(--primary-text-color); font-weight: 500; }
        .sws { display: inline-flex; gap: 4px; }
        .sw { width: 14px; height: 14px; border-radius: 50%; background: var(--c); border: 1px solid color-mix(in srgb, var(--primary-text-color) 30%, transparent); cursor: pointer; box-sizing: border-box; }
        .sw.act { outline: 2px solid var(--primary-color); outline-offset: 1px; }
        .sw.empty { background: repeating-linear-gradient(45deg, transparent 0 3px, color-mix(in srgb, var(--primary-text-color) 25%, transparent) 3px 5px); }
        .alert { display: flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 8px; font-size: 13px;
          background: color-mix(in srgb, var(--error-color, #db4437) 15%, transparent); color: var(--error-color, #db4437); cursor: pointer; }
        .alert ha-icon { --mdc-icon-size: 18px; }
      </style>
      <ha-card>
        <div class="top">
          <span class="name" data-more="${Me(e.status)}">${Me(c)}</span>
          <span class="chip" data-more="${Me(e.status)}"><ha-icon icon="${a.icon}"></ha-icon>${Me(o)}</span>
          <span class="grow"></span>
          ${T(e.light,b?.state==="on","mdi:lightbulb-on","mdi:lightbulb-outline",Mt(this._tl(),"light"))}
          ${T(e.camera,p?.state==="on","mdi:video","mdi:video-off-outline",Mt(this._tl(),p?.state==="on"?"cam.off":"cam.on"))}
        </div>
        ${h&&!Dh.has(h)?`<div class="task" title="${Me(h)}"><b>${Me(h)}</b>${v?` \xB7 ${Me(v)}`:""}</div>`:""}
        ${g||B?`<div class="alert" data-more="${Me(B?e.hms:e.error)}"><ha-icon icon="mdi:alert"></ha-icon>
          ${B?Mt(this._tl(),"hms",{n:Me(S.attributes.Count??"")}):Mt(this._tl(),"perr")} \u2014 ${Mt(this._tl(),"details")}</div>`:""}
        ${d!==null&&(l||r==="finish")?`
          <div class="meta"><span class="big">${Math.round(d)}%</span>
            ${f?`<span style="align-self:center">Layer <b>${u??0}</b> / ${f}</span>`:""}
            ${m?`<span style="align-self:center">${m}</span>`:""}</div>
          <div class="bar"><div style="width:${Math.max(0,Math.min(100,d))}%"></div></div>`:""}
        <div class="temps">
          ${this._temp(Mt(this._tl(),"t.nozzle"),"mdi:printer-3d-nozzle-heat",this._num(e.nozzle),this._num(e.nozzleT))}
          ${this._temp(Mt(this._tl(),"t.bed"),"mdi:radiator",this._num(e.bed),this._num(e.bedT))}
          ${this._temp(Mt(this._tl(),"t.chamber"),"mdi:thermometer",this._num(e.chamber),this._num(e.chamberT))}
        </div>
        ${w.length?`<div class="fil"><span class="sws">${w.map(E).join("")}</span>
          ${A?`<span>${Mt(this._tl(),"fil",{n:Me(A.state)})} ${A.attributes.type?`(${Me(A.attributes.type)})`:""}</span>`:`<span>${Mt(this._tl(),"fil.none")}</span>`}</div>`:""}
      </ha-card>`}_onClick(t){let e=t.composedPath(),i=e.find(r=>r.dataset&&r.dataset.toggle);if(i){t.stopPropagation();let r=i.dataset.toggle;this._hass.callService(r.split(".")[0],"toggle",{entity_id:r});return}let s=e.find(r=>r.dataset&&r.dataset.more);s&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:s.dataset.more},bubbles:!0,composed:!0}))}};customElements.get("bambu-status-card")||(customElements.define("bambu-status-card",ml),window.customCards=window.customCards||[],window.customCards.push({type:"bambu-status-card",name:Mt(void 0,"card.status.name"),description:Mt(void 0,"card.status.desc"),preview:!1}));var e_="bambu_tools/bambu_print_notifications.yaml",i_="bambu_tools/bambu_weekly_report.yaml",Uh="bambu_tools_weekly_report",tn="bambu-tools",Fh=["finish","failed","pause","hms","first_layer","near_end"],n_=["finish","failed","pause","hms","first_layer"],gl={en:{title:"Bambu Tools \u2013 setup",progress:"{d} of {n} steps ready",refresh:"Refresh",admin:"Administrator rights are needed for this page.",s1:"Connect your printers (ha-bambulab)",s1_missing:"The Bambu Lab integration (ha-bambulab) is not loaded. If the Bambu Tools app just installed it, restart Home Assistant.",s1_none:"ha-bambulab is installed but no printer is connected yet.",s1_ok:"{n} printer connection(s):",add:"Add a printer",restart_ha:"Restart Home Assistant",restart_q:"Restart Home Assistant now?",s2:"Check each printer",online:"Online",offline:"Offline",camera:"Camera",cam_ok:"streaming",cam_off:"turned off in Home Assistant",turn_on:"Turn on",cam_h2:"unavailable \u2013 on the printer turn on LAN Only Liveview (does not switch the printer to LAN-only)",gcode:"G-code for the live layer view",gcode_ok:"available",gcode_wait:"appears when the next print starts",gcode_h2:'needs a USB drive and "Store Sent Files on External Storage" on the printer',gcode_sd:"needs the SD card in the printer",control:"Pause/stop buttons",control_ok:"available (Developer Mode)",control_ro:"read-only \u2013 needs LAN Only + Developer Mode (optional)",fw:"Firmware",fw_up:"update available",fw_ok:"up to date",no_printers:"No printers yet \u2013 finish step 1.",s3:"Phone notifications",phone:"Phone",events:"Notify on",ev_finish:"finished",ev_failed:"failed",ev_pause:"paused",ev_hms:"HMS message",enable:"Turn on notifications",enabled:"On",disabled:"Off",edit:"Edit",no_phone:"No phone with the Home Assistant app found. Install the Companion app and log in.",legacy:'Automation "{n}" also sends print notifications \u2013 you may get them twice.',disable:"Turn it off",s4:"Dashboard",dash_ok:'The "Bambu" dashboard exists.',dash_missing:'The "Bambu" dashboard does not exist.',create:"Create it",open:"Open",language:"Language",auto:"Same as Home Assistant",saved:"Saved",s5:"Slicer \u2013 the Bambu Tools app",app_missing:"The Bambu Tools app was not found (Settings \u2192 Apps).",state:"State",started:"running",stopped:"stopped",start:"Start",stop:"Stop",restart:"Restart",update:"Update to {v}",open_slicer:"Open the slicer",version:"Version",o_start_slicer:"Run the slicer (\u22481 GB RAM)",o_username:"Slicer user name",o_password:"Slicer password",o_password_ph:"unchanged",o_dark_mode:"Dark mode",o_install_ha_bambulab:"Install ha-bambulab when missing",o_create_dashboard:'Create the "Bambu" dashboard',save:"Save settings",saved_restart:"Saved. Restart the app to apply.",working:"Working\u2026",error:"Error: {e}",checks:"Checks",device_page:"All printer settings",all_settings:"Bambu Tools settings",no_printer:'Printer "{p}" not found.',s5_app:"The Bambu Tools app",ev_first_layer:"first layer (picture)",ev_near_end:"near the end",o_boot:"Start with Home Assistant (needed for the print history)",weekly:"Weekly report",weekly_off:"a summary of the week on Sunday at 20:00",weekly_desc:"{d} {t} \xB7 {p}",cost:"Print cost",cost_hint:"Prices are used for the cost of every print in the history (also older ones). Leave a field empty if you do not want it counted.",cost_mat:"Filament price per kg ({c})",cost_new:"Other material",cost_kwh:"Electricity price per kWh ({c})",cost_w:"Average power while printing (W) \u2013 an estimate, e.g. about 100 W for an A1",cost_save:"Save prices",cost_saving:"Saving\u2026",cost_saved:"Saved",cost_noapp:"Needs the Bambu Tools app 1.7 or newer, running.",cost_err:"Not saved: {e}",bl:"ha-bambulab {v}",bl_ok:"up to date",bl_new:"version {v} is available",bl_update:"Update",bl_hacs:"Update from the store",bl_by_app:"installed by this app: it is updated when the app restarts",bl_by_hand:'installed by hand: "Update" lets the app keep it up to date from now on',bl_after:"ha-bambulab is being updated. When the notification appears, restart Home Assistant.",slicer_pw:"The slicer is turned on but has no password, so it is not running. Set a password below.",no_slicer:"The slicer (Bambu Studio) runs only on x86-64 computers, not on this one ({a}, e.g. Raspberry Pi). Everything else works."},el:{title:"Bambu Tools \u2013 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2",progress:"{d} \u03B1\u03C0\u03CC {n} \u03B2\u03AE\u03BC\u03B1\u03C4\u03B1 \u03AD\u03C4\u03BF\u03B9\u03BC\u03B1",refresh:"\u0391\u03BD\u03B1\u03BD\u03AD\u03C9\u03C3\u03B7",admin:"\u0397 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03B8\u03AD\u03BB\u03B5\u03B9 \u03B4\u03B9\u03BA\u03B1\u03B9\u03CE\u03BC\u03B1\u03C4\u03B1 \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE.",s1:"\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03CE\u03BD (ha-bambulab)",s1_missing:"\u0397 integration Bambu Lab (ha-bambulab) \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03C6\u03BF\u03C1\u03C4\u03C9\u03B8\u03B5\u03AF. \u0391\u03BD \u03BC\u03CC\u03BB\u03B9\u03C2 \u03C4\u03B7\u03BD \u03B5\u03B3\u03BA\u03B1\u03C4\u03AD\u03C3\u03C4\u03B7\u03C3\u03B5 \u03C4\u03BF app Bambu Tools, \u03BA\u03AC\u03BD\u03B5 restart \u03C3\u03C4\u03BF Home Assistant.",s1_none:"\u03A4\u03BF ha-bambulab \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9, \u03B1\u03BB\u03BB\u03AC \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03C3\u03C5\u03BD\u03B4\u03B5\u03B8\u03B5\u03AF \u03B1\u03BA\u03CC\u03BC\u03B1 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE\u03C2.",s1_ok:"{n} \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7(\u03B5\u03B9\u03C2) \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE:",add:"\u03A0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C3\u03B5 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE",restart_ha:"Restart Home Assistant",restart_q:"\u039D\u03B1 \u03B3\u03AF\u03BD\u03B5\u03B9 restart \u03C3\u03C4\u03BF Home Assistant \u03C4\u03CE\u03C1\u03B1;",s2:"\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03BA\u03AC\u03B8\u03B5 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE",online:"\u03A3\u03B5 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7",offline:"\u0395\u03BA\u03C4\u03CC\u03C2 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7\u03C2",camera:"\u039A\u03AC\u03BC\u03B5\u03C1\u03B1",cam_ok:"\u03B4\u03BF\u03C5\u03BB\u03B5\u03CD\u03B5\u03B9",cam_off:"\u03BA\u03BB\u03B5\u03B9\u03C3\u03C4\u03AE \u03B1\u03C0\u03CC \u03C4\u03BF Home Assistant",turn_on:"\u0386\u03BD\u03BF\u03B9\u03BE\u03AD \u03C4\u03B7\u03BD",cam_h2:"\u03BC\u03B7 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7 \u2013 \u03C3\u03C4\u03BF\u03BD \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE \u03AC\u03BD\u03BF\u03B9\u03BE\u03B5 \u03C4\u03BF LAN Only Liveview (\u03B4\u03B5\u03BD \u03C4\u03BF\u03BD \u03B2\u03AC\u03B6\u03B5\u03B9 \u03C3\u03B5 LAN only)",gcode:"G-code \u03B3\u03B9\u03B1 \u03C4\u03BF live layer view",gcode_ok:"\u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9",gcode_wait:"\u03B8\u03B1 \u03B5\u03BC\u03C6\u03B1\u03BD\u03B9\u03C3\u03C4\u03B5\u03AF \u03BC\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03B7 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7",gcode_h2:"\u03B8\u03AD\u03BB\u03B5\u03B9 USB stick \u03BA\u03B1\u03B9 \u03C4\u03B7 \u03C1\u03CD\u03B8\u03BC\u03B9\u03C3\u03B7 \xABStore Sent Files on External Storage\xBB \u03C3\u03C4\u03BF\u03BD \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE",gcode_sd:"\u03B8\u03AD\u03BB\u03B5\u03B9 \u03C4\u03B7\u03BD \u03BA\u03AC\u03C1\u03C4\u03B1 SD \u03C3\u03C4\u03BF\u03BD \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE",control:"\u039A\u03BF\u03C5\u03BC\u03C0\u03B9\u03AC pause/stop",control_ok:"\u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B1 (Developer Mode)",control_ro:"\u03BC\u03CC\u03BD\u03BF \u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7 \u2013 \u03B8\u03AD\u03BB\u03B5\u03B9 LAN Only + Developer Mode (\u03C0\u03C1\u03BF\u03B1\u03B9\u03C1\u03B5\u03C4\u03B9\u03BA\u03CC)",fw:"Firmware",fw_up:"\u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B5\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7",fw_ok:"\u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF",no_printers:"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03B1\u03BA\u03CC\u03BC\u03B1 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AD\u03C2 \u2013 \u03BF\u03BB\u03BF\u03BA\u03BB\u03AE\u03C1\u03C9\u03C3\u03B5 \u03C4\u03BF \u03B2\u03AE\u03BC\u03B1 1.",s3:"\u0395\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 \u03C3\u03C4\u03BF \u03BA\u03B9\u03BD\u03B7\u03C4\u03CC",phone:"\u039A\u03B9\u03BD\u03B7\u03C4\u03CC",events:"\u0395\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B3\u03B9\u03B1",ev_finish:"\u03C4\u03AD\u03BB\u03BF\u03C2",ev_failed:"\u03B1\u03C0\u03BF\u03C4\u03C5\u03C7\u03AF\u03B1",ev_pause:"\u03C0\u03B1\u03CD\u03C3\u03B7",ev_hms:"\u03BC\u03AE\u03BD\u03C5\u03BC\u03B1 HMS",enable:"\u0395\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03C9\u03BD",enabled:"\u0395\u03BD\u03B5\u03C1\u03B3\u03AD\u03C2",disabled:"\u0391\u03BD\u03B5\u03BD\u03B5\u03C1\u03B3\u03AD\u03C2",edit:"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1",no_phone:"\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03BA\u03B9\u03BD\u03B7\u03C4\u03CC \u03BC\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE Home Assistant. \u0395\u03B3\u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B7\u03C3\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u03BA\u03B1\u03B9 \u03C3\u03C5\u03BD\u03B4\u03AD\u03C3\u03BF\u03C5.",legacy:"\u03A4\u03BF automation \xAB{n}\xBB \u03C3\u03C4\u03AD\u03BB\u03BD\u03B5\u03B9 \u03BA\u03B9 \u03B1\u03C5\u03C4\u03CC \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03B5\u03B9\u03C2 \u03B5\u03BA\u03C4\u03C5\u03C0\u03CE\u03C3\u03B5\u03C9\u03BD \u2013 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03C4\u03B9\u03C2 \u03C0\u03B1\u03AF\u03C1\u03BD\u03B5\u03B9\u03C2 \u03B4\u03B9\u03C0\u03BB\u03AD\u03C2.",disable:"\u0391\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03AD \u03C4\u03BF",s4:"Dashboard",dash_ok:"\u03A4\u03BF dashboard \xABBambu\xBB \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9.",dash_missing:"\u03A4\u03BF dashboard \xABBambu\xBB \u03B4\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9.",create:"\u03A6\u03C4\u03B9\u03AC\u03BE\u2019 \u03C4\u03BF",open:"\u0386\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1",language:"\u0393\u03BB\u03CE\u03C3\u03C3\u03B1",auto:"\u038C\u03C0\u03C9\u03C2 \u03C4\u03BF Home Assistant",saved:"\u0391\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03CD\u03C4\u03B7\u03BA\u03B5",s5:"Slicer \u2013 \u03C4\u03BF app Bambu Tools",app_missing:"\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03C4\u03BF app Bambu Tools (Settings \u2192 Apps).",state:"\u039A\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7",started:"\u03C4\u03C1\u03AD\u03C7\u03B5\u03B9",stopped:"\u03C3\u03C4\u03B1\u03BC\u03B1\u03C4\u03B7\u03BC\u03AD\u03BD\u03BF",start:"Start",stop:"Stop",restart:"Restart",update:"\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03C3\u03B5 {v}",open_slicer:"\u0386\u03BD\u03BF\u03B9\u03B3\u03BC\u03B1 slicer",version:"\u0388\u03BA\u03B4\u03BF\u03C3\u03B7",o_start_slicer:"\u039D\u03B1 \u03C4\u03C1\u03AD\u03C7\u03B5\u03B9 \u03BF slicer (\u22481 GB RAM)",o_username:"\u038C\u03BD\u03BF\u03BC\u03B1 \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7 slicer",o_password:"\u039A\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 slicer",o_password_ph:"\u03B1\u03BC\u03B5\u03C4\u03AC\u03B2\u03BB\u03B7\u03C4\u03BF\u03C2",o_dark_mode:"\u03A3\u03BA\u03BF\u03CD\u03C1\u03BF \u03B8\u03AD\u03BC\u03B1",o_install_ha_bambulab:"\u0395\u03B3\u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 ha-bambulab \u03B1\u03BD \u03BB\u03B5\u03AF\u03C0\u03B5\u03B9",o_create_dashboard:"\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 dashboard \xABBambu\xBB",save:"\u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03C9\u03BD",saved_restart:"\u0391\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03CD\u03C4\u03B7\u03BA\u03B5. \u039A\u03AC\u03BD\u03B5 Restart \u03C3\u03C4\u03BF app \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B9\u03C3\u03C7\u03CD\u03C3\u03B5\u03B9.",working:"\u03A0\u03B5\u03C1\u03AF\u03BC\u03B5\u03BD\u03B5\u2026",error:"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1: {e}",checks:"\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2",device_page:"\u038C\u03BB\u03B5\u03C2 \u03BF\u03B9 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u03C4\u03BF\u03C5 \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE",all_settings:"\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 Bambu Tools",no_printer:"\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03BF \u03B5\u03BA\u03C4\u03C5\u03C0\u03C9\u03C4\u03AE\u03C2 \xAB{p}\xBB.",s5_app:"\u03A4\u03BF app Bambu Tools",ev_first_layer:"1\u03BF layer (\u03BC\u03B5 \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1)",ev_near_end:"\u03BB\u03AF\u03B3\u03BF \u03C0\u03C1\u03B9\u03BD \u03C4\u03BF \u03C4\u03AD\u03BB\u03BF\u03C2",o_boot:"\u039E\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B1\u03B6\u03AF \u03BC\u03B5 \u03C4\u03BF Home Assistant (\u03C7\u03C1\u03B5\u03B9\u03AC\u03B6\u03B5\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03C4\u03BF \u03B9\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC \u03B5\u03BA\u03C4\u03C5\u03C0\u03CE\u03C3\u03B5\u03C9\u03BD)",weekly:"\u0395\u03B2\u03B4\u03BF\u03BC\u03B1\u03B4\u03B9\u03B1\u03AF\u03B1 \u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC",weekly_off:"\u03C3\u03CD\u03BD\u03BF\u03C8\u03B7 \u03C4\u03B7\u03C2 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1\u03C2 \u03C4\u03B7\u03BD \u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE \u03C3\u03C4\u03B9\u03C2 20:00",weekly_desc:"{d} {t} \xB7 {p}",cost:"\u039A\u03CC\u03C3\u03C4\u03BF\u03C2 \u03B5\u03BA\u03C4\u03C5\u03C0\u03CE\u03C3\u03B5\u03C9\u03BD",cost_hint:"\u039F\u03B9 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BD\u03C4\u03B1\u03B9 \u03B3\u03B9\u03B1 \u03C4\u03BF \u03BA\u03CC\u03C3\u03C4\u03BF\u03C2 \u03BA\u03AC\u03B8\u03B5 \u03B5\u03BA\u03C4\u03CD\u03C0\u03C9\u03C3\u03B7\u03C2 \u03C3\u03C4\u03BF \u03B9\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC (\u03BA\u03B1\u03B9 \u03C4\u03C9\u03BD \u03C0\u03B1\u03BB\u03B9\u03CE\u03BD). \u0386\u03C6\u03B7\u03C3\u03B5 \u03AD\u03BD\u03B1 \u03C0\u03B5\u03B4\u03AF\u03BF \u03BA\u03B5\u03BD\u03CC \u03B1\u03BD \u03B4\u03B5\u03BD \u03B8\u03AD\u03BB\u03B5\u03B9\u03C2 \u03BD\u03B1 \u03BC\u03B5\u03C4\u03C1\u03AC.",cost_mat:"\u03A4\u03B9\u03BC\u03AE \u03BD\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03B1\u03BD\u03AC \u03BA\u03B9\u03BB\u03CC ({c})",cost_new:"\u0386\u03BB\u03BB\u03BF \u03C5\u03BB\u03B9\u03BA\u03CC",cost_kwh:"\u03A4\u03B9\u03BC\u03AE \u03C1\u03B5\u03CD\u03BC\u03B1\u03C4\u03BF\u03C2 \u03B1\u03BD\u03AC kWh ({c})",cost_w:"\u039C\u03AD\u03C3\u03B7 \u03B9\u03C3\u03C7\u03CD\u03C2 \u03CC\u03C3\u03BF \u03C4\u03C5\u03C0\u03CE\u03BD\u03B5\u03B9 (W) \u2013 \u03B5\u03BA\u03C4\u03AF\u03BC\u03B7\u03C3\u03B7, \u03C0.\u03C7. \u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 100 W \u03B3\u03B9\u03B1 \u03AD\u03BD\u03B1 A1",cost_save:"\u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7 \u03C4\u03B9\u03BC\u03CE\u03BD",cost_saving:"\u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7\u2026",cost_saved:"\u0391\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03CD\u03C4\u03B7\u03BA\u03B5",cost_noapp:"\u0398\u03AD\u03BB\u03B5\u03B9 \u03C4\u03BF app Bambu Tools 1.7 \u03AE \u03BD\u03B5\u03CC\u03C4\u03B5\u03C1\u03BF, \u03C3\u03B5 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1.",cost_err:"\u0394\u03B5\u03BD \u03B1\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03CD\u03C4\u03B7\u03BA\u03B5: {e}",bl:"ha-bambulab {v}",bl_ok:"\u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF",bl_new:"\u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B7 \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7 {v}",bl_update:"\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7",bl_hacs:"\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03B1\u03C0\u03CC \u03C4\u03BF store",bl_by_app:"\u03C4\u03BF \u03AD\u03B2\u03B1\u03BB\u03B5 \u03C4\u03BF app: \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03BD\u03B5\u03C4\u03B1\u03B9 \u03CC\u03C4\u03B1\u03BD \u03BA\u03AC\u03BD\u03B5\u03B9 restart \u03C4\u03BF app",bl_by_hand:"\u03BC\u03C0\u03AE\u03BA\u03B5 \u03BC\u03B5 \u03C4\u03BF \u03C7\u03AD\u03C1\u03B9: \u03C4\u03BF \xAB\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7\xBB \u03B1\u03C6\u03AE\u03BD\u03B5\u03B9 \u03C4\u03BF app \u03BD\u03B1 \u03C4\u03BF \u03BA\u03C1\u03B1\u03C4\u03AC \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF \u03B1\u03C0\u03CC \u03B5\u03B4\u03CE \u03BA\u03B1\u03B9 \u03C0\u03AD\u03C1\u03B1",bl_after:"\u03A4\u03BF ha-bambulab \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03BD\u03B5\u03C4\u03B1\u03B9. \u039C\u03CC\u03BB\u03B9\u03C2 \u03B2\u03B3\u03B5\u03B9 \u03B7 \u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7, \u03BA\u03AC\u03BD\u03B5 restart \u03C3\u03C4\u03BF Home Assistant.",slicer_pw:"\u039F slicer \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03BD\u03BF\u03B9\u03C7\u03C4\u03CC\u03C2 \u03B1\u03BB\u03BB\u03AC \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03B9 \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC, \u03BF\u03C0\u03CC\u03C4\u03B5 \u03B4\u03B5\u03BD \u03C4\u03C1\u03AD\u03C7\u03B5\u03B9. \u0392\u03AC\u03BB\u03B5 \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9.",no_slicer:"\u039F slicer (Bambu Studio) \u03C4\u03C1\u03AD\u03C7\u03B5\u03B9 \u03BC\u03CC\u03BD\u03BF \u03C3\u03B5 \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03AD\u03C2 x86-64, \u03CC\u03C7\u03B9 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03CC\u03BD ({a}, \u03C0.\u03C7. Raspberry Pi). \u038C\u03BB\u03B1 \u03C4\u03B1 \u03C5\u03C0\u03CC\u03BB\u03BF\u03B9\u03C0\u03B1 \u03B4\u03BF\u03C5\u03BB\u03B5\u03CD\u03BF\u03C5\u03BD."}},Tt=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),_l=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._form={},this._dirty=new Set,this._msg={},this.shadowRoot.addEventListener("click",t=>this._onClick(t)),this.shadowRoot.addEventListener("input",t=>this._onInput(t)),this.shadowRoot.addEventListener("change",t=>this._onInput(t))}setConfig(t){this._config=t||{},this.toggleAttribute("printer",!!this._config.printer)}connectedCallback(){this._data&&this._load()}getCardSize(){return this._config?.printer?6:12}getGridOptions(){return{columns:"full"}}_t(t,e){let i=Ge(this._config?.language||this._hass),s=(gl[i]||gl.en)[t]??gl.en[t]??t;return e?s.replace(/\{(\w+)\}/g,(r,a)=>e[a]??""):s}set hass(t){let e=!this._hass;if(this._hass=t,e){this._load();return}let i=Date.now();this._data&&i-(this._lastRender||0)>5e3&&!this.shadowRoot.activeElement&&this._render()}async _ws(t){return this._hass.callWS(t)}async _sv(t,e="get",i){return this._hass.callWS({type:"supervisor/api",endpoint:t,method:e,...i?{data:i}:{},timeout:null})}async _load(){let t=this._hass,e={admin:!!t.user?.is_admin};if(!e.admin){this._data=e,this._render();return}try{e.loaded=t.config.components.includes("bambu_lab"),e.entries=e.loaded?await this._ws({type:"config_entries/get",domain:"bambu_lab"}).catch(()=>[]):[];let i=await this._ws({type:"config/device_registry/list"}).catch(()=>[]);e.phones=i.filter(a=>(a.identifiers||[]).some(o=>o[0]==="mobile_app")).map(a=>({id:a.id,name:a.name_by_user||a.name}));let s=Object.values(t.states).filter(a=>a.entity_id.startsWith("automation.")&&a.attributes.id),r=await Promise.all(s.map(a=>t.callApi("GET",`config/automation/config/${a.attributes.id}`).then(o=>({entity:a.entity_id,state:a.state,id:a.attributes.id,name:a.attributes.friendly_name,cfg:o})).catch(()=>null)));e.ours={},e.legacy=[];for(let a of r.filter(Boolean)){let o=a.cfg.use_blueprint;o&&String(o.path).endsWith("bambu_print_notifications.yaml")?e.ours[o.input?.print_status]=a:o&&String(o.path).endsWith("bambu_weekly_report.yaml")?e.weekly=a:!o&&JSON.stringify(a.cfg).includes("_print_status")&&/notify/.test(JSON.stringify(a.cfg.actions||a.cfg.action||""))&&e.legacy.push(a)}if(!this._config?.printer){let a=await this._ws({type:"lovelace/dashboards/list"}).catch(()=>[]);if(e.dash=a.find(c=>c.url_path===tn)||null,e.dash){let c=await this._ws({type:"lovelace/config",url_path:tn}).catch(()=>null);e.dashLang=c?.strategy?.language||"",e.dashStrategy=!!c?.strategy}let l=((await this._sv("/addons").catch(()=>null))?.addons||[]).find(c=>/(^|_)bambu_tools$/.test(c.slug));l&&(e.app=await this._sv(`/addons/${l.slug}/info`).catch(()=>null)),e.hostArch=(await this._sv("/info").catch(()=>null))?.arch||""}e.error=null}catch(i){e.error=String(i.message||i)}if(this._data=e,e.app)for(let i of["start_slicer","username","dark_mode","install_ha_bambulab","create_dashboard"])this._dirty.has(i)||(this._form[i]=e.app.options?.[i]);this._render()}_badge(t,e){return t?'<span class="b ok">\u2713</span>':`<span class="b ${e?"warn":"no"}">${e?"!":"\u2022"}</span>`}_row(t,e,i,s="",r=!t){return`<div class="row">${this._badge(t,r)}<span class="lbl">${Tt(e)}</span><span class="txt">${i}</span>${s}</div>`}_box(t,e,i){return i?`<div class="printer"><div class="pname">${Tt(t.name)}</div>${e}</div>`:e}_printerChecks(t,e=!0){let i=p=>this._hass.states[p],s=/(^|_)(h2|x1)/i.test(t.prefix)||/H2|X1/i.test(this._hass.devices?.[t.deviceId]?.model||""),r=i(`binary_sensor.${t.prefix}_online`)?.state==="on",a=i(`camera.${t.prefix}_camera`),o=i(`switch.${t.prefix}_camera`),l=a&&!["unavailable","unknown"].includes(a.state),c=l?this._t("cam_ok"):"",h="";o?.state==="off"?(l=!1,c=this._t("cam_off"),h=`<button class="s" data-act="toggle" data-id="switch.${t.prefix}_camera">${this._t("turn_on")}</button>`):l||(c=s?this._t("cam_h2"):"unavailable");let d=i(`sensor.${t.prefix}_gcode_file_downloaded`)?.state,u=i(`sensor.${t.prefix}_sd_card_status`)?.state,f=d&&!["unknown","unavailable","","ERROR"].includes(d),_=this._t("gcode_ok");f||(_=u==="missing"||u==="abnormal"?this._t(s?"gcode_h2":"gcode_sd"):this._t("gcode_wait"));let v=i(`binary_sensor.${t.prefix}_developer_lan_mode`)?.state==="on",m=i(`binary_sensor.${t.prefix}_firmware`)?.state==="on";return this._box(t,`
      ${this._row(r,this._t(r?"online":"offline"),"")}
      ${this._row(l,this._t("camera"),Tt(c),h)}
      ${this._row(f,this._t("gcode"),Tt(_),"",!f&&(u==="missing"||u==="abnormal"))}
      ${this._row(v,this._t("control"),Tt(this._t(v?"control_ok":"control_ro")),"",!1)}
      ${this._row(!m,this._t("fw"),Tt(this._t(m?"fw_up":"fw_ok")),"",m)}`,e)}_notifyBlock(t,e,i=!0){let s=e.ours[t.statusEntity];if(s){let l=s.state==="on",c=s.cfg.use_blueprint.input||{},h=e.phones.find(u=>u.id===c.notify_device)?.name||"",d=(c.notify_on||Fh).map(u=>this._t(`ev_${u}`)).join(", ");return this._box(t,`
        ${this._row(l,this._t(l?"enabled":"disabled"),Tt(`${h} \xB7 ${d}`),`<button class="s" data-act="toggle" data-id="${Tt(s.entity)}">${this._t(l?"disable":"turn_on")}</button>
           <button class="s" data-act="nav" data-path="/config/automation/edit/${Tt(s.id)}">${this._t("edit")}</button>`,!1)}`,i)}if(!e.phones.length)return this._box(t,`<div class="hint">${this._t("no_phone")}</div>`,i);let r=this._form[`n_${t.prefix}`]||(this._form[`n_${t.prefix}`]={phone:e.phones[0].id,events:[...n_]}),a=e.phones.map(l=>`<option value="${Tt(l.id)}"${l.id===r.phone?" selected":""}>${Tt(l.name)}</option>`).join(""),o=Fh.map(l=>`<label class="chk"><input type="checkbox" data-n="${Tt(t.prefix)}" data-ev="${l}"${r.events.includes(l)?" checked":""}>${this._t(`ev_${l}`)}</label>`).join("");return this._box(t,`
      <div class="form"><label>${this._t("phone")} <select data-n="${Tt(t.prefix)}" data-field="phone">${a}</select></label>
      <div class="evs"><span>${this._t("events")}:</span> ${o}</div>
      <button class="p" data-act="notify" data-prefix="${Tt(t.prefix)}">${this._t("enable")}</button></div>`,i)}_costSet(){let t=this._status()?.settings;return t&&(Object.keys(t.materials||{}).length||t.price_kwh!=null)}_costForm(){let t=this._status();if(!this._cost||!this._costDirty){let e=t?.settings||{};this._cost={materials:{...e.materials||{}},price_kwh:e.price_kwh??"",watts:{...e.watts||{}},newName:"",newPrice:""};for(let i of t?.materials_seen||[])i in this._cost.materials||(this._cost.materials[i]="")}return this._cost}_costBlock(){let t=this._status();if(!t||!t.settings)return`<div class="hint">${this._t("cost_noapp")}</div>`;let e=this._costForm(),i=Tt(t.currency||"\u20AC"),s=(l,c,h="")=>`<input type="number" min="0" step="0.01" data-cost="${Tt(l)}" value="${Tt(c??"")}" placeholder="${Tt(h)}">`,r=Object.keys(e.materials).sort().map(l=>`<label>${Tt(l)} ${s(`mat:${l}`,e.materials[l])}</label>`).join(""),a=t.printer_names||{},o=Object.keys(a).map(l=>`<label>${Tt(a[l])} ${s(`w:${l}`,e.watts[l],"100")}</label>`).join("");return`<div class="hint">${Tt(this._t("cost_hint"))}</div>
      <div class="lbl">${Tt(this._t("cost_mat",{c:i}))}</div>
      <div class="form">${r}
        <label>${Tt(this._t("cost_new"))} <input type="text" data-cost="new-name" value="${Tt(e.newName)}" placeholder="PETG" size="8">
          ${s("new-price",e.newPrice)}</label></div>
      <div class="form"><label>${Tt(this._t("cost_kwh",{c:i}))} ${s("kwh",e.price_kwh,"0.20")}</label></div>
      <div class="lbl">${Tt(this._t("cost_w"))}</div>
      <div class="form">${o}</div>
      <div><button class="p" data-act="save-cost">${this._t("cost_save")}</button> <span class="msg">${Tt(this._msg.cost||"")}</span></div>`}async _saveCost(){let t=this._costForm(),e={...t.materials};String(t.newName).trim()&&t.newPrice!==""&&(e[String(t.newName).trim()]=t.newPrice);let i=Date.now();this._msg.cost=this._t("cost_saving"),await this._ws({type:"fire_event",event_type:"bambu_tools_command",event_data:{cmd:"set_costs",rev:i,materials:e,price_kwh:t.price_kwh,watts:t.watts}});for(let s=0;s<40;s++){let r=this._status();if(r?.settings_rev===i){this._costDirty=!1,this._msg.cost=this._t("cost_saved");return}if(r?.settings_error?.rev===i){this._msg.cost=this._t("cost_err",{e:r.settings_error.error});return}await new Promise(a=>setTimeout(a,250))}this._msg.cost=this._t("cost_err",{e:"no answer from the app"})}_weeklyBlock(t){let e=t.weekly;if(e){let i=e.state==="on",s=e.cfg.use_blueprint.input||{},r=t.phones.find(o=>o.id===s.notify_device)?.name||"",a=new Date(2026,10,15+["sun","mon","tue","wed","thu","fri","sat"].indexOf(s.weekday||"sun")).toLocaleDateString(Ge(this._config?.language||this._hass)==="el"?"el-GR":"en-GB",{weekday:"long"});return this._box({name:this._t("weekly")},this._row(i,this._t(i?"enabled":"disabled"),Tt(this._t("weekly_desc",{d:a,t:String(s.at_time||"20:00").slice(0,5),p:r})),`<button class="s" data-act="toggle" data-id="${Tt(e.entity)}">${this._t(i?"disable":"turn_on")}</button>
         <button class="s" data-act="nav" data-path="/config/automation/edit/${Tt(e.id)}">${this._t("edit")}</button>`,!1),!0)}return t.phones.length?this._box({name:this._t("weekly")},`<div class="row"><span class="txt">${Tt(this._t("weekly_off"))}</span>
      <button class="p" data-act="weekly">${this._t("enable")}</button></div>`,!0):""}async _createWeekly(){let t=this._data,e=Object.values(t.ours)[0]?.cfg?.use_blueprint?.input?.notify_device||t.phones[0]?.id;if(!e)return;await this._hass.callApi("POST",`config/automation/config/${Uh}`,{alias:"Bambu Tools \u2013 weekly report",description:"Created by the Bambu Tools setup page.",use_blueprint:{path:i_,input:{notify_device:e,weekday:"sun",at_time:"20:00:00",dashboard_path:`/${tn}/overview`}}});let i=()=>Object.values(this._hass.states).some(s=>s.entity_id.startsWith("automation.")&&s.attributes.id===Uh);for(let s=0;s<40&&this.isConnected&&!i();s++)await new Promise(r=>setTimeout(r,250))}_appBlock(t){let e=t.app;if(!e)return`<div class="hint">${this._t("app_missing")}</div>`;let i=e.state==="started",s=this._form,r=location.hostname,a=o=>`<label class="chk"><input type="checkbox" data-opt="${o}"${s[o]?" checked":""}>${this._t(`o_${o}`)}</label>`;return this._slicerHere(t)?`
      ${this._row(i,this._t("state"),`${this._t(i?"started":"stopped")} \xB7 ${this._t("version")} ${Tt(e.version)}`,`<button class="s" data-act="app" data-op="${i?"stop":"start"}">${this._t(i?"stop":"start")}</button>
         ${i?`<button class="s" data-act="app" data-op="restart">${this._t("restart")}</button>`:""}
         ${e.update_available?`<button class="p" data-act="app-update">${this._t("update",{v:Tt(e.version_latest)})}</button>`:""}
         ${i&&s.start_slicer?`<a class="s" href="https://${Tt(r)}:3001" target="_blank" rel="noopener">${this._t("open_slicer")}</a>`:""}`,!i)}
      ${this._status()?.slicer==="needs_password"?`<div class="warnbox">${this._t("slicer_pw")}</div>`:""}
      ${this._bootToggle(e)}
      <div class="form grid">
        ${a("start_slicer")}
        <label>${this._t("o_username")} <input type="text" data-opt="username" value="${Tt(s.username??"")}" autocomplete="off"></label>
        <label>${this._t("o_password")} <input type="password" data-opt="password" placeholder="${this._t("o_password_ph")}" autocomplete="new-password"></label>
        ${a("dark_mode")}${a("install_ha_bambulab")}${a("create_dashboard")}
        <div><button class="p" data-act="save-app">${this._t("save")}</button> <span class="msg">${Tt(this._msg.app||"")}</span></div>
      </div>`:`
      ${this._row(i,this._t("state"),`${this._t(i?"started":"stopped")} \xB7 ${this._t("version")} ${Tt(e.version)}`,`<button class="s" data-act="app" data-op="${i?"stop":"start"}">${this._t(i?"stop":"start")}</button>
         ${i?`<button class="s" data-act="app" data-op="restart">${this._t("restart")}</button>`:""}
         ${e.update_available?`<button class="p" data-act="app-update">${this._t("update",{v:Tt(e.version_latest)})}</button>`:""}`,!i)}
      <div class="hint">${this._t("no_slicer",{a:Tt(t.hostArch)})}</div>
      ${this._bootToggle(e)}
      <div class="form grid">
        ${a("install_ha_bambulab")}${a("create_dashboard")}
        <div><button class="p" data-act="save-app">${this._t("save")}</button> <span class="msg">${Tt(this._msg.app||"")}</span></div>
      </div>`}_slicerHere(t){return!t.hostArch||t.hostArch==="amd64"}_status(){return this._hass?.states["sensor.bambu_tools"]?.attributes}_bootToggle(t){return`<label class="chk boot"><input type="checkbox" data-act-change="boot"${t.boot==="auto"?" checked":""}>${this._t("o_boot")}</label>`}_bambulabRow(){let t=this._status();if(!t||!t.ha_bambulab_installed)return"";let e=String(t.ha_bambulab_installed),i=t.ha_bambulab_latest?String(t.ha_bambulab_latest):"",s=c=>c.split(/[^0-9]+/).filter(Boolean).map(Number);if(!i||!((c,h)=>{let d=s(c),u=s(h);for(let f=0;f<Math.max(d.length,u.length);f++)if((d[f]||0)!==(u[f]||0))return(d[f]||0)>(u[f]||0);return!1})(i,e))return this._row(!0,this._t("bl",{v:e}),Tt(this._t("bl_ok")),"",!1);let a=Object.values(this._hass.states).find(c=>c.entity_id.startsWith("update.")&&/ha-bambulab|greghesp/i.test(`${c.attributes.release_url||""} ${c.attributes.entity_picture||""}`)),o="",l="";return["marketplace","hacs"].includes(t.ha_bambulab_managed_by)||a?o=a?`<button class="p" data-act="bl-hacs" data-id="${Tt(a.entity_id)}">${this._t("bl_hacs")}</button>`:"":t.ha_bambulab_managed_by==="bambu_tools"?(l=` \xB7 ${this._t("bl_by_app")}`,o=`<button class="p" data-act="bl-app">${this._t("bl_update")}</button>`):(l=` \xB7 ${this._t("bl_by_hand")}`,o=`<button class="p" data-act="bl-app" data-adopt="1">${this._t("bl_update")}</button>`),this._row(!1,this._t("bl",{v:e}),Tt(this._t("bl_new",{v:i})+l),o,!0)}_render(){let t=this._data;if(!t)return;this._lastRender=Date.now();let e=this._hass;if(this._config?.printer){this._renderPrinter(t);return}if(!t.admin){this._html(`<div class="hint">${this._t("admin")}</div>`);return}let i=bn(e),s=t.loaded&&(t.entries||[]).length>0,r=s&&i.length>0&&i.every(p=>e.states[`binary_sensor.${p.prefix}_online`]?.state==="on"),a=i.length>0&&i.every(p=>t.ours[p.statusEntity]),o=!!t.dash,l=!!t.app&&t.app.state==="started",c=[s,r,a,o,l].filter(Boolean).length,h=(p,b,T,w)=>`<section class="${b?"done":""}"><h2><span class="num">${b?"\u2713":p}</span>${Tt(T)}</h2><div class="body">${w}</div></section>`,d;t.loaded?t.entries.length?d=`<div>${this._t("s1_ok",{n:t.entries.length})} ${t.entries.map(p=>`<span class="tag">${Tt(p.title)}</span>`).join(" ")}</div>
      ${this._bambulabRow()}
      <div><button class="s" data-act="add-printer">${this._t("add")}</button></div>`:d=`<div class="hint">${this._t("s1_none")}</div><button class="p" data-act="add-printer">${this._t("add")}</button>`:d=`<div class="hint">${this._t("s1_missing")}</div><button class="p" data-act="restart-ha">${this._t("restart_ha")}</button>`;let u=i.length?i.map(p=>this._printerChecks(p)).join(""):`<div class="hint">${this._t("no_printers")}</div>`,f=t.legacy.filter(p=>p.state==="on").map(p=>`<div class="warnbox">${this._t("legacy",{n:Tt(p.name)})}
      <button class="s" data-act="toggle" data-id="${Tt(p.entity)}">${this._t("disable")}</button></div>`).join(""),_=i.length?f+i.map(p=>this._notifyBlock(p,t)).join("")+this._weeklyBlock(t):`<div class="hint">${this._t("no_printers")}</div>`,v=["","el","en"].map(p=>`<option value="${p}"${(t.dashLang||"")===p?" selected":""}>${p===""?this._t("auto"):p==="el"?"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC":"English"}</option>`).join(""),m=t.dash?`<div>${this._t("dash_ok")} <button class="s" data-act="nav" data-path="/${tn}/overview">${this._t("open")}</button></div>
         <div class="form"><label>${this._t("language")} <select data-act-change="dash-lang">${v}</select></label> <span class="msg">${Tt(this._msg.dash||"")}</span></div>`:`<div class="hint">${this._t("dash_missing")}</div><button class="p" data-act="dash-create">${this._t("create")}</button>`;this._html(`
      <div class="head"><h1>${this._t("title")}</h1><span class="prog">${this._t("progress",{d:c,n:5})}</span>
        <button class="s" data-act="refresh">${this._t("refresh")}</button></div>
      <div class="bar"><div style="width:${c/5*100}%"></div></div>
      ${t.error?`<div class="warnbox">${this._t("error",{e:Tt(t.error)})}</div>`:""}
      ${this._msg.global?`<div class="info">${Tt(this._msg.global)}</div>`:""}
      ${h(1,s,this._t("s1"),d)}
      ${h(2,r,this._t("s2"),u)}
      ${h(3,a,this._t("s3"),_)}
      ${h(4,o,this._t("s4"),m)}
      ${h(5,l,this._t(this._slicerHere(t)?"s5":"s5_app"),this._appBlock(t))}
      ${h("\u20AC",!!this._costSet(),this._t("cost"),this._costBlock())}`)}_renderPrinter(t){if(this.style.display=t.admin?"":"none",!t.admin)return;let e=this._config.printer,i=bn(this._hass).find(a=>a.prefix===e);if(!i){this._html(`<div class="hint">${this._t("no_printer",{p:Tt(e)})}</div>`);return}let s=(a,o)=>`<section><h2>${Tt(a)}</h2><div class="body flat">${o}</div></section>`,r=t.legacy.filter(a=>a.state==="on").map(a=>`<div class="warnbox">${this._t("legacy",{n:Tt(a.name)})}
      <button class="s" data-act="toggle" data-id="${Tt(a.entity)}">${this._t("disable")}</button></div>`).join("");this._html(`
      ${t.error?`<div class="warnbox">${this._t("error",{e:Tt(t.error)})}</div>`:""}
      ${this._msg.global?`<div class="info">${Tt(this._msg.global)}</div>`:""}
      ${s(this._t("checks"),this._printerChecks(i,!1))}
      ${s(this._t("s3"),r+this._notifyBlock(i,t,!1))}
      <div class="links">
        ${i.deviceId?`<button class="s" data-act="nav" data-path="/config/devices/device/${Tt(i.deviceId)}">${this._t("device_page")}</button>`:""}
        <button class="s" data-act="nav" data-path="/${tn}/setup">${this._t("all_settings")}</button>
      </div>`)}_html(t){this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; }
        ha-card { padding: 16px 18px 18px; max-width: 900px; margin: 0 auto; }
        .head { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        h1 { font-size: 20px; font-weight: 500; margin: 0; flex: 1; color: var(--primary-text-color); }
        .prog { color: var(--secondary-text-color); font-size: 13px; }
        .bar { height: 6px; border-radius: 3px; margin: 10px 0 6px; background: color-mix(in srgb, var(--primary-text-color) 12%, transparent); overflow: hidden; }
        .bar div { height: 100%; background: var(--success-color, #43a047); }
        section { border-top: 1px solid var(--divider-color, #8883); padding: 12px 0 4px; }
        h2 { font-size: 16px; font-weight: 500; margin: 0 0 8px; display: flex; align-items: center; gap: 10px; color: var(--primary-text-color); }
        .num { width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 13px;
          background: color-mix(in srgb, var(--primary-color) 20%, transparent); color: var(--primary-color); flex: none; }
        section.done .num { background: var(--success-color, #43a047); color: #fff; }
        .body { padding-left: 34px; font-size: 14px; color: var(--primary-text-color); display: flex; flex-direction: column; gap: 8px; }
        .body.flat { padding-left: 0; gap: 4px; }
        :host([printer]) ha-card { max-width: none; }
        section:first-of-type { border-top: none; padding-top: 0; }
        .links { display: flex; gap: 8px; flex-wrap: wrap; padding-top: 12px; border-top: 1px solid var(--divider-color, #8883); }
        .printer { border: 1px solid var(--divider-color, #8883); border-radius: 10px; padding: 8px 12px; }
        .pname { font-weight: 500; margin-bottom: 4px; }
        .row { display: flex; align-items: center; gap: 8px; margin: 3px 0; flex-wrap: wrap; font-size: 13.5px; }
        .lbl { font-weight: 500; }
        .txt { color: var(--secondary-text-color); flex: 1; min-width: 160px; }
        .b { width: 18px; height: 18px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; flex: none; color: #fff; }
        .b.ok { background: var(--success-color, #43a047); }
        .b.warn { background: var(--warning-color, #ff9800); }
        .b.no { background: var(--disabled-text-color, #999); }
        .hint { color: var(--secondary-text-color); }
        .tag { display: inline-block; padding: 1px 8px; border-radius: 10px; background: color-mix(in srgb, var(--primary-text-color) 8%, transparent); font-size: 12.5px; }
        .warnbox { padding: 8px 10px; border-radius: 8px; background: color-mix(in srgb, var(--warning-color, #ff9800) 15%, transparent); display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
        .info { padding: 8px 10px; border-radius: 8px; background: color-mix(in srgb, var(--info-color, #039be5) 15%, transparent); margin: 6px 0; }
        .form { display: flex; flex-wrap: wrap; gap: 8px 14px; align-items: center; margin-top: 4px; }
        .form.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
        .form label { display: flex; align-items: center; gap: 6px; font-size: 13.5px; }
        .evs { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; font-size: 13.5px; }
        input[type=text], input[type=password], select { font: inherit; font-size: 13.5px; padding: 5px 8px; border-radius: 6px;
          border: 1px solid var(--divider-color, #8885); background: var(--card-background-color); color: var(--primary-text-color); min-width: 140px; }
        .chk { gap: 6px; }
        .boot { display: flex; align-items: center; gap: 6px; font-size: 13.5px; margin: 6px 0 2px; }
        input[type=number] { font: inherit; font-size: 13.5px; padding: 5px 8px; border-radius: 6px; width: 90px;
          border: 1px solid var(--divider-color, #8885); background: var(--card-background-color); color: var(--primary-text-color); }
        button, a.s { font: inherit; font-size: 13px; border-radius: 16px; padding: 5px 12px; cursor: pointer; text-decoration: none; display: inline-block; }
        button.s, a.s { border: 1px solid var(--divider-color, #8885); background: none; color: var(--primary-text-color); }
        button.p { border: none; background: var(--primary-color); color: var(--text-primary-color, #fff); }
        button:disabled { opacity: .5; cursor: progress; }
        .msg { color: var(--secondary-text-color); font-size: 13px; }
      </style>
      <ha-card>${t}</ha-card>`}_onInput(t){let e=t.composedPath()[0];if(!(!e||!e.dataset))if(e.dataset.cost){let i=this._costForm(),s=e.dataset.cost;s.startsWith("mat:")?i.materials[s.slice(4)]=e.value:s.startsWith("w:")?i.watts[s.slice(2)]=e.value:s==="kwh"?i.price_kwh=e.value:s==="new-name"?i.newName=e.value:s==="new-price"&&(i.newPrice=e.value),this._costDirty=!0}else if(e.dataset.opt)this._form[e.dataset.opt]=e.type==="checkbox"?e.checked:e.value,this._dirty.add(e.dataset.opt);else if(e.dataset.n){let i=this._form[`n_${e.dataset.n}`];if(!i)return;e.dataset.field==="phone"&&(i.phone=e.value),e.dataset.ev&&(i.events=e.checked?[...new Set([...i.events,e.dataset.ev])]:i.events.filter(s=>s!==e.dataset.ev))}else e.dataset.actChange==="dash-lang"&&t.type==="change"?this._run(()=>this._saveDashLang(e.value)):e.dataset.actChange==="boot"&&t.type==="change"&&this._run(()=>this._sv(`/addons/${this._data.app.slug}/options`,"post",{boot:e.checked?"auto":"manual"}))}_onClick(t){let e=t.composedPath().find(r=>r.dataset&&r.dataset.act);if(!e||e.tagName==="A")return;let i=e.dataset.act,s=this._hass;return i==="refresh"?this._run(()=>null):i==="nav"?(history.pushState(null,"",e.dataset.path),window.dispatchEvent(new CustomEvent("location-changed")),null):i==="add-printer"?(history.pushState(null,"","/config/integrations/dashboard/add?domain=bambu_lab"),window.dispatchEvent(new CustomEvent("location-changed")),null):i==="restart-ha"?(window.confirm(this._t("restart_q"))&&s.callService("homeassistant","restart"),null):i==="toggle"?this._run(()=>s.callService(e.dataset.id.split(".")[0],"toggle",{entity_id:e.dataset.id})):i==="notify"?this._run(()=>this._createNotify(e.dataset.prefix)):i==="weekly"?this._run(()=>this._createWeekly()):i==="save-cost"?this._run(()=>this._saveCost()):i==="dash-create"?this._run(()=>this._createDash()):i==="app"?this._run(()=>this._sv(`/addons/${this._data.app.slug}/${e.dataset.op}`,"post")):i==="app-update"?this._run(()=>this._sv(`/store/addons/${this._data.app.slug}/update`,"post")):i==="save-app"?this._run(()=>this._saveApp()):i==="bl-hacs"?this._run(async()=>{await s.callService("update","install",{entity_id:e.dataset.id}),this._msg.global=this._t("bl_after")}):i==="bl-app"?this._run(()=>this._updateBambulab(!!e.dataset.adopt)):null}async _run(t){this.shadowRoot.querySelectorAll("button").forEach(e=>{e.disabled=!0});try{await t()}catch(e){this._msg.global=this._t("error",{e:e.message||JSON.stringify(e)})}await new Promise(e=>setTimeout(e,600)),this.isConnected&&await this._load()}async _createNotify(t){let e=bn(this._hass).find(a=>a.prefix===t),i=this._form[`n_${t}`];if(!e||!i)return;let s=`bambu_tools_notify_${t}`;await this._hass.callApi("POST",`config/automation/config/${s}`,{alias:`Bambu Tools \u2013 ${e.name}`,description:"Created by the Bambu Tools setup page.",use_blueprint:{path:e_,input:{print_status:e.statusEntity,notify_device:i.phone,notify_on:i.events,dashboard_path:`/${tn}/overview`}}});let r=()=>Object.values(this._hass.states).some(a=>a.entity_id.startsWith("automation.")&&a.attributes.id===s);for(let a=0;a<40&&this.isConnected&&!r();a++)await new Promise(o=>setTimeout(o,250));this._msg.global=""}async _updateBambulab(t){let e=this._data.app?.slug;if(e){if(t){let i=await this._sv(`/addons/${e}/info`);await this._sv(`/addons/${e}/options`,"post",{options:{...i.options,update_ha_bambulab:!0}})}await this._sv(`/addons/${e}/restart`,"post"),this._msg.global=this._t("bl_after")}}async _saveDashLang(t){let e={strategy:{type:"custom:bambu-tools",...t?{language:t}:{}}};await this._ws({type:"lovelace/config/save",url_path:tn,config:e}),this._msg.dash=this._t("saved")}async _createDash(){await this._ws({type:"lovelace/dashboards/create",url_path:tn,title:"Bambu",icon:"mdi:printer-3d",show_in_sidebar:!0,require_admin:!1,mode:"storage"}),await this._saveDashLang(this._config?.language||"")}async _saveApp(){let t=this._data.app.slug,e=await this._sv(`/addons/${t}/info`),i=this._form,s={...e.options};for(let r of this._dirty){if(r==="password"){i.password&&(s.password=i.password);continue}if(r==="username"){String(i.username||"").trim()&&(s.username=String(i.username).trim());continue}s[r]=!!i[r]}this._dirty.size&&await this._sv(`/addons/${t}/options`,"post",{options:s}),this._dirty.clear(),delete i.password,this._msg.app=this._t("saved_restart")}};customElements.get("bambu-setup-card")||(customElements.define("bambu-setup-card",_l),window.customCards=window.customCards||[],window.customCards.push({type:"bambu-setup-card",name:"Bambu Tools setup",description:"All Bambu Tools settings on one page.",preview:!1}));var Oh=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),xl=class extends HTMLElement{setConfig(t){if(!t||!Array.isArray(t.cards))throw new Error('bambu-collapse-card: "cards" is required');this._config=t,this._open=this._loadOpen(),this._children=null,this.shadowRoot||this.attachShadow({mode:"open"}),this._render()}set hass(t){if(this._hass=t,this._children)for(let e of this._children)e.hass=t;this._updateSummary()}getCardSize(){return this._open?1+Math.ceil(this._config.cards.length/2):1}getGridOptions(){return{columns:"full"}}_key(){return`bambu-tools:open:${this._config.key||this._config.title||""}`}_loadOpen(){try{let t=localStorage.getItem(this._key());if(t!==null)return t==="1"}catch{}return!!this._config.open}_saveOpen(){try{localStorage.setItem(this._key(),this._open?"1":"0")}catch{}}_render(){let t=this._config;this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; }
        ha-card { overflow: hidden; }
        .head { display: flex; align-items: center; gap: 10px; padding: 12px 16px; cursor: pointer; user-select: none;
          color: var(--primary-text-color); outline: none; }
        .head:focus-visible { background: color-mix(in srgb, var(--primary-color) 12%, transparent); }
        .head ha-icon { --mdc-icon-size: 22px; color: var(--secondary-text-color); flex: none; }
        .title { font-size: 16px; font-weight: 500; flex: none; }
        .sum { flex: 1; min-width: 0; color: var(--secondary-text-color); font-size: 13.5px; white-space: nowrap;
          overflow: hidden; text-overflow: ellipsis; text-align: right; }
        .chev { transition: transform .2s; }
        :host([open]) .chev { transform: rotate(180deg); }
        .body { padding: 0 12px 12px; }
        .body[hidden] { display: none; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)); gap: 8px; }
        .grid > .full { grid-column: 1 / -1; }
        :host([flat]) .grid { --ha-card-border-width: 0; --ha-card-box-shadow: none; --ha-card-background: transparent; gap: 0; }
      </style>
      <ha-card>
        <div class="head" role="button" tabindex="0" aria-expanded="${this._open}">
          ${t.icon?`<ha-icon icon="${Oh(t.icon)}"></ha-icon>`:""}
          <span class="title">${Oh(t.title||"")}</span>
          <span class="sum"></span>
          <ha-icon class="chev" icon="mdi:chevron-down"></ha-icon>
        </div>
        <div class="body"${this._open?"":" hidden"}><div class="grid"></div></div>
      </ha-card>`,this.toggleAttribute("open",this._open),this.toggleAttribute("flat",!!t.flat);let e=this.shadowRoot.querySelector(".head");e.addEventListener("click",()=>this._toggle()),e.addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this._toggle())}),this._open&&this._build(),this._updateSummary()}_toggle(){this._open=!this._open,this._saveOpen(),this.toggleAttribute("open",this._open),this.shadowRoot.querySelector(".head").setAttribute("aria-expanded",String(this._open)),this.shadowRoot.querySelector(".body").hidden=!this._open,this._open&&!this._children&&this._build(),this.dispatchEvent(new Event("iron-resize",{bubbles:!0,composed:!0}))}async _build(){let t=this.shadowRoot.querySelector(".grid");this._children=[];let e=window.loadCardHelpers?await window.loadCardHelpers():null;for(let i of this._config.cards){let{full:s,grid_options:r,...a}=i,o;e?o=e.createCardElement(a):(o=document.createElement(a.type.startsWith("custom:")?a.type.slice(7):`hui-${a.type}-card`),o.setConfig?.(a)),(s||r?.columns==="full")&&o.classList.add("full"),o.addEventListener("ll-rebuild",l=>{l.stopPropagation();let c=e?e.createCardElement(a):o;c.className=o.className,c.hass=this._hass,o.replaceWith(c),this._children[this._children.indexOf(o)]=c},{once:!0}),this._hass&&(o.hass=this._hass),this._children.push(o),t.appendChild(o)}}_updateSummary(){let t=this.shadowRoot?.querySelector(".sum"),e=this._hass;if(!t||!e)return;let s=(this._config.summary||[]).map(r=>{let a=e.states[r];return!a||["unknown","unavailable","","None","none"].includes(a.state)?null:e.formatEntityState?e.formatEntityState(a):a.state}).filter(Boolean).join(" \xB7 ");t.textContent!==s&&(t.textContent=s)}};customElements.get("bambu-collapse-card")||(customElements.define("bambu-collapse-card",xl),window.customCards=window.customCards||[],window.customCards.push({type:"bambu-collapse-card",name:"Bambu collapse card",description:"A group of cards that opens and closes."}));var Qt=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),yl=class extends HTMLElement{setConfig(t){if(!t||!t.printer)throw new Error('bambu-history-card: "printer" is required');this._config=t,this.shadowRoot||this.attachShadow({mode:"open"}),this._state=void 0,this._hass&&this._render()}set hass(t){this._hass=t;let e=t.states[`sensor.bambu_tools_history_${this._config.printer}`];e===this._state&&this.shadowRoot.childElementCount||(this._state=e,this._render())}getCardSize(){return 5}getGridOptions(){return{columns:"full"}}_tl(){return this._config?.language||this._hass}_t(t,e){return Mt(this._tl(),t,e)}_locale(){return Ge(this._tl())==="el"?"el-GR":"en-GB"}_dur(t){let e=Math.round((t||0)/60),i=Math.floor(e/60);return i?this._t("h_hm",{h:i,m:String(e%60).padStart(2,"0")}):this._t("h_m",{m:e})}_grams(t){return t==null?"":t>=1e3?`${(t/1e3).toLocaleString(this._locale(),{maximumFractionDigits:2})} kg`:`${Math.round(t)} g`}_when(t){let e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleString(this._locale(),{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!1})}_money(t){if(t==null)return"";try{return new Intl.NumberFormat(this._locale(),{style:"currency",currency:this._cur||"EUR"}).format(t)}catch{return`${t.toFixed(2)}`}}_costTip(t){return[t.filament!=null?`${this._t("h_c_fil")} ${this._money(t.filament)}`:"",t.energy!=null?`${this._t("h_c_kwh")} ${this._money(t.energy)}`:""].filter(Boolean).join(" \xB7 ")}_fil(t){if(!t||!t.name)return"";let e=t.type&&!String(t.name).includes(t.type)?` (${t.type})`:"";return`<span class="fil"><span class="sw" style="background:${Qt(t.color||"#888")}"></span>${Qt(t.name+e)}</span>`}_thumb(t,e){if(!t||!e)return'<span class="ph"></span>';let i=`${t}/${e}`;this._urls=this._urls||{};let s=this._urls[i];return s===void 0&&(this._urls[i]=null,this._hass.callWS({type:"media_source/resolve_media",media_content_id:i,expires:86400}).then(r=>{this._urls[i]=r.url,this._render()}).catch(()=>{this._urls[i]=""})),s?`<a class="ph" href="${Qt(s)}" target="_blank" rel="noopener"><img src="${Qt(s)}" loading="lazy" alt=""></a>`:'<span class="ph"></span>'}_month(t){let[e,i]=t.split("-").map(Number);return new Date(e,i-1,1).toLocaleString(this._locale(),{month:"long",year:"numeric"})}_render(){let t=this._state,e;if(!t)e=`<div class="hint">${Qt(this._t("h_missing"))}</div>`;else{let i=t.attributes||{},s=(i.jobs||[]).slice(0,this._config.limit||10),r=i.months||[],a=new Date().toISOString().slice(0,7),o=i.this_month||r.find(f=>f.month===a)||{prints:0,hours:0,grams:0};this._cur=i.currency;let l=(f,_)=>`<div class="stat"><div class="lbl">${Qt(f)}</div>
        <div class="val">${Qt(this._t("h_prints",{n:_.prints}))}</div>
        <div class="sub">${Qt(this._dur((_.hours||0)*3600))} \xB7 ${Qt(this._grams(_.grams||0))}${_.cost!=null?` \xB7 ${Qt(this._money(_.cost))}`:""}</div></div>`,c=i.active?`<div class="now"><span class="dot"></span>${Qt(this._t("h_now"))}: <b>${Qt(i.active.file||"\u2014")}</b>
        ${this._fil(i.active.filament)}
        <span class="muted">${Qt(this._t("h_since",{t:this._when(i.active.start)}))}</span>
        ${this._thumb(i.media,i.active.photos?.first)}</div>`:"",h={finish:["mdi:check-circle","ok"],failed:["mdi:close-circle","bad"],stopped:["mdi:stop-circle","mid"]},d=s.map(f=>{let[_,v]=h[f.result]||h.stopped,m=f.result!=="finish"&&f.progress!=null?` ${this._t("h_at",{p:Math.round(f.progress)})}`:"";return`<div class="job" title="${Qt(this._t(`h_${f.result}`)+m)}${f.layers?` \xB7 layer ${Qt(f.layers)}`:""}">
          <ha-icon class="${v}" icon="${_}"></ha-icon>
          ${this._thumb(i.media,f.photos?.end||f.photos?.first)}
          <span class="file">${Qt(f.file||"\u2014")}<span class="sub2">${this._fil(f.filament)}${m?`<span class="${v}">${Qt(this._t(`h_${f.result}`)+m)}</span>`:""}</span></span>
          <span class="muted when">${Qt(this._when(f.end))}</span>
          <span class="dur">${Qt(this._dur(f.duration_s))}</span>
          <span class="g">${Qt(this._grams(f.grams))}${f.cost?.total!=null?`<span class="money" title="${Qt(this._costTip(f.cost))}">${Qt(this._money(f.cost.total))}</span>`:""}</span></div>`}).join(""),u=r.slice(0,6).map(f=>`<tr><td>${Qt(this._month(f.month))}</td><td>${f.prints}</td>
        <td>${f.finished}/${f.prints}</td><td>${Qt(this._dur(f.hours*3600))}</td><td>${Qt(this._grams(f.grams))}</td></tr>`).join("");e=`
        <div class="stats">${l(this._t("h_month"),o)}${l(this._t("h_total"),{prints:i.total_prints||0,hours:i.total_hours||0,grams:i.total_grams||0,cost:i.total_cost})}</div>
        ${c}
        ${d?`<div class="jobs">${d}</div>`:`<div class="hint">${Qt(this._t("h_empty"))}</div>`}
        ${u?`<details><summary>${Qt(this._t("h_months"))}</summary><table>
          <tr><th></th><th>${Qt(this._t("h_col_prints"))}</th><th>${Qt(this._t("h_col_ok"))}</th><th>${Qt(this._t("h_col_time"))}</th><th>${Qt(this._t("h_col_g"))}</th></tr>
          ${u}</table></details>`:""}`}this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; }
        ha-card { padding: 12px 14px; }
        .hint, .muted { color: var(--secondary-text-color); }
        .hint { font-size: 13.5px; }
        .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; }
        .stat { border-radius: 10px; padding: 8px 10px; background: color-mix(in srgb, var(--primary-text-color) 6%, transparent); }
        .stat .lbl { font-size: 12px; color: var(--secondary-text-color); }
        .stat .val { font-size: 17px; font-weight: 500; color: var(--primary-text-color); }
        .stat .sub { font-size: 12.5px; color: var(--secondary-text-color); }
        .now { font-size: 13.5px; margin: 0 0 8px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap; color: var(--primary-text-color); }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--info-color, #039be5); }
        .jobs { display: flex; flex-direction: column; }
        .job { display: grid; grid-template-columns: 22px 44px minmax(0, 1fr) auto auto auto; gap: 8px; align-items: center;
          padding: 5px 0; border-top: 1px solid var(--divider-color, #8883); font-size: 13.5px; color: var(--primary-text-color); }
        .job:first-child { border-top: none; }
        .job ha-icon { --mdc-icon-size: 18px; }
        .ok { color: var(--success-color, #43a047); }
        .bad { color: var(--error-color, #db4437); }
        .mid { color: var(--disabled-text-color, #999); }
        .file { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: flex; flex-direction: column; min-width: 0; }
        .sub2 { font-size: 12px; color: var(--secondary-text-color); display: flex; gap: 8px; overflow: hidden; text-overflow: ellipsis; }
        .fil { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; color: var(--secondary-text-color); }
        .sw { width: 9px; height: 9px; border-radius: 50%; border: 1px solid #8886; flex: none; }
        .ph { width: 44px; height: 33px; border-radius: 4px; overflow: hidden; display: block;
          background: color-mix(in srgb, var(--primary-text-color) 6%, transparent); }
        .ph img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .now .ph { margin-left: auto; }
        .when, .dur, .g { white-space: nowrap; font-size: 12.5px; }
        .g { min-width: 48px; text-align: right; display: flex; flex-direction: column; align-items: flex-end; }
        .money { font-size: 11.5px; color: var(--secondary-text-color); }
        @media (max-width: 480px) { .job { grid-template-columns: 22px 44px minmax(0, 1fr) auto auto; } .when { display: none; } }
        details { margin-top: 10px; font-size: 13px; color: var(--primary-text-color); }
        summary { cursor: pointer; color: var(--secondary-text-color); }
        table { width: 100%; border-collapse: collapse; margin-top: 6px; }
        th, td { text-align: right; padding: 3px 4px; white-space: nowrap; }
        th:first-child, td:first-child { text-align: left; }
        th { font-weight: 500; color: var(--secondary-text-color); font-size: 12px; }
      </style>
      <ha-card>${e}</ha-card>`}};customElements.get("bambu-history-card")||(customElements.define("bambu-history-card",yl),window.customCards=window.customCards||[],window.customCards.push({type:"bambu-history-card",name:"Bambu print history",description:"Print history recorded by the Bambu Tools app."}));var Lt=n=>String(n??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Bh="sensor.bambu_tools_spools",vl=class extends HTMLElement{setConfig(t){this._config=t||{},this.shadowRoot||this.attachShadow({mode:"open"}),this._edit=null,this._msg="",this._hass&&this._render()}set hass(t){this._hass=t;let e=t.states[Bh];e===this._state&&this.shadowRoot.childElementCount||(this._state=e,this.shadowRoot.activeElement||this._render())}getCardSize(){return 6}getGridOptions(){return{columns:"full"}}_t(t,e){return Mt(this._config?.language||this._hass,t,e)}_locale(){return Ge(this._config?.language||this._hass)==="el"?"el-GR":"en-GB"}_g(t){return t==null?"":`${Math.round(t).toLocaleString(this._locale())} g`}_admin(){return!!this._hass?.user?.is_admin}async _send(t){let e=Date.now();this._msg=this._t("sp_saving"),this._render();try{await this._hass.callWS({type:"fire_event",event_type:"bambu_tools_command",event_data:{...t,rev:e}})}catch(i){return this._msg=this._t("sp_err",{e:i.message||i.code||"error"}),this._render(),!1}for(let i=0;i<40;i++){let s=this._hass.states[Bh]?.attributes||{};if(s.settings_rev===e)return this._msg=this._t("sp_saved"),this._render(),!0;if(s.settings_error?.rev===e)return this._msg=this._t("sp_err",{e:s.settings_error.error}),this._render(),!1;await new Promise(r=>setTimeout(r,250))}return this._msg=this._t("sp_err",{e:"no answer from the app"}),this._render(),!1}_trayLabel(t,e){for(let i of Object.values(t.printers||{})){let s=(i.trays||[]).find(r=>r.tray===e);if(s)return`${i.name} \xB7 ${s.key||s.label}`}return e||""}_trayOptions(t,e){let i=[`<option value="">${Lt(this._t("sp_shelf"))}</option>`];for(let s of Object.values(t.printers||{}))for(let r of s.trays||[])i.push(`<option value="${Lt(r.tray)}"${r.tray===e?" selected":""}>${Lt(`${s.name} \xB7 ${r.key||r.label}${r.name?` (${r.name})`:""}`)}</option>`);return i.join("")}_form(t,e){let i=e||{name:"",material:"",color:"#ffffff",weight:1e3,price:"",used_before:0,tray:""};return`<form class="edit" data-id="${Lt(e?e.id:"new")}">
      <label>${Lt(this._t("sp_name"))}<input name="name" required maxlength="60" value="${Lt(i.name)}" placeholder="eSUN PLA+ white"></label>
      <label>${Lt(this._t("sp_material"))}<input name="material" maxlength="40" value="${Lt(i.material||"")}" placeholder="PLA"></label>
      <label>${Lt(this._t("sp_color"))}<input name="color" type="color" value="${Lt(i.color||"#ffffff")}"></label>
      <label>${Lt(this._t("sp_weight"))}<input name="weight" type="number" min="1" max="20000" step="1" value="${Lt(i.weight)}"></label>
      <label>${Lt(this._t("sp_used"))}<input name="used_before" type="number" min="0" step="1" value="${Lt(i.used_before||0)}"></label>
      <label>${Lt(this._t("sp_price",{c:t.currency||"\u20AC"}))}<input name="price" type="number" min="0" step="0.01" value="${Lt(i.price??"")}"></label>
      ${e?"":`<label>${Lt(this._t("sp_where"))}<select name="tray">${this._trayOptions(t,i.tray)}</select></label>`}
      <div class="btns"><button class="p" type="submit">${Lt(this._t("sp_save"))}</button>
        <button class="s" type="button" data-act="cancel">${Lt(this._t("sp_cancel"))}</button></div>
    </form>`}_render(){let t=this._state,e;if(!t)e=`<div class="hint">${Lt(this._t("sp_missing"))}</div>`;else{let i=t.attributes||{},s=this._admin(),r=i.spools||[],a=Object.fromEntries(r.map(c=>[c.id,c])),o=Object.values(i.printers||{}).map(c=>`<div class="printer"><div class="pname">${Lt(c.name)}</div>
        ${(c.trays||[]).map(h=>{let d=h.spool?a[h.spool]:null,u=`<span class="sw" style="background:${Lt(h.color||"#888")}"></span>`,f=s?`<select data-assign="${Lt(h.tray)}">${['<option value="">\u2014</option>',...r.map(_=>`<option value="${Lt(_.id)}"${h.spool===_.id?" selected":""}>${Lt(_.name)}</option>`)].join("")}</select>`:"";return`<div class="tray">${u}<span class="tk">${Lt(h.key||h.label)}</span>
            <span class="tn">${Lt(h.empty?this._t("sp_empty"):h.name||"\u2014")}${h.type?` \xB7 ${Lt(h.type)}`:""}</span>
            <span class="ts">${d?`${Lt(d.name)} \xB7 <b class="${d.low?"low":""}">${Lt(this._g(d.remaining))}</b>`:`<i>${Lt(this._t("sp_none"))}</i>`}</span>
            ${f}</div>`}).join("")}</div>`).join(""),l=r.map(c=>this._edit===c.id?this._form(i,c):`<div class="spool">
          <span class="sw big" style="background:${Lt(c.color||"#888")}"></span>
          <div class="sinfo"><div class="sname">${Lt(c.name)}${c.material?` <span class="muted">${Lt(c.material)}</span>`:""}</div>
            <div class="bar"><div class="${c.low?"low":""}" style="width:${Math.max(0,Math.min(100,c.percent??0))}%"></div></div>
            <div class="muted small">${Lt(this._g(c.remaining))} / ${Lt(this._g(c.weight))}${c.tray?` \xB7 ${Lt(this._trayLabel(i,c.tray))}`:` \xB7 ${Lt(this._t("sp_shelf"))}`}</div></div>
          ${s?`<div class="sbtn"><button class="s" data-act="edit" data-id="${Lt(c.id)}">${Lt(this._t("sp_edit"))}</button>
            <button class="s" data-act="archive" data-id="${Lt(c.id)}" title="${Lt(this._t("sp_archive_hint"))}">${Lt(this._t("sp_archive"))}</button></div>`:""}
        </div>`).join("");e=`
        <div class="head"><h2>${Lt(this._t("sp_trays"))}</h2></div>
        ${o||`<div class="hint">${Lt(this._t("sp_noprinters"))}</div>`}
        <div class="head"><h2>${Lt(this._t("sp_spools"))}</h2>
          ${s&&this._edit!=="new"?`<button class="p" data-act="new">${Lt(this._t("sp_add"))}</button>`:""}</div>
        ${this._edit==="new"?this._form(i,null):""}
        ${l||`<div class="hint">${Lt(this._t("sp_nospools"))}</div>`}
        ${this._msg?`<div class="msg">${Lt(this._msg)}</div>`:""}
        <div class="hint small">${Lt(this._t("sp_how",{g:i.low_grams??100}))}</div>`}this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; }
        ha-card { padding: 12px 14px; }
        h2 { font-size: 15px; font-weight: 500; margin: 10px 0 6px; flex: 1; color: var(--primary-text-color); }
        .head { display: flex; align-items: center; gap: 8px; }
        .hint, .muted { color: var(--secondary-text-color); }
        .hint { font-size: 13px; margin: 6px 0; }
        .small { font-size: 12px; }
        .printer { border: 1px solid var(--divider-color, #8883); border-radius: 10px; padding: 6px 10px; margin-bottom: 8px; }
        .pname { font-weight: 500; margin-bottom: 2px; color: var(--primary-text-color); }
        .tray { display: grid; grid-template-columns: 14px 100px minmax(0, 1fr) minmax(0, 1.2fr) auto; gap: 8px; align-items: center;
          padding: 4px 0; font-size: 13px; color: var(--primary-text-color); border-top: 1px solid var(--divider-color, #8882); }
        .tray:nth-child(2) { border-top: none; }
        .tk { font-weight: 500; }
        .tn, .ts { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .ts i { color: var(--secondary-text-color); }
        .sw { width: 12px; height: 12px; border-radius: 50%; border: 1px solid #8886; display: inline-block; }
        .sw.big { width: 26px; height: 26px; flex: none; }
        .spool { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-top: 1px solid var(--divider-color, #8882); }
        .sinfo { flex: 1; min-width: 0; }
        .sname { font-weight: 500; color: var(--primary-text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .bar { height: 6px; border-radius: 3px; background: color-mix(in srgb, var(--primary-text-color) 10%, transparent); margin: 4px 0; overflow: hidden; }
        .bar div { height: 100%; background: var(--success-color, #43a047); }
        .bar div.low, b.low { color: var(--error-color, #db4437); }
        .bar div.low { background: var(--error-color, #db4437); }
        .sbtn { display: flex; gap: 6px; flex-wrap: wrap; }
        form.edit { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 8px 12px; padding: 10px;
          margin: 6px 0; border-radius: 10px; background: color-mix(in srgb, var(--primary-text-color) 5%, transparent); }
        form.edit label { display: flex; flex-direction: column; gap: 3px; font-size: 12.5px; color: var(--secondary-text-color); }
        input, select { font: inherit; font-size: 13.5px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--divider-color, #8885);
          background: var(--card-background-color); color: var(--primary-text-color); min-width: 0; }
        input[type=color] { padding: 0; height: 30px; }
        .btns { display: flex; gap: 8px; align-items: end; }
        button { font: inherit; font-size: 13px; border-radius: 16px; padding: 5px 12px; cursor: pointer; }
        button.s { border: 1px solid var(--divider-color, #8885); background: none; color: var(--primary-text-color); }
        button.p { border: none; background: var(--primary-color); color: var(--text-primary-color, #fff); }
        .msg { font-size: 13px; color: var(--secondary-text-color); margin-top: 6px; }
        @media (max-width: 560px) { .tray { grid-template-columns: 14px 80px minmax(0, 1fr); } .ts, .tray select { grid-column: 2 / -1; } }
      </style>
      <ha-card>${e}</ha-card>`,this._wire()}_wire(){let t=this.shadowRoot;t.querySelectorAll("button[data-act]").forEach(e=>e.addEventListener("click",i=>this._click(i,e))),t.querySelectorAll("select[data-assign]").forEach(e=>e.addEventListener("change",()=>{let i=e.dataset.assign,s=this._state?.attributes||{},r=Object.values(s.printers||{}).flatMap(a=>a.trays||[]).find(a=>a.tray===i)?.spool;e.value?this._send({cmd:"assign_spool",id:e.value,tray:i}):r&&this._send({cmd:"assign_spool",id:r,tray:null})})),t.querySelectorAll("form.edit").forEach(e=>e.addEventListener("submit",async i=>{i.preventDefault();let s=Object.fromEntries(new FormData(e).entries()),r={name:s.name,material:s.material,color:s.color,weight:s.weight,used_before:s.used_before,price:s.price};(e.dataset.id==="new"?await this._send({cmd:"add_spool",spool:{...r,tray:s.tray||null}}):await this._send({cmd:"update_spool",id:e.dataset.id,spool:r}))&&(this._edit=null,this._render())}))}async _click(t,e){let i=e.dataset.act;i==="new"?(this._edit="new",this._msg="",this._render()):i==="edit"?(this._edit=e.dataset.id,this._msg="",this._render()):i==="cancel"?(this._edit=null,this._render()):i==="archive"&&window.confirm(this._t("sp_archive_q"))&&await this._send({cmd:"archive_spool",id:e.dataset.id})}};customElements.get("bambu-spools-card")||(customElements.define("bambu-spools-card",vl),window.customCards=window.customCards||[],window.customCards.push({type:"bambu-spools-card",name:"Bambu spools",description:"Spools and what is left on them (Bambu Tools app)."}));function s_(n){let t=n?{language:n}:{};return{status:r=>({type:"custom:bambu-status-card",printer:r.prefix,title:r.name,...t,grid_options:{columns:"full"}}),camera:(r,a)=>a.states[`camera.${r.prefix}_camera`]||a.states[`switch.${r.prefix}_camera`]?[{type:"conditional",conditions:[{condition:"state",entity:`switch.${r.prefix}_camera`,state_not:"off"}],card:{type:"picture-entity",entity:`camera.${r.prefix}_camera`,camera_view:"live",show_name:!1,show_state:!1},grid_options:{columns:"full"}}]:[],layers:(r,a,o)=>({type:"custom:bambu-layer-card",printer:r.prefix,title:"Layers",height:o,...t,grid_options:{columns:"full",rows:a}})}}var r_=n=>{let t=(n||"").trim().charAt(0).toLowerCase();return/[a-z]/.test(t)?`mdi:alpha-${t}-box`:"mdi:printer-3d"},a_=[["print","d_print","mdi:progress-clock",["sensor:print_status","sensor:current_stage","sensor:print_progress","sensor:current_layer","sensor:total_layer_count","sensor:remaining_time","sensor:start_time","sensor:end_time","sensor:print_weight","sensor:print_length","sensor:print_bed_type","sensor:speed_profile","sensor:task_name!"],["sensor:print_status","sensor:print_progress"]],["temps","d_temps","mdi:thermometer",["sensor:nozzle_temperature","sensor:nozzle_target_temperature","sensor:bed_temperature","sensor:bed_target_temperature","sensor:chamber_temperature","sensor:chamber_target_temperature","binary_sensor:door"],["sensor:nozzle_temperature","sensor:bed_temperature","sensor:chamber_temperature"]],["printer","d_printer","mdi:printer-3d-nozzle",["sensor:active_tray!","binary_sensor:extruder_filament","sensor:nozzle_type","sensor:nozzle_size","sensor:cooling_fan_speed","sensor:heatbreak_fan_speed","sensor:aux_fan_speed","sensor:chamber_fan_speed","sensor:airduct_mode","binary_sensor:timelapse","sensor:wi_fi_signal","sensor:total_usage"],["sensor:active_tray","sensor:nozzle_size"]]],zh=(n,t)=>{let[e,i]=t.replace("!","").split(":");return{key:i,entity:`${e}.${n.prefix}_${i}`}};function o_(n,t,e){return a_.map(([i,s,r,a,o])=>{let l=a.map(c=>{let{key:h,entity:d}=zh(n,c);return t.states[d]?{type:"tile",entity:d,name:Mt(e,`e_${h}`),...c.endsWith("!")?{full:!0}:{}}:null}).filter(Boolean);return l.length?{type:"grid",cards:[{type:"custom:bambu-collapse-card",key:`${n.prefix}:${i}`,title:Mt(e,s),icon:r,summary:o.map(c=>zh(n,c).entity).filter(c=>t.states[c]),cards:l}]}:null}).filter(Boolean)}function l_(n,t){return{type:"grid",column_span:3,cards:[{type:"custom:bambu-collapse-card",key:`${n.prefix}:history`,title:Mt(t,"d_history"),icon:"mdi:history",flat:!0,cards:[{type:"custom:bambu-history-card",printer:n.prefix,...typeof t=="string"?{language:t}:{},full:!0}]}]}}var c_=/^(light|switch|select|number|button|fan)\./;function h_(n,t){let e=Object.values(t.entities||{}).filter(i=>i.device_id===n.deviceId&&c_.test(i.entity_id)&&!i.hidden&&t.states[i.entity_id]&&t.states[i.entity_id].state!=="unavailable").map(i=>i.entity_id).sort();return[{type:"custom:bambu-collapse-card",key:`${n.prefix}:settings`,title:Mt(t,"setup"),icon:"mdi:cog",cards:[...e.length?[{type:"entities",title:Mt(t,"controls"),entities:e,state_color:!0,show_header_toggle:!1,full:!0}]:[],{type:"custom:bambu-setup-card",printer:n.prefix,full:!0}]}]}function u_(n,t,e,i){let s=[e.status(n),{type:"picture-entity",entity:`image.${n.prefix}_cover_image`,name:"Plate",show_state:!1,grid_options:{columns:"full",rows:4}}];for(let r of n.amsDevices)s.push({type:"heading",heading:r.name,heading_style:"subtitle",icon:"mdi:tray-full"}),s.push({type:"custom:ha-bambulab-ams-card",ams:r.id,grid_options:{columns:"full"}});for(let r of n.spoolDevices)s.push({type:"heading",heading:Mt(i,"spool"),heading_style:"subtitle",icon:"mdi:printer-3d-nozzle-outline"}),s.push({type:"custom:ha-bambulab-spool-card",spool:r.id,grid_options:{columns:6,rows:3}});return{title:n.name,path:n.prefix.replace(/_/g,"-"),icon:r_(n.name),type:"sections",max_columns:3,sections:[{type:"grid",column_span:2,cards:[...e.camera(n,t),e.layers(n,10,560)]},{type:"grid",cards:s},...o_(n,t,i),l_(n,i),{type:"grid",column_span:3,cards:h_(n,t)}]}}var bl=class{static async generate(t,e){let i=bn(e),s=t.language||e,r={title:Mt(e,"setup"),path:"setup",icon:"mdi:cog",type:"panel",cards:[{type:"custom:bambu-setup-card"}]};if(!i.length)return{title:t.title||"Bambu",views:[{...r,path:"overview"}]};let a=s_(t.language);return{title:t.title||"Bambu",views:[{title:Mt(s,"overview"),path:"overview",icon:"mdi:view-dashboard",type:"sections",max_columns:Math.min(i.length,3),sections:i.map(o=>({type:"grid",cards:[a.status(o),...a.camera(o,e),a.layers(o,7,400)]}))},...i.map(o=>u_(o,e,a,s)),{title:Mt(s,"filament"),path:"filament",icon:"mdi:printer-3d-nozzle-outline",type:"panel",cards:[{type:"custom:bambu-spools-card",...t.language?{language:t.language}:{}}]},r]}}};customElements.get("ll-strategy-dashboard-bambu-tools")||customElements.define("ll-strategy-dashboard-bambu-tools",bl);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
