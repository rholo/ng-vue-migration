const HeaderSection = Vue.component('HeaderSection', {
    props: {
        title: {
            type: String,
            default: 'Hello world!'
        }
    },
    template: `<section>
        <header>
            <h1>{{ heading }}</h1>
        </header>
    </section>`
})