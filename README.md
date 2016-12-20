# Powers of FlowType.js with a React component

### Install latest version
`npm install --save https://github.com/bond-agency/react-flowtype/tarball/master`

### Usage
```js
import React, { Component } from 'react'
import FlowType from 'react-flowtype'

export default class MyComponent extends Component {

  render () {
    return (
      <FlowType minimum={320} maximum={800} minFont={16} maxFont={40} fontRatio={35}>
        <h1>Hello World</h1>
      </FlowType>
    )
  }
}

```
