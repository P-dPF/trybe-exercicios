const express = require('express');
const app = express();

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  let getActivityById;

  for (let i = 0; i < activities.length; i +=1) {
    const activity = activities[i];

    if (activity.id === Number(id)) {
      getActivityById = activity;
    }
  }

  res.status(200).json({ getActivityById });
});

module.exports = app;

app.get('/myActivities', (req, res) => res.status(200).json({ activities }));

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let getActivityByStatus = [];

  for (let i = 0; i < activities.length; i += 1) {
    const activity = activities[i];

    if (activity.status === status) {
      getActivityByStatus.push(activity);
    }
  }

  res.status(200).json({ status: getActivityByStatus })
});

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  let filteredActivities;

  if (q) {
    filteredActivities = activities.filter(activity => activity.description.includes(q));

  }

  res.status(200).json({ filteredActivities });
});
