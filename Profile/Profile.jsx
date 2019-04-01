import React,{Component} from "react";
import "./Profile.scss";

class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {
          file: "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
        }
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }

    render(){
        return (
            <React.Fragment>
                  <header>
         
         <div className="container">
         
             <div className="profile">
         
                 <div className="profile-image">
                     <label for="image">
                     <input type="file" name="image" id="image" style={{display:'none'}} onChange={this.handleChange}/>
                     <img src={this.state.file} alt="" />
                     </label>
                     
                 </div>
         
                 <div className="profile-user-settings">
         
                     <h1 className="profile-user-name">popxo</h1>
         
                     <button className="btn profile-edit-btn">Edit Profile</button>
         
                     <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
         
                 </div>
         
                 <div className="profile-stats">
         
                     <ul>
                         <li><span className="profile-stat-count">164</span> posts</li>
                         <li><span className="profile-stat-count">188,000</span> followers</li>
                         <li><span className="profile-stat-count">206</span> following</li>
                     </ul>
         
                 </div>
         
                 <div className="profile-bio">
         
                     <p><span className="profile-real-name">#POPxoDaily</span> India's largest community for women . There is now ONE FEED for everything!</p>
         
                 </div>
         
             </div>
         
         
         </div>
         
         </header>
         <main>
         
             <div className="container">
         
                 <div className="gallery">
         
                     <div className="gallery-item" tabindex="0">
         
                         <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />
         
                         <div className="gallery-item-info">
         
                             <ul>
                                 <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                 <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                             </ul>
         
                         </div>
         
                     </div>
                     <div className="gallery-item" tabindex="0">
         
                         <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />
         
                         <div className="gallery-item-info">
         
                             <ul>
                                 <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                 <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                             </ul>
         
                         </div>
         
                     </div>
                     <div className="gallery-item" >
         
                         <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />
         
                         <div className="gallery-item-info">
         
                             <ul>
                                 <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                 <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
                             </ul>
         
                         </div>
         
                     </div>
                 </div>
             </div>
          </main>
         
            </React.Fragment>
           );
    }
  
};

export default Profile;