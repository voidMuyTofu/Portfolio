import React from 'react';
import { Typography, Fade, Divider } from '@material-ui/core'
import SplitText from '../SplitText';
import homeDescription from '../../Recursos/Textos/homeDescription';
import './Home.css'
import { CssBaseline } from '@material-ui/core';
import {motion} from 'framer-motion'
class Home extends React.Component {

    state = {
        in: false
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }
    

    render() {
        return (<div>
                    <h1 className="home hello">
                        <SplitText copy="Hello" role="heading" delay="0.4"></SplitText>
                    </h1>
                    <br></br>
                    <h1 className="home fernando">
                        <SplitText copy="I'm Fernando" role="heading" delay="0.9"></SplitText>
                    </h1>
                    
                        <motion.div 
                            className="home descripcion"
                            initial={{x: -1000}}
                            animate={{x: 0}}
                            transition={{delay: 0.5, duration: 1.5}}>
                            <Typography variant="h4">
                                {homeDescription}
                            </Typography>
                            
                        </motion.div>  
                    
                    <Fade in={true} timeout={3500}>
                        <Divider style={{background: '#FFFEEB', width: '70%', marginLeft: '15%', marginTop: '13%'}}/>
                    </Fade>
                    
                </div>
        )
    }
}

export default Home;