
export default (_calback,_time) => {
    if(!_calback || !_time) throw "SyntaxError: Unexpected identifier";

    let st = Date.now(),
        i = 0,
        itv = setInterval(()=>{
            i = ~~((Date.now() - st)/1000);
            _calback.call(this);
            if(i >= 3){
                clearInterval(itv);
                alert('time over')
            }
        },1000);
    return itv;
};