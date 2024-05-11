import React, { useEffect, useState } from 'react';
import './App.css';

function  Displayname() {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [fullname, setFullname] = useState('');
  

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
        <>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                    <label>First Name :</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                    <br/>
                    <label>Last Name :</label>
                    <input
                        type="text"
                        value={lastname}
                        onChange={handlelastname}
                        required
                    />
                    <br/>
                
                <button type="submit">Submit</button>
            </form>
            { fullname &&(
                <p>Full Name: {fullname}</p>
              )

            }

            
        </>
    );
}

export default Displayname;
