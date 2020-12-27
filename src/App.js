import React, { Component } from 'react';
import Customer from "./components/Customer";
import CustomerAdd from "./components/CustomerAdd";
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root : {
        width: '100%',
        minWidth: 1080
    },
    menu: {
        marginTop: 15,
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
      marginLeft: 18,
      marginRight: 18
    },
    progress: {
        magin: theme.spacing.unit *2
    },
    grow: {
        flecGrow: 1,
    },
    tableHead: {
        fontSize: '1.0rem'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
})

const customers = [
    {
    'id': 'yr',
    'image': 'https://placeimg.com/64/64/1',
    'name': '고유리',
    'age': '29',
    'gender': '여자',
    'live':'경기도'
},
{
    'id': 'dy',
    'image': 'https://placeimg.com/64/64/2',
    'name': '김도엽',
    'age': '25',
    'gender': '남자',
    'live':'경기도'
},
{
    'id': 'wc',
    'image': 'https://placeimg.com/64/64/3',
    'name': '정우철',
    'age': '33',
    'gender': '남자',
    'live':'서울시'
},
]

class App extends Component {
    render() {
        const { classes } = this.props;
        const cellList = ["아이디", "이미지", "이름", "나이", "성별", "주소"]
        return(
          <div className={classes.root}>
              <AppBar position="static">
                  <Toolbar>
                      <IconButton
                          edge="start"
                          className={classes.menuButton}
                          color="inherit"
                          aria-label="open drawer"
                      >
                          <MenuIcon />
                      </IconButton>
                      <Typography className={classes.title} variant="h6" noWrap>
                          고객 관리 시스템
                      </Typography>
                      <div className={classes.search}>
                          <div className={classes.searchIcon}>
                              <SearchIcon />
                          </div>
                          <InputBase
                              placeholder="검색하기"
                              classes={{
                                  root: classes.inputRoot,
                                  input: classes.inputInput,
                              }}
                              inputProps={{ 'aria-label': 'search' }}
                          />
                      </div>
                  </Toolbar>
              </AppBar>

              <Paper className={classes.paper}>
                  <Table className={classes.table}>
                      <TableHead>
                          <TableRow>
                              {cellList.map(c => {
                                  return <TableCell className={classes.tableHead}>{c}</TableCell>
                              })}
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {customers.map(c => {  //map을 사용할 때는 반드시 key값 정의
                                  return(
                                      <Customer
                                          key={c.id}
                                          id={c.id}
                                          image={c.image}
                                          name={c.name}
                                          age={c.age}
                                          gender={c.gender}
                                          live={c.live}
                                      />
                                  )
                              })
                          }
                      </TableBody>
                  </Table>
              </Paper>

              <div className={classes.menu}>
                  <CustomerAdd/>
              </div>
          </div>
        );
    }
}

export default withStyles(styles)(App);
