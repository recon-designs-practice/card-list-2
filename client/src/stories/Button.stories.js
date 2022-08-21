import { Button } from '../components'
import { Paragraph1 } from '../theme/type'

export default {
    title: 'Button',
    component: Button,
}

const Template = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    buttonType: 'primary',
    children: <Paragraph1>Primary</Paragraph1>,
    onclick: () => alert('Primary button clicked')
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
    buttonType: 'secondary',
    children: <Paragraph1>Secondary</Paragraph1>,
    onclick: () => alert('Secondary button clicked')
}