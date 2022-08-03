import React from 'react'
import { Row, Col  } from 'react-bootstrap'
import '../../styles/styles.css'
import { Link } from 'react-router-dom';

export default function Detail() {
  return (
    <div className='user-container'>
        <Row>
            <Col>
            <img style={{width: '500px'}} src='https://c4.wallpaperflare.com/wallpaper/364/1003/596/bow-mirana-dota-2-wallpaper-preview.jpg' alt=''></img>
            <h1 style={{color: 'white'}}>
            Nama Heroes
            </h1>
            <p style={{color: 'red'}}>type hero</p>
            </Col>
            <Col>
            <Link to="/updateHero"><button style={{color: 'white', backgroundColor: 'blue', marginRight: '5px', borderRadius: '5px'}}>Update Hero</button></Link>
            <button style={{color: 'white', backgroundColor: 'red', borderRadius: '5px'}}>Delete</button>
            </Col>
        </Row>
        
    </div>
  )
}
