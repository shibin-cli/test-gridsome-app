const axios = require('axios')
const instance = axios.create({
    baseURL: 'https://api.github.com/users/shibin-cli',
    params: {
        // access_token: 'c8445b33f5134e2319ce3d97bb90d57d176499e7'
    }
})
instance.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error);
})
module.exports = api => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    api.loadSource(async ({
        addCollection
    }) => {

        /**
         * 首先拿到用户的信息 后面接口要用到 因为分页接口要获取到所有的数据
         *  public_repos 仓库数量
         *  public_gists 博客数量
         * followers 粉丝数量
         * following  关注数量
         * 
         * 然后根据glist 第一条数据的id获取动态
         */
        try {
            console.log('获取用户信息...')
            const [data1, data2] = await Promise.all([
                instance.get(''),
                instance.get('https://shibin-cli.github.io/static/configuration.json')
            ])
            let user = {
                ...data2,
                ...data1,
                other_blog_url: 'https://laboo.top',
                code_url: 'https://github.com/shibin-cli/shibin-cli.io'
            }

            console.log('获取完毕...')

            // 头部
            const userCollection = addCollection('user')
            userCollection.addNode(user)
            console.log('获取列表信息...')

            // 根据获取的user接口返回的信息，获取下面接口的所有数据
            const [followers, following, gists, repos] = await Promise.all([
                instance.get('followers?page=1&per_page=' + user.followers), //粉丝
                instance.get('following?page=1&per_page=' + user.following), //关注
                instance.get('gists?page=1&per_page=' + user.public_gists), //博客列表
                instance.get('repos?page=1&per_page=' + user.public_gists) //仓库列表
            ])
            console.log('获取完毕...')

            // 动态  gists[0].id
            console.log('正在获取最新动态...')

            const dynamic = await instance.get('https://api.github.com/gists/' + gists[0].id) //动态
            const dynamicCollection = addCollection('dynamic')
            console.log('获取完毕...')
            // 获取files中的内容标题 获取一个直接结束
            for (let key in dynamic.files) {
                dynamic.title = dynamic.files[key].filename
                dynamic.content = dynamic.files[key].content
                break
            }
            delete dynamic.files
            dynamicCollection.addNode(dynamic)

            // 粉丝
            const followersCollection = addCollection('follower')
            followers.forEach(item => {
                followersCollection.addNode(item)
            })
            //关注
            const followingCollection = addCollection('following')
            following.forEach(item => {
                followingCollection.addNode(item)
            })
            // 博客列表
            const gistsCollection = addCollection('gist')
            gists.forEach(item => {
                delete item.files
                gistsCollection.addNode(item)
            })
            // 仓库列表
            const reposCollection = addCollection('repos')
            repos.forEach(item => {
                reposCollection.addNode(item)
            })
            console.log('数据准备完毕...')
        } catch (err) {
            return console.log(err)
        }
    })
}