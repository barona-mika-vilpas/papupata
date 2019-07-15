import React from 'react'
import { ucFirst } from '../utils'
import IndexLayout from '../layouts'
import Page from './Page'
import Container from './Container'
import { Purpose, Usage, Parameters, MethodReturnType, Parameter, Examples, Example } from './api-components'
import { IncompleteApiDeclarationLink } from './links'

export default function DeclareAPIPage({ method }: { method: string }) {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class APIDeclaration</h2>
          <h3>method declare{ucFirst(method)}API</h3>
        </Container>
        <Purpose>Used for declaring an API using the HTTP {method.toUpperCase()} method</Purpose>
        <Usage>APIs can be declared at any time.</Usage>
        <Parameters>
          <Parameter name="path" dataType="string">
            Path to the API under the base URL of the APIDeclaration.
          </Parameter>
        </Parameters>
        <MethodReturnType>
          <IncompleteApiDeclarationLink />
        </MethodReturnType>
        <Examples>
          <Example>
            {`
            import {APIDeclaration} from 'papupata'
            const api = new APIDeclaration()

            const MyAPI = api.declare${ucFirst(method)}API('/api/person')
              .response<string>()
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
