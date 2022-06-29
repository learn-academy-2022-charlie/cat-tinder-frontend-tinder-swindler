// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import App from './App.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})


describe("When App.js renders to the user", () => {
  let appRender
  beforeEach(() => {
      appRender = shallow(<App/>)
  })
  it("it displays a header and a footer", () => {
    const appHeaderRender = appRender.find("Header") 
    expect(appHeaderRender.length).toEqual(1)
  })
    it("it displays a header and a footer", () => {
      // const appRender = shallow(<App/>)
      const appFooterRender = appRender.find("Footer") 
      expect(appFooterRender.length).toEqual(1)
    })
      it("it provides a path to the home component", () => {
        // ('[]')
        const renderHomePath = appRender.find('[path="/"]')
        console.log(renderHomePath.debug()) //special in Enzyme
        expect(renderHomePath.length).toEqual(1)
    
  })
  
})

