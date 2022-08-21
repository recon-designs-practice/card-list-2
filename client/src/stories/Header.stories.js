import { Header } from '../components'

export default {
    title: 'Header',
    component: Header
}

const Template = (args) => <Header {...args} />

export const PrimaryHeader = Template.bind({})
// PrimaryHeader.args = {

// }