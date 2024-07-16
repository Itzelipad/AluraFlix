import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        try {
            const response = await fetch('http://localhost:3000/videos');
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const addVideo = async (video) => {
        try {
            const response = await fetch('http://localhost:3000/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(video)
            });
            const newVideo = await response.json();
            setVideos((prevVideos) => [...prevVideos, newVideo]);
        } catch (error) {
            console.error('Error adding video:', error);
        }
    };

    const updateVideo = async (updatedVideo) => {
        try {
            await fetch(`http://localhost:3000/videos/${updatedVideo.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedVideo)
            });
            setVideos((prevVideos) =>
                prevVideos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video))
            );
        } catch (error) {
            console.error('Error updating video:', error);
        }
    };

    const deleteVideo = async (videoId) => {
        try {
            await fetch(`http://localhost:3000/videos/${videoId}`, {
                method: 'DELETE'
            });
            setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    return (
        <VideoContext.Provider value={{ videos, addVideo, updateVideo, deleteVideo }}>
            {children}
        </VideoContext.Provider>
    );
};

VideoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
