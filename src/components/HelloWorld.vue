<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <p>
        <m-button>     Modul button
        </m-button>
  </p>
  <p>
    <m-accordion-group class="m-u--margin-top">
        <m-accordion>
            <h2 class="m-u--no-margin" slot="header">Titre 1</h2>
            Contenu de l'accordéon 1
        </m-accordion>
        <m-accordion>
            <h2 class="m-u--no-margin" slot="header">Titre 2</h2>
            Contenu de l'accordéon 2
        </m-accordion>
        <m-accordion>
            <h2 class="m-u--no-margin" slot="header">Titre 3</h2>
            Contenu de l'accordéon 3
        </m-accordion>
        <m-accordion>
            <h2 class="m-u--no-margin" slot="header">Titre 4</h2>
            Contenu de l'accordéon 4
        </m-accordion>
    </m-accordion-group>
    
    <m-icon name="edit"></m-icon>
  </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
