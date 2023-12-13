import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userinfo:{
              name:'dummy',
              location:'dummy',
              avatar_url:'http://',

              interval:0
            }
        };
     console.log(this.props.name +' Child Constructor')
     
    }
  async componentDidMount(){
   console.log(this.props.name +'Child component did mount')
// make an API call

       const data=await fetch("https://api.github.com/users/varaprasad5276");
       const json=await data.json();

       console.log(json);

       this.setState({
        userinfo:json})

        this.setState({
           interval: setInterval(() => {
                // Update the state of the component
                this.setState({
                  count: this.state.count + 1,
                });
              }, 3000)
        })

        
   }
    componentDidUpdate(){
            console.log(this.props.name +'Child component did Update')

    }
    componentWillUnmount(){
        console.log('UnMount');
        clearInterval(this.state.interval)
    }

    render(){
        const {name,location,avatar_url}=this.state.userinfo;
        console.log(this.props.name +'Child Render')
        console.log(name +' Child Render')

        return (
            <div className="user-card">
             
            <img src={avatar_url}/>
            <h2>Name : {name }</h2>
            <h3>Contact : GV@mail.com</h3>
            <h4>Location : {location}</h4>
            </div>
        );
    }
}

export default UserClass;
            //  -- 1) MOunting Phase

//                   Parent Constructor
// About.js:18       Parent Render
// UserClass.js:13       First Child Constructor
// UserClass.js:35       FirstChild Render
// UserClass.js:36         dummy Child Render
// UserClass.js:17       FirstChild component did mount
// About.js:13       Parent component did mount

         //      -- 2) Updating Phase

// UserClass.js:23         {login: 'varaprasad5276', id: 54410252, node_id: 'MDQ6VXNlcjU0NDEwMjUy', avatar_url: 'https://avatars.githubusercontent.com/u/54410252?v=4', gravatar_id: '', …}
// UserClass.js:35       FirstChild Render
// UserClass.js:36       Vara Prasad Child Render
// UserClass.js:30        FirstChild component did Update

       //       -- 3) UnMounting Phase
    //  it's called when we go to the new page, it occurs when componenet removed from the DOM