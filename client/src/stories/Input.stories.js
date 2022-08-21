import { Input } from '../components'

export default {
    title: 'Input',
    component: Input
}

const Template = (args) => <Input {...args} />

export const PrimaryInput = Template.bind({})
PrimaryInput.args = {
    placeholder: 'A placeholder'
}