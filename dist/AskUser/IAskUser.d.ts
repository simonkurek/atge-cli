import AskUserBody from './AskUserBody';
import IBool from './IBool';
import IValue from './IValue';
interface IAskUser {
    forConfirmation(message?: string): Promise<IBool>;
    forChoices(data: AskUserBody): Promise<IValue>;
}
export default IAskUser;
