import React from 'react';
import Video from './Videos';
import { Card, Container, Icon, Image } from 'semantic-ui-react';

const src = 'https://ekomy.files.wordpress.com/2011/09/image-4.png?w=910'
const url = 'https://www.youtube.com/watch?v=pfgcZ6yxZro';
const ussv_url ='https://firebasestorage.googleapis.com/v0/b/edouard-edna.appspot.com/o/EssimenganeVideos%2FUSSV.avi?alt=media&token=326702a1-8eec-4980-971c-aea92040c686'

function VideoStore() {
    return (
        <Container>
            <Card.Group className="Videos" itemsPerRow={3} stackable centered>
               
                <Video titre='Allez vous plaindre au soleil' duree='3:28' src={src} url={url}/>
                <Video 
                    duree='59:36'
                    titre="Un soleil s'en va"
                    src='https://firebasestorage.googleapis.com/v0/b/essims-videos.appspot.com/o/images%2FIMG_8100.JPG?alt=media&token=f73119ee-c11d-4b88-97eb-e29776dd1fd4' 
                    url= 'https://www.youtube.com/watch?v=UyUqXnSgtSI&t=20s'/>
                <Video duree='3:28' titre='Allez vous plaindre au soleil' src={src} url={url}/>
                <Video 
                    duree='59:36'
                    titre="Un soleil s'en va"
                    src='https://firebasestorage.googleapis.com/v0/b/essims-videos.appspot.com/o/images%2FIMG_8100.JPG?alt=media&token=f73119ee-c11d-4b88-97eb-e29776dd1fd4' 
                    url= 'https://www.youtube.com/watch?v=UyUqXnSgtSI&t=20s'/>
                <Video duree='3:28' titre='Allez vous plaindre au soleil' src={src} url={url}/>
                <Video duree='3:28' titre='Allez vous plaindre au soleil' src={src} url={url}/>
                <Video duree='3:28' titre='Allez vous plaindre au soleil' src={src} url={url}/>
                <Video 
                    duree='59:36'
                    titre="Un soleil s'en va"
                    src='https://firebasestorage.googleapis.com/v0/b/essims-videos.appspot.com/o/images%2FIMG_8100.JPG?alt=media&token=f73119ee-c11d-4b88-97eb-e29776dd1fd4' 
                    url= {ussv_url}/>
                <Video duree='3:28' titre='Allez vous plaindre au soleil' src={src} url={url}/>
                <video controls autoPla src='https://firebasestorage.googleapis.com/v0/b/essims-videos.appspot.com/o/Coco_disney_pixar_2017.mp4?alt=media&token=1ddc3765-84dc-46c0-83d5-bf7a1aaa2f2d'/>
            </Card.Group>
        </Container>
    )
}

export default VideoStore
