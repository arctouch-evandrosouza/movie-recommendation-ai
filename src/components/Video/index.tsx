
import React from 'react'
import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';

export default function Video({ videoKey, site, title }: { videoKey: string | null, site: string | null, title: string }) {

    const videoWidth = 300;
    const videoHeight = 200;
    const opts = {
        height: videoHeight,
        width: videoWidth,
    };

    if(!videoKey) return (<></>)

    switch (site) {
        case 'YouTube':
            return (<><YouTube videoId={videoKey} opts={opts} title={title} /></>)
        case 'Vimeo':
            return (<><Vimeo video={videoKey} width={videoWidth} height={videoHeight} /></>)
        default:
            return (<></>)
    }
}