import React from 'react';

const Title = (props) => {
    let myTitle="Welcome to the the Weather Report";
        if(props.title){
            myTitle = <p>Showing data of {props.title}</p>
        }
        return(
            <div>
               {myTitle}
            </div>
        )
}


export default Title;