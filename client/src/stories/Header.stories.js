import { Header } from '../components'
import HeaderNav from '../components/header/HeaderNav'

export default {
    title: 'Header',
    component: Header
}

const Template = (args) => <Header {...args} />

const linksArr = [
    {text: 'Home', path: '/'},
    {text: 'Add card', path: '/add-card'},
    {text: 'Cards', path: '/view-cards'},
    {text: 'Brands', path: '/view-brands'}
  ]

export const PrimaryHeader = Template.bind({})
PrimaryHeader.args = {
    title: 'Hello',
    children: <HeaderNav links={linksArr} />
}