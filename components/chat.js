import theInput from "./theInput.js";
import chatBox from "./chatBox.js";

let chat = {
    name: 'chat',
    data: function () {
        return {

        }
    },
    template: `
        <div class="chat w-full h-full flex flex-col px-2 pb-2">
            <div class="flex justify-center mb-3">
                <h1 class="bg-gray-100 rounded-b-lg py-2 px-20 font-bold">John Doe</h1>
            </div>
            <div class="h-full flex-grow flex flex-col overflow-auto">
                <chat-box></chat-box>
            </div>
            <div class="">
                <the-input></the-input>
            </div>
        </div>
    `,
    components: {
        theInput,
        chatBox
    }
}
export default chat
