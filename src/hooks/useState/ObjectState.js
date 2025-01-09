import { useState } from "react";

const ObjectState = () => {
    const [profile, setProfile] = useState({ name: "", age: 0 })

    const handleNameChange = (e) => {
        setProfile({ ...profile, name: e.target.value })
    }

    const handleAgeChange = (e) => {
        setProfile({ ...profile, age: Number(e.target.value) })
    }



    return <div>
        <lable>
            Name:
            <input type="text" value={profile.name} onChange={handleNameChange} />
        </lable>
        <lable>
            Age:
            <input type="number" value={profile.age} onChange={handleAgeChange} />
        </lable>
        <h1>Name: {profile.name} Age: {profile.age}</h1>
    </div>

}

export default ObjectState;