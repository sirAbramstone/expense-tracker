import { reactive } from '@vue/composition-api'
import { Expense } from '~/interfaces/Expense'

const initialData = (): Expense => ({
  amount: 0,
  comment: '',
  tag: null
})

export function useExpenseForm (props: object, { emit }: any) {
  let form: Expense = reactive({
    amount: 0,
    comment: '',
    tag: null
  })

  const submit = () => {
    const expense: Expense = {
      amount: Number(form.amount),
      comment: form.comment,
      tag: form.tag,
      id: Date.now().toString()
    }

    form = Object.assign(form, initialData())

    emit('add', expense)
  }

  return { form, submit }
}
