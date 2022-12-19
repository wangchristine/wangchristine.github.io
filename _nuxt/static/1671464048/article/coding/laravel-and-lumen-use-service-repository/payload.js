__NUXT_JSONP__("/article/coding/laravel-and-lumen-use-service-repository", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad){return {data:[{page:{slug:"laravel-and-lumen-use-service-repository",description:"在 Laravel\u002FLumen 優雅的框架下，為使程式的耦合度降低、降低維護成本，也為了將程式模組化以方便管理",category:"coding",title:"在 Laravel\u002FLumen 使用 Service Repository 來分層設計架構",isPopular:true,createdAt:J,updatedAt:J,toc:[{id:A,depth:m,text:A},{id:K,depth:m,text:k},{id:L,depth:m,text:h},{id:M,depth:m,text:N},{id:B,depth:m,text:B},{id:C,depth:m,text:C}],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:a,value:"在 Laravel\u002FLumen 優雅的框架下，為使程式的耦合度降低、降低維護成本，也為了將程式模組化以方便管理與重複利用，而引進 "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:E},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:" 這兩個概念，功能分別為："}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,O]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Service: 只專注在商業邏輯\nRepository: 只專注於操作 Model \n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"以下教學如何在 Laravel\u002FLumen 使用 "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:E},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:" 這兩個概念："}]},{type:a,value:e},{type:b,tag:n,props:{id:A},children:[{type:b,tag:o,props:{ariaHidden:p,href:"#%E5%AE%89%E8%A3%9D%E5%A5%97%E4%BB%B6",tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:A}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"在 command line 中下以下指令安裝"}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,O]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"$ composer require chhw\u002Fcommander\n"}]}]}]},{type:a,value:e},{type:b,tag:P,props:{},children:[{type:a,value:e},{type:b,tag:x,props:{},children:[{type:a,value:"使用 Laravel 框架基本上這樣就安裝完畢了，除非是 5.5 以下版本還要另外設定，就到官方套件查看說明。"}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:a,value:"使用 Lumen 框架則要再 "},{type:b,tag:f,props:{},children:[{type:a,value:"bootstrap\u002Fapp.php"}]},{type:a,value:" 檔案做以下設定:\n"},{type:b,tag:P,props:{},children:[{type:a,value:e},{type:b,tag:x,props:{},children:[{type:a,value:"取消註解 "},{type:b,tag:f,props:{},children:[{type:a,value:"$app-\u003EwithEloquent();"}]}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:a,value:"新增一行 "},{type:b,tag:f,props:{},children:[{type:a,value:"$app-\u003Eregister(CHHW\\Commander\\CommanderServiceProvider::class);"}]}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:a,value:"另外再自行複製 Laravel 框架中的 "},{type:b,tag:f,props:{},children:[{type:a,value:"config\u002Fdatabase.php"}]},{type:a,value:" 放置相同目錄內"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:n,props:{id:K},children:[{type:b,tag:o,props:{ariaHidden:p,href:"#service",tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:k}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"在 command line 中下以下指令即可創建 "},{type:b,tag:f,props:{},children:[{type:a,value:k}]}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,Q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"    $ php artisan make:service UserService\n"}]}]}]},{type:a,value:e},{type:b,tag:n,props:{id:L},children:[{type:b,tag:o,props:{ariaHidden:p,href:"#repository",tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:h}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"在 command line 中下以下其中一個指令即可創建 "},{type:b,tag:f,props:{},children:[{type:a,value:h}]}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,Q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"    $ php artisan make:repository UserRepository\n    $ php artisan make:repository UserRepository "},{type:b,tag:c,props:{className:[d,"parameter",D]},children:[{type:a,value:"--model"}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:R}]},{type:a,value:"User\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"這兩個指令差別在於，下第二條指令可以在你已經有 "},{type:b,tag:f,props:{},children:[{type:a,value:S}]},{type:a,value:"，會在創建 "},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:" 時綁定所指定的 "},{type:b,tag:f,props:{},children:[{type:a,value:S}]},{type:a,value:" (推薦使用)。"}]},{type:a,value:e},{type:b,tag:n,props:{id:M},children:[{type:b,tag:o,props:{ariaHidden:p,href:"#%E5%A5%BD%E7%94%A8-methods",tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:N}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"套件中有提供一些好用的 methods 預設在 "},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:" 中，像是可能會常用的 "},{type:b,tag:f,props:{},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:f,props:{},children:[{type:a,value:"create"}]},{type:a,value:U},{type:b,tag:f,props:{},children:[{type:a,value:"paginate"}]},{type:a,value:"...等，其他可用的 methods 可以在官方套件中找到。"}]},{type:a,value:e},{type:b,tag:n,props:{id:B},children:[{type:b,tag:o,props:{ariaHidden:p,href:"#%E7%AF%84%E4%BE%8B",tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:B}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"建立完 "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:E},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:" 後，在 "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:" 中依賴注入 "},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:" 後初始化，即可在 "},{type:b,tag:f,props:{},children:[{type:a,value:k}]},{type:a,value:" 中使用 "},{type:b,tag:f,props:{},children:[{type:a,value:"$this-\u003EuserRepository"}]},{type:a,value:" 來呼叫 "},{type:b,tag:f,props:{},children:[{type:a,value:h}]},{type:a,value:" 自定義 function 或如上所述套件提供的 methods。"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"app\u002FServices\u002FUserService.php"}]},{type:a,value:e},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,"language-php"]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"protected"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"$userRepository"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:W}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,X,z]},children:[{type:a,value:"__construct"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,"class-name","type-declaration"]},children:[{type:a,value:"UserRepository"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,$,l]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:R}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ad}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:W}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,X,z]},children:[{type:a,value:"getAll"}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"return"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,$,l]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:F}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ad}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:n,props:{id:C},children:[{type:b,tag:o,props:{ariaHidden:p,href:"#%E7%B5%90%E8%AA%9E",tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:C}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"如果善用這兩個功能，你在開發上會容易許多，多人合作開發也較易拆分功能，程式也會跟框架一樣很優雅，別人之後維護這樣相同模式的開發也會容易許多。或許你會說，為什麼離職後還要考慮別人維護我 code 容不容易呢? 我相信你跳槽之後絕對不想碰別人的爛 code，所以，己所不欲勿施於人呀~"}]}]},dir:"\u002Fcoding",path:"\u002Fcoding\u002Flaravel-and-lumen-use-service-repository",extension:".md"}}],fetch:{},mutations:[]}}("text","element","span","token","\n","code","punctuation","Repository","p"," ","Service","keyword",2,"h2","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","li","operator","function","安裝套件","範例","結語","variable"," 和 ",";","(",")","-\u003E","2022-07-14T00:00:00.000Z","service","repository","好用-methods","好用 Methods","language-text","ul","language-bash","=","Model","all","、","\n\n","public","function-definition","$repository","{","\n    ","this","$this","property","userRepository","}")));