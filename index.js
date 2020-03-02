import userList from "./components/userList.js";
import chat from "./components/chat.js";
import notifications from "./components/notifications.js";

let bus = new Vue

Vue.prototype.$bus = bus

let app = new Vue({
    el: "#app",
    data: {
        users: [],
        user: null,
        chat: []
    },
    mounted() {
        this.getUser()

        this.$bus.$on('notif', user => {
            this.user = user
            setTimeout( () => {
                this.user = null
                }, 1500);
        })
    },
    methods: {
        getUser : function(){
            setInterval(() => {
                let newUser = faker.helpers.contextualCard()
                this.users.push(
                    newUser
                )
                this.$bus.$emit('notif', newUser)
            }, 5000);
        }
    },
    components: {
        userList,
        chat,
        notifications
    }
});
