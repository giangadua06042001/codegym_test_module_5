import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditTour() {
    const {id} = useParams();
    const nav=useNavigate();
    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: ""
    })
    const huy = () => {
        nav('')

    }
    useEffect(()=>{
    axios.get(` http://localhost:3000/tuors/${id}`).then(res=>{
        setTour(res.data)
    })
    },[])
    return(
        <>
            <h2>Sửa Tour</h2>
            <Formik initialValues={tour} onSubmit={(values)=>{
                axios.put(`http://localhost:3000/tuors/${id}`,values).then(()=>{
                    nav('/')
                })
            }
            }

                    enableReinitialize={true}>
                <Form>
                    <table>
                        <tr>
                            <td>Tên tour</td>
                            <td>
                                <Field name={'title'}></Field>
                            </td>
                        </tr>
                        <tr>
                            <td>Giá</td>
                            <td>
                                <Field name={'price'}></Field>
                            </td>
                        </tr>
                        <tr>
                            <td>Mô </td>
                            <td>
                                <Field name={'description'}></Field>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button>Save</button>
                                <button onClick={huy}>Hủy</button>
                            </td>
                        </tr>
                    </table>
                </Form>
            </Formik>
        </>
    )
}