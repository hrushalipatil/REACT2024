import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";

export default function App() {
    const [Items, setItems] = useState([])

    // handler  to add the item
    // item {id, description , quantity ,packed}
    function handleAddItems(item) {
        setItems((Items) => [...Items, item])
    }

    // delete the item from list
    function handleDeleteItem(id) {
        setItems((Items) => Items.filter((item) => item.id !== id))
    }

    // to check which item is packed or unpacked 
    function handleToggleItem(id) {
        setItems((Items) =>
            Items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            ))
    }

    // to clear all the list
    function handleClearList() {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setItems([]);
    }


    return (
        <div className="app">
            <Logo></Logo>
            <Form onAddItems={handleAddItems} />
        </div>

    )
}

