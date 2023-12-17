"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Schema is database combination of rules 
const applicantSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    resumeLink: { type: String, required: true }
});
const Applicant = mongoose_1.default.model('Applicant', applicantSchema);
exports.default = Applicant;
//# sourceMappingURL=applicant.model.js.map