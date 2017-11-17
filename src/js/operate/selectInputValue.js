
export default _ele => {
    var elemLen = _ele.value.length;
    // For IE Only
    if (document.selection) {
        // Set focus
        _ele.focus();
        // Use IE Ranges
        var _oSel = document.selection.createRange();
        // Reset position to 0 & then set at end
        _oSel.moveStart('character', -elemLen);
        _oSel.moveStart('character', elemLen);
        _oSel.moveEnd('character', 0);
        _oSel.select();
    }else if (_ele.selectionStart || _ele.selectionStart == '0') {
        // Firefox/Chrome
        _ele.selectionStart = 0;
        _ele.selectionEnd = elemLen;
        _ele.focus();
    }
};