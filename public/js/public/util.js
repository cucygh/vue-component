/**
 * @ignore  ==================================================================
 * @fileoverview
 * @see wiki
 * @author  guohui.yin@qunar.com
 * @version 1.0.0
 * @ignore  created in 2015-00-00
 * @ignore  depend Library jQuery
 * @ignore  =================================================================
 */

module.exports = {
    reg: {
        /**
         * 验证是否为手机
         * @param input {String}
         * @return result {Boolean}
         */
        mobile: function (input) {
            var reg_x = /^1[3|4|5|7|8][0-9]\d{8}$/gi;
            return reg_x.test(input);
        },
        /**
         * 验证是否为身份证
         * @param input {String}
         * @return result {Boolean}
         */
        card: function (input) {
            var reg_x = /^\d{15}|\d{18}$/gi;
            return reg_x.test(input);
        },
        /**
         * 验证是否为固话
         * @param input {String}
         * @return result {Boolean}
         */
        phone: function (input) {
            var reg_x = /^\d{3}-\d{8}|\d{4}-\d{7}$/gi;
            return reg_x.test(input);
        },
        /**
         * 验证是否为邮箱
         * @param input {String}
         * @return result {Boolean}
         */
        email: function (input) {
            var reg_x =
                /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/gi;
            return reg_x.test(input);
        },
        /**
         * 验证是否为工商注册号
         * @param input {String}
         * @return result {Boolean}
         */
        registr: function (input) {
            var reg_x = /^\d{15}$/gi;
            return reg_x.test(input);
        },
        /**
         * 验证是否为验证码
         * @param input {String}
         * @return result {Boolean}
         */
        cha: function (input) {
            var reg_x = /^\d{6}$/gi;
            return reg_x.test(input);
        }
    }

}
