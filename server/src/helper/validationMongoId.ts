import { isValidObjectId } from 'mongoose';

function validationMongoId(id: any) {
  return isValidObjectId(id);
}
export default validationMongoId;
