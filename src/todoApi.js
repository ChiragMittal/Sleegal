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
    return new Promise(resolve => {
        
        setTimeout(() => resolve(axios.post('http://localhost:9000/complete',{
			method:"POST",
			body:({id:1}),
			headers: { 'Content-Type': 'applications/json','Access-Control-Allow-Origin':'*' }
		})), delayMs)
    });
}

function add(item) {
    return new Promise(resolve => {
        const items = getFromStorage();
        const newId = items.reduce((id, item) => (item.id >= id ? item.id + 1 : id), 1);
        const updatedItems = [...items, { ...item, id: newId }];
        localStorage.setItem(storageKey, JSON.stringify(updatedItems));
        setTimeout(() => resolve(updatedItems), delayMs);
    });
}

export default { get, complete, add };
