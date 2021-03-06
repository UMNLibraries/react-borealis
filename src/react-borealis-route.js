import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import BorealisPDF from 'borealis-pdf';
import React from 'react';
import ReactOpenseadragon from 'react-openseadragon';
import PropTypes from 'prop-types';

import BorealisLayout from './borealis-layout';
import BorealisPPT from './borealis-ppt';
import BorealisTranscript from './borealis-transcript';
import BorealisAudioPlayer from './borealis-audio-player';
import BorealisVideoPlayer from './borealis-video-player';
import KalturaAudio from './kaltura-audio';
import KalturaAudioPlaylist from './kaltura-audio-playlist';
import KalturaVideoPlaylist from './kaltura-video-playlist';
import KalturaVideo from './kaltura-video';

class Borealis extends React.Component {
  // Order matters: ordered according to which player should come first when
  // multiple players are present
  static thumbnailPaths() {
    return ([
      { type: 'image', path: 'image/0' },
      { type: 'kaltura_audio', path: 'kaltura_audio' },
      { type: 'kaltura_audio_playlist', path: 'kaltura_audio_playlist' },
      { type: 'kaltura_video', path: 'kaltura_video' },
      { type: 'kaltura_video_playlist', path: 'kaltura_video_playlist' },
      { type: 'audio', path: 'audio' },
      { type: 'video', path: 'video' },
      { type: 'pdf', path: 'pdf/0' },
      { type: 'ppt', path: 'ppt' },
    ]);
  }

  static getThumbnailPath(type) {
    return Borealis.thumbnailPaths().find(thumb => thumb.type === type).path;
  }

  constructor(props) {
    super(props);
    this._layout = this._layout.bind(this);
    this._initialPath = this._initialPath.bind(this);
  }

    // This order is mirrored in borealis-tray.js
  _initialPath() {
    if (this.props.initialPath !== '') {
      return this.props.initialPath;
    }
    const config = this.props.config;
    return Borealis.thumbnailPaths().map((thumb) => {
      if (config[thumb.type]) {
        return thumb.path;
      }
      return null;
    }).find(thumb => thumb != null);
  }

  _layout(props, wrappedComponent, type) {
    // this.props = the original props passed into Borealis
    // props = properties passed in by React Router
    // We combine both sets of props and pass them downstream
    const defaultProps = this.props;
    const getThumbnailPath = Borealis.getThumbnailPath;
    return (<BorealisLayout
      {...props}
      {...defaultProps}
      WrappedComponent={wrappedComponent}
      getThumbnailPath={getThumbnailPath}
      type={type}
    />);
  }

  render() {
    const initialPath = this._initialPath;
    const layout = this._layout;
    return (
      <div>
        <Switch>
          <Redirect from="/" exact to={`/${initialPath()}`} />
          <Route exact path="/image/:id" basename="image" render={props => layout(props, ReactOpenseadragon, 'image')} />
          <Route exact path="/kaltura_audio" render={props => layout(props, KalturaAudio, 'kaltura_audio')} />
          <Route exact path="/kaltura_audio_playlist" render={props => layout(props, KalturaAudioPlaylist, 'kaltura_audio_playlist')} />
          <Route exact path="/kaltura_video_playlist" render={props => layout(props, KalturaVideoPlaylist, 'kaltura_video_playlist')} />
          <Route exact path="/kaltura_video" render={props => layout(props, KalturaVideo, 'kaltura_video')} />
          <Route exact path="/audio" render={props => layout(props, BorealisAudioPlayer, 'audio')} />
          <Route exact path="/video" render={props => layout(props, BorealisVideoPlayer, 'video')} />
          <Route path="/pdf/:id" render={props => layout(props, BorealisPDF, 'pdf')} />
          <Route exact path="/ppt" render={props => layout(props, BorealisPPT, 'ppt')} />

          <Route path="/image/:id/transcript" render={props => layout(props, BorealisTranscript, 'image')} />
          <Route path="/kaltura_audio/transcript" render={props => layout(props, BorealisTranscript, 'kaltura_audio')} />
          <Route path="/kaltura_audio_playlist/transcript" render={props => layout(props, BorealisTranscript, 'kaltura_audio_playlist')} />
          <Route path="/kaltura_video/transcript" render={props => layout(props, BorealisTranscript, 'kaltura_video')} />
          <Route path="/kaltura_video_playlist/transcript" render={props => layout(props, BorealisTranscript, 'kaltura_video_playlist')} />
          <Route path="/audio/transcript" render={props => layout(props, BorealisTranscript, 'audio')} />
          <Route path="/video/transcript" render={props => layout(props, BorealisTranscript, 'video')} />
          <Route path="/ppt/transcript" render={props => layout(props, BorealisTranscript, 'ppt')} />
        </Switch>
      </div>
    );
  }
}

Borealis.defaultProps = {
  initialPath: '',
};

Borealis.propTypes = {
  initialPath: PropTypes.string,
  config: PropTypes.object.isRequired,
};

export default Borealis;
