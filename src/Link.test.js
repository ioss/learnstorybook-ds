import * as React from 'react'
import ReactDOM from 'react-dom'

import { Link } from './Link'

const LinkWrapper = (props) => <a {...props} />

it('has a href attribute when rendering with linkWrapper', () => {
	const div = document.createElement('div')
	const Component = () => (
		<Link href="https://storybook.js.org/tutorials/" LinkWrapper={LinkWrapper}>
			Link Text
		</Link>
	)
	ReactDOM.render(<Component />, div)
	expect(div.querySelector('a[href="https://storybook.js.org/tutorials/"]')).not.toBeNull()
	expect(div.textContent).toEqual('Link Text')

	ReactDOM.unmountComponentAtNode(div)
})
