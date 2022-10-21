import React, { useEffect, useState } from 'react';
import './Friends.css'
import SingleFriend from './../SingleFriend/SingleFriend';
const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [friendList, setFriendList] = useState([])
  useEffect(() => {
      fetch('./Friends.json')
      .then(res => res.json())
      .then(data => setFriends(data))
  },[])
 const handleClicked = (e) => {
    setFriendList([...friendList, e])
   
 }


    return (
        <div className="row">
           <div className=" col-9 p-2">
           <div className="row">
                {
                    friends.map(friend => <SingleFriend 
                    key={friend.name}
                    handleClicked={handleClicked}
                    friend={friend}
                    ></SingleFriend>)
                }
            </div>
           </div>
            <div className="col-3 p-5">
            <div className="cart-container ">
            <h2>friend added:  {friendList.length}</h2>
            <h3>Total Cost: ${}</h3>
               {
                friendList.map(friend => <div>
                    <div className="d-flex">
                         <div className="d-flex text-white bg-success align-middle rounded-start mt-5 ">
                         <img className="rounded-circle" style={{height: '60px'}} src={friend.img} alt="" />
                        <span className="px-4">
                          <h4>{friend.name}</h4>
                        </span>
                         </div>
                     </div>
                </div>)
               }
            </div>
            <button className="mt-2 btn-style bg-info">Hire Now</button>
            </div>
        </div>
    );
};

export default Friends;