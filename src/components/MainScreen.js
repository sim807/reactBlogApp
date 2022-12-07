import React, { Children } from 'react'
import { Container, Row } from 'react-bootstrap'
import "../App.css"

function MainScreen({title,children}) {
  return (
    <div className='mainBack'>
        <Container>
            <Row>
                <div className='page'>
                    {title && (
                        <>
                        <h4 className='heading'>{title}</h4>
                        <hr/>
                        </>
                    )}
                    {children}
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default MainScreen