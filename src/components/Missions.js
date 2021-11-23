import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Table from 'react-bootstrap/Table';
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
        <tbody>
          {selectedMissions.map((m) => (
            <tr key={uuidv4()}>
              <td className="mission-name">{m.mission_name}</td>
              <td>{m.mission_description}</td>
              <td><button type="button">NOT A MEMBER</button></td>
              <td><button type="button">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
