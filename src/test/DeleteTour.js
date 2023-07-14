import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Form, Formik} from "formik";

export default function DeleteTour(){
  const {id}=useParams();
  const nav=useNavigate();
  const [tour,setTour]=useState({
      title:"",
      price:"",
      description:""
  })
    let comeBack=()=>{
        nav('/')
    }
    useEffect(()=>{
            axios.get(`http://localhost:3000/tuors/${id}`).then(res => {
                setTour(res.data)
                console.log(id);
            })
        }, []
    )
    return(
        <>
            <h3>Xóa Tour</h3>
            <Formik initialValues={tour} onSubmit={(values)=>{
                axios.delete(`http://localhost:3000/tuors/${id}`, values).then(()=>{
                    nav("/")
                })}
            }>
                <Form>
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
                    <button>Xóa</button>
                    <button onClick={comeBack}>Danh sách</button>
                </Form>
            </Formik>
        </>
    )
}