
const deFreezeBody = () => {
    try{
        this.__body = this.__body || document.body || document.getElementsByTagName('body')[0];
        this.__body.style.position = '';
        this.__body.style.top = '';
        document.documentElement.scrollTop =  document.body.scrollTop = window.pageYOffset = this.__scrollTop || 0;
    }catch (e){}
};

export default deFreezeBody;