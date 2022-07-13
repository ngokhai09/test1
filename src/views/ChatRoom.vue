<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-text-field v-mode="user_name" label="User Name"></v-text-field>
        <v-text-field v-mode="chat_send" label="Noi dung chat"></v-text-field>
        <v-btn @click="sendMessage">Gui di</v-btn>
      </v-col>
      <v-col cols="8">
        <h4>Noi dung chat</h4>
        <div class="chat-content" v-html="content"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "ChatRoom",
  data(){
  return{
    user_name:"admin",
    chat_send:"",
    chat_main: [],
    content: ""
  }
  },
  mounted() {

    this.$socket.emit("hello");
    this.sockets.subscribe("wellcome",  (data) => {
      this.content +="<code>" + data.data + "</code><br/>";
    });
    this.sockets.subscribe("chat", (data) =>{
      this.content +="<code>" + data.msg + "</code><br/>";
    });
  },
  methods:{
    sendMessage(){
      this.$socket.emit("send_chat", this.user_name +":"+ this.chat_send);
    }
  }
}
</script>

<style scoped>

</style>