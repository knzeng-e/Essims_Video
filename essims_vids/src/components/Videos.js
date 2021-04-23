import React, { useState } from 'react';
import { Image, Card, Modal } from 'semantic-ui-react';

const Videos = ({ src, url, description, titre, duree, poster }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = (e, settings) => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Card fluid onClick={(e) => {
                handleOpen(e, { "contenu": url })
            }} >
                <Image src={src}/>
            </Card>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                basic
            >
                <Modal.Content >
                    <Card fluid>
                            <video title={titre} poster={poster} width='100%' height='100%' preload controls autoPlay src={url} />
                        <Card.Content textAlign='center' className='CardVideoContent'>
                            {description}
                        </Card.Content>
                    </Card>
                </Modal.Content>
            </Modal>
        </>
    )
}

export default Videos
