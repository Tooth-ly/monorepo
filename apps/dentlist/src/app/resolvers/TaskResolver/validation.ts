import { Task_Input } from './types';

export const validateTask = (options: Task_Input) => {
  if (options.description)
    if (options.description.length <= 140) {
      return [
        {
          field: 'description',
          message: 'length must be less than 140',
        },
      ];
    }

  return null;
};
