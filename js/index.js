
var app = new Vue({
    el: '#index-app',

    data: {
      message: 'Hello Vue!',
      user: {}
    },

    created: function(){
        let vm = this;
        let url = 'http://192.168.0.103:8802/test';
        fetch(url,{method: 'POST'}).then(res => {
            res.json().then( data => {
                console.log(data);
                vm.user = data
            })
        })
    },

    method: {

    },



















  })