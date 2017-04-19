import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const video_list = props.videos.map((video, ind) => {
    return <VideoListItem
            video={video}
            key={video.etag}
            onVideoSelect={props.onVideoSelect}/>;
  });
  return (
    <ul className="col-md-4 list-group">
    {video_list}
    </ul>
  );
};

export default VideoList;
