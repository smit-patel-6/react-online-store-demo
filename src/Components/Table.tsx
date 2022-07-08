import React from 'react'
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import '../assets/css/Table.css';

interface data_type {
    name: string
    parentId: string
    campaignType: string
    status: string
    channel: string
    action: string
}

const allData = [
    {
        name: "Sale",
        parentId: "12",
        campaignType: "Push",
        status: "Failed",
        channel: "android",
        action: ":"
    },
    {
        name: "Sale2",
        parentId: "123",
        campaignType: "Inapp",
        status: "Failed",
        channel: "iOS",
        action: ":"
    }]

const tableHead = {
    firstname: "First Name",
    lastname: "Last Name",
    campaignType: "Type",
    status: "Status",
    channel: "Channel",
    action: "Actions"
};

const Table = () => {
    const countPerPage = 10;
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
                    .filter((item) => item.name.toLowerCase().indexOf(query) > -1)
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
    }, [value]);

    const updatePage = (p: number) => {
        setCurrentPage(p);
        const to = countPerPage * p;
        const from = to - countPerPage;
        setCollection(cloneDeep(allData.slice(from, to)));
    };

    const tableRows = (rowData: any) => {
        const { key, index } = rowData;
        const tableCell = Object.keys(tableHead);
        const columnData = tableCell.map((keyD, i) => {
            return <td key={i}>{key[keyD]}</td>;
        });

        return (
            <tr key={index}>
                {columnData}
                <td><button className="btn btn-warning">Edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>);
    };

    const tableData = () => {
        return collection.map((key, index) => tableRows({ key, index }));
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
                    <button className='btn addprobtn'>Add Product</button>
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