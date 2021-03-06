/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table , InputGroup , Icon , Input } from 'rsuite';

function BooksTable(props) {
    const items = props.books.filter((book) => {
        if(props.search == null)
        return book
        else if(book.name.toLowerCase().includes(props.search.toLowerCase()) || book.category.toLowerCase().includes(props.search.toLowerCase())) {
            return book 
        }
    })
    return (
        <>
        <InputGroup size="lg" style={{margin:'2.2rem auto'}}>
            <Input onChange={value => props.searchSpace(value)} style={{width: 600 , border:'none' , outline: 'none' , margin: 'auto'}} placeholder='Search...' />
            <InputGroup.Addon>
                <Icon icon="search" />
            </InputGroup.Addon>
        </InputGroup>
        <Table height={500}
            data={items} style={{marginTop: '1rem'}}>
            <Table.Column width={70} align="center" fixed>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.Cell dataKey='id'/>
            </Table.Column>
            <Table.Column width={200}>
                <Table.HeaderCell>Book Name</Table.HeaderCell>
                <Table.Cell dataKey='name' />
            </Table.Column>
            <Table.Column width={200} >
                <Table.HeaderCell>Book Category</Table.HeaderCell>
                <Table.Cell dataKey='category' />
            </Table.Column>
            <Table.Column width={200} >
                <Table.HeaderCell>Book Price</Table.HeaderCell>
                <Table.Cell dataKey='price'/>
            </Table.Column>
            <Table.Column width={200} >
                <Table.HeaderCell>Book Author</Table.HeaderCell>
                <Table.Cell dataKey='author' />
            </Table.Column>
            <Table.Column width={120} fixed="right">
                <Table.HeaderCell>Action</Table.HeaderCell>

                <Table.Cell>
                    {rowData => {
                        return (
                            <span>
                                <a onClick={() => props.toggleEdit(rowData)} style={{cursor: 'pointer'}}> Edit </a> |{' '}
                                <a onClick={() => props.deleteBook(rowData.id)} style={{cursor: 'pointer'}} > Remove </a>
                            </span>
                        );
                    } }
                </Table.Cell>
            </Table.Column>
        </Table>
        </>
    );
}
export default BooksTable