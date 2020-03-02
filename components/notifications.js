let notifications = {
    name: 'notifications',
    props: ['user'],
    data: function () {
        return {

        }
    },
    template: `
        <div class="notifications absolute top-0 left-0 m-8 bg-green-500 border-l-8 border-green-300 py-4 px-5 rounded-r">
            <h1>{{user.name}}  has joined the room</h1>
        </div>
    `,
    methods: {

    }
}

export default notifications
