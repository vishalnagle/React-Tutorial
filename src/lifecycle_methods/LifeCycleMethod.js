
import React from "react"

class LifeCycleMethod extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            hello:"World!"
        }   
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    changeState(){
        this.setState({
            hello:"Geek"
        })
    }



    render(){

        return (<div>
            <h1>Lifecycle Method</h1>
            <h1>
                Hello {this.state.hello}
            </h1>
            <h2>
                <a onClick={this.changeState.bind(this)}>
                    Press Here!
                </a>
            </h2>
        </div>)
    }

    shouldComponentUpdate(nextState,nextProps){
        console.log("shouldComponentUpdate")
        return true;
    }

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate")
    }

   

}

export default LifeCycleMethod