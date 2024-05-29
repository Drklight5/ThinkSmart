
import React, { useState, useEffect, useContext } from 'react'
import { _Groups } from '../../Control/API'
import UserContext from '../../Control/userContext'
import { Link } from 'react-router-dom'

export default function GroupsAdm() {

  const [User, setUser] = useContext(UserContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateGroupForm, setShowCreateGroupForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [students, setStudents] = useState({});

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await _Groups.getGroups(User.id);
      setGroups(response);
    } catch (error) {
      console.error('Error fetching groups:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async (groupId) => {
    try {
      const response = await _Groups.getUserGroup(groupId);
      setStudents((prevStudents) => ({
        ...prevStudents,
        [groupId]: response,
      }));
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleCreateGroup = async () => {
    try {
      await _Groups.createGroup({ nombre: newGroupName });
      setNewGroupName('');
      setShowCreateGroupForm(false);
      fetchGroups();
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  return (
    <div>
      <h1>Grupos Administrador</h1>
      {loading ? (
        <p>Cargando grupos...</p>
      ) : groups.length === 0 ? (
        <p>No hay grupos</p>
      ) : (
        <ul>
          {groups.map((group) => (
            <li key={group.id}>
              <p>ID: {group.id}</p>
              <p>Nombre: {group.nombre}</p>
              <p>Administrador ID: {group.idAdmin}</p>
              <button onClick={() => fetchStudents(group.id)}>Mostrar Alumnos</button>
              {students[group.id] && (
                <ul>
                  {students[group.id].length === 0 ? (
                    <li>No hay alumnos en este grupo</li>
                  ) : (
                    students[group.id].map((student) => (
                      <li key={student.id}>{student.nombre}</li>
                    ))
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setShowCreateGroupForm(!showCreateGroupForm)}>
        {showCreateGroupForm ? 'Cancelar' : 'Agregar nuevo grupo'}
      </button>
      {showCreateGroupForm && (
        <div>
          <input
            type="text"
            placeholder="Nombre del grupo"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
          />
          <button onClick={handleCreateGroup}>Crear Grupo</button>
        </div>
      )}
    </div>
  );
};
