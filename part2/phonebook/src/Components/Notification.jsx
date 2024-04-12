import React from 'react'

const Notification = ({message}) => {
    const mess = {
        color: 'green',
        // fontSize: '20px',
        background: 'lightgrey',
        fontSize:'20px',
        borderStyle:'solid',
        borderRadius:'5px',
        padding: '10px',
        marginBottom:'10px'
    } 
    if (message===null) {
        return null
    }
  return (
    <div style={mess}>
        {message}
    </div>
  )
}

export default Notification