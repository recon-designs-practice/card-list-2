import { Button } from '../components'

export default {
    title: 'Button',
    component: Button
}

const Template = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})
// PrimaryButton.args = {

// }