/**
 * Api 路由集合
 **/
const baseUrl = `/uc/v0.1`

const httpServer = {
    user:{  //登录相关
        getTokens:`${baseUrl}/tokens` //登录前获取token
    }
}

export default httpServer