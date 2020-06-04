import React, {useEffect, useState} from "react";
import axios from 'axios';


export default function Chef(props) {

    const [chef,setChef]=useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal] =useState(0);

    useEffect(()=>{
        axios.get('http://localhost:3355/chef_data',{
            params:{
                page:page
            }
        }).then((res)=>{
            setChef(res.data)
        })
    },[chef])
    useEffect(()=>{
        axios.get('http://localhost:3355/chef_total').then((result)=>{

            // setMehtod에 값을 채워 줘야 return을 다시 호출
            setTotal(result.data.total)
        })
    },[total])
    const onPrev=()=>{
        setPage(page>1?page-1:page);
        axios.get('http://localhost:3355/chef_data',{
            // ?page=1&aaa=1,
            params:{
                page:page
            }
        }).then((result)=>{
            // setMehtod에 값을 채워 줘야 return을 다시 호출
            setChef(result.data)
        })
    }
    const onNext=()=>{
        setPage(page<total?page+1:page);
        axios.get('http://localhost:3355/chef_data',{
            // ?page=1&aaa=1,
            params:{
                page:page
            }
        }).then((result)=>{
            // setMehtod에 값을 채워 줘야 return을 다시 호출
            setChef(result.data)
        })
    }

    const html=chef.map((m)=>
        <table className={"table"}>
            <tr>
                <td width={"30%"} rowSpan={"2"}>
                    <img src={m.poster} width={"50"} height={"60"} className={"img-circle"}/>
                </td>
                <td colSpan={"4"}><h3 style={{"color":"orange"}}>{m.chef}</h3></td>
            </tr>
            <tr>
                <td className={"text-center"}>
                    <img src={"http://localhost:3000/image/1.png"}/>{m.mem_cont1}
                </td>
                <td className={"text-center"}>
                    <img src={"http://localhost:3000/image/3.png"}/>{m.mem_cont3}
                </td>
                <td className={"text-center"}>
                    <img src={"http://localhost:3000/image/7.png"}/>{m.mem_cont7}
                </td>
                <td className={"text-center"}>
                    <img src={"http://localhost:3000/image/2.png"}/>{m.mem_cont2}
                </td>
            </tr>
        </table>

    )
    return(
        <div className={"row"} style={{"margin":"0px auto","width":"700px"}}>
        <table className={"table"}>
            <tr>
                <td>
                    {html}
                </td>
            </tr>
        </table>
        </div>
    )
}