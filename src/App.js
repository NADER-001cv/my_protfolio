import React from 'react';
import Wave from 'react-wavify';
import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'
// import Nav from './layout/headernav/Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';
// hello
function App() {
  return (
    <div> 
    
    <div className='App'>

    <h1
    style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
    >
    I'm a {' '}
    <span style={{ color: '#1277b0', fontWeight: 'bold' }}>
      {/* Style will be inherited from the parent element */}
      <Typewriter
        loop
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        words={['Developer','front end', 'back end']}
      />
    </span>
    </h1>

    <Wave fill='#1277b0'
    paused={false}
    options={{
      height: 80,
      amplitude: 40,
      speed: 0.20,
      points: 4
    }}
/>


            
</div>

</div>



    
  );
}

export default App;
