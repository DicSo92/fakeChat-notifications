let userList = {
    name: 'userList',
    props: ['users'],
    data: function () {
        return {

        }
    },
    template: `
        <div class="userList h-full overflow-y-auto">
            <div class="user flex flex-col px-3 py-2 border-b border-gray-300 cursor-pointer" 
                 v-for="user in users" 
                 @mouseenter="enterUser" 
                 @mouseleave="leaveUser"
                 @click="showUserChat(user)">
                <div class="flex flex-col relative">
                    <div class="flex items-center">
                        <img :src="user.avatar" alt="" class="rounded-full w-12">
                        <h1 class="font-bold text-lg ml-3">{{user.name}}</h1>
                    </div>
                    <p class="text-gray-500 text-sm absolute bottom-0 right-0">13/07/2020 - 13h35</p>
                </div>
            </div>
        </div>
    `,
    methods: {
        enterUser (e) {
            e.target.classList.add('overUser')
        },
        leaveUser (e) {
            e.target.classList.remove('overUser')
        },
        showUserChat (user) {

        }
    }
}

export default userList
