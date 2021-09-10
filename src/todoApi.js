import axios from "axios"
const delayMs = 0;

function get() {
    console.log("hello")
    return new Promise(resolve => {
        setTimeout(() => resolve(axios.get('https://sleegal.herokuapp.com/all',{headers: { 'Content-Type': 'applications/json','Access-Control-Allow-Origin':'*' }}).then(function(response){
            return(response.data)
        })), delayMs);
    });
}

function complete(id) {

    return new Promise(resolve => {
        
        setTimeout(() => resolve(axios.post('https://sleegal.herokuapp.com/complete',{
			method:"POST",
			body:({id:id}),
			headers: { 'Content-Type': 'applications/json','Access-Control-Allow-Origin':'*' }
		})), delayMs)
    });
}

function add(item) {
    return new Promise(resolve => {

        setTimeout(() => resolve(axios.post('https://sleegal.herokuapp.com/add',{
			method:"POST",
			body:({name:item.name,description:item.description,complete:item.complete,timestamp:item.timestamp}),
			headers: { 'Content-Type': 'applications/json','Access-Control-Allow-Origin':'*' }
		})), delayMs);
        
    });
}

export default { get, complete, add };
