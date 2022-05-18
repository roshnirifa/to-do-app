import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Home = () => {
    const handleAddTask = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        console.log(name, description);
        const user = { name, description }
        fetch('http://localhost:5000/addTask', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then((data) => console.log(data));


    }
    return (


        <Card className="container mt-5 w-50">
            <Card.Header className='text-center bg-primary text-white fw-bolder fs-6'>My To-Do</Card.Header>
            <Card.Body>

                <Card.Text>
                    <Form onSubmit={handleAddTask}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="task name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name='description' as="textarea" rows={3} />
                        </Form.Group>
                        <div className='text-center'>
                            <input type="submit" className='btn btn-primary  ' value="Complete" />
                        </div>
                    </Form>
                </Card.Text>

            </Card.Body>

        </Card>

    );
};

export default Home;