import React, { useState, useEffect } from 'react';
import { images } from './Data';

// Fetching new team data
const CelticGlasgow = images.find((img) => img.id ===5); // Replace with actual ID
const AlNassr = images.find((img) => img.id === 20); // Replace with actual ID
const SportingLisbon = images.find((img) => img.id ===4); // Replace with actual ID
const ACMilan = images.find((img) => img.id === 10); // Replace with actual ID

const matches = [
  { team1: CelticGlasgow, team2: AlNassr },
  { team1: SportingLisbon, team2: ACMilan },
  { team1: CelticGlasgow, team2: SportingLisbon },
  { team1: AlNassr, team2: ACMilan },
  { team1: CelticGlasgow, team2: ACMilan },
  { team1: AlNassr, team2: SportingLisbon },
];

const PASSWORD = 'risalat34';

const GroupE = () => {
  const [scores, setScores] = useState(
    () => JSON.parse(localStorage.getItem('scoresB')) || matches.map(() => ({ team1Score: '', team2Score: '' }))
  );

  const [isEditing, setIsEditing] = useState(
    () => JSON.parse(localStorage.getItem('isEditingB')) || matches.map(() => true)
  );

  const [teams, setTeams] = useState(
    () => JSON.parse(localStorage.getItem('teamsB')) || [
      {
        id: 5,
        name: 'Celtic Glasgow',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        src: CelticGlasgow.src,
      },
      {
        id: 20,
        name: 'Al Nassr',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        src: AlNassr.src,
      },
      {
        id: 4,
        name: 'Sporting Lisbon',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        src: SportingLisbon.src,
      },
      {
        id: 10,
        name: 'AC Milan',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        src: ACMilan.src,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem('scoresB', JSON.stringify(scores));
    localStorage.setItem('teamsB', JSON.stringify(teams));
    localStorage.setItem('isEditingB', JSON.stringify(isEditing));
  }, [scores, teams, isEditing]);

  const handleScoreChange = (index, field, value) => {
    const updatedScores = [...scores];
    updatedScores[index][field] = value;
    setScores(updatedScores);
  };

  const toggleEdit = (index) => {
    const password = prompt('Enter password to proceed:');
    if (password === PASSWORD) {
      const updatedEditing = [...isEditing];
      updatedEditing[index] = !updatedEditing[index];
      setIsEditing(updatedEditing);
    } else {
      alert('Incorrect password. Access denied.');
    }
  };

  const updatePoints = () => {
    const updatedTeams = teams.map((team) => ({
      ...team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    }));

    matches.forEach((match, index) => {
      const team1Score = scores[index]?.team1Score ? parseInt(scores[index].team1Score, 10) : null;
      const team2Score = scores[index]?.team2Score ? parseInt(scores[index].team2Score, 10) : null;

      if (team1Score === null || team2Score === null) return;

      const team1Index = updatedTeams.findIndex((team) => team.id === match.team1.id);
      const team2Index = updatedTeams.findIndex((team) => team.id === match.team2.id);

      if (team1Index === -1 || team2Index === -1) return;

      updatedTeams[team1Index].played += 1;
      updatedTeams[team2Index].played += 1;

      updatedTeams[team1Index].goalsFor += team1Score;
      updatedTeams[team2Index].goalsFor += team2Score;

      updatedTeams[team1Index].goalsAgainst += team2Score;
      updatedTeams[team2Index].goalsAgainst += team1Score;

      if (team1Score > team2Score) {
        updatedTeams[team1Index].won += 1;
        updatedTeams[team1Index].points += 3;
        updatedTeams[team2Index].lost += 1;
      } else if (team2Score > team1Score) {
        updatedTeams[team2Index].won += 1;
        updatedTeams[team2Index].points += 3;
        updatedTeams[team1Index].lost += 1;
      } else {
        updatedTeams[team1Index].drawn += 1;
        updatedTeams[team2Index].drawn += 1;
        updatedTeams[team1Index].points += 1;
        updatedTeams[team2Index].points += 1;
      }
    });
    updatedTeams.sort(
      (a, b) =>
        b.points - a.points ||
        b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst) ||
        b.goalsFor - a.goalsFor
    );
    setTeams(updatedTeams);
  };

  const saveScores = (index) => {
    toggleEdit(index);
    updatePoints();
  };

  const resetData = () => {
    setScores(matches.map(() => ({ team1Score: '', team2Score: '' })));
    setTeams(
      teams.map((team) => ({
        ...team,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
      }))
    );
    localStorage.removeItem('scoresB');
    localStorage.removeItem('teamsB');
    localStorage.removeItem('isEditingB');
  };

  return (
    <>
    <div className="relative w-full  flex-col justify-center items-center p-4 overflow-x-hidden md:overflow-none">
     <div className='h-[180px] w-[300px] border border-yellow-300 rounded-lg p-4'>
<h1 className='font-mono text-2xl'>Group E</h1>
<div className="team flex justify-around items-center mt-4">

<img src={CelticGlasgow.src}/>
<img src={AlNassr.src}/>
<img src={SportingLisbon.src}/>
<img src={ACMilan.src}/>
</div>
     </div>
      <div className="mt-2 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-white mb-4">Match Schedule</h2>
        <ul className="space-y-4">
          {matches.map((match, index) => (
           <li
           key={index}
           className={`flex  w-[310px] items-center justify-between p-2 md:gap-4 md:p-4 rounded-lg bg-gradient-to-r shadow-lg transition-all transform ${
            isEditing[index] ? 'from-yellow-200 to-yellow-400' : 'from-green-300 to-green-500'
          }`}
         >
           {/* Team 1 */}
           <div className="flex items-center">
             <img
               src={match.team1.src}
               alt={match.team1.alt}
               className="w-8 h-8 "
             />
             <span className="hidden md:inline text-gray-800 font-bold text-lg truncate">
               {match.team1.name}
             </span>
           </div>
         
           {/* Score Section */}
           <div className="flex items-center justify-center gap-4">
             {isEditing[index] ? (
               <>
                 <input
                   type="number"
                   value={scores[index].team1Score}
                   onChange={(e) => handleScoreChange(index, 'team1Score', e.target.value)}
                   className="w-12 md:w-16 p-2 border border-gray-300 rounded-lg text-center text-gray-800 font-bold focus:outline-none focus:ring-2 focus:ring-blue-400"
                 />
                 <span className="text-gray-600 font-bold text-lg md:text-xl">vs</span>
                 <input
                   type="number"
                   value={scores[index].team2Score}
                   onChange={(e) => handleScoreChange(index, 'team2Score', e.target.value)}
                   className="w-12 md:w-16 p-2 border border-gray-300 rounded-lg text-center text-gray-800 font-bold focus:outline-none focus:ring-2 focus:ring-blue-400"
                 />
               </>
             ) : (
               <>
                 <span className="text-lg md:text-xl font-bold text-gray-900">{scores[index].team1Score}</span>
                 <span className="text-gray-600 font-bold">vs</span>
                 <span className="text-lg md:text-xl font-bold text-gray-900">{scores[index].team2Score}</span>
               </>
             )}
           </div>
         
           {/* Team 2 */}
           <div className="flex items-center justify-end">
             <span className="hidden md:inline text-gray-800 font-bold text-lg truncate">
               {match.team2.name}
             </span>
             <img
               src={match.team2.src}
               alt={match.team2.alt}
               className="w-8 h-8"
             />
           </div>
         
           {/* Button */}
           <button
             onClick={() => saveScores(index)}
             className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md transition-transform transform hover:scale-110 ${
               isEditing[index]
                 ? 'bg-green-500 text-white hover:bg-green-600'
                 : 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
             }`}
           >
             {isEditing[index] ? 'Save' : 'Edit'}
           </button>
         </li>
         
         
      ))}
    </ul>
  </div>

  <div className="mt-8 w-full max-w-3xl">
    <h2 className="text-2xl font-mono text-center text-white mb-4">Group B Standings</h2>
    <table className="w-full font-mono table-auto border-collapse absolute left-0 text-[10px] md:text-lg">
      <thead>
        <tr className="bg-white-200">
          <th className="p-2 text-center font-bold text-white">P</th>
          <th className="p-2 text-center font-bold text-white">Team</th>
          <th className="p-2 text-center font-bold text-white">MP</th>
          <th className="p-2 text-center font-bold text-white">W</th>
          <th className="p-2 text-center font-bold text-white">D</th>
          <th className="p-2 text-center font-bold text-white">L</th>
          <th className="p-2 text-center font-bold text-white">GF</th>
          <th className="p-2 text-center font-bold text-white">GA</th>
          <th className="p-2 text-center font-bold text-white">PTS</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr
            key={index}
            className="bg-blue-700">
            <td className="p-2 text-center text-white">{index + 1}</td>
            <td className="p-1 text-left text-white">
              <div className="flex items-center gap-1 pr-2 w-fit">
                <img src={team.src} alt={team.name} className="w-4 h-4 rounded-full" />
                <span className='text-[8px]'>{team.name}</span>
              </div>
            </td>
            <td className="p-2 text-center text-white">{team.played}</td>
            <td className="p-2 text-center text-white">{team.won}</td>
            <td className="p-2 text-center text-white">{team.drawn}</td>
            <td className="p-2 text-center text-white">{team.lost}</td>
            <td className="p-2 text-center text-white">{team.goalsFor}</td>
            <td className="p-2 text-center text-white">{team.goalsAgainst}</td>
            <td className="p-2 text-center text-white">{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="mt-52 text-center">
    <button
      onClick={resetData}
      className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md"
    >
      Reset Scores
    </button>
  </div>
</div>
</>
  );
};

export default GroupE;
