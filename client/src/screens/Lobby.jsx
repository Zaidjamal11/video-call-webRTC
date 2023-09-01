import React, { useState, useCallback } from "react";

const LobbyScreen = () => {

    const [email , setEmail ] = useState("");
    const [room , setRoom ] = useState("");

    const handleSubmitForm = useCallback((e) => {
        e.preventDefault();
        
    })

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email ID</label>
        <input type="email" id="email" value={email} onChange={(e => setEmail(e.target.value))} style={{marginLeft: 44, marginBottom: 8}} />
        <br />

        <label htmlFor="room">Room Number</label>
        <input type="text" id="room" value={room} onChange={(e => setRoom(e.target.value))}  style={{marginLeft: 8, marginBottom: 8}} />
        <br />

        <button>Join</button>
      </form>
    </div>
  );
};

export default LobbyScreen;
