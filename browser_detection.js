// Please leave this notice
// JavaScript Browser and Operating System Detector ver1 build 2014-Mar-8 by Eric Noguchi,  http://www.ericsicons.com/js_browser
function BrowserInfo(ua)
{
    var n = navigator;
    var agt = (ua ? ua : n.userAgent).replace(/_/g, ".");
    var os;
    var osv;
    var bn;
    var bv;
    var bt = 32;
    var a = {};

    var i = function (str)
    {
        var m = new RegExp(str, "i").exec(agt);
        return m ? m[0] : false;
    }
    var gv = function (str)
    {
        var re = new RegExp(str + '[\\s/]*((\\d*\\.*){0,4})', "gi");
        return re.exec(agt)[1];
    }
    if (i("(x86\\.64|wow64|win64|x64|x86\\-64|amd64|ia64){1}"))
    {
        bt = 64;
    }
    if (i("windows"))
    {
        os = "Windows";
        if (i("nt 6.1")) osv = "7";
        else
        if (i("nt 6.3")) osv = "8.1";
        else
        if (i("nt 6.2")) osv = "8";
        else
        if (i('(nt 5.1|windows xp)')) osv = "XP";
        else
        if (i("nt 6.0")) osv = "Vista";
        else
        if (i("nt 5.2")) osv = "XP x64 Edition";
        else
        if (i("windows 95")) osv = "95";
        else
        if (i("windows 98")) osv = "98";
        else
        if (i("windows me")) osv = "Me";
        else
        if (i("nt 5.0")) osv = "2000";
        else if (i("phone")) osv = " Phone OS " + gv("phone[\\s/]?(?:os)?")

    }
    else if (os = i("(iphone|ipad|ipod)"))
    {
        osv = "iOS " + gv("os");
    }
    else if (i("mac"))
    {
        os = "Macintosh ";
        if (i("os x")) osv = "OS X " + gv("os x");
    }
    else if (os = i("android")) osv = " " + gv(os);
    else if (os = i("linux"))
    {
        var lv = i("(fedora|mint|ubuntu|suse|red hat|mandriva|gentoo|mageia|debian|arch|kubuntu)");
        osv = lv ? lv : "";
    }
    else if (os = i("blackberry")) osv = " " + gv("blackberry ")
    else if (os = i("(freebsd|openbsd|netbsd)"))
    {
        osv = "";
    }
    else osv = os = n.platform;

    if (i("(opera|opr)"))
    {
        bv = i("version") ? gv("version") : i("opr") ? gv("opr") : gv("opera");
        bn = "Opera";
    }
    else if ((bn = i("chromium")) || (bn = i("(firefox|chrome|konqueror)")))
    {
        bv = gv(bn);
    }
    else if (bn = i("crios"))
    {
        bv = gv(bn);
        bn = "Chrome iOS";
    }
    else if (i("(trident|msie)"))
    {
        bv = i("msie") ? gv("msie") : gv("rv:");
        bn = "Internet Explorer";
    }
    else if (i("safari") && i("version") && !i("(android|blackberry)"))
    {
        bn = "Safari";
        bv = gv("version");
    }
    else if (i("(mac|android|mobile)"))
    {
        bn = i("mac") ? "Safari" : i("android") ? "Android Browser" : i("blackberry") ? "BlackBerry Browser" : "Mobile Browser";
        bv = i("version") ? gv("version") : "";
    }
    else
    {
        bn = n.appName;
        bv = n.userAgent;
    }

    a['name'] = bn;
    a['version'] = bv;
    a['platformName'] = os;
    a['platformVersion'] = osv;
    a['bits'] = bt;
    a['mobile'] = i("mobile") ? "Yes" : "No"
    return a;
}

/* compressed version of the BrowserInfo function, replace with the above code for faster loading in a production environment.

function BrowserInfo(d){var e=navigator,h=(d?d:e.userAgent).replace(/_/g,"."),b,f,k=32,g=[],a=function(a){return(a=RegExp(a,"i").exec(h))?a[0]:!1},c=function(a){return RegExp(a+"[\\s/]*((\\d*\\.*){0,4})","gi").exec(h)[1]};a("(x86\\.64|wow64|win64|x64|x86\\-64|amd64|ia64){1}")&&(k=64);a("windows")?(d="Windows",a("nt 6.1")?b="7":a("nt 6.3")?b="8.1":a("nt 6.2")?b="8":a("(nt 5.1|windows xp)")?b="XP":a("nt 6.0")?b="Vista":a("nt 5.2")?b="XP x64 Edition":a("windows 95")?b="95":a("windows 98")?b="98":a("windows me")? b="Me":a("nt 5.0")?b="2000":a("phone")&&(b=" Phone OS "+c("phone[\\s/]?(?:os)?"))):(d=a("(iphone|ipad|ipod)"))?b="iOS "+c("os"):a("mac")?(d="Macintosh ",a("os x")&&(b="OS X "+c("os x"))):b=(d=a("android"))?" "+c(d):(d=a("linux"))?(b=a("(fedora|mint|ubuntu|suse|red hat|mandriva|gentoo|mageia|debian|arch|kubuntu)"))?b:"":(d=a("blackberry"))?" "+c("blackberry "):(d=a("(freebsd|openbsd|netbsd)"))?"":d=e.platform;a("(opera|opr)")?(e=a("version")?c("version"):a("opr")?c("opr"):c("opera"),f="Opera"):(f= a("chromium"))||(f=a("(firefox|chrome|konqueror)"))?e=c(f):(f=a("crios"))?(e=c(f),f="Chrome iOS"):a("(trident|msie)")?(e=a("msie")?c("msie"):c("rv:"),f="Internet Explorer"):a("safari")&&a("version")&&!a("(android|blackberry)")?(f="Safari",e=c("version")):a("(mac|android|mobile)")?(f=a("mac")?"Safari":a("android")?"Android Browser":a("blackberry")?"BlackBerry Browser":"Mobile Browser",e=a("version")?c("version"):""):(f=e.appName,e=e.userAgent);g.name=f;g.version=e;g.platformName=d;g.platformVersion= b;g.bits=k;g.mobile=a("mobile")?"Yes":"No";return g};

*/

var browser = BrowserInfo();


document.write(
    "<strong> Browser Name:</strong> " + browser.name +
    "<br /><strong> Browser Version: </strong> " + browser.version +
    "<br /><strong> Operating System name: </strong> " + browser.platformName +
    "<br /><strong> Operating System version: </strong> " + browser.platformVersion +
    "<br /><strong> Bits: </strong> " + browser.bits + "-bit OS" +
    "<br /><strong> Mobile Device: </strong> " + browser.mobile);
