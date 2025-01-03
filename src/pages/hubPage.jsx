import React, { useState } from 'react';
import { Calendar, Users, Briefcase, PlusCircle, Edit, Trash2 } from 'lucide-react';

const HubPage = () => {
  const [activeTab, setActiveTab] = useState('clubs');

  const [clubs, setClubs] = useState([
    { id: 1, name: 'Tech Innovators', members: 50, events: 3, handled: true },
    { id: 2, name: 'Design Thinkers', members: 30, events: 2, handled: true },
  ]);

  const [startups, setStartups] = useState([
    { id: 1, name: 'AI Solutions', industry: 'Technology', openPositions: 5 },
    { id: 2, name: 'Green Energy Co', industry: 'Renewable Energy', openPositions: 3 },
  ]);

  const [collaborations, setCollaborations] = useState([
    { id: 1, club: 'Tech Innovators', startup: 'AI Solutions', project: 'AI-powered app' },
    { id: 2, club: 'Design Thinkers', startup: 'Green Energy Co', project: 'Sustainable product design' },
  ]);

  const handleAddClub = () => {
    const newName = prompt("Enter the club name");
    const newMembers = prompt("Enter the number of members");
    const newEvents = prompt("Enter the number of events");
    const newClub = { id: Date.now(), name: newName, members: newMembers, events: newEvents, handled: false };
    setClubs([...clubs, newClub]);
  };

  const handleEditClub = (id, newName, newMembers, newEvents) => {
    setClubs(clubs.map(club =>
      club.id === id && club.handled === true
        ? { ...club, name: newName, members: newMembers, events: newEvents }
        : club
    ));
  };

  const handleDeleteClub = (id) => {
    setClubs(clubs.filter(club => club.id !== id));
  };

  const handleAddStartup = () => {
    const newStartup = { id: Date.now(), name: 'New Startup', industry: 'Industry', openPositions: 0 };
    setStartups([...startups, newStartup]);
  };

  const handleEditStartup = (id, newName, newIndustry, newOpenPositions) => {
    setStartups(startups.map(startup =>
      startup.id === id ? { ...startup, name: newName, industry: newIndustry, openPositions: newOpenPositions } : startup
    ));
  };

  const handleDeleteStartup = (id) => {
    setStartups(startups.filter(startup => startup.id !== id));
  };

  const handleAddCollaboration = () => {
    const newCollaboration = {
      id: Date.now(),
      club: 'Select Club',
      startup: 'Select Startup',
      project: 'New Project'
    };
    setCollaborations([...collaborations, newCollaboration]);
  };

  const handleEditCollaboration = (id, newClub, newStartup, newProject) => {
    setCollaborations(collaborations.map(collab =>
      collab.id === id ? { ...collab, club: newClub, startup: newStartup, project: newProject } : collab
    ));
  };

  const handleDeleteCollaboration = (id) => {
    setCollaborations(collaborations.filter(collab => collab.id !== id));
  };

  return (
    <div className="min-h-screen w-screen bg-slate-50 p-8 flex justify-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-primary font-programme mb-8">Organiser Hub</h1>

        <div className="flex mb-6">
          <button
            className={`mr-4 px-4 py-2 rounded-t-lg font-programme ${activeTab === 'clubs' ? 'bg-secondary text-white' : 'bg-white text-primary'}`}
            onClick={() => setActiveTab('clubs')}
          >
            Clubs
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-t-lg font-programme ${activeTab === 'startups' ? 'bg-secondary text-white' : 'bg-white text-primary'}`}
            onClick={() => setActiveTab('startups')}
          >
            Startups
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-programme ${activeTab === 'collaborations' ? 'bg-secondary text-white' : 'bg-white text-primary'}`}
            onClick={() => setActiveTab('collaborations')}
          >
            Collaborations
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {activeTab === 'clubs' && (
            <div>
              <h2 className="text-2xl font-semibold text-primary font-programme mb-4">Manage Clubs</h2>
              <button
                className="mb-4 flex items-center bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 transition-colors duration-300 font-programme"
                onClick={handleAddClub}
              >
                <PlusCircle className="mr-2" size={20} />
                Add New Club
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {clubs.map(club => (
                  <div key={club.id} className="border border-primary/20 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 font-programme text-primary">{club.name}</h3>
                    <p className="flex items-center mb-1 text-primary/80"><Users className="mr-2" size={16} /> {club.members} members</p>
                    <p className="flex items-center mb-2 text-primary/80"><Calendar className="mr-2" size={16} /> {club.events} upcoming events</p>
                    <div className="flex justify-end">
                      <button
                        className="mr-2 text-secondary hover:text-secondary/80"
                        onClick={() => {
                          if (!club.handled) {
                            alert("Please enter the club details before editing.");
                            return;
                          }
                          const newName = prompt("Enter new name", club.name);
                          const newMembers = prompt("Enter new number of members", club.members);
                          const newEvents = prompt("Enter new number of events", club.events);
                          if (newName && newMembers && newEvents) {
                            handleEditClub(club.id, newName, parseInt(newMembers), parseInt(newEvents));
                          }
                        }}
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteClub(club.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'startups' && (
            <div>
              <h2 className="text-2xl font-semibold text-primary font-programme mb-4">Manage Startups</h2>
              <button
                className="mb-4 flex items-center bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 transition-colors duration-300 font-programme"
                onClick={handleAddStartup}
              >
                <PlusCircle className="mr-2" size={20} />
                Add New Startup
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {startups.map(startup => (
                  <div key={startup.id} className="border border-primary/20 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 font-programme text-primary">{startup.name}</h3>
                    <p className="flex items-center mb-1 text-primary/80"><Briefcase className="mr-2" size={16} /> {startup.industry}</p>
                    <p className="flex items-center mb-2 text-primary/80"><Users className="mr-2" size={16} /> {startup.openPositions} open positions</p>
                    <div className="flex justify-end">
                      <button
                        className="mr-2 text-secondary hover:text-secondary/80"
                        onClick={() => {
                          const newName = prompt("Enter new name", startup.name);
                          const newIndustry = prompt("Enter new industry", startup.industry);
                          const newOpenPositions = prompt("Enter new open positions", startup.openPositions);
                          if (newName && newIndustry && newOpenPositions) {
                            handleEditStartup(startup.id, newName, newIndustry, parseInt(newOpenPositions));
                          }
                        }}
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteStartup(startup.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'collaborations' && (
            <div>
              <h2 className="text-2xl font-semibold text-primary font-programme mb-4">Manage Collaborations</h2>
              <button
                className="mb-4 flex items-center bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 transition-colors duration-300 font-programme"
                onClick={handleAddCollaboration}
              >
                <PlusCircle className="mr-2" size={20} />
                Add New Collaboration
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collaborations.map(collab => (
                  <div key={collab.id} className="border border-primary/20 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 font-programme text-primary">{collab.project}</h3>
                    <p className="flex items-center mb-1 text-primary/80">Club: {collab.club}</p>
                    <p className="flex items-center mb-2 text-primary/80">Startup: {collab.startup}</p>
                    <div className="flex justify-end">
                      <button
                        className="mr-2 text-secondary hover:text-secondary/80"
                        onClick={() => {
                          const newClub = prompt("Enter new club", collab.club);
                          const newStartup = prompt("Enter new startup", collab.startup);
                          const newProject = prompt("Enter new project name", collab.project);
                          if (newClub && newStartup && newProject) {
                            handleEditCollaboration(collab.id, newClub, newStartup, newProject);
                          }
                        }}
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteCollaboration(collab.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HubPage;
