__NUXT_JSONP__("/article/coding/javascript-regular-expression", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:[{page:{slug:"javascript-regular-expression",description:"每次要用正則表達式 Regular Expression 的時候，很容易忘記它的規則，因為英文我看的比較習慣且解釋的很精確",category:"coding",title:"Javascript 正則表達式 Regular Expression 詳細範例用法",isPopular:true,createdAt:"2022-07-02T00:00:00.000Z",updatedAt:"2022-07-30T00:00:00.000Z",toc:[{id:F,depth:j,text:G},{id:H,depth:j,text:I},{id:J,depth:j,text:K},{id:L,depth:j,text:M},{id:N,depth:j,text:O},{id:P,depth:j,text:Q},{id:R,depth:j,text:S}],body:{type:"root",children:[{type:a,tag:T,props:{},children:[{type:b,value:"每次要用正則表達式 Regular Expression 的時候，很容易忘記它的規則，因為英文我看的比較習慣且解釋的很精確，所以以下就用英文說明在 Javascript 中詳細範例用法："}]},{type:b,value:e},{type:a,tag:k,props:{id:F},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E6%96%87%E5%AD%97",tabIndex:n},children:[{type:a,tag:h,props:{className:[o,p]},children:[]}]},{type:b,value:G}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:s}]},{type:a,tag:f,props:{},children:[{type:b,value:t}]},{type:a,tag:f,props:{},children:[{type:b,value:x}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Any character except newline."}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\w"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Word. Alphanumeric & Underscore"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Equivalent to [A-Za-z0-9_]"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\d"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Digit. 0-9"}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\s"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Whitespace. Spaces & Tabs & Line breaks"}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\W \\D \\S"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Reverse \\w, \\d, \\s"}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"[abc]"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Match any character in the set."}]},{type:a,tag:c,props:{},children:[{type:b,value:"any of a, b, c"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"[^abc]"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Match any character that is not in the set."}]},{type:a,tag:c,props:{},children:[{type:b,value:"not a, b, or c"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"[a-z]"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Matches a character having a character code between the two specified characters inclusive."}]},{type:a,tag:c,props:{},children:[{type:b,value:"character between a & z"}]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:H},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E4%BD%8D%E7%BD%AE",tabIndex:n},children:[{type:a,tag:h,props:{className:[o,p]},children:[]}]},{type:b,value:I}]},{type:b,value:U},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:s}]},{type:a,tag:f,props:{},children:[{type:b,value:t}]},{type:a,tag:f,props:{},children:[{type:b,value:x}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"^abc$"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Matches start \u002F end of the string."}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\b \\B"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Word, not-word boundary"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002Fs\\b\u002Fg =\u003E she ha"},{type:a,tag:g,props:{},children:[{type:b,value:V}]},{type:b,value:" many sister"},{type:a,tag:g,props:{},children:[{type:b,value:V}]}]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:J},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E8%B7%B3%E8%84%AB%E5%AD%97%E5%85%83",tabIndex:n},children:[{type:a,tag:h,props:{className:[o,p]},children:[]}]},{type:b,value:K}]},{type:b,value:U},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:s}]},{type:a,tag:f,props:{},children:[{type:b,value:t}]},{type:a,tag:f,props:{},children:[{type:b,value:x}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Escaped special characters, including: +*?^$\\.[]{}()|\u002F "},{type:a,tag:v,props:{},children:[]},{type:b,value:" Within a character set, only , -, and ] need to be escaped."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\\. \\* \\\\"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\t \\n \\r"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tab, linefeed, carriage return"}]},{type:a,tag:c,props:{},children:[]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:L},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E7%BE%A4%E7%B5%84",tabIndex:n},children:[{type:a,tag:h,props:{className:[o,p]},children:[]}]},{type:b,value:M}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:s}]},{type:a,tag:f,props:{},children:[{type:b,value:t}]},{type:a,tag:f,props:{},children:[{type:b,value:x}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"(abc)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Capture group"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F(https?):\\\u002F\\\u002F([^\\r\\n]+)\u002Fg =\u003E "},{type:a,tag:g,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:W}]},{type:b,value:X}]},{type:b,value:z},{type:a,tag:v,props:{},children:[]},{type:b,value:" Group 1: \"https:\" "},{type:a,tag:v,props:{},children:[]},{type:b,value:" Group 2: \"google.com\u002F\""}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"(?:abc)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Non-capturing group"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F(?:https?):\\\u002F\\\u002F([^\\r\\n]+)\u002Fg =\u003E "},{type:a,tag:g,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:W}]},{type:b,value:X}]},{type:b,value:z},{type:a,tag:v,props:{},children:[]},{type:b,value:" Group 1: \"google.com\u002F\""}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"x(?=abc)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Positive lookahead. Matches only if followed by condition and without including it in the result."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002Fx(?=abc)\u002Fg =\u003E "},{type:a,tag:g,props:{},children:[{type:b,value:y}]},{type:b,value:"abc"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"x(?!abc)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Negative lookahead. Matches only if not followed by condition and without including it in the result."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002Fx(?!abc)\u002Fg =\u003E "},{type:a,tag:g,props:{},children:[{type:b,value:y}]},{type:b,value:"def"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"(?\u003C=abc)x"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Positive lookbehind. Matches only if preceded by condition and without including it in the result."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F(?\u003C=abc)x\u002Fg =\u003E abc"},{type:a,tag:g,props:{},children:[{type:b,value:y}]}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"(?\u003C!abc)x"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Negative lookbehind. Matches only if not preceded by condition and without including it in the result."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F(?\u003C!abc)x\u002Fg =\u003E def"},{type:a,tag:g,props:{},children:[{type:b,value:y}]}]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:N},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E6%95%B8%E9%87%8F",tabIndex:n},children:[{type:a,tag:h,props:{className:[o,p]},children:[]}]},{type:b,value:O}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:s}]},{type:a,tag:f,props:{},children:[{type:b,value:t}]},{type:a,tag:f,props:{},children:[{type:b,value:x}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"a* a+ a?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"0 or more, 1 or more, 0 or 1"}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"a{5} a{2,} a{1,3}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Matches the specified quantity."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exactly five, two or more, between one & three"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"a+? a{2,}?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"? after *+?{} will match as few as possible."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\\d+\u002F =\u003E "},{type:a,tag:g,props:{},children:[{type:b,value:"123"}]},{type:b,value:z},{type:a,tag:v,props:{},children:[]},{type:b,value:" \u002F\\d+?\u002F =\u003E "},{type:a,tag:g,props:{},children:[{type:b,value:"1"}]},{type:b,value:"23"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"ab|cd"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Acts like a boolean OR."}]},{type:a,tag:c,props:{},children:[{type:b,value:"match ab or cd"}]}]}]}]},{type:b,value:e},{type:a,tag:v,props:{},children:[]},{type:b,value:e},{type:a,tag:k,props:{id:P},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#flags",tabIndex:n},children:[{type:a,tag:h,props:{className:[o,p]},children:[]}]},{type:b,value:Q}]},{type:b,value:e},{type:a,tag:T,props:{},children:[{type:b,value:"最後來介紹 flags，語法:"}]},{type:b,value:e},{type:a,tag:A,props:{className:[B]},children:[{type:a,tag:C,props:{className:[D,E]},children:[{type:a,tag:w,props:{},children:[{type:b,value:"\u002Fpattern\u002Fflags\n"}]}]}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:s}]},{type:a,tag:f,props:{},children:[{type:b,value:t}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"(nothing)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Return first matches."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"g"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Global search."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"i"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Case-insensitive search."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"m"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Multi-line search."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"u"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Use unicode."}]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:R},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E5%B8%B8%E7%94%A8%E7%AF%84%E4%BE%8B",tabIndex:n},children:[{type:a,tag:h,props:{className:[o,p]},children:[]}]},{type:b,value:S}]},{type:b,value:e},{type:a,tag:Y,props:{},children:[{type:b,value:e},{type:a,tag:i,props:{},children:[{type:b,value:"驗證為 youtube 連結"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:Z,props:{},children:[{type:b,value:e},{type:a,tag:i,props:{},children:[{type:b,value:"條件1: 需為 "},{type:a,tag:w,props:{},children:[{type:b,value:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?"}]},{type:b,value:" 或 "},{type:a,tag:w,props:{},children:[{type:b,value:"https:\u002F\u002Fyoutu.be\u002F"}]},{type:b,value:" 開頭，前方"},{type:a,tag:w,props:{},children:[{type:b,value:"www"}]},{type:b,value:"可有可無"}]},{type:b,value:e},{type:a,tag:i,props:{},children:[{type:b,value:"條件2: 後方需要至少一字元的任何值"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:A,props:{className:[B]},children:[{type:a,tag:C,props:{className:[D,E]},children:[{type:a,tag:w,props:{},children:[{type:b,value:"\u002F^https:\\\u002F\\\u002F(?:www\\.)?(?:youtu\\.be\\\u002F|youtube\\.com\\\u002Fwatch\\?).+$\u002Fg\n"}]}]}]},{type:b,value:e},{type:a,tag:Y,props:{start:j},children:[{type:b,value:e},{type:a,tag:i,props:{},children:[{type:b,value:"驗證密碼格式"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:Z,props:{},children:[{type:b,value:e},{type:a,tag:i,props:{},children:[{type:b,value:"條件1: 長度8-16位"}]},{type:b,value:e},{type:a,tag:i,props:{},children:[{type:b,value:"條件2: 至少需要一個數字及一個英文。數字：0 到 9(10個字元)；英文不限大小寫: A 到 Z, a 到 z)"}]},{type:b,value:e},{type:a,tag:i,props:{},children:[{type:b,value:"條件3: 僅接受 數字\u002F英文\u002F特殊符號"}]},{type:b,value:e},{type:a,tag:i,props:{},children:[{type:b,value:"條件4: 符號： !\" # $ % & ' ( ) * + , - . \u002F : ; \u003C = \u003E ? @ [ \\ ] ^ _` { | } ~ (32個字元)"}]},{type:b,value:e},{type:a,tag:i,props:{},children:[{type:b,value:"條件5: 不接受其他格式如空格及其他語言(中文\u002F日文...等)"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:A,props:{className:[B]},children:[{type:a,tag:C,props:{className:[D,E]},children:[{type:a,tag:w,props:{},children:[{type:b,value:"\u002F^(?=.*[0-9])(?=.*[A-Z])([A-Z0-9\\w\\!\"#$%&\\'()*+,-.\\\u002F:;\u003C=\u003E?@[\\]^_`{|}~\\\\]){8,16}$\u002Fg\n"}]}]}]}]},dir:"\u002Fcoding",path:"\u002Fcoding\u002Fjavascript-regular-expression",extension:".md"}}],fetch:{},mutations:[]}}("element","text","td","tr","\n","th","b","span","li",2,"h2","a","true",-1,"icon","icon-link","table","thead","用法","說明","tbody","br","code","範例","x"," ","div","nuxt-content-highlight","pre","language-text","line-numbers","文字","文字:","位置","位置:","跳脫字元","跳脫字元:","群組","群組:","數量","數量:","flags","Flags:","常用範例","常用範例:","p","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","s","https:\u002F\u002F","google.com\u002F","ol","ul")));