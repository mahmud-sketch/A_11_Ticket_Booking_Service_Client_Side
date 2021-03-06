import React, { useRef } from 'react'

function AddNewRide() {
    const nameRef = useRef()
    const costRef = useRef()
    const infoRef = useRef()
    const imgRef = useRef()

    const addRide = e => {

        const name = nameRef.current.value;
        const cost = costRef.current.value;
        const info = infoRef.current.value;
        const img = imgRef.current.value;

        const ride = { name, cost, info, img };

        fetch('https://grisly-beast-74781.herokuapp.com/allrides', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ride)

        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('ride added successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();

    }
    return (
        <div>
            <h2>add a new ride to existing rides</h2>
            <form onSubmit={addRide}>
                <input type="text" placeholder="ride name" name="" id="" ref={nameRef} /><br />
                <input type="text" placeholder="ride cost" name="" id="" ref={costRef} /><br />
                <input type="text" placeholder="ride info(80 words)" name="" id="" ref={infoRef} /><br />
                <input type="text" placeholder="**image URL Only" name="" id="" ref={imgRef} /><br />
                <input type="submit" value="add ride" className="bg-indigo-900 text-white  font-bold  px-3 py-1 rounded  mr-1 mb-1" />
            </form>
        </div>
    )
}

export default AddNewRide
