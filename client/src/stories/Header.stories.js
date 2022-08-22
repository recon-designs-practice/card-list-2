import { withRouter } from 'storybook-addon-react-router-v6'
import { Header } from '../components'
import HeaderNav from '../components/header/HeaderNav'

export default {
    title: 'Header',
    component: Header,
    decorators: [withRouter]
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
    title: 'Title',
    children: <HeaderNav links={linksArr} />
}

PrimaryHeader.story = {
    parameters: {
        routePath: '/',
        routeParams: { },
        searchParams: { },
        routeState: { },
    }
}