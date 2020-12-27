import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

const styles = theme =>({
    hidden: {
        display: 'none'
    }
})

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            gender: '',
            live: '',
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            name: '',
            age: '',
            gender: '',
            live: '',
            open: false
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    고객 추가하기
                </Button>
                <Dialog open={this.state.open} onClick={this.handleClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="이름" type="text" name="name"/><br/>
                        <TextField label="나이" type="text" name="age"/><br/>
                        <TextField label="성별" type="text" name="gender"/><br/>
                        <TextField label="주소지" type="text" name="live"/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary">추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomerAdd;