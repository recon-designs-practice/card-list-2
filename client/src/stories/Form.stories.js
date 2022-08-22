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

export const DefaultForm = Template.bind({})
DefaultForm.args = {
    title: 'Form heading'
}