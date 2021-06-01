import React from 'react'

// function Header(props){

//     return(
//         //JSX
//         <h1 style={{color: props.color}}>
//             {props.title}
//         </h1>
//     )
// }

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <h1 style={{color: this.props.color}}>
                {this.props.title}
            </h1>
        )
    }    
}

// Default Props 

// Header.defaultProps = {
//     title: "Eri"
// }

export default Header;