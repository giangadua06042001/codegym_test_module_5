import {Field, Form, Formik} from "formik";
import app from "../App";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function CreateTour(){
    const  nav=useNavigate();
    const huy = () => {
        nav('/')
    }
return(
    <>
        <h1>Thêm tour</h1>
        <Link to={'/'}>Danh Sach</Link>
        <Formik initialValues={{
            title:"",
            price:"",
            description:""
        }} onSubmit={(values,{resetForm})=>{
        axios.post(` http://localhost:3000/tuors`,values).then(()=>{

        })
        resetForm();
        }
        }>
         <Form>
             <table>
                 <tr>
                  <td>Tên tour</td>
                     <td>
                         <Field name={'title'}></Field>
                     </td>
                 </tr>
                  <tr>
                  <td>giá</td>
                     <td>
                         <Field name={'price'}></Field>
                     </td>
                 </tr>
                  <tr>
                  <td>Mô Tả</td>
                     <td>
                         <Field name={'description'}></Field>
                     </td>
                 </tr>
                 <tr>
                     <td>
                         <button>Thêm mới</button>
                     </td>
                     <td>
                         <button onClick={huy}>Hủy</button>
                     </td>
                 </tr>

             </table>
         </Form>
        </Formik>
    </>
)
}