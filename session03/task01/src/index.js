import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Anastasia';

function Profile(name){
   if(name){
    return <main id="content" role="main" class="base">
            <h1>{name}'s React Page</h1>
              <p> Im looking to become a full stack engineer</p>
            </main>
   }
   else {
     return <main id="content" role="main" class="base">
       <h1>Just a React Page</h1>
       <p>Nothing to see here!</p>
     </main>  
   }
}

ReactDOM.render(Profile(name),document.getElementById('root'));
