import ExpSkills from './expSkills';
export default interface AdventureLog {
    img: string;
    skills?: ExpSkills;
    logs: string[];
    alt?: string;
}