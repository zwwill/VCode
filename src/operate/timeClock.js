
const timeClock = (_setpCalback, _time, _endCallback) => {
    if(!_calback || !_time) throw "SyntaxError: Unexpected identifier";

    let st = Date.now(),
        i = 0,
        itv = setInterval(()=>{
            i = ~~((Date.now() - st)/1000);
            if(i >= _time){
                clearInterval(itv);
                _endCallback && _endCallback.call(this);
                return;
            }
            _calback & _calback.call(this);
        },1000);
    return itv;
};

export default timeClock;