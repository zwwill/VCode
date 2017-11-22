
export default (_key, _url = window.location.href) => {
    if (_url.indexOf('?') != -1 && _url.indexOf(_key) != -1) {
        var _s = _url.split('?')[1].split('&');
        for (var i = 0, _l = _s.length; i < _l; i++) {
            if (_s[i].indexOf(_key + '=') === 0) {
                return decodeURIComponent(_s[i].split('=')[1]);
            }
        }
    } else {
        return "";
    }
};