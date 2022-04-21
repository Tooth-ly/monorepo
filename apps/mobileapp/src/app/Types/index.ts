import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };
export type Nav = StackScreenProps<RootStackParamList, 'Profile'>;

export interface Service {
    id: number,
    name: string,
    tasks: [task: Task],
    assignee: {
        id: number,
        name: string,
        profile_pic: string
    }
}

export interface Task {
    id: number,
    stage: Stage,
    name: string,
    description: string
}
export enum Stage {
    New = "New",
    Pending = "Pending",
    Done = "Done"
}

export interface Patient {
    id: number,
    profile_pic: string,
    name: String,
    age: number,
    gender: String,
    cat_id: number
}
