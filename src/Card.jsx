
import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/html.png';

const Card = (props) => {
    return(
       
           <div className="col-md-3 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} alt={props.imgsrc} />
                     <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="card-link">Card link</NavLink>
                       
                     </div>
                 </div>
            </div>
      
    );
};

export default Card;