window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1657123662",layout:"default",error:Q,state:{categories:[{routeName:L,name:"Backend & Frontend"},{routeName:M,name:"Server"},{routeName:R,name:"Drama"},{routeName:N,name:"Video"}],allArticles:[{slug:"php-docker-image-install-extension",description:"以下介紹使用 PHP Docker image 安裝 PHP 擴展的方式，以及可以使用此方法安裝的擴展",category:L,title:"使用 PHP Docker image 安裝 PHP 擴展",createdAt:S,updatedAt:S,toc:[{id:T,depth:i,text:U},{id:V,depth:i,text:W}],body:{type:B,children:[{type:a,tag:j,props:{},children:[{type:b,value:"以下介紹使用 PHP Docker image 安裝 PHP 擴展的方式，以及可以使用此方法安裝的擴展："}]},{type:b,value:e},{type:a,tag:k,props:{id:T},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#docker-php-ext-install",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:U}]},{type:b,value:e},{type:a,tag:j,props:{},children:[{type:b,value:"安裝並自動調用 docker-php-ext-enable 來啟動 PHP 擴展"}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:s,props:{},children:[{type:a,tag:t,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"可使用擴展"}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"bcmath"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"bz2"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"calendar"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"ctype"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"curl"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"dba"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"dom"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"enchant"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"exif"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"fileinfo"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"filter"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"ftp"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"gd"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"gettext"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"gmp"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"hash"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"iconv"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"imap"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"interbase"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"intl"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"json"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"ldap"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"mbstring"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"mcrypt"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"mysqli"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"oci8"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"odbc"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"opcache"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pcntl"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pdo"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pdo_dblib"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pdo_firebird"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pdo_mysql"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pdo_oci"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pdo_odbc"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pdo_pgsql"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pdo_sqlite"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pgsql"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"phar"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"posix"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"pspell"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"readline"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"recode"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"reflection"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"session"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"shmop"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"simplexml"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"snmp"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"soap"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"sockets"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"spl"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"standard"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"sysvmsg"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"sysvsem"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"sysvshm"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"tidy"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"tokenizer"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"wddx"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"xml"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"xmlreader"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"xmlrpc"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"xmlwriter"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"xsl"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"zip"}]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:V},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#docker-php-ext-enable",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:W}]},{type:b,value:e},{type:a,tag:j,props:{},children:[{type:b,value:"使用 pecl 安裝 PHP 擴展時默認是沒有啟動這個擴展，此指令則是自動幫我們來啟動 PHP 擴展，而不需手動去 php.ini 裡啟動。"}]}]},dir:X,path:"\u002Fcoding\u002Fphp-docker-image-install-extension",extension:C},{slug:"2022-movie-minions-the-rise-of-gru",description:"《小小兵》電影續集《小小兵2：格魯的崛起》終於在 2022年暑假歡樂登場啦",category:R,title:"《小小兵2：格魯的崛起》2022 年暑假歡樂登場！",createdAt:"2022-06-28T00:00:00.000Z",updatedAt:"2022-07-03T00:00:00.000Z",toc:[{id:E,depth:i,text:E},{id:Y,depth:i,text:Z}],body:{type:B,children:[{type:a,tag:k,props:{id:E},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E6%95%85%E4%BA%8B%E5%A4%A7%E7%B6%B1",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:E}]},{type:b,value:e},{type:a,tag:j,props:{},children:[{type:b,value:"《小小兵》電影續集《小小兵 2：格魯的崛起》終於在 2022 年暑假歡樂登場啦！"}]},{type:b,value:e},{type:a,tag:j,props:{},children:[{type:b,value:"格魯在十二歲時是超級壞蛋組織「壞壞六人組」的狂熱粉絲，為了有資格加入他們，格魯策劃了一個非常邪惡的計劃。"}]},{type:b,value:e},{type:a,tag:j,props:{},children:[{type:b,value:"當「壞壞六人組」解僱他們的領袖「傳奇戰士」威酷魔王時，格魯參與面試希望加入他們。"}]},{type:b,value:e},{type:a,tag:j,props:{},children:[{type:b,value:"雖然事情進展得並不順利，但格魯為了證明自己有多壞，他故意偷走了「壞壞六人組」的寶石後被他們追殺。"}]},{type:b,value:e},{type:a,tag:j,props:{},children:[{type:b,value:"在逃跑過程中，格魯發現即使是壞蛋，也需要朋友的幫助。"}]},{type:b,value:e},{type:a,tag:k,props:{id:Y},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E6%AD%A1%E6%A8%82%E9%A0%90%E5%91%8A",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:Z}]},{type:b,value:e},{type:a,tag:"iframe",props:{width:560,height:315,src:"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FO8to1Xm1WbA",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:_},children:[]}]},dir:"\u002Fdrama",path:"\u002Fdrama\u002F2022-movie-minions-the-rise-of-gru",extension:C},{slug:"javascript-regular-expression",description:"每次要用正則表達式 Regular Expression 的時候，很容易忘記它的規則，因為英文我看的比較習慣且解釋的很精確",category:L,title:"Javascript 正則表達式 Regular Expression 詳細範例用法",createdAt:$,updatedAt:$,toc:[{id:aa,depth:i,text:ab},{id:ac,depth:i,text:ad},{id:ae,depth:i,text:af},{id:ag,depth:i,text:ah},{id:ai,depth:i,text:aj},{id:ak,depth:i,text:al},{id:am,depth:i,text:an}],body:{type:B,children:[{type:a,tag:j,props:{},children:[{type:b,value:"每次要用正則表達式 Regular Expression 的時候，很容易忘記它的規則，因為英文我看的比較習慣且解釋的很精確，所以以下就用英文說明在 Javascript 中詳細範例用法："}]},{type:b,value:e},{type:a,tag:k,props:{id:aa},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E6%96%87%E5%AD%97",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:ab}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:s,props:{},children:[{type:a,tag:t,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:x}]},{type:a,tag:f,props:{},children:[{type:b,value:y}]},{type:a,tag:f,props:{},children:[{type:b,value:D}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Any character except newline."}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\w"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Word. Alphanumeric & Underscore"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Equivalent to [A-Za-z0-9_]"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\d"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Digit. 0-9"}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\s"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Whitespace. Spaces & Tabs & Line breaks"}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\W \\D \\S"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Reverse \\w, \\d, \\s"}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"[abc]"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Match any character in the set."}]},{type:a,tag:c,props:{},children:[{type:b,value:"any of a, b, c"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"[^abc]"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Match any character that is not in the set."}]},{type:a,tag:c,props:{},children:[{type:b,value:"not a, b, or c"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"[a-z]"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Matches a character having a character code between the two specified characters inclusive."}]},{type:a,tag:c,props:{},children:[{type:b,value:"character between a & z"}]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:ac},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E4%BD%8D%E7%BD%AE",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:ad}]},{type:b,value:ao},{type:a,tag:s,props:{},children:[{type:a,tag:t,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:x}]},{type:a,tag:f,props:{},children:[{type:b,value:y}]},{type:a,tag:f,props:{},children:[{type:b,value:D}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"^abc$"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Matches start \u002F end of the string."}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\b \\B"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Word, not-word boundary"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002Fs\\b\u002Fg =\u003E she ha"},{type:a,tag:v,props:{},children:[{type:b,value:ap}]},{type:b,value:" many sister"},{type:a,tag:v,props:{},children:[{type:b,value:ap}]}]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:ae},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E8%B7%B3%E8%84%AB%E5%AD%97%E5%85%83",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:af}]},{type:b,value:ao},{type:a,tag:s,props:{},children:[{type:a,tag:t,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:x}]},{type:a,tag:f,props:{},children:[{type:b,value:y}]},{type:a,tag:f,props:{},children:[{type:b,value:D}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Escaped special characters, including: +*?^$\\.[]{}()|\u002F "},{type:a,tag:z,props:{},children:[]},{type:b,value:" Within a character set, only , -, and ] need to be escaped."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\\. \\* \\\\"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\\t \\n \\r"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tab, linefeed, carriage return"}]},{type:a,tag:c,props:{},children:[]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:ag},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E7%BE%A4%E7%B5%84",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:ah}]},{type:b,value:aq},{type:a,tag:s,props:{},children:[{type:a,tag:t,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:x}]},{type:a,tag:f,props:{},children:[{type:b,value:y}]},{type:a,tag:f,props:{},children:[{type:b,value:D}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"(abc)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Capture group"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F(https?):\\\u002F\\\u002F([^\\r\\n]+)\u002Fg =\u003E "},{type:a,tag:v,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:ar}]},{type:b,value:as}]},{type:b,value:F},{type:a,tag:z,props:{},children:[]},{type:b,value:" Group 1: \"https:\" "},{type:a,tag:z,props:{},children:[]},{type:b,value:" Group 2: \"google.com\u002F\""}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"(?:abc)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Non-capturing group"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F(?:https?):\\\u002F\\\u002F([^\\r\\n]+)\u002Fg =\u003E "},{type:a,tag:v,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:ar}]},{type:b,value:as}]},{type:b,value:F},{type:a,tag:z,props:{},children:[]},{type:b,value:" Group 1: \"google.com\u002F\""}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"x(?=abc)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Positive lookahead. Matches only if followed by condition and without including it in the result."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002Fx(?=abc)\u002Fg =\u003E "},{type:a,tag:v,props:{},children:[{type:b,value:at}]},{type:b,value:"abc"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"x(?!abc)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Negative lookahead. Matches only if not followed by condition and without including it in the result."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002Fx(?!abc)\u002Fg =\u003E "},{type:a,tag:v,props:{},children:[{type:b,value:at}]},{type:b,value:"def"}]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:ai},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E6%95%B8%E9%87%8F",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:aj}]},{type:b,value:aq},{type:a,tag:s,props:{},children:[{type:a,tag:t,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:x}]},{type:a,tag:f,props:{},children:[{type:b,value:y}]},{type:a,tag:f,props:{},children:[{type:b,value:D}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"a* a+ a?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"0 or more, 1 or more, 0 or 1"}]},{type:a,tag:c,props:{},children:[]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"a{5} a{2,} a{1,3}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Matches the specified quantity."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exactly five, two or more, between one & three"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"a+? a{2,}?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"? after *+?{} will match as few as possible."}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\\d+\u002F =\u003E "},{type:a,tag:v,props:{},children:[{type:b,value:au}]},{type:b,value:F},{type:a,tag:z,props:{},children:[]},{type:b,value:" \u002F\\d+?\u002F =\u003E "},{type:a,tag:v,props:{},children:[{type:b,value:"1"}]},{type:b,value:"23"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"ab|cd"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Acts like a boolean OR."}]},{type:a,tag:c,props:{},children:[{type:b,value:"match ab or cd"}]}]}]}]},{type:b,value:e},{type:a,tag:z,props:{},children:[]},{type:b,value:e},{type:a,tag:k,props:{id:ak},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#flags",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:al}]},{type:b,value:e},{type:a,tag:j,props:{},children:[{type:b,value:"最後來介紹 flags，語法:"}]},{type:b,value:e},{type:a,tag:G,props:{className:[H]},children:[{type:a,tag:I,props:{className:[O,J]},children:[{type:a,tag:w,props:{},children:[{type:b,value:"\u002Fpattern\u002Fflags\n"}]}]}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:s,props:{},children:[{type:a,tag:t,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:x}]},{type:a,tag:f,props:{},children:[{type:b,value:y}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"(nothing)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Return first matches."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"g"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Global search."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"i"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Case-insensitive search."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"m"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Multi-line search."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"u"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Use unicode."}]}]}]}]},{type:b,value:e},{type:a,tag:k,props:{id:am},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#%E5%B8%B8%E7%94%A8%E7%AF%84%E4%BE%8B",tabIndex:n},children:[{type:a,tag:g,props:{className:[o,p]},children:[]}]},{type:b,value:an}]},{type:b,value:e},{type:a,tag:av,props:{},children:[{type:b,value:e},{type:a,tag:r,props:{},children:[{type:b,value:"驗證為 youtube 連結"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:aw,props:{},children:[{type:b,value:e},{type:a,tag:r,props:{},children:[{type:b,value:"條件1: 需為 "},{type:a,tag:w,props:{},children:[{type:b,value:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?"}]},{type:b,value:" 或 "},{type:a,tag:w,props:{},children:[{type:b,value:"https:\u002F\u002Fyoutu.be\u002F"}]},{type:b,value:" 開頭，前方"},{type:a,tag:w,props:{},children:[{type:b,value:"www"}]},{type:b,value:"可有可無"}]},{type:b,value:e},{type:a,tag:r,props:{},children:[{type:b,value:"條件2: 後方需要至少一字元的任何值"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:G,props:{className:[H]},children:[{type:a,tag:I,props:{className:[O,J]},children:[{type:a,tag:w,props:{},children:[{type:b,value:"\u002F^https:\\\u002F\\\u002F(?:www\\.)?(?:youtu\\.be\\\u002F|youtube\\.com\\\u002Fwatch\\?).+$\u002Fg\n"}]}]}]},{type:b,value:e},{type:a,tag:av,props:{start:i},children:[{type:b,value:e},{type:a,tag:r,props:{},children:[{type:b,value:"驗證密碼格式"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:aw,props:{},children:[{type:b,value:e},{type:a,tag:r,props:{},children:[{type:b,value:"條件1: 長度8-16位"}]},{type:b,value:e},{type:a,tag:r,props:{},children:[{type:b,value:"條件2: 至少需要一個數字及一個英文。數字：0 到 9(10個字元)；英文不限大小寫: A 到 Z, a 到 z)"}]},{type:b,value:e},{type:a,tag:r,props:{},children:[{type:b,value:"條件3: 僅接受 數字\u002F英文\u002F特殊符號"}]},{type:b,value:e},{type:a,tag:r,props:{},children:[{type:b,value:"條件4: 符號： !\" # $ % & ' ( ) * + , - . \u002F : ; \u003C = \u003E ? @ [ \\ ] ^ _` { | } ~ (32個字元)"}]},{type:b,value:e},{type:a,tag:r,props:{},children:[{type:b,value:"條件5: 不接受其他格式如空格及其他語言(中文\u002F日文...等)"}]},{type:b,value:e}]},{type:b,value:e},{type:a,tag:G,props:{className:[H]},children:[{type:a,tag:I,props:{className:[O,J]},children:[{type:a,tag:w,props:{},children:[{type:b,value:"\u002F^(?=.*[0-9])(?=.*[A-Z])([A-Z0-9\\w\\!\"#$%&\\'()*+,-.\\\u002F:;\u003C=\u003E?@[\\]^_`{|}~\\\\]){8,16}$\u002Fg\n"}]}]}]}]},dir:X,path:"\u002Fcoding\u002Fjavascript-regular-expression",extension:C},{slug:ax,description:ay,category:N,title:az,createdAt:K,updatedAt:K,toc:[],body:{type:B,children:[{type:a,tag:j,props:{},children:[{type:b,value:N}]}]},dir:"\u002Fvideo",path:"\u002Fvideo\u002Ftest",extension:C},{slug:ax,description:ay,category:M,title:az,createdAt:K,updatedAt:K,toc:[],body:{type:B,children:[{type:a,tag:j,props:{},children:[{type:b,value:M}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:s,props:{},children:[{type:a,tag:t,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Column 1"}]},{type:a,tag:f,props:{},children:[{type:b,value:"Column 2"}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]},{type:a,tag:f,props:{},children:[{type:b,value:q}]}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:h}]}]}]}]},{type:b,value:e},{type:a,tag:G,props:{className:[H]},children:[{type:a,tag:I,props:{className:["language-php",J]},children:[{type:a,tag:w,props:{},children:[{type:b,value:"$ aawewe\n"},{type:a,tag:g,props:{className:[A,aA]},children:[{type:b,value:"12121"}]},{type:b,value:e},{type:a,tag:g,props:{className:[A,P]},children:[{type:b,value:"{"}]},{type:b,value:e},{type:a,tag:g,props:{className:[A,"string","double-quoted-string"]},children:[{type:b,value:"\"name\""}]},{type:a,tag:g,props:{className:[A,P]},children:[{type:b,value:":"}]},{type:b,value:F},{type:a,tag:g,props:{className:[A,aA]},children:[{type:b,value:au}]},{type:b,value:e},{type:a,tag:g,props:{className:[A,P]},children:[{type:b,value:"}"}]},{type:b,value:e}]}]}]}]},dir:"\u002Fserver",path:"\u002Fserver\u002Ftest",extension:C}]},serverRendered:_,routePath:"\u002Farticle\u002Fvideo\u002Ftest",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:Q},content:{dbHash:"eff33d9a"}}}}("element","text","td","tr","\n","th","span","Text",2,"p","h2","a","true",-1,"icon","icon-link","Column 3","li","table","thead","tbody","b","code","用法","說明","br","token","root",".md","範例","故事大綱"," ","div","nuxt-content-highlight","pre","line-numbers","2022-06-29T00:00:00.000Z","coding","server","video","language-text","punctuation",null,"drama","2022-07-05T00:00:00.000Z","docker-php-ext-install","docker-php-ext-install:","docker-php-ext-enable","docker-php-ext-enable:","\u002Fcoding","歡樂預告","歡樂預告:",true,"2022-07-02T00:00:00.000Z","文字","文字:","位置","位置:","跳脫字元","跳脫字元:","群組","群組:","數量","數量:","flags","Flags:","常用範例","常用範例:","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","s","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","https:\u002F\u002F","google.com\u002F","x","123","ol","ul","test","Hello~! 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890","Test","number"));