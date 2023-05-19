import { useState } from 'react'


function ItemAdder({setListItem, list}) {
 const [newListItem, setNewListItem]=useState('')

    function handleChange(event) {
   
        setNewListItem(event.target.value)
 }
    
 function handleSubmit(event) {
        event.preventDefault()
        setListItem((currList)=>{
        return [newListItem,...currList]
        })
        setNewListItem('')
    }

  return <> <form onSubmit={handleSubmit}>
    <label htmlFor='listInput'> Add to the list</label>
    <input type="text" id="listInput" onChange={handleChange} value={newListItem}/>
    <button type='submit'>submit</button>
</form>
</>
}

export default ItemAdder