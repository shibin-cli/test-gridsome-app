# test-gridsome-app
host:  `https://api.github.com` 


Request
```
GET /users/:username?<access_token=your access_token>
```
Response
```json
{
  "login": "shibin-cli",
  "id": 72774429,
  "node_id": "MDQ6VXNlcjcyNzc0NDI5",
  "avatar_url": "https://avatars1.githubusercontent.com/u/72774429?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shibin-cli",
  "html_url": "https://github.com/shibin-cli",
  "followers_url": "https://api.github.com/users/shibin-cli/followers",
  "following_url": "https://api.github.com/users/shibin-cli/following{/other_user}",
  "gists_url": "https://api.github.com/users/shibin-cli/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shibin-cli/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shibin-cli/subscriptions",
  "organizations_url": "https://api.github.com/users/shibin-cli/orgs",
  "repos_url": "https://api.github.com/users/shibin-cli/repos",
  "events_url": "https://api.github.com/users/shibin-cli/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shibin-cli/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Shibin",
  "company": null,
  "blog": "",
  "location": "China",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 2,
  "followers": 0,
  "following": 2,
  "created_at": "2020-10-13T01:24:08Z",
  "updated_at": "2020-12-11T10:25:40Z"
}
```
|  字段   | 说明  |
|  ----  | ----  |
| name  | 用户昵称 |
| html_url  | 用户主页 |
| login  | 登陆用户名 |
| avatar_url | 头像地址 |
| email | 邮箱 |
| followers  | 粉丝人数 |
| following  | 关注人数 |
| location | 位置 |
| public_repos | 仓库数量 |
| public_gists | gist数量 |