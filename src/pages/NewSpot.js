import { useState } from 'react'
import { Link } from 'react-router-dom'
import { create } from '../services/spotService'

export default function NewSpot(props) {
     /* component state */
     const [ formState, setFormState ] = useState({
        name: "",
        description: "",
        difficulty: "",
        location: "",
        state: "",
    });
    /* handler functions */
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
}

    async function handleSubmit(event) {
        event.preventDefault(); // disable default behavior
        try {
            await create(formState)
            props.handleCreate();
        } catch (error) {
            alert(error.message);
        }
}
    
    return (
        <main className="Page">
        <h1>New Spot</h1>
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input onChange={handleChange} value={formState.name} name="name" placeholder="Spot Name" className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input onChange={handleChange} value={formState.description} name="description" placeholder="Description" className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input onChange={handleChange} value={formState.difficulty} name="difficulty" placeholder="Difficulty (1-5)" className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input onChange={handleChange} value={formState.location} name="location" placeholder="location" className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input onChange={handleChange} value={formState.state} name="state" placeholder="State" className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input value="Add" className="form-control" type="submit"/>
                        &nbsp;&nbsp;
                        <Link to="/myspots">Cancel</Link>
                    </div>
                </div>
            </form>
        </main>
    )
}