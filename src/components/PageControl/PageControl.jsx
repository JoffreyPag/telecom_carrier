import React from 'react';
import { Pagination, Row, Dropdown, Col } from 'react-bootstrap/'

function PageControl(props) {

    return <>
        <Row>
            <Col sm='auto'>
                <Pagination className='mt-3 mb-1 d-flex justify-content-end'>{props.paginationItens}</Pagination>
            </Col>
            <Col>
                <Dropdown className='mt-3 d-flex justify-content-start'
                    onSelect={(event) => {
                        props.setCurPage(1)
                        props.setMaxitens(event)
                    }}>
                    <Dropdown.Toggle id="dropdown-basic" variant="secondary">
                        {props.maxItens}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey={5}>5</Dropdown.Item>
                        <Dropdown.Item eventKey={10}>10</Dropdown.Item>
                        <Dropdown.Item eventKey={30}>30</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    </>
}

export default PageControl