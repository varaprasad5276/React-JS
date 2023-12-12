import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
        };
     console.log(this.props.name +' Child Constructor')
    }
   componentDidMount(){
    console.log(this.props.name +'Child component did mount')

   }
    
    render(){
        const {name,location}=this.props;
        const {count}=this.state;
        console.log(this.props.name +'Child Render')

        return (
            <div className="user-card">
                <h2>count :{count}</h2>
            <button 
            onClick={()=>{
              //never update state variable directly
             //{this.state.count=this.state.count+1 like this dont do}
                this.setState({
                    count : this.state.count+1,
                })
            }}>
                click
                </button>   
            
            <h2>Name : {name }</h2>
            <h3>Contact : GV@mail.com</h3>
            <h4>Location : {location}</h4>
            </div>
        );
    }
}

export default UserClass;