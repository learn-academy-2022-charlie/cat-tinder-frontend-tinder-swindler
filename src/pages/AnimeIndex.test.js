// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import AnimeIndex from './AnimeIndex.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("when animeindex renders", ()=> {
    const props = {
        anime : [
            {
                id: 1,
                name: "Kaisen",
                age: 30,
                enjoys: "Using Jujutsu",
                image: "https://cdn.oneesports.gg/cdn-data/2021/06/JujutsuKaisenPhantomParade_GojoSatoru-min-2000x1116.jpeg"

            }
        ]
    }

    let animeIndexRender
        beforeEach(() => {
            animeIndexRender = shallow(<AnimeIndex/>)
        })
            it("index has a heading", () => {
                const animeIndexText = animeIndexRender.find("[className='indexHeader']")
                expect(animeIndexText.length).toEqual(1)
                expect(animeIndexText.text()).toEqual("Here are all the Waifu's")
                
            })
            it("pops a waifu out like insta", () => {
                const animeIndexPop = animeIndexRender.find("Card")
                expect(animeIndexPop.length).toEqual(1)

            })
})