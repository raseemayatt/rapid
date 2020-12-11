import React, { useEffect } from "react";
import Avatar from "antd/lib/avatar/avatar";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Table, Button, Spin } from "antd";
import { UserOutlined } from '@ant-design/icons';
import "./timeSLot.css"
import { getUsers } from "./actions";

const { Column } = Table;

const Users = (props) => {



    useEffect(() => {
        props.getUsers()

    }, []);
   

   

    return (
        <div className="time-slot-layout">
            <div className="timeslot-header" >
                {" "}

                <div style={{ fontWeight: "600", color: "#000", fontSize: "15px" }}> Users</div>

            
            </div>
            {props.loading ?
                <Spin size="large" className="loader-slot" />
                :
                <Table
                    dataSource={props.userData ? props.userData : []}
                    pagination={false}
                    className="slot-table"
                    onRow={(rowItem) => ({
                        onClick: () => props.history.push(`/user-info/${rowItem.id}`),
                      })}

                >
                    <Column
                        title={""}
                        dataIndex="firstName"
                        render={(name, item) => (

                            <Avatar size="large" icon={<UserOutlined />} />

                        )}
                    />

                    <Column
                        title={"userName"}
                        dataIndex="id"
                        render={(name, item) => (
                            <React.Fragment>
                                <div className="customer-name">{item.name}</div>

                            </React.Fragment>
                        )}
                    />
                    <Column
                        title={"Email"}
                        dataIndex="name"
                        render={(name, item) => (
                            <React.Fragment>

                                <div className="customer-name">{item.email}</div>
                            </React.Fragment>

                        )}
                    />
                    <Column
                        title={"Mobile"}
                        dataIndex="name"
                        render={(name, item) => (
                            <React.Fragment>
                                <div className="customer-name">{item.phone}</div>
                                {/* <div className="table-customer-name">{tConvert(item.time)}</div> */}
                            </React.Fragment>

                        )}
                    />

                    <Column
                        title={"Website"}
                        dataIndex="name"
                        render={(name, item) => (
                            <React.Fragment>
                                <div className="customer-name">{item.website}</div>
                                {/* <div className="table-customer-name">{tConvert(item.time)}</div> */}
                            </React.Fragment>

                        )}
                    />
                </Table>
            }
        </div>

    );
};


const mapDispatchToProps = {
    getUsers: getUsers,
};
const mapStateToProps = (state) => ({
    loading: state.loading,
    userData: state.users
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));
