import React, { Component } from "react";
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import fille from './fille.svg';
import './addIdee.css';

class Idee extends Component
{
    state = {
        title: '',
        description: '',
        status: '',
    }

    handleInput = (e)=> {
       this.setState({
           [e.target.name]: e.target.value
       });
    }

    saveIdee = async (e)=>{
       e.preventDefault();
       const res = await axios.post('https://box-ideas.herokuapp.com/api/ideas', this.state);
       if(res.data.status ===200){
           console.log(res.data.message);
           this.setState({
            title: '',
            description: '',
            status: '',
           });
       }
    }

    resetForm = ()=> {
        this.setState({
            title: "",
            description: ""
        })
    }

    render(){
       return(
           <div>
            <div className="container">
             <h1 className="text-center py-3">BOITE A IDEES
             <Link to={'/ideas'} className="btn btn-danger btn-sm float-end"> Les idées fournis </Link>
             </h1>
              <div className="row mb-2">
                <div className="col-6">
                    <form onSubmit={this.saveIdee}>
                        <div className="mb-3">
                            <label htmlFor="titre" className="form-label">Titre</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                onChange={this.handleInput} value={this.state.title}
                                placeholder="Ex : Brief......"
                                aria-describedby="titreHelp"
                            />
                            <div id="titreHelp" class="form-text">
                                Merci de donner un titre clair pourla
                                catégorisation
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label"> Description </label>
                            <textarea
                                className="form-control"
                                name="description"
                                onChange={this.handleInput} value={this.state.description}
                                rows="3"
                            ></textarea>
                            <p id="limite-text">
                                Contenu saisi
                                <span id="text-progress">00 </span> / 130
                            </p>
                            <p id="text-restant"></p>
                        </div>
                        <button
                            type="submit"
                            id="btn-suggestion"
                            className="btn btn-danger float-end"
                            onClick={this.resetForm}
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
                <div className="col-6 d-flex flex-column justify-center-start align-items-center">
                  <img src={fille} className="img-fluid" alt="Image" />  
                </div>
            </div>
        </div>
       </div>
       );
    }
}
export default Idee;