<template>
  <div>
    <button @click="emitEvent1">Event 1</button>
    <button @click="emitEvent2">Event 2</button>
    <button @click="emitEvent3">Event 3</button>
  </div>
</template>


<script>
export default {
  methods: {
    emitEvent1() {
      this.$emit('event-one')
    },

    emitEvent2() {
      this.$emit('event-two', 'This is an argument')
    },

    emitEvent3() {
      this.$emit('event-three', 123, {name: 'three'})
    }
  }
}
</script>
