import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import TableElement from '../components/communityLog/TableElement';
import axios from 'axios';

export class CommunityLog extends Component {
  constructor() {
    super();
    this.state = {
      catches: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/catches').then((res) => {
      console.log(res.data);
      this.setState({ catches: res.data });
    });
  }

  render() {
    return (
      <Table striped bordered hover variant='dark' className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Bait</th>
            <th>Fishong pole</th>
            <th>Preferred technique</th>
            <th>Caught fish</th>
            <th>Lake</th>
          </tr>
        </thead>
        <tbody>
          {this.state.catches.map((actualCatch) => (
            <TableElement
              id={actualCatch.id}
              name={actualCatch.name}
              bait={actualCatch.bait}
              fishing_pole={actualCatch.fishong_pole}
              preferred_technique={actualCatch.preferred_technique}
              caughtFish={actualCatch.caughtFish}
              lake={actualCatch.lake}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default CommunityLog;
