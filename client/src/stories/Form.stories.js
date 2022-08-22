import { Form } from '../components'

export default {
    title: 'Form',
    component: Form
}

const Template = (args) => <Form {...args} />

export const DefaultForm = Template.bind({})
DefaultForm.args = {

}