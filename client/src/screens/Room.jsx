import React, { useCallback, useEffect, useState} from 'react';
import { useSocket } from '../context/SocketProvider';

const RoomPage = () => {

    const socket = useSocket();
    const [remoteSocketId , setRemoteSocketId] = useState(null);


    const handleUserJoined = useCallback(({ email, id}) => {
        
        setRemoteSocketId(id);

    },[])

    useEffect(() => {
        socket.on('user:joined', handleUserJoined);

        return () => {
            socket.off('user:joined', handleUserJoined)
        }
    }, [socket, handleUserJoined])

    return (

        <div>
            <h1>Room Page</h1>
            <h4>{remoteSocketId ? 'Conneced' : 'No one In Room' }</h4>
        </div>
    )
}


export default RoomPage;