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
        <div style={{backgroundColor: "gray"}}>
            <h3>Danh Sách </h3>
            <Link to={"/create"}><button>Tạo mới </button></Link>
            <Outlet></Outlet>

            <table border='1' bgcolor={"white"} style={{width: "100%",position: "fixed"}}>
                <tbody>

                <tr>
                    <th width={'5%'}>#</th>
                    <th width={'15%'}>Tên</th>
                    <th>Giá</th>
                    <th width={'15%'} colSpan={2}></th>
                </tr>
                {
                    listTour.map((item,index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td><Link to={`/view/${item.id}`}>{item.title}</Link></td>
                                <td>{item.price}</td>
                                <td><button><Link to={`/delete/${item.id}`}>Delete</Link></button></td>
                                <td><Link to={`/edit/${item.id}`}><button>Edit</button></Link></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}