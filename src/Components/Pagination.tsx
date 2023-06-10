import React from 'react'
import Button from 'react-bootstrap/Button'

interface IProps {
    currentPage: number
    lastPage: number
    page: number
    onPreviousPage: () => void
    onNextPage: () => void
}

const Pagination: React.FC<IProps> = ({currentPage, lastPage, page, onNextPage, onPreviousPage}) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
        <div className="prev">
            <Button
                disabled={page <= 1} // IF PAGE IS ON THE FIRST PAGE YOU CANT GO BACK
                onClick={onPreviousPage} //GO BACK BY 1 PAGE
                variant="primary"
            >Previous Page</Button>
        </div> 
        <div className="page">Page {currentPage} of {lastPage}</div> 
        <div className="next">
            <Button
                disabled={page + 1 >= lastPage} //IF PAGE IS ON THE LAST PAGE YOU CANT GO BACK
                onClick={() => { onNextPage}} //GO forward BY 1 PAGE
                variant="primary"
            >Next Page</Button>
        </div>
    </div>
  )
}

export default Pagination
