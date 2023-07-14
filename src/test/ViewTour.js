import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ViewTour() {
    const {id} = useParams();
    const nav = useNavigate();
    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: ""
    })
    let comeBack = () => {
        nav('/')
    }
    useEffect(() => {
            axios.get(`http://localhost:3000/tuors/${id}`).then(res => {
                setTour(res.data)
                console.log(id);
            })
        }, []
    )
    return (
        <>
            <h3>Chi tiết tour</h3>


            <table>
                <tr>
                    <td>tên:</td>
                    <td>{tour.title}</td>
                </tr>
                <tr>
                    <td>Giá:</td>
                    <td>{tour.price}</td>
                </tr>
                <tr>
                    <td>Mô tả:</td>
                    <td>{tour.description}</td>
                </tr>
            </table>
            <button onClick={comeBack}>Danh sách</button>
        </>
    )
}