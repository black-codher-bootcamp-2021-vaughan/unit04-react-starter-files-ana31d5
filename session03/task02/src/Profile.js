import React from 'react';
import ReactDOM from 'react-dom';


function Profile(props){
   if(props.name){
    return <main id="content" role="main" class="base">
            <h1>{props.name}'s React Page</h1>
              <p> {props.bio}</p>
            </main>
   }
   else {
     return <main id="content" role="main" class="base">
       <h1>Just a React Page</h1>
       <p>Nothing to see here!</p>
     </main>  
   }
}


export default Profile