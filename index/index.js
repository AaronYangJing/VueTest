/**
 * Created by yj6299 on 2018/12/3.
 */
var app = new Vue({
        el: '#app',
        data: {
            message: 'test1'
        }
    }
);

var app2 = new Vue({
        el: '#app2',
        data: {
            message: 'test2',
            title: '页面加载于' + new Date().toLocaleString()
        }
    }
);

var app3 = new Vue({
        el: '#app3',
        data: {
            value: 1
        },
        methods: {
            plusOne: function () {
                this.value = this.value + 1;
            }
        }
    }
);

var app3 = new Vue({
        el: '#app4',
        data: {
            content: 'type your content'
        }
    }
);

Vue.component('todo-item',
    {
        props: ['todo'],
        template: '<li>{{todo.text}}</li>'
    });

var app5 = new Vue({
    el: '#app5',
    data: {
        list: [
            {id: 1, text: 'component1'},
            {id: 3, text: 'component2'},
            {id: 2, text: 'component3'}
        ]
    }
});