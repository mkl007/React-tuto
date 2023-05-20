import {useState, useEffect} from 'react'

export default function Welcome(props) {
    const [counter, setCounter] = useState(0)
    const [semaforo, setSemaforo] = useState(false)
    const {message, name} = props;

    useEffect(()=> {
        console.log(semaforo)
    }, [semaforo])
    
    const contar = () =>{
        setCounter(counter + 1)
        setSemaforo(!semaforo)
    }
    // console.log(semaforo)
  return (
    <div>
        <h1> Welcome, {name}</h1>
        <p>{message}</p>
        <h4>Contador de React con Hooks</h4>
        <p>El contador es: {counter}</p>
        <p>El semaforo esta en color {semaforo ? 'red' : 'green'}</p>
        <button type='submit' onClick={contar}>Sumar</button>
    </div>
  )
}
