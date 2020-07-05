import React,{Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';

const particleparam=
  {
    particles: {
      number: {
        value:30,
        density: {
          enable: true,
          value_area: 150
        }
      }
    }
  }

  const initialState={
    input:'',
        imageUrl:'',
        box:{},
        route:'signin',
        user:{
          id:'',
          name:'',
          email:'',
          entries:0,
          joined:''

        }

  }
  class App extends Component{

   
    constructor(){
      super();
      this.state=initialState
    }

  
    calculateFaceLocation=(data)=>{

    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box
      const image=document.getElementById('inputImage')

    const width=Number(image.width)
    const height=Number(image.height)
    return{
      leftCol:clarifaiFace.left_col*width,
      topRow:clarifaiFace.top_row*height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:height-(clarifaiFace.bottom_row*height)


    }
   

    }

    loadUser=(data)=>{
      this.setState({
        user:{
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined: data.joined
      }
      })
    }
    displayFaceBox=(box)=>{
     
this.setState({
  box:box
})
    } 


    onInputChange=(event)=>{
    this.setState({
      input:event.target.value
    });
    }

    onButtonSubmit=()=>{
      this.setState({
        imageUrl:this.state.input

      })
      fetch('https://lovely-hawaii-volcanoes-52731.herokuapp.com/imageurl',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          input:this.state.input
        })
      }).then(response=>response.json())
     .then( 
          response=>{
            if(response){
              fetch('https://lovely-hawaii-volcanoes-52731.herokuapp.com/image',{
                method:'put',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                  id:this.state.user.id
                })
              })
              .then(response => response.json())
              .then(count=>{
                this.setState(
                  Object.assign(this.state.user,{entries:count}))
              }).catch(console.log)
        
            }
            this.displayFaceBox(this.calculateFaceLocation(response))})
        
                .catch(err=>console.log(err))
      
    }
  
  
    onRouteChange=(route)=>{
      if (route==='signin'){
        this.setState(initialState)

      }else{
        this.setState({
          route:route
        })
      }
     

    }

    render(){
      const {route,box,imageUrl}=this.state
      return (
        <div className="App">
            <Particles className='particles'
              params={particleparam} />
            <Navigation route={route} onRouteChange={this.onRouteChange} />
            {route==='home'?
            <div>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={box} imageUrl={imageUrl} />
           </div>
            :
            (
              route==='signin'?
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              :
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
            }
        </div>
      );
    }

  }


export default App;
