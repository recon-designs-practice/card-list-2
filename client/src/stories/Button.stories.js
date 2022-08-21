import { Button } from '../components'
import { Paragraph1 } from '../theme/type'

export default {
    title: 'Button',
    component: Button
}

const Template = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    children: <Paragraph1>Primary</Paragraph1>,
    onclick: () => alert('Primary button clicked')
}