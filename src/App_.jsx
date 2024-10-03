// import React from 'react'
// import Button from './components/Button'

// export default function App() {
//     const isLogged = false
//     return (
//         <div>
//             <h1>{isLogged ? 'Logged User' : 'Guest User'} </h1>
//             <Button
//                 title='Btn Danger'
//                 variant='#87A2FF'
//             />
//             <Button
//                 title='Btn Primary'
//                 variant='blue'
//             />
//             <Button
//                 title='Btn Success'
//                 variant='green'
//             />
//         </div>
//     )
// }
import React, { useEffect, useState } from 'react'

export default function App() {
    const [count, setCount] = useState('Alex')
    const [todos, setTodos] = useState([])

    const handleClick = () => {
        setCount(count + 1)
    }

    console.log('Rendered....')
    console.log([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?limit=10')
            .then(response => response.json())
            .then(result => setTodos(result))
    }, [count])


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Add count</button>
            {
                todos.length === 0 ? 'Loading...' : todos.map(item => <li>{item.title}</li>)
            }
        </div>
    )
}
// import React from 'react'

// export default function App() {
//     const list = ['Lorem', 'ipsum', 'dolor', 'amet']
//     return (
//         <div>
//             <ol>
//                 {
//                     list.map(item => (
//                         <li>{item}</li>
//                     ))
//                 }
//             </ol >
//         </div >
//     )
// }
