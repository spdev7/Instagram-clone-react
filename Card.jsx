import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Card extends Component {



  render() {
    return (
      <section className="container">
        <div className="card">
          <div className="card-header">
            <div className="profile-img">

            </div>
            <div className="profile-info">
              <div className="name">popxo</div>
              <div className="location">New Delhi</div>
            </div>

          </div>
          <div className="content">
            <img src="https://i.pinimg.com/originals/44/0f/4d/440f4d52c06775b114f19fcfd5a32199.jpg" />
          </div>
          <div className="card-footer">
          <FontAwesomeIcon
          icon="heart"
          color="#000"
          size="sm"
        />
            <div className="likes">
              <span>28,00,000 likes</span>
          </div>
            <div className="description">
              <p>
                <span>popxo</span> this is the future 
              </p> 
            </div>
            <div className="comments">
            </div>
            <div className="form">

            </div>
          </div>



        </div>
      </section>
    )
  }
}