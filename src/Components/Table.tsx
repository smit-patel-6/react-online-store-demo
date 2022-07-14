import React, { useEffect } from 'react'
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import '../assets/css/Table.css';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { initType,productsType } from '../Reducers/reducers';
import { removeProduct } from '../Actions/actions';

const tableHead = {
    firstname: "First Name",
    lastname: "Last Name",
    category: "Category",
    description: "Description",
};

const Table = () => {

    const nevigate = useNavigate();
    const dispatch = useDispatch()
    const state = useSelector<initType,any>((state) => state)
    const allData = state.reducer.products
    const countPerPage = 5;
    const [value, setValue] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const [collection, setCollection] = React.useState(
        cloneDeep(allData.slice(0, countPerPage))
    );
    const searchData = React.useRef(
        throttle((val) => {
            const query = val.toLowerCase();
            setCurrentPage(1);
            const data = cloneDeep(
                allData
                    .filter((item:productsType) => item.firstname.toLowerCase().indexOf(query) > -1)
                    .slice(0, countPerPage)
            );
            setCollection(data);
        }, 400)
    );

    React.useEffect(() => {
        if (!value) {
            updatePage(1);
        } else {
            searchData.current(value);
        }
    }, [value,allData]);

    const updatePage = (p: number) => {
        setCurrentPage(p);
        const to = countPerPage * p;
        const from = to - countPerPage;
        setCollection(cloneDeep(allData.slice(from, to)));
    };

    const editProduct = (product:productsType) => {
        nevigate('/productform',{
            state:product
        })
    }

    const deleteProduct = (product:productsType) => {
        dispatch(removeProduct(product));
    }

    const tableRows = (rowData: any) => {
        const { key, index } = rowData;
        const tableCell = Object.keys(tableHead);
        const columnData = tableCell.map((keyD, i) => {
            return <td key={i}>{key[keyD]}</td>;
        });

        return (
            <tr key={index}>
                {columnData}
                <td><button className="btn btn-warning" onClick={() => editProduct(key)}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={() => deleteProduct(key)}>Delete</button></td>
            </tr>);
    };

    const tableData = () => {
        return collection.map((key:productsType, index:any) => tableRows({ key, index }));
    };

    const headRow = () => {
        return Object.values(tableHead).map((title, index) => (
            <td key={index}>{title}</td>
        ));
    };

    return (
        <>
            <div className="container">
                <div className="search">
                    <input
                        placeholder="Search Campaign"
                        value={value}
                        className="form-control searchproduct"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Link to='/productform' className='btn addprobtn'>Add Product</Link>
                </div>
                <table className='table table-hover mt-4'>
                    <thead>
                        <tr>{headRow()}</tr>
                    </thead>
                    <tbody className="trhover">{tableData()}</tbody>
                </table>
                <Pagination
                    pageSize={countPerPage}
                    onChange={updatePage}
                    current={currentPage}
                    total={allData.length}
                    className="pagination"
                />
            </div>
        </>
    );
}

export default Table