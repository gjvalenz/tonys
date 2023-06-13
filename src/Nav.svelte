<script>
    /**
     * @callback UpdateRouteCallback
     * @param {string} new_route
     */
    /**
	 * @type {string}
	 */
    export let route
    /**
	 * @type {string[]}
	 */
    export let routes
    /**
     * @type {UpdateRouteCallback}
     */
    export let update
    const non_highlight = 'font-medium text-sm md:text-xl text-highlight-400 capitalize hover:text-slate-100'
    const is_highlight = non_highlight + ' '
    /**
     * @type {Object.<string, string>}
     */
    $: classes = routes.reduce((a, v) => ({...a, [v]: v == route ? is_highlight : non_highlight}), {})
</script>

<div class='flex flex-row justify-evenly md:justify-around px-14 py-2 mt-0 items-center bg-main-500'>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img class='bg-main-500 border-4 border-main-500 rounded-full w-10 md:w-20 hover:bg-highlight-300 hover:border-highlight-300 hover:cursor-pointer'
        src='https://tonyspizzadelano.com/wp-content/uploads/2020/10/Tony_s-pizza-logo1.png'
        alt='tonys pizza logo' on:click={update('home')}/>
    {#each routes as m_route}
        <a href='./' class={classes[m_route]} on:click={update(m_route)}>{m_route}</a>
    {/each}
</div>