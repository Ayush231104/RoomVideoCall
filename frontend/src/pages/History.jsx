import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

export default function History() {
    
    let {getHistoryOfUser} = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);

    const routeTo = useNavigate();
    
    useEffect(()=> {
        const fetchHistory = async () => {
            try{
                const history = await getHistoryOfUser();
                console.log("Fetched history:", history); // Debugging
                setMeetings(Array.isArray(history) ? history : [])
            }catch(e){
                console.log(e);
            }
        }
        fetchHistory();
    }, [])

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() +1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }
  return (
    <div>
        <IconButton style={{color:"wheat", padding:"10px"}} onClick={() => {
                routeTo("/home")
            }}>
            <HomeIcon />
            Home
        </IconButton >
        
        {
            (meetings.length !== 0) ? meetings.map((e, i) => {
                
                return(
                    <>
                        <Card key={i} variant='outlined'>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Code: {e.meetingCode}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Date: {formatDate(e.date)}
                            </Typography>

                            </CardContent>
                        </Card>
                    </>
                )
            }):<></> 
        }
    </div>
  )
}
