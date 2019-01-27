(() => {

  UsersPageComponent
    // component go here
    const HomePageComponent = {
        template: "<h2>You're on the home page</h2>"
    };
// this always needs to be a function
    const UsersPageComponent = {
props: ['id'],
        template: "#userList",
        data: function() {
          return {
            users []
          }

    };
  created: function () {
  console.log('user components created')},


  methods:
  {
    fetchUserData (user) {
      debuger;
      let url = '.indcludes/index.php?user=$(user)';
      fetch(url)
      .then(res=> res.jsn())
      .then(data => this.users=data; )
    }
  }

    const ContactPageComponent = {
        template: "<h2>You're on the contact page</h2>"
    };
    const ErrorPageComponent = {
        template: "<h2>Page not found! please try again</h2>"
    };





    const routes= [
        { path: '/', name: 'home', component: HomePageComponent },
        { path: '/users/:id', name: 'users', component: UsersPageComponent,props:true },
        { path: '/contact', name: 'contact', component: ContactPageComponent},
          { path: '/*', name: 'error', component: ErrorPageComponent }
    ];

    const router = new VueRouter({
        routes
    });

    const vm = new Vue({
        el: '#app',

        data: {
            message: "sup from vue!"
        },

        created: function() {
            console.log('parent is live');
        },

        methods: {

            logParent(message) {
                console.log("from the parent", message);
            },

            logMainMessage(message) {
                console.log("called from inside a child, lives in the parent", message);
            }
        },

        components: {
            'HomePageComponent': HomePageComponent,
            'UsersPageComponent': UsersPageComponent
        },

        router: router
    })
})();
