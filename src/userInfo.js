import React, { useState ,useEffect} from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Typography, Avatar, Input, Checkbox, Spin } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons';
import { getUsers } from "./actions";
const { Title } = Typography;
const UserInfo = (props) => {
    
    
    
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
     if(props.userData)
     setUserDetails( props.userData.find(item=>item.id == props.match.params.id))  
     else
     props.getUsers()

    }, [props]);

    return (
        <div className="time-slot-layout">
        <div className="timeslot-header" >
            {" "}

            <div style={{ fontWeight: "600", color: "#000", fontSize: "15px" }}>
            <ArrowLeftOutlined  onClick={()=>props.history.goBack()}
            style={{marginRight:"15px"}}/>{userDetails && userDetails.name} </div>

        
        </div>
        {userDetails &&
        <div>
  
        <div className="user-details">
        <Avatar size={75} icon={<UserOutlined />} />
        <div className="user-item">{userDetails.name}</div>
        <div className="user-item">{userDetails.email}</div>
        <div className="user-item">{userDetails.phone}</div>
        <div className="user-item">{userDetails.website}</div>
        </div>
        <div className="address">
            <span className="info-heaading">Address</span>
            <div className="user-item">
                {userDetails.address.city }<br/>
                {userDetails.address.street }<br/>
                {userDetails.address.suite }<br/>
                {"zipcode: "+ userDetails.address.zipcode }<br/>
                </div>
        </div>

        <div className="address">
            <span className="info-heaading">Company Details</span>
            <div className="user-item">
                {"BS: "+userDetails.company.bs }<br/>
                {"Catch Phrase: "+userDetails.company.catchPhrase }<br/>
                {"Name: "+userDetails.company.name }<br/>
                </div>
        </div>
        </div>
}
        </div>
    );
};

const mapStateToProps = (state) => ({
    
    userData: state.users
})
const mapDispatchToProps = {
    getUsers: getUsers,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInfo));

