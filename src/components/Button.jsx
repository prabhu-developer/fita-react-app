import React from 'react'

export default function Button(props) {
    const { title } = props
    const buttonStyles = {
        background: props.variant,
        color: 'white',
        padding: '10px 20px'
    }
    return (
        <button style={buttonStyles}>
            {props.title} - {title}
        </button>
    )
}