import React from 'react'
import '../../styles/styles.css'
import { Form, Button } from 'react-bootstrap'

export default function AddFilm() {
  return (
    <div>
         <div className="edit-container">
    <p className="table-title">Add Hero</p>
    <Form>
    <Form.Group className='header-add-film'>
        <Form.Control type="text"  name="name" placeholder="Name Hero" className='mt-3 setting-left'></Form.Control>
        <label for="upload"  className="label-file-add-product">
        Attach Image <img alt='' style={{ width: '15px', marginLeft: '5px' }}/>
        </label>
        <input id="upload" type='file' name="image"  hidden/>
    </Form.Group>
    <Form.Group>
        <Form.Control type="text" name="type_id" placeholder="type" className='mt-3 input-setting'></Form.Control>
    </Form.Group>
    <Button variant="danger" type="submit" className="button-login-login mt-3">Save</Button>
    </Form>
</div>
    </div>
  )
}
