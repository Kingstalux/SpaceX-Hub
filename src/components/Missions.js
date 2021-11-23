import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { getMissionsFromApi } from '../redux/missions/missions';

const selectMissions = (state) => state.missionsReducer;

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsFromApi());
  }, []);
  const selectedMissions = useSelector(selectMissions);
  return (
    <div>
      <Table striped bordered hover size="sm" className="table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody d-flex>
          {selectedMissions.map((m) => (
            <tr key={uuidv4()}>
              <td className="mission-name">{m.mission_name}</td>
              <td>{m.mission_description}</td>
              <td className="status" width="100px">
                <Badge bg="secondary">NOT A MEMBER</Badge>
                {' '}
                <Badge bg="success" className="status-active">ACTIVE MEMBER</Badge>
                {' '}
              </td>
              <td className="status" width="150px">
                <Button variant="outline-dark">Join Mission</Button>
                <Button variant="outline-danger" className="status-active">Leave Mission</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
