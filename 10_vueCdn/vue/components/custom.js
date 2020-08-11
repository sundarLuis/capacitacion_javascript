// registro
Vue.component('my-component', {
    props: ['saludo'],
    
    template:
    `<div>
        A custom component {{ saludo }} 
        <div>{{test}}</div>
    </div>
    `,
    data: function () {
        return {
            test: 'test'
        }
    }
})