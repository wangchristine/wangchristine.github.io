__NUXT_JSONP__("/article/coding/php-docker-image-install-extension", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{page:{slug:"php-docker-image-install-extension",description:"以下介紹使用 PHP Docker image 安裝 PHP 擴展的方式，以及可以使用此方法安裝的擴展",category:"coding",title:"使用 PHP Docker image 安裝 PHP 擴展",createdAt:g,updatedAt:g,toc:[{id:h,depth:i,text:j},{id:k,depth:i,text:l}],body:{type:"root",children:[{type:a,tag:f,props:{},children:[{type:b,value:"以下介紹使用 PHP Docker image 安裝 PHP 擴展的方式，以及可以使用此方法安裝的擴展："}]},{type:b,value:e},{type:a,tag:m,props:{id:h},children:[{type:a,tag:n,props:{ariaHidden:o,href:"#docker-php-ext-install",tabIndex:p},children:[{type:a,tag:q,props:{className:[r,s]},children:[]}]},{type:b,value:j}]},{type:b,value:e},{type:a,tag:f,props:{},children:[{type:b,value:"安裝並自動調用 docker-php-ext-enable 來啟動 PHP 擴展"}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:"table",props:{},children:[{type:a,tag:"thead",props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:"th",props:{},children:[{type:b,value:"可使用擴展"}]}]}]},{type:a,tag:"tbody",props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"bcmath"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"bz2"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"calendar"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"ctype"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"curl"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"dba"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"dom"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"enchant"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"exif"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"fileinfo"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"filter"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"ftp"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"gd"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"gettext"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"gmp"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"hash"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"iconv"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"imap"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"interbase"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"intl"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"json"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"ldap"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"mbstring"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"mcrypt"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"mysqli"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"oci8"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"odbc"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"opcache"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pcntl"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pdo"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pdo_dblib"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pdo_firebird"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pdo_mysql"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pdo_oci"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pdo_odbc"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pdo_pgsql"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pdo_sqlite"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pgsql"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"phar"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"posix"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pspell"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"readline"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"recode"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"reflection"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"session"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"shmop"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"simplexml"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"snmp"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"soap"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"sockets"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"spl"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"standard"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"sysvmsg"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"sysvsem"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"sysvshm"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"tidy"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"tokenizer"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"wddx"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"xml"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"xmlreader"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"xmlrpc"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"xmlwriter"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"xsl"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"zip"}]}]}]}]},{type:b,value:e},{type:a,tag:m,props:{id:k},children:[{type:a,tag:n,props:{ariaHidden:o,href:"#docker-php-ext-enable",tabIndex:p},children:[{type:a,tag:q,props:{className:[r,s]},children:[]}]},{type:b,value:l}]},{type:b,value:e},{type:a,tag:f,props:{},children:[{type:b,value:"使用 pecl 安裝 PHP 擴展時默認是沒有啟動這個擴展，此指令則是自動幫我們來啟動 PHP 擴展，而不需手動去 php.ini 裡啟動。"}]}]},dir:"\u002Fcoding",path:"\u002Fcoding\u002Fphp-docker-image-install-extension",extension:".md"}}],fetch:{},mutations:[]}}("element","text","tr","td","\n","p","2022-07-05T00:00:00.000Z","docker-php-ext-install",2,"docker-php-ext-install:","docker-php-ext-enable","docker-php-ext-enable:","h2","a","true",-1,"span","icon","icon-link")));