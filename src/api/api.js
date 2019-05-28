import axios from 'axios';
axios.interceptors.response.use(res => {
  return res.data
})

export default function data(url='',data={},method='get'){
	console.log(url)
	return new Promise((resolve,reject)=>{
		var promise;
		
		if(method.toLocaleLowerCase()==='get'){
			promise = axios({
					method: 'get',
				  url: url,
				  params: data
			})
		}else if(method.toLocaleLowerCase()==='post'){
			promise = axios({
					method: 'post',
				  url: url,
				  data: data
			})
		}
		
		promise.then((res)=>{
			resolve(res);			
		},(err)=>{
			reject(err);
		})
	})
}
