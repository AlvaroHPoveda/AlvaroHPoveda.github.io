import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const Navigate = useNavigate()

    return (
        <article>
            <div className='content'>
                <h1>
                    Hi,<br/>I'm Alvaro,<br/>Web Developer
                </h1>
                <h3>
                    Front End Developer
                </h3>
                <button onClick={()=>Navigate("/Contact")} className='button-contact'>Contact me!</button>
            </div>
            <aside className='asidehome'>
                <button onClick={()=>Navigate("/Projects")} className='button-aside'>See Projects</button>
            </aside>
            
        </article>
    );
};

export default Home;