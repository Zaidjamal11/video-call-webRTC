import React, { useCallback, useEffect, useState} from 'react';
import { useSocket } from '../context/SocketProvider';
import ReactPlayer from 'react-player';

const RoomPage = () => {

    const socket = useSocket();
    const [remoteSocketId , setRemoteSocketId] = useState(null);
    const [myStream, setMyStream ] = useState();


    const handleUserJoined = useCallback(({ email, id}) => {
        console.log(`Email %{email} joined the room`)
        setRemoteSocketId(id);

    },[])

    useEffect(() => {
        socket.on('user:joined', handleUserJoined);

        return () => {
            socket.off('user:joined', handleUserJoined)
        }
    }, [socket, handleUserJoined]);

    const handleCallUser = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });

        setMyStream(stream);


    },[])

    return (

        <div>
            <h1>Room Page</h1>
            <h4>{remoteSocketId ? 'Connected' : 'No one In Room' }</h4>
            {
                remoteSocketId && <button onClick={handleCallUser}>Call</button>
            }

            {
                myStream && (
                    <>
                    <h1>This is My Video</h1>
                    <ReactPlayer playing muted height="200px" width="200px"  url={myStream} />
                    </>
                )
                
            }
        </div>
    )
}


export default RoomPage;