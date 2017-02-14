import React from 'react'
import ReactOpenseadragon from 'react-openseadragon'
import TranscriptNav from './transcript-nav'

export default (props) => {
  return (
            <div>
              <ReactOpenseadragon config={props.config['image']} base_path={props.base_path} />
            </div>
          )
}