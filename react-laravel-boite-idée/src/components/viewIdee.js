import React, { Component } from "react";
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import './viewIdee.css';

class ViewIdee extends Component
{
    state={
        idea:[],
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('https://box-ideas.herokuapp.com/api/ideas');
        //console.log(res.data);
        if(res.status === 200)
        {
            this.setState({
                idea: res.data,
                loading: false,
            })
        }
    }

    approuver = (id)=>{
        const res = axios.get('https://box-ideas.herokuapp.com/api/ideas/{id}');
        {  
          this.setState({
           status: 'true',
          });
      }
        alert("Votre idée est validée");
    }

    refuser= (e)=>{
        e.preventDefault();
          {  
            this.setState({
             status: 'false',
            });
        }
        alert("Cette idée a été rejété");
    }

    render(){
      if(this.state.loading)
        {
            return <h4>Loading  Idee Data...</h4>
        }
      else
        {
        var idees_HTMLTABLE = "";
        
            idees_HTMLTABLE = this.state.idea.map( (item, index) => {
                return (
                    <div className="col-4 carte">
                        <div className="card card-idea m-2" >
                            <div className="card-body flex-column d-flex justify-content-between">
                                <div className="card-block-titre">
                                   <h5 className="card-title fw-bold"> {item.title} </h5>
                                   <h6 className="card-subtitle mb-2 text-gris">
                                     approuvée / réfusée
                                   </h6>
                                </div>
                                <p className="card-text">
                                   {item.description}
                                </p>
                                <div className="d-flex justify-content-between">
                                   <i className="bi bi-check-circle text-success card-link btn" onClick={this.approuver}></i>
                                   <i className="bi bi-x-circle text-danger card-link btn" onClick={this.refuser}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
       return(
        <div>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center my-5">
                    <h3>La liste des propostions</h3>
                    <div>
                        <button type="button" className="filtre-tous btn  me-2 btn-outline-secondary btn">Tous</button>
                        <button type="button" className="filtre-refuse btn btn-outline-danger btn me-2">Refusée</button>
                        <button type="button" className="filtre-accepte btn btn-outline-success btn">Acceptée</button>
                    </div>
                </div>
                <div className="row" id="propositions"></div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Ajouter une nouvelle idée
                                    <Link to={"/"} className="btn btn-primary btn-sm float-end"> Ajouter une idée</Link>
                                </h4>
                            </div>
                            <div className="card-body">                               
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th className="titre">La liste des idées proposées</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {idees_HTMLTABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default ViewIdee;