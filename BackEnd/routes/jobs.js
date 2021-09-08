const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// Get all jobs
router.get('/', async (req, res) => {
  // const candidate = await sequelize.models.candidates.findAndCountAll();
  const jobs = await sequelize.models.jobs.findAndCountAll();
  return res.status(200).json({ data: jobs });
});

// Creating a new job
router.post('/', async (req, res) => {
  const { body } = req;

  const job = await sequelize.models.jobs.create({
    recruiterId: req.user.id,
    title: body.title,
    type: body.type,
    seniority: body.seniority,
    location: body.location,
    introduccion: body.introduccion,
    expected: body.expected,
    lokkin: body.lokkin,
    requirements: body.requirements,
  });
  await job.save();
  return res.status(201).json({ data: job });
});

// Update a review by id
router.put('/:id', async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const review = await sequelize.models.reviews.findByPk(id);
  if (!review) {
    return res.status(404).json({ code: 404, message: 'Review not found' });
  }
  const updatedReview = await review.update({
    content: body.content,
  });
  return res.json({ data: updatedReview });
});

// Delete a review by id
router.delete('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  const review = await sequelize.models.reviews.findByPk(id);
  if (!review) {
    return res.status(404).json({ code: 404, message: 'Review not found' });
  }
  await review.destroy();
  return res.json();
});

module.exports = router;