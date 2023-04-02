import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq-container'>
          
             <div>
           <div>
           <h1 className='font-bold p-2'>1.Different between props and state?</h1>
            <p>The difference comes in which component the data are owned. The state is owned locally, and the component itself updates it. Props are owned and read only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child</p>
           </div>
           <div>
            <h1 className='font-bold p-2'>
                2.how useState work?
            </h1>
            <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
           </div>
           <div>
            <h1 className='font-bold p-2'>3.what is done by useeffect beside the data fetching?</h1>
            <p>I am impressed by the expressiveness of React hooks. You can do so much by writing so little.
           But the brevity of hooks comes at a price — they're relatively difficult to understand at the beginning. That's especially true for useEffect() — the hook that manages side-effects in functional React components.
            I'll help you understand useEffect() in an accessible way. Let's get started.</p>
           </div>
           <div>
            <h1 className='font-bold p-2'>4.how does react work?</h1>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
           </div>
        </div>
    
        </div>
    );
};

export default Faq;