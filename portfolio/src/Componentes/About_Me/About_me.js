import React from 'react';
import SplitText from '../SplitText';
import { Typography, Fade, Divider } from '@material-ui/core'
import aboutMeText from '../../Recursos/Textos/aboutMe';

class About_me extends React.Component {
    render() {
        const { text1, text2 } = aboutMeText;

        return (
            <div>
                
                <h1 className="home"><SplitText copy="About me" role="heading" delay="0.4"></SplitText></h1>
                <Fade in={true} timeout={4500}>
                    <div className="home descripcion2">
                        <Typography variant='h4' className={'text'}>{text1}</Typography>
                        <Typography className="texto2" variant='h4' className={'text'}>{text2}</Typography>
                    </div>
                </Fade>
            </div >

        );
    }
}

export default About_me;