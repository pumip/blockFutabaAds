
/**
 * 参考にしたchrome拡張の内容
 * https://chrome.google.com/webstore/detail/block-image/pehaalcefcjfccdpbckoablngfkfgfgj?hl=ja
*/

const blankImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const ngUrlLists = [
        "https://dec.2chan.net/ad/",
        "http://img.gsspat.jp",
        "http://rt.gsspat.jp",
        "https://adm.shinobi.jp",
        "https://adnico.genieesspv.jp",
        "https://bypass.ad-stir.com",
        "https://cs.gssprt.jp",
        "https://g.c.appier.net",
        "https://ialaddin.genieesspv.jp",
        "https://img.mediad2.jp",
        "https://isboost.genieesspv.jp",
        "https://media.gssp.asia",
        "https://reajyu.net",
        "https://rt.gsspat.jp",
        "https://spcdnpc.i-mobile.co.jp",
        "https://ssp.send.microad.jp",
        "https://tg.socdm.com",
        "https://pixel.tapad.com",
        "https://match.adsrvr.org",
        "https://static.pc-adroute.focas.jp",
        "https://aid.send.microad.jp",
        "http://sync.ad-stir.com",
        "https://sync.ad-stir.com"
    ];

console.log('start');

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        // ngリストにurlが含まれていればブランク画像に置換
        let match = ngUrlLists.find(ngUrl => details.url.indexOf(ngUrl) === 0);
        if (match === undefined) {
            console.log(details.url);
            return {cancel: false}
        } else {
            return {redirectUrl: blankImg}
        }
    },
    {
        urls: ["<all_urls>"],
        types: ["image", "object"]
    },
    ["blocking"]
);
