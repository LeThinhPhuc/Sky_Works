"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Schema is database combination of rules 
const jobSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    tags: { type: String, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    available: { type: Boolean, required: true },
    descriptions: {
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
    resumeLink: { type: String, required: true },
    requirements: { type: Object, required: true }
});
const Job = mongoose_1.default.model('Job', jobSchema);
exports.default = Job;
//# sourceMappingURL=job.model.js.map