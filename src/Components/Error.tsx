import React from 'react'
import Alert from 'react-bootstrap/Alert'

interface IProps {
    error: string
}


const Errors: React.FC<IProps> = ({error}) => {
  return (
    <Alert variant="warning">{error}</Alert>
  )
}

export default Errors
