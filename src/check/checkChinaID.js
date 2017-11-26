

const checkChinaID = (_id,_detail = false) => {
    let cardNO = _id,
        errors = [
            "验证通过",
            "身份证号码位数不对",
            "身份证含有非法字符",
            "身份证号码校验错误",
            "身份证地区非法",
            "身份证出生日期不对"
        ],
        area = {
            11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
            21: "辽宁", 22: "吉林", 23: "黑龙江",
            31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东",
            41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南",
            50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏",
            61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆",
            71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
        },
        //身份号码位数及格式检验
        re,
        len = cardNO.length;
    //身份证位数检验
    if (len !== 15 && len !== 18) {
        return _detail ? errors[1] : false;
    } else if (len === 15) {
        re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/);
    } else {
        re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/);
    }

    let cnArr = cardNO.split("");
    //地区检验
    if (area[parseInt(cardNO.substr(0, 2))] === null) {
        return _detail ? errors[4] : false;
    }

    //出生日期正确性检验
    let a = cardNO.match(re);
    if (a !== null) {
        let DD,flag = 0;
        if (len === 15) {
            DD = new Date("19" + a[3] + "/" + a[4] + "/" + a[5]);
            flag = DD.getYear() == a[3] && (DD.getMonth() + 1) == a[4] && DD.getDate() == a[5];
        }
        else if (len === 18) {
            DD = new Date(a[3] + "/" + a[4] + "/" + a[5]);
            flag = DD.getFullYear() == a[3] && (DD.getMonth() + 1) == a[4] && DD.getDate() == a[5];
        }

        if (!flag) {
            return _detail ? errors[5] : false;
        }
        //检验校验位
        if (len === 18) {
            let S = (parseInt(cnArr[0]) + parseInt(cnArr[10])) * 7
                + (parseInt(cnArr[1]) + parseInt(cnArr[11])) * 9
                + (parseInt(cnArr[2]) + parseInt(cnArr[12])) * 10
                + (parseInt(cnArr[3]) + parseInt(cnArr[13])) * 5
                + (parseInt(cnArr[4]) + parseInt(cnArr[14])) * 8
                + (parseInt(cnArr[5]) + parseInt(cnArr[15])) * 4
                + (parseInt(cnArr[6]) + parseInt(cnArr[16])) * 2
                + parseInt(cnArr[7])
                + parseInt(cnArr[8]) * 6
                + parseInt(cnArr[9]) * 3;

            let Y = S % 11;
            let M = "F";
            let JYM = "10X98765432";
            M = JYM.substr(Y, 1); //判断校验位

            //检测ID的校验位
            if (M == cnArr[17]) {
                return _detail ? "" : true;
            }
            else {
                return _detail ? errors[3] : false;
            }
        }
    } else {
        return _detail ? errors[2] : false;
    }

    return _detail ? "" : true;
};

export default checkChinaID;