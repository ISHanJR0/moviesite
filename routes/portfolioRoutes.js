// routes/portfolioRoutes.js
const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const {
    getPortfolios,
    getPortfolio,
    createPortfolio,
    updatePortfolio,
    deletePortfolio
} = require('../controllers/portfolioController');

router
    .route('/')
    .get(getPortfolios)
    .post(protect, authorize('admin'), createPortfolio);

router
    .route('/:id')
    .get(getPortfolio)
    .put(protect, authorize('admin'), updatePortfolio)
    .delete(protect, authorize('admin'), deletePortfolio);

module.exports = router;