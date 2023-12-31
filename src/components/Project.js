import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// projects Cards 
function SingleProjectCard(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p className="proj-icons-container">
              <a href={props.github}><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repository" /></a> 
              <a href={props.deploy}><img className="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" /></a> 
       
             
             </p>
              <p className="technologies">
                    ({props.technologies})
                </p>
        </div>
      </div>
    );
}
  
  export default SingleProjectCard;