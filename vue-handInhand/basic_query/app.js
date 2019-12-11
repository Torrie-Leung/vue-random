var promptData = [
  {id:01,question:'how\'s going?',option:['fucked up','bad','normal','good','great']},
  {id:02,question:'how\'s the marriage?',option:['fucked up','bad','normal','good','great']},
  {id:03,question:'how\'s the movie?',option:['fucked up','bad','normal','good','great']},
]

var questionnaire = new Vue({
  el: '#Questionnaire',
  data(){
    return{
      list: [
        {
            "order":1,
            "text":"今天天气如何" ,
            "choice": ['bad','medium','good','great'],
            'color':false,
            
        },
        {
            "order":2,
            "text":"伙食如何",
            "choice": ['bad','medium','good','great'],
            'color':false,
        }
			],
      result:''
    }
  },
  created () {
  },
  methods: {
    fetchA(i,index,lid){
      console.log(i,index,lid)
    }
  },
})