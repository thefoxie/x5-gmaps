<template>
  <example-wrapper title="Minimal Map">
    <template #description>
      <p>
        This is just a map using the default center position and zoom level (which are the minimum required options)
      </p>
    </template>
    <template #map>
      <gmaps-map />
    </template>
    <template #code>
      <div>
        <pre>
&lt;gmaps-map />
          </pre
        >
      </div>
    </template>
  </example-wrapper>
</template>

<script>
import ExampleWrapper from './ExampleWrapper'
import { gmapsMap } from '../src' // import from 'x5-gmaps' for plugin

export default {
  name: 'ExampleMap',
  components: { ExampleWrapper, gmapsMap }
}
</script>
