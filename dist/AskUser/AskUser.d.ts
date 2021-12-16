import AskUserBody from './AskUserBody';
import IAskUser from './IAskUser';
import IValue from './IValue';
import IBool from './IBool';
declare class AskUser implements IAskUser {
    forChoices(data: AskUserBody): Promise<IValue>;
    forConfirmation(message?: string): Promise<IBool>;
}
export default AskUser;
