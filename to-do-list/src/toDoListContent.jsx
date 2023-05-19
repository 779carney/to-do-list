
import { useState } from 'react'
import ToDoList from './ToDoList';
import ItemAdder from './ItemAdder';

function ToDoListContent() {
    const [list, setListItem] = useState(['go have fun', 'walk dog', 'play the drums']);
    return (
        <>
            <ItemAdder setListItem={setListItem} list={list} />
            <ToDoList list={list} />

        </>
    )

}
export default ToDoListContent