import React, {useState} from "react"


export default function Contador2(props) {

  const contador = useState(0)
  const getContador = contador[0];
  const setContador = contador[1];

  return (
    <div>
      <button onClick={() => setContador(getContador + 2)}>Incrementar2</button>

      {getContador}

    </div>

  )
}