import AskUserBody from './AskUserBody';
import IAskUser from './IAskUser';
import { prompt, list, ListChoice, confirm, input } from 'typed-prompts';
import IChoice from './IChoice';
import IValue from './IValue';
import IBool from './IBool';

class AskUser implements IAskUser {
  async forChoices(data: AskUserBody): Promise<IValue> {
    const message = data.message ? data.message : 'Your choise:';
    return prompt<IValue>([
      list('value', message, [
        ...data.choices.map((choice: IChoice) => {
          return {
            name: choice.title,
            value: choice.value,
          };
        }),
      ]),
    ]);
  }

  async forConfirmation(message?: string): Promise<IBool> {
    const info = message ? message : 'Are you sure?';
    return prompt<IBool>([confirm('value', info)]);
  }
}

export default AskUser;
