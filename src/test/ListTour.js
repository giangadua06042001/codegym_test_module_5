import {useEffect, useState} from "react";
import axios from "axios";
import {Link, Outlet} from "react-router-dom";

export default function ListTour(){
    const [listTour, setListTour] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/tuors").then(res => {
            setListTour(res.data);
        })
    }, []);
    return (
        <>
            <h3>Danh Sách </h3>
            <Link to={"/create"}>Tạo mới</Link>
            <Outlet></Outlet>

            <table border='1'>
                <tbody>

                <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Giá</th>

                </tr>
                {
                    listTour.map((item,index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td><Link to={`/view/${item.id}`}>{item.title}</Link></td>
                                <td>{item.price}</td>
                                <td><Link to={`/delete/${item.id}`}>Delete</Link></td>
                                <td><Link to={`/edit/${item.id}`}>Edit</Link></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}