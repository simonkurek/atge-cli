import IChoice from './IChoice';
interface AskUserBody {
    message?: string;
    choices: IChoice[];
}
export default AskUserBody;
