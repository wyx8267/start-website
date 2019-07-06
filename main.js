// 1.初始化数据
var hashA = init();
var keys = hashA['keys'];
var hash = hashA['hash'];

// 2.生成键盘
generateKeyboard(keys, hash);

// 3.监听用户动作
listenToUser(hash);

//以下是工具函数
function init() {
    var keys = {
        0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        3: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        length: 4
    }
    var hash = {
        q: "www.qq.com",
        w: "weibo.com",
        e: "ele.me",
        r: undefined,
        t: undefined,
        y: "youtube.com",
        u: undefined,
        i: "iqiyi.com",
        o: "opera.com",
        p: undefined,
        a: "acfun.cn",
        s: "snh48.com",
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
        m: 'majsoul.union-game.com',
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

    //取出 localStorage 中的 websiteStorage 对应的 hash
    var hashInLocalStorage = JSON.parse(localStorage.getItem("websiteStorage") || 'null');
    if (hashInLocalStorage) {
        hash = hashInLocalStorage;
    }

    return {
        "keys": keys,
        "hash": hash
    }
}

function tag(tagName) {
    return document.createElement(tagName);
}

function creatSpan(textContent) {
    var span = tag('span');
    span.textContent = textContent;
    span.className = 'text';
    return span;
}

function creatButton(id) {
    var button = tag('button');
    button.textContent = 'E';
    button.id = id;
    button.onclick = function (e) {
        var input = prompt('输入要编辑的网址');
        var button2 = e.target;
        var key = button2.id;
        var img2 = button2.previousSibling;
        hash[key] = input;
        img2.src = 'http://' + input + '/favicon.ico';
        img2.onerror = function (ee) {
            ee.target.src = './null.png';
        };
        localStorage.setItem('websiteStorage', JSON.stringify(hash));
    };
    return button;
}

function createImage(domain) {
    var img = tag('img');
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico';
    }
    else {
        img.src = './null.png';
    }
    img.onerror = function (e) {
        e.target.src = './null.png';
    };
    return img;
}

function generateKeyboard(keys, hash) {
    //遍历keys，生成kbd标签
    for (var index = 0; index < keys.length; index++) {
        var main = document.getElementById("main");
        var div = tag('div');
        div.className = 'row';
        main.appendChild(div);

        for (var index2 = 0; index2 < keys[index].length; index2++) {
            var span = creatSpan(keys[index][index2]);
            var button = creatButton(keys[index][index2]);
            var img = createImage(hash[keys[index][index2]]);

            var kbd = tag('kbd');
            kbd.className = 'key';

            kbd.appendChild(span);
            kbd.appendChild(img);
            kbd.appendChild(button);
            div.appendChild(kbd);
        }
    }
}

function listenToUser(hash) {
    document.onkeypress = function (e) {
        var key = e.key;
        var website = hash[key];
        window.open('http://' + website, '_blank');
    };
}