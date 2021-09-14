import React, {useState} from 'react';
import '../styles/Experience.css'
const Experience = () => {

    const [inputFields, setInputFields] = useState([
        {companyName: '',positionTitle: '',startDate: '',endDate: '',tasks: '', }, 
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
        setInputFields([...inputFields, {companyName: '',positionTitle: '',startDate: '',endDate: '',tasks: '', }])
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
        <div className='experience'>
            <form type='submit' className='experience-form'>
                <h2>Education</h2>
                {!submitted && inputFields.map((field, index) => (
                    <div key={index} className='inputs'>
                        <label htmlFor='companyName'>Company Name</label>
                        <input type='text' name='companyName' onChange={event => onChange(event,index)} value={field.companyName}></input>
                        <label htmlFor='positonTitle'>Position Title</label>
                        <input type='text' name='positionTitle' onChange={event => onChange(event,index)} value={field.positionTitle}></input>
                        <label htmlFor='startDate'>Start Date</label>
                        <input type='date' name='startDate' onChange={event => onChange(event,index)} value={field.startDate}></input>
                        <label htmlFor='endDate'>End Date</label>
                        <input type='date' name='endDate' onChange={event => onChange(event,index)} value={field.endDate}></input>
                        <label htmlFor='tasks'>Tasks</label>
                        <textarea type='text' name='tasks' onChange={event => onChange(event,index)} value={field.tasks}></textarea>
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
                        <h3>School Name:{field.companyName}</h3>
                        <h3>Title of Study{field.positionTitle}</h3>
                        <h3>Start Date:{field.startDate}</h3>
                        <h3>End Date: {field.endDate}</h3>
                        <h3>Tasks: {field.tasks}</h3>
                    </div>
                    
                    
                ))}
                <button onClick={event => edit(event)}>Edit</button>
            </section>
                }
        </div>
    );
}

export default Experience;
