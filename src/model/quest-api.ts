import {StatusQuest} from '../enum/statusQuest';

export default interface QuestApi {
    title: string;
    status: StatusQuest;
    difficulty: number,
    members: boolean; 
    questPoints: number;
    userEligible: boolean;
}