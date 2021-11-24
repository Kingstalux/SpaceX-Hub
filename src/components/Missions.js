import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { getMissionsFromApi, joinMission, leaveMission } from '../redux/missions/missions';

const selectMissions = (state) => state.missionsReducer;

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsFromApi());
  }, []);
  const selectedMissions = useSelector(selectMissions);
  console.log(selectedMissions);
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
              {console.log(m.isReserved)}
              <td className="mission-name">{m.mission_name}</td>
              <td>{m.mission_description}</td>
              <td className="status" width="100px">
                {m.isReserved ? <Badge bg="success"> ACTIVE MEMBER</Badge>
                  : <Badge bg="secondary">NOT A MEMBER</Badge>}
              </td>
              <td className="status" width="150px">
                {m.isReserved ? <Button variant="outline-danger" onClick={() => dispatch(leaveMission(m.mission_id))}>Leave Mission</Button>
                  : <Button variant="outline-dark" onClick={() => dispatch(joinMission(m.mission_id))}>Join Mission</Button>}
              </td>
            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
