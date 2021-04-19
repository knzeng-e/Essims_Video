import React from 'react';
import Video from './Videos';
import { Card, Container, Icon, Image } from 'semantic-ui-react';

const src = 'https://ekomy.files.wordpress.com/2011/09/image-4.png?w=910'
const url = 'https://www.youtube.com/watch?v=pfgcZ6yxZro';

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
                    url= 'https://www.youtube.com/watch?v=UyUqXnSgtSI&t=20s'/>
                <Video duree='3:28' titre='Allez vous plaindre au soleil' src={src} url={url}/>
                
               

            </Card.Group>
        </Container>
    )
}

export default VideoStore
