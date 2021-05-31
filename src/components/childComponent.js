import React from 'react'

function ChildComponent(props) {
   const name= "Shilpa Kolte"

    return (
        <div>
            <h1>Name </h1>
            <button onClick={()=>props.alert(name)}>ClickMe</button>
           
        </div>
    )
}

export default ChildComponent
