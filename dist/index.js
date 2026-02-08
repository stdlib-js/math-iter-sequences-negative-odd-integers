"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=o(function(_,f){
var b=require('@stdlib/assert-is-plain-object/dist'),x=require('@stdlib/assert-has-own-property/dist'),y=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist');function T(e,r){return b(r)?x(r,"iter")&&(e.iter=r.iter,!y(r.iter))?new TypeError(s('0aL2t',"iter",r.iter)):null:new TypeError(s('0aL2V',r));}f.exports=T
});var m=o(function(j,c){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=require('@stdlib/symbol-iterator/dist'),h=require('@stdlib/constants-float64-max-safe-integer/dist'),w=l(),A=(h+1)/2;function g(e){var r,t,v,i,n,a;if(r={iter:A},arguments.length&&(i=w(r,e),i))throw i;return n=0,a=1,t={},u(t,"next",q),u(t,"return",O),d&&u(t,d,p),t;function q(){return n+=1,v||n>r.iter?{done:!0}:(a-=2,{value:a,done:!1})}function O(E){return v=!0,arguments.length?{value:E,done:!0}:{done:!0}}function p(){return g(r)}}c.exports=g
});var I=m();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
