import { Form, Input } from '../components'
import { Layout } from '../components'

export default {
    title: 'Form',
    component: Form,
    decorators: [
        (Story) => (
            <Layout>
                <Story />
            </Layout>
        ),
      ]
}

const Template = (args) => <Form {...args} />

const inputData = [
    {
        id: 'input1',
        label: 'Label 1',
        onchange: (e) => console.log(e.target.value)
    },
    {
        id: 'input2',
        label: 'Label 2',
        onchange: (e) => console.log(e.target.value)
    },
    {
        id: 'input2',
        label: 'Label 2',
        onchange: (e) => console.log(e.target.value)
    }
]

export const DefaultForm = Template.bind({})
DefaultForm.args = {
    inputs: inputData
}