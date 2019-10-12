<template>
  <div>
    <p>v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：</p>

    <p>text 和 textarea 元素使用 value 属性和 input 事件；</p>
    <p>checkbox 和 radio 使用 checked 属性和 change 事件；</p>
    <p>select 字段将 value 作为 prop 并将 change 作为事件。</p>
    
    <!-- 单行输入 -->
    <div id="aa">
      <p>Msg is: {{msg}}</p>
      <input v-model="msg" placeholder="edit here">
      
    </div>
    <br>
    <!-- 多行输入 -->
    <div id="bb">
      <span>Multiline msg is: </span>
      <p style="white-space:pre-line">{{msg}}</p>
      <textarea v-model="msg" placeholder="add multiple lines"></textarea>
    </div>
    <br>
    <!-- 单选按钮 -->
    <div id="cc">
      <label for="one">One</label>
      <input type="radio" id="one" value="one" v-model="picked">
      <label for="two">Two</label>
      <input type="radio" id="two" value="two" v-model="picked">
      <br>
      <span>Picked: {{picked}}</span>
    </div>
    <br>
    <!-- 复选框 -->
    <div id="dd">
      <label for="chexbox">checked: {{checked}}</label>
      <input type="checkbox" id="checkbox" v-model="checked">
      <br>
      <label for="mario">Mario</label>
      <input type="checkbox" id="mario" value="mario" v-model="checkedNames" @change="onChange($event)">
      <label for="luigi">Luigi</label>
      <input type="checkbox" id="luigi" value="luigi" v-model="checkedNames">
      <label for="yoshi">Yoshi</label>
      <input type="checkbox" id="yoshi" value="yoshi" v-model="checkedNames">
      <br>
      <span>Checked names: {{checkedNames}}</span>
    </div>
    <br>
    <!-- 选择框 -->
    <div id="ee">
      <!-- 单选时 -->
      <select v-model="selected">
        <option disabled value="">pls choose:</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{selected}}</span>
      <br><br>
      <!-- 多选时（绑定到一个数组 -->
      <select v-model="selects" multiple style="width:40px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{selects}}</span>
      <br><br>
      <!-- 用 v-for 渲染的动态选项 -->
      <select v-model="selected">
        <option v-for="(option,index) in options" :value="option.value" :key="index">
          {{ option.text }}
        </option>
      </select>
    </div>
    <br>
    <div id="ff">
      <input 
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no"
      >
    </div>
    <div id="gg">
      <button @click="changeName">change name</button>
      <p>{{username}}</p>
    </div>

    <div>
      <button @click="start">start it</button>
      <button @click="stop">stop it</button>
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>地址</th>
          </tr>
        </thead>
        <tbody v-if="userList.length > 0">
          <tr v-for="(item,index) in userList" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.address}}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="3">Sorry~No data to display</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userList: [],
        timer:'',
        msg: '',
        picked: '',
        checked: '',
        checkedNames: [],
        selected:'',
        selects:[],
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ],
        toggle:false,
        firstName:'Callum',
        lastName:'Turner'
      }
    },
    computed: {
      username: {
        get:function(){
          return this.firstName + ' ' + this.lastName;
        },
        set: function(newVal){
          let names = newVal.split(' ');
          this.firstName = names[0];
          this.lastName = names[1];
        }
      }
    },
    methods: {
      onChange: function(e){
        console.log(e)
      },
      changeName(){
        if(this.username === 'Callum Turner'){
          this.username = 'Eddie Redmayne'
        }else if(this.username = 'Eddie Redmayne'){
          this.username = 'Callum Turner'
        }
        else{
          this.username = 'Theseus Scamander'
        }
      },
      def(){
        this.userList.push({'name':'大咕咕咕鸡','age':38,'address':'苏北老家黑煤窑'})
      },
      stop(){
        clearInterval(this.timer)
      },
      start(){
        this.timer=setInterval(this.def,2500)
      }
    },
    mounted() {
      
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
  }
</script>

<style>

</style>