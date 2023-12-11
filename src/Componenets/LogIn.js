
import { Formik,Field,Form } from "formik";

const LogIn=()=>{
    return (
       
        <div className="login" >
      <h1>LogIn</h1>
      <Formik>
        <Form>
          <Field name="name" type="number" size='10' className='mobile' placeholder='Phone Number'/><br/>
          <button type="submit" className="but">Submit</button>
        </Form>
      </Formik>

    </div>

    )
}

export default LogIn;
