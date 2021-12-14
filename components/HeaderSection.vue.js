const HeaderSection = Vue.component('HeaderSection', {
    props: {
        title: {
            type: String,
            default: "Hello world!"
        },
        description:{
            type: String,
            default: ""
        }
    },
    template: `<header>
        <h1>{{ title }}</h1>
        <h3>{{ description }}</h3>
    </header>`
})
