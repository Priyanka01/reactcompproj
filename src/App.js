import React from 'react'
import MyFunctionalComp from './MyComponents/MyFunctionalComp'
import MyClassComponents from './MyComponents/MyClassComponents'
import MyArrowFunctionComp from './MyComponents/MyArrowFunctionComp'

export default function App() {
  return (
    <div>
      <h3>Calling Functional components</h3>
      <MyFunctionalComp/>
      <h3>Calling Class Components</h3>
      <MyClassComponents/>
      <h3>Calling Arrow Components</h3>
      <MyArrowFunctionComp/>
    </div>
  )
}
