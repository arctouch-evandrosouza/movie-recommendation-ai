/*

- load  video by url 

*/
import styles from './styles.module.scss'
import  React from 'react'
import YouTube from 'react-youtube';

const opts = {
    height: '200',
    width: '300',
  };

export default function Video({ videoKey, site, title } : { videoKey: string, site:string, title:string}) {
    switch (site) {
        case 'YouTube':
            return (<><YouTube videoId={videoKey} opts={opts} title={title}  /></>)
        default:
            return (<>{ site }</>)
    }
}