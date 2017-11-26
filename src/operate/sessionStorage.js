

const   rkey = /^[0-9A-Za-z_@-]*$/;
let     store;

// 转换 对象
function init() {
    if (typeof store === 'undefined') {
        store = window['sessionStorage'];
    }

    return true;
}

// 判断 sessionStorage 的 key 值 是否 合法
function isValidKey(key) {
    if (typeof key !== 'string') {
        return false;
    }

    return rkey.test(key);
}

const sessionStorage = {
    /**
     *  设置 sessionStorage 单条记录
     **/
    set(key, value) {
        let success = false;
        if (isValidKey(key) && init()) {
            try {
                value += '';
                store.setItem(key, value);
                success = true;
            } catch (e) {
            }
        }

        return success;
    },
    /**
     * 读取 sessionStorage 单条记录
     **/
    get(key) {
        if (isValidKey(key) && init()) {
            try {
                return store.getItem(key);
            } catch (e) {
            }
        }
        return null;
    },
    /**
     * 移除 sessionStorage 单条记录
     **/
    remove(key) {
        if (isValidKey(key) && init()) {
            try {
                store.removeItem(key);
                return true;
            } catch (e) {
            }
        }

        return false;
    },
    /**
     * 清除 sessionStorage 所有记录
     **/
    clear() {
        if (init()) {
            try {
                for (let key in store) {
                    store.removeItem(key);
                }
                return true;
            } catch (e) {
            }
        }

        return false;
    }
};
export default sessionStorage;
