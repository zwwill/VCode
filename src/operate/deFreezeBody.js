
const deFreezeBody = () => {
    try{
        this.__body = this.__body || document.body || document.getElementsByTagName('body')[0];
        this.__body.style.position = '';
        this.__body.style.top = '';
        this.__scrollTop = this.__scrollTop || 0;
        document.documentElement.scrollTop = this.__body.scrollTop = this.__scrollTop || 0;
    }catch (e){}
};

export default deFreezeBody;