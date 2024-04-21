// candidateControllers.js

// Import necessary modules
const Candidate = require('../models/candidate');

// Controller functions
const getCandidateList = async (req, res) => {
    try {
        // Fetch all candidates from the database
        const candidates = await Candidate.find();
        res.status(200).json(candidates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const voteCandidate = async (req, res) => {
    const { candidateId } = req.body;
    const userId = req.user.id; // Assuming user ID is available in the request

    try {
        // Check if the user has already voted
        const userVoted = await Vote.findOne({ userId });
        if (userVoted) {
            return res.status(400).json({ message: 'You have already voted' });
        }

        // Update the vote count for the candidate
        await Candidate.findByIdAndUpdate(candidateId, { $inc: { voteCount: 1 } });

        // Create a new vote record for the user
        const newVote = new Vote({ userId, candidateId });
        await newVote.save();

        res.status(200).json({ message: 'Vote submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getCandidateList,
    voteCandidate
};
