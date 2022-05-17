import React from 'react'

export const Body = (props) => {
  return (
     <div  >
               <h3>Nombre {props.cliente.nombre}</h3>
               <h3>Edad {props.cliente.edad}</h3>
               <h3>Sueldo $ {props.cliente.sueldo}</h3>
            </div>
  )
}
