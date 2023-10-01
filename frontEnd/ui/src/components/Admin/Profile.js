import React, {useEffect, useState} from 'react';
import '../../css/Admin/Profile.css';


function Profile() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
        {backendData && backendData.status === 200 && (
        <p>Status: {backendData.created}</p>
      )}
    </div>
  );
}

export default Profile;