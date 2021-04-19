import React from 'react';
import {Segment, Container, Card, Icon} from 'semantic-ui-react';


const Videos = ({src, url, titre, duree}) => {
    return (
        <>
                    <Card
                        image={src}
                        href={url}
                        centered
                        color='black'
                        header={titre}
                        meta='Documentaire'
                        description="Un Conte de Lord Ékomy Ndong ☥
                                    co-Ecrit par Dia 
                                    raconté par Maat Le Seigneur Lion
                                    illustré par Niko Maboga
                                    inspiré par L'album Ibogaine de Lord Ekomy Ndong
                                    www.ekomyndong.com"
                        extra={<><Icon name='play' /> {duree}</>}
                    />
        </>
    )
}

export default Videos
