import React, { useEffect, useState } from 'react';
import '../../css/Admin/Profile.css';

function Profile() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.log('Error fetching data:', error);
        setBackendData({"error": error});
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {backendData && backendData.status === 200 && (
        <p>Status: {backendData.created}</p>
      )}
    </div>
  );
}

export default Profile;