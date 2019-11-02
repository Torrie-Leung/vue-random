# vue-characters

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### project data
//获取所有角色信息
http://localhost:3000/users

//获取id为1的角色信息
http://localhost:3000/users/1

//获取所有character信息
http://localhost:3000/characters

//获取id为1的character信息
http://localhost:3000/characters/1

//获取所有characterId为3的角色
http://localhost:3000/characters/3/users

//获取名为Futurama的character
http://localhost:3000/characters?name=Futurama

//根据多个名字获取character
http://localhost:3000/characters?name=Futurama&name=Luigi%20Mansion

//获取一页中只有1条数据
http://localhost:3000/characters?_page=1&_limit=1

//升序排序 asc
http://localhost:3000/characters?_sort=name&_order=asc

//降序排序 desc
http://localhost:3000/characters?_sort=name&_order=desc

//获取年龄30及以上的角色
http://localhost:3000/users?age_gte=30

//获取年龄区间20-60的角色
http://localhost:3000/users?age_gte=20&age_lte=60

//搜索角色信息
http://localhost:3000/users?q=yoshi
