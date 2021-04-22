import React from 'react'
import { Container, Divider, Header, } from 'semantic-ui-react';

function Animes() {
    return (
        <div>
            <Header color='red'>Coco - Disney 2017</Header>
            <video controls autoPla src='https://firebasestorage.googleapis.com/v0/b/essims-videos.appspot.com/o/Coco_disney_pixar_2017.mp4?alt=media&token=1ddc3765-84dc-46c0-83d5-bf7a1aaa2f2d' />
            <Divider/>
            <Header color='red'>Soul- Disney 2021</Header>
            <video controls autoPla src='https://firebasestorage.googleapis.com/v0/b/essims-videos.appspot.com/o/Soul.mp4?alt=media&token=e4dbbb68-fdab-44c8-ae47-b881592288d5' />
        </div>
    )
}

export default Animes
