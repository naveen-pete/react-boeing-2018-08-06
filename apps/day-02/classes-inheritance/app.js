

const engineeringTeam = {
  size: 5,
  department: 'Engineering',
  lead: 'Hari',
  manager: 'Krish',
  engineer: 'Ram'
};

function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const employees = [];
for (let name of teamIterator(engineeringTeam)) {
  employees.push(name);
}
console.log(employees);



