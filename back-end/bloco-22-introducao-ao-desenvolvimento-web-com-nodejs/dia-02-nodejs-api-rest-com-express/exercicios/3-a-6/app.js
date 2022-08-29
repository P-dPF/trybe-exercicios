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