const Videos = () => {
  const videos = [
    { date: '15/01/2024', time: '14:00 - 15:00' },
    { date: '12/01/2024', time: '16:00 - 17:00' },
    { date: '10/01/2024', time: '08:00 - 09:00' },
    { date: '08/01/2024', time: '17:00 - 18:00' }
  ];

  return (
    <div className="page-container-videos">
      <h2 className="page-title">Meus Vídeos</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <div className="video-thumbnail">
              <span>▶️</span>
            </div>
            <div className="video-info">
              <p className="video-date">{video.date}</p>
              <p className="video-time">{video.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;