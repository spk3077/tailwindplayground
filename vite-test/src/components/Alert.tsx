// Install ES7+
// rafce
import React from 'react'

interface Props {
    children: string; // a special property that allows us to specify content in parent (App class in this case) as content rather than parameters: <Alert>Content</Alert> rather than <Alert text="content"></Alert>
    
}

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary">
        {children}
    </div>
  )
}

export default Alert
