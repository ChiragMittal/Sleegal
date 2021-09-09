import axios from "axios"
const storageKey = "TODO_ITEMS";
const delayMs = 0;

function getFromStorage() {
    const fromStorage = localStorage.getItem(storageKey);
    return fromStorage ? JSON.parse(fromStorage) : [];
}

function get() {
    //console.log(arr)
    return new Promise(resolve => {
        setTimeout(() => resolve(axios.get('http://localhost:9000/',{headers: { 'Content-Type': 'applications/json','Access-Control-Allow-Origin':'*' }}).then(function(response){
            return(response.data)
        })), delayMs);
    });
}

function complete(id) {
    console.log(id)
    return new Promise(resolve => {
        
        setTimeout(() => resolve(axios.post('http://localhost:9000/complete',{
			method:"POST",
			body:({id:id}),
			headers: { 'Content-Type': 'applications/json','Access-Control-Allow-Origin':'*' }
		})), delayMs)
    });
}

function add(item) {
    return new Promise(resolve => {

        setTimeout(() => resolve(axios.post('http://localhost:9000/add',{
			method:"POST",
			body:({name:item.name,description:item.description,complete:item.complete,timestamp:item.timestamp}),
			headers: { 'Content-Type': 'applications/json','Access-Control-Allow-Origin':'*' }
		})), delayMs);
        
    });
}

export default { get, complete, add };
