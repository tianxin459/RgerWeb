export default {
    install: function (Vue, options) {
        Vue.prototype.$service = {
            test: function (tel) {
                console.log('la la la test');
                console.log(this.$http);
            }
        }
    }
};