import Actives from './actives';

export default interface ProfileAPI {
    magic: number;
    questsstarted: number;
    totalskill: number;
    questscomplete: number;
    questsnotstarted: number;
    totalxp: number;
    ranged: number; 
    activities: Actives[];
    skillvalues: SkillValue[];
    name: string;
    melee: number;
    combatlevel: number;
    loggedIn: boolean;

}

interface SkillValue{
    level: number;
    xp: number;
    id: number;
}