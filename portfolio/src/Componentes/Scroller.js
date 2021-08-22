import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import Home from './Home/Home';
import About_me from './About_Me/About_me';
import Projects from './Projects/Projects';
import { Button, IconButton , Tooltip} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import '../Componentes/Home/Home.css'

export default class Scroller extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 0 }
    }

    handlePageChange = number => {
        this.setState({ currentPage: number });
    }


    render() {
        return (
            <React.Fragment>
                
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    customPageNumber={this.state.currentPage}>
                    <Home />
                    <About_me />
                    <Projects />
                </ReactPageScroller>
                <div style={{position: 'absolute', left: '93%', top: '40%', display: 'flex-row', width: '1em'}}>
                        <Tooltip title="Home" placement="left">
                        <IconButton style={{paddingBottom: 'em', color:'#FFFEEB'}} onClick={() => this.handlePageChange(0)} >
                            <FiberManualRecordIcon fontSize="small" />
                        </IconButton>
                        </Tooltip>
                        <IconButton style={{paddingBottom: 'em', color:'#FFFEEB'}} onClick={() => this.handlePageChange(1)}>
                            <FiberManualRecordIcon fontSize="small" />
                        </IconButton>
                        <IconButton style={{paddingBottom: 'em', color:'#FFFEEB'}} onClick={() => this.handlePageChange(2)}>
                            <FiberManualRecordIcon fontSize="small" />
                        </IconButton>
                        <IconButton style={{paddingBottom: 'em', color:'#FFFEEB'}} onClick={() => this.handlePageChange(0)}>
                            <FiberManualRecordIcon fontSize="small" />
                        </IconButton>
                </div>
                
            </React.Fragment>
        );
    }
}
