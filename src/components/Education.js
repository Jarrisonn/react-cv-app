import React, { Component } from 'react';
import '../styles/Education.css'
class Education extends Component {
    constructor(props){
        super(props);
        
        this.state ={
            schoolName: '',
            titleOfStudy: '',
            dateOfStudyStart: '',
            dateOfStudyFin: '',
            submitted: false,
        }
        this.onChange = this.onChange.bind(this)

        this.onSubmit = this.onSubmit.bind(this)
    
        this.addMore = this.addMore.bind(this)

    }

    onChange(e){
        
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(`School Name is: ${this.state.schoolName}`);
            console.log(`title of study is: ${this.state.titleOfStudy}`);
        })
        
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({
            submitted: true,
        }, () => {
            console.log(this.state);
        })
    }
    addMore(){
        return(
            <Education/>
        )
        
    }
    render() {
        const {schoolName, titleOfStudy, dateOfStudyStart, dateOfStudyFin, submitted} = this.state
        return (
            <div className='education'>
                <h1>Hello from education</h1>
                {!submitted && <form className='education-form' onSubmit={this.onSubmit}>
                    <label htmlFor="schoolName">School Name</label>
                    <input type='text' name='schoolName' value={schoolName} onChange={this.onChange}></input>
                    <label htmlFor="titleOfStudy">Title of study</label>
                    <input type='text' name='titleOfStudy' value={titleOfStudy} onChange={this.onChange}></input>
                    <label htmlFor='dateOfStudyStart'>Start Date</label>
                    <input type='date' name='dateOfStudyStart' value={dateOfStudyStart} onChange={this.onChange}></input>
                    <label htmlFor='dateOfStudyFin'>Fin Date</label>
                    <input type='date' name='dateOfStudyFin' value={dateOfStudyFin} onChange={this.onChange}></input>
                    <button type='submit'>Submit</button>
                </form>}
                {submitted && 
                <ul>
                    <h3>{schoolName}</h3>
                    <h3>{titleOfStudy}</h3>
                    <h3>{dateOfStudyStart}</h3>
                    <h3>{dateOfStudyFin}</h3>
                    <button onClick={this.addMore}>Add more education</button>
                </ul>}
            </div>
        );
    }
}

export default Education;
