
export default style => {
    var prefix = ['webkit', 'Moz', 'ms', 'o'],
        humpString = [],
        htmlStyle = document.documentElement.style,
        _toHumb = function (string) {
            return string.replace(/-(\w)/g, function ($0, $1) {
                return $1.toUpperCase();
            });
        };

    for (let i of prefix)
        humpString.push(_toHumb(prefix[i] + '-' + style));

    humpString.push(_toHumb(style));

    for (let i in humpString)
        if (humpString[i] in htmlStyle) return true;

    return false;
};