import { Input } from '../components'

export default {
    title: 'Input',
    component: Input,
    decorators: [
        (Story) => (
          <div style={{ width: '240px' }}>
            <Story />
          </div>
        ),
      ],
}

const Template = (args) => <Input {...args} />

export const DefaultInput = Template.bind({})
DefaultInput.args = {
    id: 'defaultInput',
    label: 'Label',
    placeholder: 'A placeholder',
    helperText: 'Here is some helper text',
    disabled: false,
    onchange: (e) => console.log(e.target.value)
}