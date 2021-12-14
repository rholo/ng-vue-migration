const Migrate = Vue.component('Migrate', {
    computed:{
        ...Vuex.mapGetters(['title', 'description'])
    },
    template:`<section>
        <HeaderSection
            :title="title"
            :description="description"
        />
    </section>`
});
