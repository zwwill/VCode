
let timeout,
    t = 1000,
    _iframe;

const _appHasOpened = t1 => {
    return t1 && (Date.now() - t1 > t + 200)
}

const _insetFrame = (_url) => {
    // 准备 iframe dom
    try{
        _iframe = document.createElement('<iframe style="display:none;" ></iframe>');
    }catch(e){
        _iframe = document.createElement('iframe');
        _iframe.setAttribute('style', 'display:none;');
    }
    //插入iframe
    _iframe.setAttribute('src', _url);
    document.getElementsByTagName('body')[0].appendChild(_iframe);
}

const awakeApp = _url => {
    let t1 = Date.now(),
        r = false;
    setTimeout( () =>{
        if (r) {
            alert('唤起了app');
        } else {
            alert('未安装app');
        }
        _iframe && _iframe.remove();
    }, 1300);

    _insetFrame(_url);
    timeout = setTimeout(function () {
        r = _appHasOpened(t1);
    }, t);

}

export default awakeApp;
