import React, { Component } from 'react';
import './App.css';
import Customer from "./components/Customer";
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
        marginTop: theme.spacing.unit *3,
        overflowX: "auto"
    },
    table: {
        minWidth: 1080
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
        return(
          <Paper className={classes.root}>
              <Table className={classes.table}>
                  <TableHead>
                      <TableRow>
                          <TableCell>아이디</TableCell>
                          <TableCell>이미지</TableCell>
                          <TableCell>이름</TableCell>
                          <TableCell>나이</TableCell>
                          <TableCell>성별</TableCell>
                          <TableCell>주소지</TableCell>
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
        );
    }
}

export default withStyles(styles)(App);
