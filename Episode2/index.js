require('dotenv').config()

const express=require('express')

const app=express()
//const port=3000

const githubData=
{
    "login": "Umeshchaurasiya123",
    "id": 92439041,
    "node_id": "U_kgDOBYKCAQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/92439041?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Umeshchaurasiya123",
    "html_url": "https://github.com/Umeshchaurasiya123",
    "followers_url": "https://api.github.com/users/Umeshchaurasiya123/followers",
    "following_url": "https://api.github.com/users/Umeshchaurasiya123/following{/other_user}",
    "gists_url": "https://api.github.com/users/Umeshchaurasiya123/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Umeshchaurasiya123/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Umeshchaurasiya123/subscriptions",
    "organizations_url": "https://api.github.com/users/Umeshchaurasiya123/orgs",
    "repos_url": "https://api.github.com/users/Umeshchaurasiya123/repos",
    "events_url": "https://api.github.com/users/Umeshchaurasiya123/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Umeshchaurasiya123/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Umesh ",
    "company": null,
    "blog": "",
    "location": "mumbai",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2021-10-13T11:14:59Z",
    "updated_at": "2024-11-09T08:01:35Z"
  }


app.get('/',(req,res)=>{
    res.send("Hellow World !")
})

app.get('/twitter',(req,res)=>{
    res.send("Umesh Chaurasiya")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code </h1>')
})


// app.listen(port,()=>{

//     console.log(`Example app listing on port ${port}`)
// })


app.get('/github',(req,res)=>{

    res.json(githubData)
})


app.listen(process.env.port,()=>{
    console.log(`Example app listing on port ${process.env.port}`)
})

