import React, { Component } from 'react'
import '../styles/Information.css'
export default class Information extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            name: '',
            email: '',
            phone: '',
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.edit = this.edit.bind(this);
    }

    onSubmit(e) {

        e.preventDefault();


        this.setState({
            submitted: true,
        }, () => {
            console.log(this.state);
        })

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    edit(){
        this.setState({
            submitted: false,
        })

    }





    render() {
        const { name, email, phone, submitted } = this.state
        return (
            <div className='Information'>
                <h2>Hello from Information component!</h2>
                {!submitted && <form className='form' onSubmit={this.onSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={name} name='name' onChange={this.onChange}></input>
                    <label htmlFor="email">Email</label>
                    <input type='text' value={email} name='email' onChange={this.onChange}></input>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='text' value={phone} name='phone' onChange={this.onChange}></input>
                    <button type='submit'>Submit</button>
                </form>}
                {submitted && 
                <ul className='user-info'>
                    <h3>{name}</h3>
                    <h3>{email}</h3>
                    <h3>{phone}</h3>
                    <button onClick={this.edit}>Edit</button>
                </ul>}
                
            </div>


        )
    }
}