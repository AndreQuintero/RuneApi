import ProfileAPI from '../model/API/profile';
import ProfileMock from '../mocks/profile';
import QuestApi from '../model/quest-api';
import { QuestsMock } from '../mocks/quests';

export  const  getProfile = (playerName: string, actives: number):  Promise<ProfileAPI>  =>  {

  return new Promise( (resolve, reject) => setTimeout( () => {
      const mock = ProfileMock;
      mock.name = playerName;
      resolve( mock );
  }, 1000));
  
}

export const getQuests = (playerName: string): Promise<QuestApi[]> => {
  return new Promise( (resolve, reject) => setTimeout( () => resolve(JSON.parse(QuestsMock)), 1000));
}
