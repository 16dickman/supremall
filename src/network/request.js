import axios from 'axios'
export function request(config){
   const instance=axios.create({
     baseURL:'http://106.54.54.237:8000/api/wh' ,
     // baseURL:'http://123.207.32.32:8000',
     timeout:3000
   })
  //请求拦截
  instance.interceptors.request.use(config =>{
    return config
  },err => {
   return err
  })
//响应拦截
  instance.interceptors.response.use(res =>{
    return res.data
  },err => {
    console.log(err);
  })

  //发送请求 返回的是promise对象 调用可以直接 then catch
  return instance(config)
}