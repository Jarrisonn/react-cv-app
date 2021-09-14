import React, {useState} from 'react';
import '../styles/Education.css'
const Education = () => {

    const [inputFields, setInputFields] = useState([
        {schoolName: '',titleOfStudy: '',startDate: '',endDate: '', }, 
    ])
    const [submitted, setSubmitted] = useState(false)

    const onChange = (e,index) => {
        e.preventDefault();
        const values = [...inputFields]
        values[index][e.target.name] = e.target.value
        console.log(values);
        setInputFields(values)
    }

    const addFields = (e) => {
        e.preventDefault()
        console.log("heelo");
        setInputFields([...inputFields, {schoolName: '',titleOfStudy: '',startDate: '',endDate: '', }])
    }

    const onSubmitted = (event) => {
        event.preventDefault()
        console.log("submitted");
        console.log(inputFields);
        setSubmitted(true)
        
    }
    const removeField = (event, index) => {

        event.preventDefault()
        const values = [...inputFields]

        const newValues = values.splice(index,1)
        console.log(newValues);
        console.log(values);
        setInputFields([...values])
        
       
    }
    const edit = (event) => {
        setSubmitted(false);
    }
    return (
        <div className='education'>
            <form type='submit' className='education-form'>
                <h2>Education</h2>
                {!submitted && inputFields.map((field, index) => (
                    <div key={index} className='inputs'>
                        <label htmlFor='schoolName'>School Name</label>
                        <input type='text' name='schoolName' onChange={event => onChange(event,index)} value={field.firstName}></input>
                        <label htmlFor='titleOfStudy'>titleOfStudy</label>
                        <input type='text' name='titleOfStudy' onChange={event => onChange(event,index)} value={field.titleOfStudy}></input>
                        <label htmlFor='startDate'>Start Date</label>
                        <input type='date' name='startDate' onChange={event => onChange(event,index)} value={field.startDate}></input>
                        <label htmlFor='endDate'>End Date</label>
                        <input type='date' name='endDate' onChange={event => onChange(event,index)} value={field.endDate}></input>
                        <button onClick={event => removeField(event, index)}>remove</button>
                    </div>
                ))}
                {!submitted && <div>
                    <button onClick={event => onSubmitted(event)}>submit</button>
                    <button onClick={event => addFields(event)}>add more</button>
                </div>}
            </form>
            {submitted && 
            <section>
                {inputFields.map((field, index) => (
                    <div>
                        <h3>School Name:{field.schoolName}</h3>
                        <h3>Title of Study{field.titleOfStudy}</h3>
                        <h3>Start Date:{field.startDate}</h3>
                        <h3>End Date: {field.endDate}</h3>
                    </div>
                    
                    
                ))}
                <button onClick={event => edit(event)}>Edit</button>
            </section>
                }
        </div>
    );
}

export default Education;
