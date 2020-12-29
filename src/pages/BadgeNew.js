import React from 'react';

import header from '../images/logo.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from "../components/BadgeForm"
import api from "../api"
import PageLoading from '../components/PageLoading'
class BadgeNew extends React.Component {
    state={
        loading: false,
        error: null,
        form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    }};
    handleChange= e =>{
        //const nextForm = this.state.form;

        //nextForm[e.target.name]= e.target.value;
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async  e =>{
        e.preventDefault()
        this.setState({error:null, loading : true})
        try{
            await api.badges.create(this.state.form);
            this.setState({loading :false})

            this.props.history.push('/badges');
        }catch(error){
            this.setState({error:error, loading : false})
        }
    }
    render(){
        if (this.state.loading){
            return <PageLoading />
        }
        return (
            <React.Fragment>
                <div className ="BadgeNew__hero">
                    <img className= "BadgeNew_hero-image img-fluid" src={header} alt="Logo"/>                
                </div>

                <div className="container">
                    <div className = "row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            email={this.state.form.email || 'EMAIL'}
                            twitter={this.state.form.twitter || 'twitter'}/>
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit} 
                            formValues={this.state.form}
                            error= {this.state.error}/>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
        
    }
}

export default BadgeNew;