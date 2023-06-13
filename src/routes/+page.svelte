<script>
    import Nav from '../Nav.svelte'
    import Home from '../Home.svelte'
	import Menu from '../Menu.svelte'
	import EndNav from '../EndNav.svelte'
	import AboutUs from '../AboutUs.svelte'
    import Parties from '../Parties.svelte'
    
    var route = 'home'
    const routes = ['menu', 'about', 'parties']
    /**
	 * @param {string} new_route
	 */
    function goToRoute(new_route)
    {
        route = new_route
    }
</script>
<Nav route={route} routes={routes} update={goToRoute}/>
{#if route == 'home'}
<Home/>
{:else if route == 'menu'}
<Menu/>
{:else if route == 'about'}
<AboutUs/>
{:else if route == 'parties'}
<Parties/>
{/if}
<EndNav/>
