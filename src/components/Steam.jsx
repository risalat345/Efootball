import { useState, useEffect } from 'react';
import './steam.css';
import clickSound from "../audio/ui-click-43196.mp3"; // Example audio file
import { useNavigate } from 'react-router-dom';
import { images } from './Data';
import { getDatabase, ref, set, get, child, push } from "firebase/database";
import { initializeApp } from "firebase/app";

// Firebase configuration (Replace with your Firebase project's config)
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const firebaseApp = initializeApp(FIREBASE_CONFIG);
const db = getDatabase(firebaseApp);

function Steam() {
  const [textInput, setTextInput] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [savedData, setSavedData] = useState([]);
  const [disabledImages, setDisabledImages] = useState([]);
  const [activeImageId, setActiveImageId] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from Firebase on component mount
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dbRef = ref(db);
      const snapshot = await get(child(dbRef, 'users'));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedData = Object.values(data); // Convert object to array
        setSavedData(formattedData);
        const disabledImageIds = formattedData.map((item) => item.image.id);
        setDisabledImages(disabledImageIds);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setActiveImageId(image.id);
    playAudio();
  };

  const playAudio = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleSave = async () => {
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(textInput)) {
      alert('Name should contain only alphabetic characters.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (textInput && selectedImage && password) {
      const newData = {
        text: textInput,
        image: selectedImage,
        password
      };

      try {
        // Save data to Firebase
        const userRef = ref(db, `users/${push(ref(db, 'users')).key}`);
        await set(userRef, newData);

        // Update local state
        setSavedData([...savedData, newData]);
        setDisabledImages([...disabledImages, selectedImage.id]);
        setTextInput('');
        setSelectedImage(null);
        setPassword('');
        setActiveImageId(null);
      } catch (error) {
        console.error("Error saving data:", error);
      }
    } else {
      alert('Please fill in all fields including the password.');
    }
  };

  const handleGoToProfile = (data) => {
    setCurrentData(data);
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = () => {
    if (enteredPassword === currentData.password) {
      navigate('/profile', {
        state: {
          text: currentData.text,
          image: currentData.image,
          name: currentData.image.name
        }
      });
    } else {
      alert('Incorrect password. Access denied.');
    }
    setShowPasswordModal(false);
    setEnteredPassword('');
  };

  const handleResetAll = async () => {
    if (window.confirm("Are you sure you want to reset all data? This action cannot be undone.")) {
      try {
        // Clear data from Firebase
        await set(ref(db, 'users'), null);
        setSavedData([]);
        setDisabledImages([]);
        alert("All data has been reset.");
      } catch (error) {
        console.error("Error resetting data:", error);
      }
    }
  };

  return (
    <div>
      <div className="Steam flex flex-col gap-2 items-center mx-auto">
        <input
          className="px-5 py-2 text-black font-bold w-full md:w-6/12 rounded-lg"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          className="px-5 py-2 w-full text-black font-bold md:w-6/12 rounded-lg"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a password"
        />
      </div>
      <div className="image-container flex flex-wrap gap-3 md:gap-5">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={disabledImages.includes(image.id) ? 'disabled' : ''}
            onClick={() => !disabledImages.includes(image.id) && handleImageClick(image)}
            style={{
              width: '5rem',
              margin: '10px',
              cursor: disabledImages.includes(image.id) ? 'not-allowed' : 'pointer',
              opacity: disabledImages.includes(image.id) ? 0.5 : 1,
              backgroundColor: activeImageId === image.id ? 'lightblue' : 'transparent',
            }}
          />
        ))}
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleResetAll} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
        Reset All Data
      </button>
      <div id="selected-images">
        <h3 className="font-bold text-xl">Team Data</h3>
        {savedData.length > 0 ? (
          <table className='text-[8px]'>
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Player Team</th>
                <th>Club Name</th>
                <th>User Profile</th>
              </tr>
            </thead>
            <tbody>
              {savedData.map((data, index) => (
                <tr key={index}>
                  <td className='text-[10px]'>{data.text}</td>
                  <td className='flex justify-center'>
                    <img className='md:w-[50px] w-[20px]' src={data.image.src} alt={data.image.alt} />
                  </td>
                  <td>{data.image.name}</td>
                  <td>
                    <button id="goToProfile" onClick={() => handleGoToProfile(data)}>
                      Go To Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="my-2 p-2 font-bold text-xl bg-black text-white">No Team Register Yet</p>
        )}
      </div>

      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-cyan-400 p-6 rounded-lg shadow-lg w-96 border border-yellow-500">
            <h2 className="text-xl text-black font-mono mb-4 text-center">Please Enter Your Password</h2>
            <input
              type="password"
              className="w-full px-4 py-2 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handlePasswordSubmit}
              >
                Go To Profile
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowPasswordModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Steam;