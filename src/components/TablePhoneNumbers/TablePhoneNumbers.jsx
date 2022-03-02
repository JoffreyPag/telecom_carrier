import React from 'react';
import { Table } from 'react-bootstrap';

function TablePhoneNumbers(props) {
    function listPhoneNumbers() {
        return (props.page[props.curPage - 1].map((phonenumber, index) => {
            return <tr key={index}>
                <td>{phonenumber.id}</td>
                <td>{phonenumber.value}</td>
                <td>{phonenumber.monthyPrice}</td>
                <td>{phonenumber.setupPrice}</td>
                <td>{phonenumber.currency}</td>
            </tr>
        }
        )
        );
    }
    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>Number</th>
                <th>Monthy Price</th>
                <th>Setup Price</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>

            {listPhoneNumbers()}

        </tbody>
    </Table>
}

export default TablePhoneNumbers;