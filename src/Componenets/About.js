import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
// const About=()=>{ 
//     return (
//         <div>
//     <h2>This is About page for Food Ordering Site..</h2>
//     {/* <User name={"venkata"} /> */}
//     <UserClass name={'prasad'} location={"rapur"}/>
//     </div>
//     )
// }

class About extends Component{
    constructor(props){
        super(props);

        console.log('Parent Constructor')
    }
    componentDidMount(){
        console.log('Parent component did mount')

    }
    render()
    {
        console.log('Parent Render')

        return (
            <div>
     <h2>This is About page for Food Ordering Site..</h2>
    <UserClass name={'First'} location={"INDIA"}/>   
     <UserClass name={'Second'} location={"UK"}/>
     <UserClass name={'Third'} location={"US"}/>

    </div>
        )
    }
}
export default About;

//                 Parent Constructor
// About.js:26     Parent Render
// UserClass.js:9      First Child Constructor
// UserClass.js:19     FirstChild Render
// UserClass.js:9      Second Child Constructor
// UserClass.js:19     SecondChild Render
// UserClass.js:9      Third Child Constructor
// UserClass.js:19     ThirdChild Render
                   //DOM Updated - in single Batch (COMMIT PHASE )
// UserClass.js:12       FirstChild component did mount
// UserClass.js:12       SecondChild component did mount
// UserClass.js:12       ThirdChild component did mount
// About.js:21      Parent component did mount