<script>
    import placeholder1 from '$static/assets/placeholder1.jpg';
    import Teste from '$components/Teste.svelte';
</script>
<h1>Template padrão do SvelteKit – Index</h1>
<a href="/">Home</a>
<a href="dois">Dois</a>
<a href="tres">Três</a>

<br>
<img src= {placeholder1} alt='outro nome'/>
<br>
<Teste/>

<style>
    img {
        margin-top: 20px;
        width: 300px;
    }
</style>