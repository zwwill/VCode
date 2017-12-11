
const freezeBody = () => {
    try{
        this.__body = this.__body || document.body || document.getElementsByTagName('body')[0];
        this.__scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
        this.__body.style.top = - this.__scrollTop + 'px';
        this.__body.style.position = 'fixed';
    }catch (e){}
};

export default freezeBody;