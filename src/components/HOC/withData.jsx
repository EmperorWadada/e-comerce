import React from "react";

const WithData = (WrappedComponent, URI) => {
    class WithData extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {
                data: []
            }
        }
    
        componentDidMount() {
            fetch({URI})
            .then(userData => userData.json())
            .then(data => this.setState({data: data.slice(0, 3)}))
        }
    
        render() {
            return <WrappedComponent data={this.state.data} {...this.props}/>
        }
    }
    return WithData;
}

export default WithData