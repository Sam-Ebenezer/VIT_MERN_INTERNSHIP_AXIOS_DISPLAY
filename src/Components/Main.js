import { useState,useEffect } from "react";
import Axios from 'axios'
function Main(){
    const [data,setData]=useState([])
    useEffect(
        ()=>{
            Axios.get('https://dummyjson.com/users')
            .then((res)=>
            {
                if(res.status===200){
                    setData(res.data.users)
                }
                else{
                    Promise.reject()
                }
            }
            )
            .catch((err)=>{
                alert(err);
            })
        },[])

        return(
            <div>
               <h1>Displaying Records fetched using Axios in Client Table </h1>
                <table class="table table-hover table-bordered table-dark" >
                    <thead>
                    <tr>
                        <th rowspan="3">Id</th>
                        <th rowspan="3">First Name</th>
                        <th rowspan="3">Last Name</th>
                        <th rowspan="3">Age</th>
                        <th rowspan="3">Gender</th>
                        <th rowspan="3">Email</th>
                        <th rowspan="3">Phone</th>
                        <th rowspan="3">Username</th>
                        <th rowspan="3">Birth Date</th>
                        <th rowspan="3">Image</th>
                        <th rowspan="3">Height</th>
                        <th rowspan="3">Weight</th>
                        <th colspan="3">Address</th>
                        <th rowspan="1">Bank</th>
                        <th rowspan="1">Company</th>
                    </tr>
                    <tr>
                        <th rowspan="2">City</th>
                        <th colspan="2">Coordinates</th>
                        <th rowspan="2">Card Expire</th>
                        <th rowspan="2">Name</th>
                    </tr>
                    <tr>
                        <th colspan="1">Latitude</th>
                        <th colspan="1">Longitude</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                    data.map((val)=>{
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.firstName}</td>
                                <td>{val.lastName}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td>{val.username}</td>
                                <td>{val.birthDate}</td>
                                <td><img src={val.image} alt={val.image}/></td>
                                <td>{val.height}</td>
                                <td>{val.weight}</td>
                                <td>{val.address.city}</td>
                                <td>{val.address.coordinates.lat}</td>
                                <td>{val.address.coordinates.lng}</td>
                                <td>{val.bank.cardExpire}</td>
                                <td>{val.company.name}</td>
                            </tr>

                        )
                        
                    })
                    }
                    </tbody>
                </table>
            </div>
        )
}

export default Main