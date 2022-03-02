import React from 'react';
import { useState } from 'react';
import { Pagination, Container, Row, Navbar, Col } from 'react-bootstrap/'
import phones from "../../data.json"
import FormularioPhone from '../FormularioPhone/FormularioPhone';
import PageControl from '../PageControl/';
import TablePhoneNumbers from '../TablePhoneNumbers/';

function PhoneNumberList() {
    const [phonelist, setPhoneList] = useState(phones)
    const [curPage, setCurPage] = useState(1) //current page of paginatio
    const [maxItens, setMaxitens] = useState(5) //number of itens per pagination

    const maxPaginatorPage = 3
    let paginationItens = []
    let page = [];

    fillArrayItens();
    pagination();

    function pagination() {
        //this method count how many pages will have with the total number of 
        //itens limited by max number of itens displayed per page
        paginationItens = []
        let numberPages = Math.ceil(phonelist.length / maxItens)
        let pageid = 1 //pageid control de index displayed on pagination component to show the correct page when is on a page above 3
        if (curPage > 2) pageid = curPage - 1
        for (let number = 1; number <= maxPaginatorPage; number++) {
            paginationItens.push(
                <Pagination.Item key={number} active={pageid === curPage}
                    onClick={() => {
                        setCurPage(number)
                    }}>{pageid}</Pagination.Item>
            )
            pageid++;
            if (number === numberPages || pageid > numberPages)
                break;
        }
        //Pagination Default buttons First, Last, Next and Previous
        const prevPage = [<Pagination.First onClick={() => {
            setCurPage(1)
        }} />,
        <Pagination.Prev onClick={() => {
            if (curPage > 1) {
                setCurPage(curPage - 1)
            }
        }} />];
        const nextPage = [<Pagination.Next onClick={() => {
            if (curPage < page.length) {
                setCurPage(curPage + 1)
            }
        }} />,
        <Pagination.Last onClick={() => {
            setCurPage(page.length)
        }} />]

        paginationItens = [...prevPage, ...paginationItens, ...nextPage]
    }

    //this method gets de phonelist and fragment in peaces of maxItens per page
    function fillArrayItens() {
        for (let i = 1; i <= Math.ceil(phonelist.length / maxItens); i++) {
            page[i - 1] = phonelist.slice((i - 1) * maxItens, i * maxItens)
        }
    }

    return (
        <>
            <Navbar bg='light' expand='lg'>
                <Container>
                    <Navbar.Brand href="#">Carriers Numbers</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col sm='8'>
                        <PageControl
                            paginationItens={paginationItens}
                            setCurPage={setCurPage}
                            setMaxitens={setMaxitens}
                            maxItens={maxItens} />
                    </Col>
                    <Col sm='4'>
                        <FormularioPhone saveNewNumber={saveNewNumber} />
                    </Col>

                </Row>
                <TablePhoneNumbers
                    page={page}
                    curPage={curPage} />



            </Container>
        </>
    );

    function saveNewNumber(phone, monthy, setup, currency) {
        const newID = phonelist.length + 1
        const newList = phonelist.concat({ id: newID, value: phone, monthyPrice: monthy, setupPrice: setup, currency: currency });
        setPhoneList(newList);
        pagination()
    }
}


export default PhoneNumberList;