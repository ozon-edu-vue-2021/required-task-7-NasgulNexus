<template>
  <div class="friend__list">
    <div>
      <span class="friend__list_select">Список людей</span>
      <div
        v-for="people in data"
        :key="people.id"
        class="friend__list_select_cart"
        :class="{'selected':people.id===data_people.id}"
        @click="takePeople(people.id)"
      >{{people.name}}</div>
    </div>
    <div class="friend__list_cart">
      <div class="friend__name">
        <b-icon icon="person-circle" />
        {{data_people.name}}
      </div>
      <div class="people-title">Друзья</div>
      <div v-for="item in BestFriend(data_people.friends)" :key="item.id" class="people-div">
        <b-icon icon="emoji-heart-eyes" />
        {{item}}
      </div>
      <div class="people-title">Не в друзьях</div>
      <div
        v-for="item in NotFriends(data_people.friends, data_people.id )"
        :key="item.id"
        class="people-div"
      >
        <b-icon icon="emoji-neutral" />
        {{item}}
      </div>
      <div class="people-title">Популярные люди</div>
      <div v-for="item in popular" :key="item" class="people-div">
        <b-icon icon="emoji-wink" />
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Friend_list",
    props:{
        data:{
            type: Array,
            default: ()=>{
                return []
            }
        }
    }, 
    data(){
        return{
          data_people: this.data[0],
        }
    },
    computed:{
        popular(){
          let arr =Array(this.data.length).fill(0)
          let number=this.data.map(el =>{
            return el.friends
          })
          number.map((item) =>{
           item.map(el =>{
              arr[el-1]++
            })
          })
          let max = Math.max( ...arr )
          let answer= arr.map((el, index)=>{
            if(el===max){
              return this.data[index].name
            }
          })
          return answer.filter(el =>{return el}).sort().slice(0,3)
        }
    },
    methods:{
       NotFriends(argument, index){
         return this.data.map((el)=>{ 
           if(argument.indexOf(el.id) === -1 && el.id !==index){
             return el.id
           }
         }).filter(el =>{return el}).slice(0,3).map((el)=>{
           return this.data[el-1].name
         })
       },
        BestFriend(argument){
          return argument.slice(0,3).map((el)=>{
           return this.data[el-1].name
         })    
        },
        takePeople(index){
          return this.data_people=this.data[index-1]
        }
    }
}
</script>

<style>
.friend__list {
  display: flex;
  flex-basis: 50%;
  max-width: 500px;
  margin: 0 auto;
  font-size: 16px;
}
.friend__list_select {
  font-size: 24px;
}
.friend__list_select_cart {
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
}
.friend__list_select_cart:hover {
  background: rgb(19, 121, 180);
  color: #ffffff;
}
.selected {
  background: rgb(19, 121, 180);
  color: #ffffff;
}
.friend__list_cart {
  margin-left: 50px;
  border: 1px solid #ccc;
  padding: 20px;
}
.list {
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
}
.friend__name {
  margin-left: 10px;
  font-size: 24px;
  border-bottom: 1px solid #ccc;
}
.people-title {
  margin-top: 20px;

  font-size: 18px;
  border-bottom: 1px solid #ccc;
}
.people-div {
  margin-top: 20px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
}
</style>