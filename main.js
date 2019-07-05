var keys = {
    0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    3: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    length: 4
}
var hash = {
    q: "qq.com",
    w: "weibo.com",
    e: "ele.me",
    r: "renren.com",
    t: "tianya.com",
    y: "youtube.com",
    u: "uc.com",
    i: "iqiyi.com",
    o: "opera.com",
    p: undefined,
    a: "acfun.tv",
    s: "sohu.com",
    d: "douban.com",
    f: "ff.sdo.com",
    g: "github.com",
    h: undefined,
    j: undefined,
    k: undefined,
    l: "leetcode.com",
    z: "zhihu.com",
    x: undefined,
    c: "cnet.com",
    v: undefined,
    b: "bilibili.com",
    n: undefined,
    m: undefined,
    0: undefined,
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined
};
//取出localStorage中的websiteStorage对应的hash
var hashInLocalStorage = JSON.parse(localStorage.getItem("websiteStorage") || 'null');
if(hashInLocalStorage){
    hash = hashInLocalStorage;
}

//遍历keys，生成kbd标签
var index = 0;
var mainX = document.getElementById("mainX");
while (index < keys.length) {
    var divX = document.createElement('div');
    mainX.appendChild(divX);
    var index2 = 0;
    while (index2 < keys[index].length) {
        var kbdX = document.createElement('kbd');
        kbdX.textContent = keys[index][index2];
        buttonX = document.createElement('button');
        buttonX.textContent = 'E';
        buttonX.id = keys[index][index2];
        buttonX.onclick = function(e){
            var key = e.target.id;
            var inputX = prompt('输入要编辑的网址');
            hash[key] = inputX;
            localStorage.setItem('websiteStorage',JSON.stringify(hash));
        };
        kbdX.appendChild(buttonX);
        divX.appendChild(kbdX);
        index2++;
    }
    index++;
}

document.onkeypress = function (e) {
    var key = e.key;
    var website = hash[key];
    window.open('http://' + website, '_blank');
};
