"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const job_model_1 = __importDefault(require("./job.model"));
const applicant_model_1 = __importDefault(require("./applicant.model"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Connect to MongoDB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};
mongoose_1.default.connect('mongodb://localhost:27017/joblistings', options)
    .then(() => {
    console.log('MongoDB connected');
})
    .catch((err) => {
    console.error(err);
});
// Routes
app.get('/jobs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobs = yield job_model_1.default.find();
    if (jobs.length === 0) {
        return res.status(404).json({ message: "No jobs found" });
    }
    res.json(jobs);
}));
app.post('/jobs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, requirements, description } = req.body;
    const job = new job_model_1.default({ name, requirements, description });
    job.save((err, doc) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "An error occurred while saving the job" });
        }
        res.status(202).json(doc);
    });
}));
app.get('/applicants', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applicants = yield applicant_model_1.default.find();
    if (applicants.length === 0) {
        return res.status(404).json({ message: "No applicants found" });
    }
    res.json(applicants);
}));
app.post('/applicants', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, dob, resumeLink } = req.body;
    const applicant = new applicant_model_1.default({ name, email, phone, dob, resumeLink });
    applicant.save((err, doc) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "An error occurred while saving the applicant" });
        }
        res.status(202).json(doc);
    });
}));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
//# sourceMappingURL=server.js.map