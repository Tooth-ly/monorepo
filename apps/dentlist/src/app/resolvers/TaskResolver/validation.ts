import { Task_Input } from './types';

export const validateTask = (options: Task_Input) => {
  if (options.description.length <= 140) {
    return [
      {
        field: 'description',
        message: 'length must be less than 140',
      },
    ];
  }

  if (options.required_level < 1 || options.required_level > 10) {
    return [
      {
        field: 'required_level',
        message: 'required levels are from 1 to 10',
      },
    ];
  }

  if (options.title.length <= 75) {
    return [
      {
        field: 'title',
        message: 'length must be less than 75',
      },
    ];
  }

  return null;
};
