import React from "react";
import Header from "./header";
import List from "./list";
import "./App.css";
import isOverdue from "./isOverdue";
import todoApi from "./todoApi";

const defaultFilter = {includeComplete: false };

function App() {
    const [items, setItems] = React.useState([]);
    const [filter, setFilter] = React.useState(defaultFilter);
    const [loading, setLoading] = React.useState(true);

    const loadItems = async () => {
        setLoading(true);
        const todoItems = await todoApi.get();
        todoItems.map(item=>{
            if(isOverdue(item)){
                complete(item.id)
                
            }
        })
        setItems(todoItems);
        setLoading(false);
    };

    React.useEffect(() => {
        loadItems();
    }, []);

    const complete = async id => {
        console.log(id)
        await todoApi.complete(id);
        loadItems()
    };

    const add = async item => {

        await todoApi.add(item);
        loadItems()
    };

    const filteredItems = items.filter(
        item => (filter.includeComplete || !item.complete)
    );

    return (
        <div className="fluid-container app-container">
            <Header addItem={add} filter={filter} setFilter={setFilter} />
            {!loading && (
                <div className="list">
                    <List items={filteredItems} completeItem={complete} />
                </div>
            )}
            {loading && (
                <div className="alert alert-info" role="alert">
                    Loading please wait...
                </div>
            )}
        </div>
    );
}

export default App;
