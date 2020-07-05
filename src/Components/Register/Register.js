import React,{Component} from 'react'

class Register extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      email:'',
      password:'',
      name:'',
      user:
      {
        id:'',
        name:'',
        email:'',
        entries:0,
        joined: new Date()
      }
       
    }
  }
  
onInputChange=(event)=>{
  const {name,value}=event.target
  this.setState({
    [name]:value
  })
}
onSubmitSignIn=()=>{
 
  fetch("https://lovely-hawaii-volcanoes-52731.herokuapp.com/register",{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      email:this.state.email,
      password:this.state.password,
      name:this.state.name
    })
  })
  .then( response=>response.json())
  .then(user=>{
    if (user.id){
      this.props.loadUser(user)
      this.props.onRouteChange('home')
    }
  })
 
}


  render(){
    
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" >Name
                <input onChange={this.onInputChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" name="name"  id="name" required/>
                </label>
              </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" >Email
          <input onChange={this.onInputChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" name="email"  id="email" required/>
          </label>
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" >Password
          <input onChange={this.onInputChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" name="password"  id="password" required/>
          </label>
        </div>
      </fieldset>
      <div className="">
        <input onClick={this.onSubmitSignIn} 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" value="Register"/>
      </div>
      
    </div>
  </main>
</article>
  )
  }
   
}

export default Register
