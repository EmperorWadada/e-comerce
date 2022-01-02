import React, { Component } from "react";
import WithData from "./withData";

const NameAndEmail = ({name, email, data}) => (
    <div>
    {data.map(user => <div key={user.id}>
        <p>name</p>
        <p>email</p>
        <h1>user.firstName</h1>
        <h1>user.lastName</h1>
    </div>)}
    </div>
)
  
const URL = 'https://jsonplaceholder.typicode.com/posts';

export default WithData(NameAndEmail, URL);