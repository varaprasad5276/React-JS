import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


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

    </div>
        )
    }
}
export default About;
