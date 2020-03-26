import { reactive, SetupContext } from '@vue/composition-api';
import { Expense } from '~/interfaces/Expense';

const initialData = (): Expense => ({
  amount: 0,
  comment: '',
  tag: '',
  id: ''
});

export default function useExpenseForm(props: object, { emit }: SetupContext) {
  let form: Expense = reactive(initialData());

  const submit = () => {
    const expense: Expense = {
      amount: form.amount,
      comment: form.comment,
      tag: form.tag,
      id: Date.now().toString(),
    };

    form = Object.assign(form, initialData());

    emit('add', expense);
  };

  return { form, submit };
}
