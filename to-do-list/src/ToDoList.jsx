function ToDoList({ list }) {
    return <ul>
        {list.map((item) => {
            return <>
                <li key={item}>
                    <p>
                        {item}
                    </p>
                    <button></button>
                </li>
            </>
        })}

    </ul>
}


export default ToDoList