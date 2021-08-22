import React from 'react';
import SplitText from '../SplitText';
import { Typography, Fade, Divider } from '@material-ui/core'
import aboutMeText from '../../Recursos/Textos/aboutMe';
import './About_me.css'

class About_me extends React.Component {
    render() {
        const { text1, text2 } = aboutMeText;

        return (
            <div>
                
                <h1 className="home"><SplitText copy="About me" role="heading" delay="0.4"></SplitText></h1>
                <Fade in={true} timeout={4500}>
                    <div className="home descripcion2">
                        <Typography variant='h5' className={'text'}>{text1}</Typography>
                        <Typography variant='h5' className={'text'}>{text2}</Typography>
                    </div>
                </Fade>
                <Divider style={{background: '#FFFEEB', width: '70%', marginLeft: '15%', marginTop: '10%'}}></Divider>
            </div >

        );
    }
}

export default About_me;