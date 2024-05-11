import React, { useEffect, useState } from 'react';
import './App.css';

function  Displayname() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [getfullName, setgetfullName] = useState("");
  

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            let getfullName=name.concat(" ",lastname);
            setgetfullName(getfullName);

        } catch (error) {     
            console.log("Error :",error)
            
        }
    }

      const handleChange=(event)=>{
        setName(event.target.value);
      }

      const handlelastname=(event)=>{
        setLastname(event.target.value);
      }

    return (
        <div>
            <h2>Full Name Display</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name :</label>
                    <input
                        type='text'
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last name :</label>
                    <input
                        type='text'
                        value={lastname}
                        onChange={handlelastname}
                        required
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
            { getfullName &&(
                    <p>Full Name:{getfullName}</p>
              )

            }

            
        </div>
    );
}

export default Displayname;
