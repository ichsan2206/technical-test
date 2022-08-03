import React from 'react'
import '../../styles/styles.css'
import { Form, Button } from 'react-bootstrap'

export default function AddType() {
  return (
    <div className="edit-container">
        <p className="table-title">Add Type Hero</p>
        <Form>
        <Form.Group>
            <Form.Control name="name" type="text" placeholder="Type Hero" className='mt-5 input-setting'></Form.Control>
        </Form.Group>
        <Button variant="danger" type='submit' className="button-login-login ">Save</Button>
        </Form>
    </div>
  )
}
